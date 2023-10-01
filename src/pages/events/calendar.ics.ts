import { type APIRoute } from 'astro'
import { type CollectionEntry, getCollection, getEntry } from 'astro:content'
import ical from 'ical-generator'
import siteConfig from '@config/site.ts'

const shiftDate = function (date: Date, hours = 1): Date {
  const shifted = new Date(date)
  shifted.setHours(date.getHours() + hours)
  return shifted
}

export const GET: APIRoute = async function ({ site, url }) {
  const events: CollectionEntry<'events'>[] = await getCollection('events')
  const calendar = ical({
    name: siteConfig.title,
    description: siteConfig.description,
    timezone: 'Europe/Berlin',
    url: new URL('events', site).href,
    source: url.href,
  })
  for (const event of events) {
    const { title, description, start, end, location, url } = event.data
    const host = await getEntry(event.data.host)
    calendar.createEvent({
      summary: title,
      description,
      start,
      end: end ?? shiftDate(start),
      organizer: {
        name: host.data.name.display,
        email: host.data.email,
      },
      location: location ?? '',
      url: url ?? '',
    })
  }
  return new Response(calendar.toString(), {
    headers: {
      'Content-Type': 'text/calendar',
    },
  })
}

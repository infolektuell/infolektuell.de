import type { GetStaticPaths, APIRoute } from 'astro'
import { getCollection, getEntry } from 'astro:content'
import VCard from 'vcf'
import siteConfig from '@config/site.ts'

export const getStaticPaths: GetStaticPaths = async function () {
  const authors = await getCollection('authors')
  return authors.map(({ id }) => ({
    params: { id },
  }))
}

export const GET: APIRoute = async function ({ request, params, site }) {
  const { id } = params
  const profile = id && (await getEntry('authors', id))
  if (!profile) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    })
  }
  const { title: org, icon } = siteConfig
  const card = new VCard()
  card.set('org', `${icon} ${org}`)
  const { name, title, address, phone, mobile, email, social } = profile.data
  card.set('fn', `${name.given} ${name.family}, ${name.suffix}`)
  const nameValue = [name.family, name.given, null, null, name.suffix].map((v) => v ?? '')
  const nProperty = VCard.Property.fromJSON(['n', {}, 'text', nameValue])
  card.setProperty(nProperty)
  if (title) {
    card.set('title', title)
  }
  if (address) {
    const { office, extended, street, locality, region, postalCode, country } = address
    const adrValue = [office, extended, street, locality, region, postalCode, country].map((v) => v ?? '')
    const adrParams = {
      type: ['work', 'pref'],
    }
    const adrProperty = VCard.Property.fromJSON(['adr', adrParams, 'text', adrValue])
    card.addProperty(adrProperty)
  }
  if (phone) {
    card.add('tel', phone, { type: ['work', 'voice', 'pref'] })
  }
  if (mobile) {
    card.add('tel', mobile, { type: ['work', 'voice', 'cell'] })
  }
  if (email) {
    card.add('email', email, { type: ['work', 'pref'] })
  }
  if (site) {
    card.add('url', site.href, { type: ['work', 'pref'] })
  }
  if (social) {
    for (const [key, value] of Object.entries(social)) {
      card.add('xSocialprofile', value, { type: key })
    }
  }
  card.set('source', request.url)
  return new Response(card.toString('3.0', 'utf8'), {
    headers: {
      'Content-Type': 'text/x-vcard',
    },
  })
}

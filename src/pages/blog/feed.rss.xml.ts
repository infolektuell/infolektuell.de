import type { APIRoute } from 'astro'
import { getImage } from 'astro:assets'
import { getCollection } from 'astro:content'
import rss, { type RSSFeedItem } from '@astrojs/rss'
import { processor } from '../../plugins/feed'
import siteConfig from '@config/site'
import { dedent } from 'ts-dedent'
import Logo from '@assets/images/logo.png'

export const GET: APIRoute = async function ({ site, generator, url }) {
  const link = site ?? 'https://infolektuell.de'
  const image = await getImage({ src: Logo, format: 'png', width: 144 })
  const imageUrl = url.origin + image.src
  const posts = await getCollection('posts')
  posts.sort((a, b) => b.data.publishedTime.valueOf() - a.data.publishedTime.valueOf())
  const items: RSSFeedItem[] = await Promise.all(
    posts.map(async ({ slug, data, body }) => {
      const { code: content } = await processor.render(body)
      const { title, headline: description } = data
      return {
        title,
        description,
        pubDate: data.publishedTime,
        link: `/blog/${slug}`,
        content,
      }
    }),
  )
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: link,
    items,

    customData: dedent`
      <language>de-de</language>
      <generator>${generator}</generator>
      <docs>https://www.rssboard.org/rss-specification</docs>
      <managingEditor>info@infolektuell.de (Tamara Cook)</managingEditor>
      <image>
        <link>${link}</link>
        <title>${siteConfig.title}</title>
        <url>${imageUrl}</url>
      </image>
    `,
  })
}

import type { APIRoute } from 'astro'
import { getImage } from 'astro:assets'
import { getCollection } from 'astro:content'
import { sortBlogPosts } from 'src/content.config'
import rss, { type RSSFeedItem } from '@astrojs/rss'
import { createPostRenderer } from '@markdown-plugins/feed'
import { SEO } from '@data/config'
import { dedent } from 'ts-dedent'
import Logo from '@assets/logo.svg'

export const GET: APIRoute = async function ({ site, generator, url, currentLocale }) {
  const processor = await createPostRenderer()
  const link = site ?? 'https://infolektuell.de'
  const image = await getImage({ src: Logo, format: 'png', width: 144 })
  const imageUrl = url.origin + image.src
  const posts = await getCollection('blog')
  sortBlogPosts(posts)
  const items: RSSFeedItem[] = await Promise.all(
    posts.map(async ({ id, data, body }) => {
      const { title, description, pubDate } = data
      const { code: content } = await processor.render(body ?? description)
      return {
        title,
        description,
        pubDate,
        link: `/blog/${id}/`,
        content,
      }
    }),
  )
  return rss({
    title: SEO.SiteName,
    description: SEO.defaultDescription,
    site: link,
    items,

    customData: dedent`
      <language>${currentLocale}</language>
      <generator>${generator}</generator>
      <docs>https://www.rssboard.org/rss-specification</docs>
      <managingEditor>info@infolektuell.de (Tamara Cook)</managingEditor>
      <image>
        <link>${link}</link>
        <title>${SEO.SiteName}</title>
        <url>${imageUrl}</url>
      </image>
    `,
  })
}

import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { sortBlogPosts } from 'src/content.config'
import { createPostRenderer } from '@markdown-plugins/feed'
import { SEO } from '@data/config'

export const GET: APIRoute = async function ({ site, url, currentLocale }) {
  const processor = await createPostRenderer()
  const posts = await getCollection('blog')
  sortBlogPosts(posts)
  const items = await Promise.all(
    posts.map(async ({ id, data, body }) => {
      const postUrl = `${url.origin}/blog/${id}/`
      const { title, description } = data
      const { code: content } = await processor.render(body || description)
      return {
        id: postUrl,
        url: postUrl,
        title,
        summary: description,
        date_published: data.pubDate.toISOString(),
        content_html: content,
      }
    }),
  )
  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: SEO.SiteName,
    home_page_url: site,
    feed_url: url,
    description: SEO.defaultDescription,
    icon: `${url.origin}/favicon.svg`,
    favicon: `${url.origin}/favicon.svg`,
    authors: [
      {
        name: 'Tamara Cook',
      },
    ],
    language: currentLocale,
    items,
  }
  return new Response(JSON.stringify(feed), {
    headers: {
      'Content-Type': 'application/feed+json',
    },
  })
}

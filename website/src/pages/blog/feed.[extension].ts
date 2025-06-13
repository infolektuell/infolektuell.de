import type { APIRoute } from 'astro'
import { getImage } from 'astro:assets'
import { getCollection, getEntry } from 'astro:content'
import { sortBlogPosts } from 'src/content.config'
import { type Item, Feed } from "feed";
import { mdxToHtml } from '@markdown-plugins/feed'
import { SEO } from '@data/config'
import Logo from '@assets/logo.svg'

export const getStaticPaths = function () {
  return [
    {
      params: { extension: 'rss.xml' }
    },
    {
      params: { extension: 'atom.xml' }
    },
    {
      params: { extension: 'json' }
    },
  ]
}
export const GET: APIRoute = async function ({ url, params, generator, currentLocale }) {
  // const processor = await createPostRenderer()
  const image = await getImage({ src: Logo, format: 'png', width: 144 })
  const feed = new Feed({
    title: SEO.SiteName,
    description: SEO.defaultDescription,
    id: url.origin,
    link: url.origin,
    language: currentLocale,
    generator,
    docs: 'https://www.rssboard.org/rss-specification',
    image: url.origin + image.src,
    favicon: url.origin + '/favicon.ico',
    copyright: 'Alle Rechte vorbehalten 2025, Tamara Cook',
    feedLinks: {
      json: url.toString(),
      rss: url.toString(),
    },
  });

  const posts = await getCollection('blog')
  sortBlogPosts(posts)

  const items: Item[] = await Promise.all(
    posts.map(async ({ id, data, body }) => {
      const { title, description, pubDate } = data
      const author = await getEntry(data.author)
      // const { code: content } = await processor.render(body ?? description)
      const content = await mdxToHtml(body ?? description, url.origin)
      return {
        title,
        description,
        link: `/blog/${id}/`,
        date: pubDate,
        author: [
          {
            name: author.data.name,
            email: author.data.email,
            link: url.origin + '/team/' + author.id + '/',
          }
        ],
        content,
        video: data.video && {
          title: data.video.title,
          url: 'https://auto.be/' + data.video.id,
        },
      }
    }),
  )
  items.forEach(item => {
    feed.addItem(item)
  });
  if (params.extension === 'rss.xml') {
    return new Response(feed.rss2(), {
      headers: {
        'Content-Type': 'application/rss+xml',
      },
    })
  }
  if (params.extension === 'atom.xml') {
    return new Response(feed.atom1(), {
      headers: {
        'Content-Type': 'application/atom+xml',
      },
    })
  }
  if (params.extension === 'json') {
    return new Response(feed.json1(), {
      headers: {
        'Content-Type': 'application/feed+json',
      },
    })
  }
  return new Response(null, {
    status: 404,
    statusText: 'Not Found',
  })
}

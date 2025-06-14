import type { APIContext } from 'astro'
import { type CollectionEntry, getEntry } from 'astro:content'
import type { Item, Author, FeedOptions } from 'feed'
import { Feed } from 'feed'
import { mdxToHtml } from '@lib/feeds/mdx-to-html.ts'
import image from '@assets/logo.svg'

export function personToAuthor (person: CollectionEntry<'team'>, baseURL: URL): Author {
  return {
    name: person.data.name,
    email: person.data.email,
    link: baseURL.href + person.id + '/',
  }
}

export async function postToItem({ id, data, body }: CollectionEntry<'blog'>, url: URL): Promise<Item> {
  const { title, description, pubDate } = data
  const person = await getEntry(data.author)
  const author = personToAuthor(person, new URL('/team/', url.origin))
  const content = await mdxToHtml(body ?? description, url.origin)
  return {
    title,
    description,
    author: [author],
    link: `/blog/${id}/`,
    date: pubDate,
    content,
  }
}

export async function generateFeed ({ url, params, currentLocale, generator }: APIContext, posts: CollectionEntry<'blog'>[], options: FeedOptions): Promise<Response> {
  const feed = new Feed({
    language: currentLocale,
    generator,
    docs: 'https://www.rssboard.org/rss-specification',
    image: url.origin + image.src,
    favicon: url.origin + '/favicon.ico',
    feedLinks: {
      json: url.toString(),
      rss: url.toString(),
      atom: url.toString(),
    },
    ...options,
  });

  const items: Item[] = await Promise.all(
    posts.map(async post => postToItem(post, url))
  )
  items.forEach(item => {
    feed.addItem(item)
  });
  switch (params.extension) {
    case 'rss.xml':
      return new Response(feed.rss2(), {
        headers: {
          'Content-Type': 'application/rss+xml',
        },
      })
    case 'atom.xml':
      return new Response(feed.atom1(), {
        headers: {
          'Content-Type': 'application/atom+xml',
        },
      })
    case 'json':
      return new Response(feed.json1(), {
        headers: {
          'Content-Type': 'application/feed+json',
        },
      })
    default:
      return new Response(null, {
        status: 404,
        statusText: 'Not Found',
      })
  }
}

import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection } from 'astro:content'
import { sortBlogPosts } from 'src/content.config'
import { generateFeed } from '@lib/feeds/converters.ts'
import { SEO, siteConfig } from '@data/config.ts'

export const getStaticPaths: GetStaticPaths = function () {
  return ['rss.xml', 'atom.xml', 'json']
    .map(extension => ({ params: { extension } }))
}

export const GET: APIRoute = async function (ctx) {
  const options = {
    id: ctx.url.origin,
    link: ctx.url.origin,
    title: SEO.SiteName,
    description: SEO.defaultDescription,
    copyright: siteConfig.copyright,
  }
  const posts = await getCollection('blog')
  sortBlogPosts(posts)
  return await generateFeed(ctx, posts, options)
}

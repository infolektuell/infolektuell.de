/** Feed of all blog posts */
import type { APIRoute, GetStaticPaths } from 'astro'
import { getFinalPosts } from '@pages/blog/_queries'
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
  const posts = await getFinalPosts()
  return await generateFeed(ctx, posts, options)
}

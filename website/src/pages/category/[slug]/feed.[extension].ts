import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection, getEntry } from 'astro:content'
import { sortBlogPosts } from '../../../content.config.ts'
import { generateFeed } from '@lib/feeds/converters.ts'
import { SEO, siteConfig } from '@data/config.ts'

export const getStaticPaths: GetStaticPaths = async function () {
  // Get all blog posts
  const allPosts = await getCollection('blog', ({ data }) => {
    return import.meta.env.DEV || !data.draft
  })

  // Get categories that have at least one posts
  const categoryIds = [...new Set(allPosts.flatMap((p) => p.data.categories).map((c) => c.id))]

  return categoryIds.flatMap((id => {
    return ['rss.xml', 'atom.xml', 'json']
      .map(extension => ({ params: { slug: id, extension } }))
  }))
}

export const GET: APIRoute = async function (ctx) {
  const category = await getEntry('categories', ctx.params.slug as string)
  if (!category) {
    return new Response(null, {
      status: 404,
      statusText: 'Not Found'
    })
  }
  const url = new URL(`/category/${ctx.params.slug}/`, ctx.url.origin)
  const options = {
    id: url.toString(),
    link: url.toString(),
    title: `${category.data.name} | ${SEO.SiteName}`,
    description: category.data.description,
    copyright: siteConfig.copyright,
  }
  const posts = await getCollection('blog', ({ data }) => data.categories.some(c => c.id === category.id))
  sortBlogPosts(posts)
  return await generateFeed(ctx, posts, options)
}

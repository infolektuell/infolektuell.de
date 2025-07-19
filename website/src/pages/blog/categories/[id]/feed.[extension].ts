/** Feed of all posts within a category */
import type { APIRoute, GetStaticPaths } from 'astro'
import { getEntry } from 'astro:content'
import { getActiveCategories, getFinalPostsByCategory } from '@pages/blog/_queries'
import { generateFeed } from '@lib/feeds/converters.ts'
import { SEO, siteConfig } from '@data/config.ts'

export const getStaticPaths: GetStaticPaths = async function () {
  const categories = await getActiveCategories()
  return categories.flatMap(category => {
    return ['rss.xml', 'atom.xml', 'json']
      .map(extension => ({
        params: { id: category.id, extension },
      }))
  })
}

export const GET: APIRoute = async function (ctx) {
  const category = await getEntry('categories', ctx.params.id as string)
  if (!category) {
    return new Response(null, {
      status: 404,
      statusText: 'Not Found'
    })
  }
  const url = new URL(`/blog/categories/${ctx.params.slug}/`, ctx.url)
  const options = {
    id: url.toString(),
    link: url.toString(),
    title: `${category.data.name} | ${SEO.SiteName}`,
    description: category.data.description,
    copyright: siteConfig.copyright,
  }
  const posts = await getFinalPostsByCategory(category.id)
  return await generateFeed(ctx, posts, options)
}

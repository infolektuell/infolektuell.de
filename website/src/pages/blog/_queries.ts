import { type CollectionEntry, getCollection } from 'astro:content'

export function toBePublished (post: CollectionEntry<'blog'>): boolean {
  return import.meta.env.DEV || !post.data.draft
}

export function comparePosts (a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>): number {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
}

/**
 * Returns all blog posts that are marked for publishing
 * @param sorted Indicates whether the returned post should be sorted from new to old
 */
export async function getFinalPosts(sorted: boolean = true): Promise<CollectionEntry<'blog'>[]> {
  const p = await getCollection('blog', toBePublished)
  return sorted ? p.toSorted(comparePosts) : p
}

/**
 * Returns all blog posts marked for publishing within a category
 * @param id The category's ID
 * @param sorted Whether the posts should be sorted from new to old
 */
export async function getFinalPostsByCategory(id: string, sorted: boolean = true): Promise<CollectionEntry<'blog'>[]> {
  const p = await getCollection('blog', p => toBePublished(p) && p.data.categories.some(c => c.id === id))
  return sorted ? p.toSorted(comparePosts) : p
}

/**
 * Returns all categories that have at least one blog post
 */
export async function getActiveCategories (): Promise<CollectionEntry<'categories'>[]> {
  const posts = await getFinalPosts(false)
  const categoryIds = new Set(posts.flatMap(({ data }) => data.categories).map((c) => c.id))
  return getCollection('categories', (c) => categoryIds.has(c.id))
}

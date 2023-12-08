import { reference, z } from 'astro:content'

export const pageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  author: reference('authors').default('tamara-cook'),
  order: z.number().int().min(1).default(10),
  noindex: z.boolean().default(false),
  nofollow: z.boolean().default(false),
  tags: z.string().array().default([]),
  headline: z.string().optional(),
  summary: z.string().optional(),
})
export type Page = z.infer<typeof pageSchema>

export const pageComparator = <T extends Page>({ data: a }: { data: T }, { data: b }: { data: T }): number => {
  if (a.order !== b.order) {
    return a.order - b.order
  }
  if (a.title === b.title) {
    return 0
  }
  return a.title > b.title ? 1 : -1
}

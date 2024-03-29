import { reference, z } from 'astro:content'

export const pageSchema = z.object({
  title: z.string(),
  emoji: z.string().emoji().optional(),
  description: z.string().optional(),
  author: reference('authors').default('tamara-cook'),
  order: z.number().int().min(1).default(10),
  noindex: z.boolean().default(false),
  nofollow: z.boolean().default(false),
  tags: z.string().array().default([]),
  headline: z.string().optional(),
  summary: z.string().optional(),
  cta: z.string().optional(),
})
export type Page = z.infer<typeof pageSchema>

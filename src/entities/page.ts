import { reference, z } from 'astro:content'

export const pageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  author: reference('authors').default('tamara-cook'),
  order: z.number().int().min(1).default(10),
  private: z.boolean().default(false),
  tags: z.string().array().default([]),
})
export type Page = z.infer<typeof pageSchema>

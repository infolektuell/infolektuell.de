import { reference, z } from 'astro:content'

export const pageSchema = z.object({
  title: z.string(),
  headline: z.string().optional(),
  subtitle: z.string().optional(),
  motto: z.string().optional(),
  emoji: z.string().emoji().optional(),
  icon: z.string().optional(),
  author: reference('authors').default('tamara-cook'),
  description: z.string().optional(),
  summary: z.string().optional(),
  order: z.number().int().min(1).default(10),
  private: z.boolean().default(false),
  tags: reference('tags').array().default([]),
})
export type Page = z.infer<typeof pageSchema>

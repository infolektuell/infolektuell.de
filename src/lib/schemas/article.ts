import { z } from 'astro:content'
import { baseData } from './base'

export const articleData = baseData.extend({
  title: z.string(),
  subtitle: z.string().optional(),
  keywords: z.string().array().default([]),
  lastModified: z.coerce.date().optional(),
  published: z.coerce.date().optional(),
  minutesRead: z.number().min(1),
})

export type ArticleData = z.infer<typeof articleData>

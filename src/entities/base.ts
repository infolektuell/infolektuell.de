// noinspection SpellCheckingInspection

import { z } from 'astro:content'
import site from '@config/site.ts'

export const seoSchema = z.object({
  title: z.string(),
  description: z.string().default(site.description),
  image: z.string().optional(),
  robots: z
    .tuple([z.enum(['index', 'noindex']), z.enum(['follow', 'nofollow']), z.enum(['archive', 'noarchive'])])
    .default(['index', 'follow', 'archive']),
})

export const baseData = z.object({
  categories: z.string().array().default([]),
  tags: z.string().array().default([]),
})

export type BaseData = z.infer<typeof baseData>

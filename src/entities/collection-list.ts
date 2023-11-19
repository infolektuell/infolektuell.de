import { z } from 'astro:content'
import { baseData } from './base.ts'

export const collectionListData = baseData.extend({
  robots: z
    .tuple([z.enum(['index', 'noindex']), z.enum(['follow', 'nofollow']), z.enum(['archive', 'noarchive'])])
    .default(['noindex', 'follow', 'noarchive']),
})

export type CollectionListData = z.infer<typeof collectionListData>

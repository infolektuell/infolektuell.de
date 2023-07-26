import { z } from 'zod'
import { pageData } from './page'

export const articleData = pageData.extend({
  subtitle: z.string().optional(),
  lastModified: z.coerce.date(),
  published: z.coerce.date(),
  minutesRead: z.number().min(1),
})

export type ArticleData = z.infer<typeof articleData>

import { z, reference } from 'astro:content'
import { pageSchema } from './page'

export const eventSchema = pageSchema.extend({
  start: z.coerce.date(),
  end: z.coerce.date().optional(),
  repeating: z
    .object({
      freq: z.enum(['daily', 'weekly', 'monthly']),
      count: z.number().int().min(1).optional(),
    })
    .optional(),
  host: reference('authors'),
  location: z.string().optional(),
  url: z.string().url().optional(),
})

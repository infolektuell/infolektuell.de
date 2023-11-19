import { z } from 'astro:content'

export const localeSchema = z.object({
  lang: z
    .string()
    .length(2)
    .regex(/^[a-z]{2}$/),
  territory: z
    .string()
    .length(2)
    .regex(/^[A-Z]{2}$/),
  dir: z.enum(['ltr', 'rtl']),
})

export type Locale = z.infer<typeof localeSchema>

import { z, reference } from 'astro:content'

export const tagSchema = z.object({
  label: z.string(),
  description: z.string().optional(),
  locale: reference('locales').default('de-DE'),
})
export type Tag = z.infer<typeof tagSchema>

import { z } from 'astro:content'

export const tagSchema = z.object({
  label: z.string(),
  description: z.string().optional(),
})
export type Tag = z.infer<typeof tagSchema>

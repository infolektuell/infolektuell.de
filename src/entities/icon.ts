import { z } from 'astro:content'

export const iconSchema = z.discriminatedUnion('pack', [
  z.object({
    pack: z.literal('emoji'),
    name: z.string().emoji(),
  }),
  z.object({
    pack: z.literal('fa'),
    name: z.string(),
  }),
])

export type Icon = z.infer<typeof iconSchema>

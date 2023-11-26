import { z } from 'astro:content'

const menuItemSchema = z.object({
  text: z.string(),
  emoji: z.string().emoji().optional(),
  icon: z.string().optional(),
  href: z.string(),
  alignment: z.enum(['start', 'end']).default('start'),
})
export type MenuItem = z.infer<typeof menuItemSchema>

export const menuSchema = z.object({
  label: z.string(),
  items: menuItemSchema.array(),
})
export type Menu = z.infer<typeof menuSchema>

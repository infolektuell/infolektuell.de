import { z } from 'astro:content'
import { chars } from '@iconify-json/openmoji'

const menuItemSchema = z
  .object({
    name: z.string(),
    emoji: z.string().emoji().optional(),
    icon: z.string().optional(),
    href: z.string(),
    alignment: z.enum(['start', 'end']).default('start'),
  })
  .transform((val) => {
    if (val.emoji && !val.icon) {
      const code = val.emoji.codePointAt(0)?.toString(16)
      if (!code) {
        return val
      }
      const name = chars[code]
      if (!name) {
        return val
      }
      const icon = `openmoji:${name}`
      if (!icon) {
        return val
      }
      return { ...val, icon }
    }
    return val
  })
export type MenuItem = z.infer<typeof menuItemSchema>

export const menuSchema = z.object({
  name: z.string(),
  items: menuItemSchema.array(),
})
export type Menu = z.infer<typeof menuSchema>

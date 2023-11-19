import { z } from 'astro:content'

export * from './author'
export * from './event'
export * from './icon'
export * from './locale'
export * from './page'
export * from './product'
export * from './tag'
export * from './frontmatter'
export * from './quiz'

export const moneySchema = z.object({
  amount: z.number().int().gt(0).default(12000),
  currency: z.enum(['EUR', 'USD']).default('EUR'),
})
export type Money = z.infer<typeof moneySchema>

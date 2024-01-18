import { type SchemaContext, z } from 'astro:content'
import { pageSchema } from './index'

const moneySchema = z.object({
  amount: z.number().int().gt(0).default(12000),
  currency: z.enum(['EUR', 'USD']).default('EUR'),
})
export type Money = z.infer<typeof moneySchema>

export const priceSchema = z
  .object({
    hourly: moneySchema,
    total: moneySchema,
  })
  .partial()
export type Price = z.infer<typeof priceSchema>

export const productSchema = ({ image }: SchemaContext) =>
  pageSchema.extend({
    cover: image().optional(),
    cover_alt: z.string().optional(),
    targets: z.string().array().default([]),
    price: priceSchema.optional(),
  })

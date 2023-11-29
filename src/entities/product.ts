import { type SchemaContext, z } from 'astro:content'
import { pageSchema } from './index'

export const moneySchema = z.object({
  amount: z.number().int().gt(0).default(12000),
  currency: z.enum(['EUR', 'USD']).default('EUR'),
})
export type Money = z.infer<typeof moneySchema>

export const productSchema = ({ image }: SchemaContext) =>
  pageSchema.extend({
    emoji: z.string().emoji().optional(),
    icon: z.string().optional(),
    cover: image().optional(),
    cover_alt: z.string().optional(),
  })

export const coachingSchema = (ctx: SchemaContext) =>
  productSchema(ctx).extend({
    pricePerSession: moneySchema.default({ amount: 12000, currency: 'EUR' }),
  })

export const courseSchema = (ctx: SchemaContext) =>
  productSchema(ctx).extend({
    price: moneySchema.default({ amount: 50000, currency: 'EUR' }),
    sessions: z.number().default(5),
  })

export const serviceSchema = (ctx: SchemaContext) =>
  productSchema(ctx).extend({
    pricePerHour: moneySchema.default({ amount: 1500, currency: 'EUR' }),
  })

export const trainingSchema = (ctx: SchemaContext) =>
  productSchema(ctx).extend({
    price: moneySchema.default({ amount: 50000, currency: 'EUR' }),
    sessions: z.number().default(5),
  })

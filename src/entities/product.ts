import { type SchemaContext, z } from 'astro:content'
import { moneySchema, pageSchema } from './index.ts'

export const productSchema = ({ image }: SchemaContext) =>
  pageSchema.extend({
    headline: z.string().optional(),
    summary: z.string().optional(),
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

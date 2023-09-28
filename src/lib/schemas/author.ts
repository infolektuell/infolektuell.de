import { z } from 'astro:content'

const nameSchema = z.object({
  prefix: z.string().optional(),
  family: z.string(),
  given: z.string(),
  additional: z.string().optional(),
  suffix: z.string().optional(),
})
export type Name = z.infer<typeof nameSchema>

const addressSchema = z.object({
  office: z.string().optional(),
  extended: z.string().optional(),
  street: z.string(),
  locality: z.string(),
  region: z.string().optional(),
  postalCode: z.string(),
  country: z.string(),
})
export type Address = z.infer<typeof addressSchema>

export const authorSchema = z.object({
  name: nameSchema,
  title: z.string().optional(),
  email: z.string().email().optional(),
  phone: z
    .string()
    .regex(/^\+[\d\s]+/g)
    .optional(),
  address: addressSchema.optional(),
  social: z.record(z.string(), z.string().url()),
})

export type Author = z.infer<typeof authorSchema>

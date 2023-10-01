import { z } from 'astro:content'

const nameSchema = z
  .object({
    prefix: z.string().optional(),
    family: z.string(),
    given: z.string(),
    additional: z.string().optional(),
    suffix: z.string().optional(),
    display: z.string().optional(),
  })
  .transform((val) => ({
    ...val,
    get display() {
      if (val.display) {
        return val.display
      }
      const { family, given, additional, prefix, suffix } = val
      let str: string
      if (additional) {
        str = `${given} ${additional.charAt(0)}. ${family}`
      } else {
        str = `${given} ${family}`
      }
      if (prefix) {
        str = `${prefix} ${str}`
      }
      if (suffix) {
        str = `${str}, ${suffix}`
      }
      return str
    },
  }))
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

const phoneNumberSchema = z.string().regex(/^\+[\d\s]+/g)

export const authorSchema = z.object({
  name: nameSchema,
  title: z.string().optional(),
  email: z.string().email().optional(),
  phone: phoneNumberSchema.optional(),
  mobile: phoneNumberSchema.optional(),
  address: addressSchema.optional(),
  social: z.record(z.string(), z.string().url()).optional(),
})

export type Author = z.infer<typeof authorSchema>

// noinspection SpellCheckingInspection

import { z } from 'zod'
import site from '@config/site'
import { type LanguageDefinition, languages } from '@config/languages'

export const baseData = z.object({
  title: z.string(),
  description: z.string().default(site.description),
  lang: z
    .string()
    .default(site.defaultLanguage)
    .transform((val, ctx): LanguageDefinition => {
      const language = languages[val]
      if (language) {
        return language
      }
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `${val} is no defined language`,
      })
      return z.NEVER
    }),
  robots: z
    .tuple([z.enum(['index', 'noindex']), z.enum(['follow', 'nofollow']), z.enum(['archive', 'noarchive'])])
    .default(['index', 'follow', 'archive']),
  image: z.string().optional(),
})

export type BaseData = z.infer<typeof baseData>

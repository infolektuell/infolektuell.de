// noinspection SpellCheckingInspection

import { z } from 'zod'
import site from '@config/site'
import { type LanguageDefinition, languages } from '@config/languages'

export const pageData = z.object({
  title: z.string(),
  description: z.string().default(site.description),
  lang: z
    .string()
    .default(site.defaultLanguage)
    .transform((val, ctx): LanguageDefinition => {
      const languageDefinition = languages[val]
      if (!languageDefinition) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${val} is no defined language`,
        })
        return z.NEVER
      }
      return languageDefinition
    }),
  robots: z
    .tuple([z.enum(['index', 'noindex']), z.enum(['follow', 'nofollow']), z.enum(['archive', 'noarchive'])])
    .default(['index', 'follow', 'archive']),
  image: z.string().optional(),
})

export type PageData = z.infer<typeof pageData>

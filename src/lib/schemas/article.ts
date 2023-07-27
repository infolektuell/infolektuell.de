// noinspection SpellCheckingInspection

import { z } from 'zod'
import site from '@config/site'
import { type LanguageDefinition, languages } from '@config/languages'

export const pageData = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().default(site.description),
  lastModified: z.coerce.date(),
  published: z.coerce.date(),
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
  minutesRead: z.number().min(1),
})

export type PageData = z.infer<typeof pageData>

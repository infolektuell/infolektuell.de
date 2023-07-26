// noinspection SpellCheckingInspection

import { z } from 'zod'
import site from '@config/site'
import { languages } from '@config/languages'

export const pageData = z.object({
  title: z.string(),
  description: z.string().default(site.description),
  lang: z
    .string()
    .default(site.defaultLanguage)
    .refine(
      (val) => Object.hasOwn(languages, val),
      (val) => ({ message: `${val} is no defined language` }),
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .transform((val) => languages[val]!),
  robots: z
    .tuple([z.enum(['index', 'noindex']), z.enum(['follow', 'nofollow']), z.enum(['archive', 'noarchive'])])
    .default(['index', 'follow', 'archive']),
  image: z.string().optional(),
})

export type PageData = z.infer<typeof pageData>

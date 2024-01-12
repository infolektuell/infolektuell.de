import { type Locale, format } from 'date-fns'
import { de } from 'date-fns/locale'
import siteConfig from '@config/site.ts'

const locales: Record<string, Locale | undefined> = {
  'de-DE': de,
}

export const formatDate = function <T extends Date>(date: T, lang: string = siteConfig.defaultLanguage) {
  const locale = locales[lang] ?? de
  return format(date, 'dd.MM.yyyy', { locale })
}

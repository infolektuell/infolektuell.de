export type LanguageDefinition = {
  code: string
  dir: 'ltr' | 'rtl'
}

export const languages: Record<string, LanguageDefinition | undefined> = {
  de: {
    code: 'de',
    dir: 'ltr',
  },
  en: {
    code: 'en',
    dir: 'ltr',
  },
}

export type LanguageDefinition = {
  code: string
  dir: 'ltr' | 'rtl'
}

const languages: Record<string, LanguageDefinition> = {
  de: {
    code: 'de',
    dir: 'ltr',
  },
  en: {
    code: 'en',
    dir: 'ltr',
  },
}

export default languages

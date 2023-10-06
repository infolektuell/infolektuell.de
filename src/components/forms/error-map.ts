import { z } from 'zod'

export const formErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.too_small:
      if (issue.minimum === 1) {
        return { message: 'Das Feld darf nicht leer sein.' }
      }
      return { message: `Das Feld muss mindestens ${issue.minimum} Zeichen enthalten.` }
    case z.ZodIssueCode.invalid_string:
      switch (issue.validation) {
        case 'email':
          return { message: 'Ungültige Email-Adresse' }
        case 'url':
          return { message: 'Keine gültige Email-Adresse' }
        case 'uuid':
          return { message: 'Keine gültige UUID' }
        default:
          return { message: 'Ungültige Eingabe' }
      }
    case z.ZodIssueCode.too_big:
      return { message: `Das Feld darf höchstens ${issue.maximum} Zeichen enthalten.` }
    default:
      return { message: ctx.defaultError }
  }
}

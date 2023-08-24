import { z } from 'zod'

export const formErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.too_small:
      if (issue.minimum === 1) {
        return { message: 'Das Feld darf nicht leer sein.' }
      }
      return { message: `Das Feld muss mindestens ${issue.minimum} Zeichen enthalten.` }
    default:
      return { message: ctx.defaultError }
  }
}

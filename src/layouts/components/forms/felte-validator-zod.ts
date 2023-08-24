import type { ZodError, ZodErrorMap, ZodIssue, ZodType } from 'zod'
import type { AssignableErrors, CurrentForm, Extender, ExtenderHandler, Obj, ValidationFunction } from '@felte/common'
import { _update } from '@felte/common'

export type ValidatorConfig = {
  schema: ZodType<Obj>
  level?: 'error' | 'warning'
  errorMap?: ZodErrorMap
}

export function validateSchema<Data extends Obj>(
  schema: ZodType<Obj>,
  errorMap?: ZodErrorMap,
): ValidationFunction<Data> {
  function shapeErrors(errors: ZodError): AssignableErrors<Data> | undefined {
    return errors.issues.reduce((err: AssignableErrors<Data>, value: ZodIssue) => {
      if (value.path.length === 0) return err
      return _update(err, value.path.join('.'), (currentValue: undefined | string[]) => {
        if (!currentValue || !Array.isArray(currentValue)) return [value.message]
        return [...currentValue, value.message]
      })
      // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
    }, {} as AssignableErrors<Data>)
  }

  return async function validate(values: Data): Promise<AssignableErrors<Data> | undefined> {
    const result = await schema.safeParseAsync(values, { errorMap })
    if (!result.success) {
      return shapeErrors(result.error)
    }
  }
}

export function validator<Data extends Obj = Obj>({
  schema,
  errorMap,
  level = 'error',
}: ValidatorConfig): Extender<Data> {
  return function extender(currentForm: CurrentForm<Data>): ExtenderHandler<Data> {
    if (currentForm.stage !== 'SETUP') return {}
    const validateFn = validateSchema<Data>(schema, errorMap)
    currentForm.addValidator(validateFn, { level })
    return {}
  }
}

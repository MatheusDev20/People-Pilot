import { type ObjectSchema } from 'yup'
import { type ValidationResult } from '../../@types/yup'

export * from './create-employee/schemas'
export * from './create-employee/validations'

export const validateSchema = async <T>(
  formData: T,
  schema: ObjectSchema<any>,
): Promise<ValidationResult> => {
  try {
    await schema.validate(formData, { abortEarly: false })
    return {
      veredict: true,
      errors: null,
    }
  } catch (err: any) {
    const { inner } = err
    const errorMap: Record<string, string[]> = {}
    inner.forEach((error: any) => {
      const { path, errors } = error
      errorMap[path] = errors
    })
    return {
      veredict: false,
      errors: errorMap,
    }
  }
}

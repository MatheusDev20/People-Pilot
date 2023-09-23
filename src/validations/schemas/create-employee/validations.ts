import { ObjectSchema } from 'yup'
import { ContextData, StepValues } from '../../../contexts/create-employee-form'
import { stepOneSchema, stepTwoSchema, validateFile } from '..'
import { ValidationResult } from '@/@types/yup'

export const validateCurrentStep = async (
  formData: ContextData,
  currStep: number,
): Promise<ValidationResult> => {
  let validation: ValidationResult = { veredict: true, errors: null }
  switch (currStep) {
    case 0:
      validation = await validateStep(formData.stepOne, stepOneSchema)
      break

    case 1:
      validation = await validateStep(formData.stepTwo, stepTwoSchema)
      break

    case 2:
      validation = validateFile(formData.stepThree.avatar)

      break

    default:
      return { veredict: false, errors: null }
  }

  return validation
}

const validateStep = async (
  stepData: StepValues,
  schema: ObjectSchema<any>,
): Promise<ValidationResult> => {
  try {
    await schema.validate(stepData, { abortEarly: false })
    return { veredict: true, errors: null }
  } catch (err: any) {
    const { inner } = err
    const errorMap: { [key: string]: string[] } = {}
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

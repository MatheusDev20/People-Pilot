import { ValidationResult } from '../../../@types/yup'
import { object, string } from 'yup'

export const stepOneSchema = object({
  name: string()
    .required('First name is required')
    .min(6, 'First name must be at least 6 characters'),
  lastName: string().required('Last name is required'),
  email: string().email('Invalid email').required('Email is required'),
  birthDate: string().required('Birth date is required'),
  address: string().required('Address is required'),
  phone: string().required('Phone is required'),
})

export const stepTwoSchema = object({
  department: string().required('Department is required'),
  position: string().required('Position is required'),
  password: string()
    .required()
    .min(8, 'Password must be at least 8 characters'),

  hireDate: string().required('Hire date is required'),
})

const validFileExtensions = ['jpg', 'png']

export function validateFile(file: File | null): ValidationResult {
  if (!file) {
    return {
      errors: {
        avatar: ['Avatar is required'],
      },
      veredict: false,
    }
  }
  const fileExt = file.name.split('.')[1]
  if (!validFileExtensions.includes(fileExt)) {
    return {
      errors: {
        avatar: [
          `File extension not supported - Supported Extensions ( ${validFileExtensions.join(
            ',',
          )} )`,
        ],
      },
      veredict: false,
    }
  }

  return { errors: null, veredict: true }
}

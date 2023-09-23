import { object, string } from 'yup'

export const loginFormSchema = object({
  email: string()
    .required('Email is required')
    .email('Email is Invalid'),
  password:
    string()
      .required('Password is required')
      .min(8, 'Password must be at least 6 characters'),
})

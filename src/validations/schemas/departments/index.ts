import { object, string } from 'yup'

export const createDepartmentSchema = object({
  description: string().required('Description is Required'),
  name: string()
    .required('Name is required')
    .min(4, 'Name must be at least 3 characters'),
  managerMail: string().email('You should provide a valid email address'),
})

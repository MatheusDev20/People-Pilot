import { type PersonalDocuments } from '.'
import { type PaymentInformation } from './employees'

export type EmployeeAPIResponse = {
  id: string
  name: string
  email: string
  phone: string
  birthDate: string
  hire_date: string
  position: string
  updated_at: string
  created_at: string
  avatar: string
  status: string
  assignee_tasks: any[]
  created_tasks: any[]
  department: DepartmentAPIResponse
  managedDepartments: DepartmentAPIResponse[]
  paymentInfo: PaymentInformation
  documents: PersonalDocuments[]
}

export type DepartmentAPIResponse = {
  id: string
  name: string
  description: string
  manager: EmployeeAPIResponse
  isActive: boolean
  created_at: string
  updated_at: string
  employees: any[]
  employeeCount: number
}

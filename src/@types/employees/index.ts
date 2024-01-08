import { type Department } from '..'

export interface Employee {
  name: string
  avatar: string
  birthDate: string
  email: string
  hire_date: string
  id: string
  phone: string
  position: string
  status: string
  department: Department
  isManager: boolean
}

export interface ActiveUser {
  name: string
  avatar: string
  created_at: string
  email: string
  hire_date: string
  id: string
  phone: string
  position: string
  updated_at: string
  status: string
}

export interface StepOneData {
  name: string
  birthDate: string
  email: string
  phone: string
}

export interface StepTwoData {
  position: string
  department: string
  hireDate: string
  password: string
}

export interface StepThreeData {
  bankName: string
  accountNumber: string
  accountType: string
  agencyNumber: string
  pixKey: string
}

export interface StepFourData {
  avatar: File | null
}

export interface CreateEmployeeForm {
  stepOne: StepOneData
  stepTwo: StepTwoData
}

export interface AuthPayload {
  accessToken: string
  loggedUser: ActiveUser
}

export type GetEmployeeListParams = {
  page?: number
  limit?: number
  role?: 'employee' | 'managers' | 'admin'
}

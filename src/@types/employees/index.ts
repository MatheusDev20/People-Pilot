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
  lastName: string
  birthDate: string
  email: string
  address: string
  phone: string
}

export interface StepTwoData {
  position: string
  department: string
  hireDate: string
  password: string
}

export interface StepThreeData {
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

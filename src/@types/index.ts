import { type ActiveUser } from './employees'

export type LoginFormData = {
  email: string
  password: string
}

export type LoginPayload = {
  user: ActiveUser
}
export type LogoutPayload = {
  logoutTime: Date
}

export type DialogAction = {
  cb: any
  type: 'delete' | 'edit' | null
  successMsg: string
}
export type DialogActionState = {
  loading: boolean
  success: boolean
  error: boolean
}
export type Dialog = {
  title: string
  type: 'success' | 'error' | 'warning' | ''
  msg: string
  createdId?: string
  action?: DialogAction
}

export type AccordionElement = {
  order: number
  label: string
  info: string
}

export type Department = {
  id: string
  name: string
  description: string
  activeEmployees: number
  status: string
  manager: {
    name: string
    avatar: string
    email: string
  }
  enableDelete?: boolean
}

export type Manager = {
  name: string
  avatar: string
}

export type CreateDepartmentForm = {
  name: string
  managerEmail: string
  description: string
}

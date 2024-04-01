import { type Employee, type ActiveUser } from './employees'

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

export type ManagerData = {
  name: string
  avatar: string
  email: string
}

// An department can have a manager or not
export type Department = {
  id: string
  name: string
  description: string
  employees: Employee[]
  status: string
  manager: ManagerData | null
  enableDelete?: boolean
  employeeCount: number
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

// See if utility type Partial Helps
export type UpdateDepartmentData = {
  id: string
  name?: string
  description?: string
  managerEmail?: string
}

export type AppBanks = {
  id: string
  name: string
  code: number
}

export type SVGProps = {
  classStyles: string
}

export type PersonalDocuments = {
  id: string
  documentType: string
  metadata: Record<string, any>
  fileUrl: string
  uploaded_at: string
  updated_at: string
}

type Doc = {
  id: string
}

export type RG = {
  numero: string
  orgaoEmissor: string
  dataExpiracao: string
} & Doc

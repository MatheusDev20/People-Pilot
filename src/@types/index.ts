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

export type Feedback = {
  title: string
  type: 'success' | 'error' | 'warning' | ''
  msg: string
  onScreen: boolean
}

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

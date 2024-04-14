import {
  type LoginPayload,
  type LoginFormData,
  type LogoutPayload,
} from '../../@types/index'
import { POST } from '../handlers'

export const login = async (data: LoginFormData): Promise<LoginPayload> => {
  const response = await POST<LoginPayload>({
    path: '/auth/login',
    body: data,
    authenticated: true,
  })
  const { body } = response

  return body
}

export const logout = async (): Promise<Date> => {
  try {
    const response = await POST<LogoutPayload>({
      authenticated: true,
      path: '/auth/logout',
    })
    const { body } = response

    return body.logoutTime
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const refresh = async (): Promise<LoginPayload> => {
  try {
    const response = await POST<LoginPayload>({
      path: '/auth/refresh',
      authenticated: true,
    })

    const { body } = response
    return body
  } catch (err: any) {
    throw new Error(err.message)
  }
}

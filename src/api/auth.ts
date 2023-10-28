import { type LoginPayload, type LoginFormData } from './../@types/index'
import { timeout } from '../utils'
import { POST } from './handlers'

export const login = async (data: LoginFormData): Promise<LoginPayload> => {
  try {
    await timeout(2000)
    const response = await POST<LoginPayload>({
      path: '/auth/login',
      body: data,
      authenticated: false,
    })
    const { body } = response

    return body
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

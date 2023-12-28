import axios, { type AxiosError } from 'axios'
import { logout, refresh } from '../../api/auth'
import { removeLocalStorage } from '../auth'

const unauthorizedMessages = [
  'JsonWebTokenError',
  'Token Signature Verification Failed',
  'EXPIRED ACCESS TOKEN',
]

// Both tokens expired the user should be logged out
const signOutMessages = ['EXPIRED BOTH TOKENS']

export type HttpResponse = {
  response: any
  timestamp: string
  path: string
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_KSX_BACKEND_URL,
  timeout: 5000,
})

export const refreshToken = async (error: AxiosError): Promise<any> => {
  const { response } = error
  const originalRequest = error.config
  const status = response?.status
  const axiosData = response?.data as HttpResponse

  if (
    status === 401 &&
    originalRequest &&
    unauthorizedMessages.includes(axiosData.response.message)
  ) {
    await refresh()
    return await axiosInstance(originalRequest)
  }
  if (
    status === 401 &&
    originalRequest &&
    signOutMessages.includes(axiosData.response.message)
  ) {
    await logout()
    removeLocalStorage('profile')
    // See this is right
    window.location.reload()
  }

  throw error
}

axiosInstance.interceptors.response.use((response) => {
  return response
}, refreshToken)

export const extractApiError = (
  error: AxiosError<any, any>,
  defaultMessage = 'Erro ao processar a requisição. Tente novamente mais tarde ou entre em contato com o suporte.',
): string => {
  const { response } = error
  const message = response?.data.response.message
  return message ?? defaultMessage
}

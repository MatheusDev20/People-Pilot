import axios, { type AxiosError } from 'axios'
import { logout, refresh } from '../../api/auth/auth.query'
import { removeLocalStorage } from '../../utils/auth'

const unauthorizedMessages = [
  'JsonWebTokenError',
  'Token Signature Verification Failed',
  'EXPIRED ACCESS TOKEN',
]

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

  if (axiosData.response.message === 'Invalid Credentials') throw error
  if (
    status === 401 &&
    originalRequest &&
    unauthorizedMessages.includes(axiosData.response.message)
  ) {
    try {
      // If i cant refresh with the new token the user should be signed out
      await refresh()
      return await axiosInstance(originalRequest)
    } catch (err) {
      await logout()
      removeLocalStorage('profile')
      // See this is right
      window.location.reload()
    }
  }

  if (status === 401) {
    await logout()
    removeLocalStorage('profile')
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

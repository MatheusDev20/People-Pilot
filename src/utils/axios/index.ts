import axios, { AxiosError } from 'axios'
import { refresh } from '../../api/auth'
const unauthorizedMessages = ['Expired Cookie', 'JsonWebTokenError']

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

  throw error
}

axiosInstance.interceptors.response.use((response) => {
  return response
}, refreshToken)

export const handleRequestError = (
  error: any,
  defaultMessage = 'Erro de Sistema',
): string => {
  console.log(error)
  if (error instanceof AxiosError) {
    console.log('aXIOS')
    const { response } = error
    const message = response?.data.response.message

    return message
  }

  return defaultMessage
}

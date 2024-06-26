import { type BasicRequest, type BasicResponse } from './../@types/http/index'
import { axiosInstance } from '../libs/axios/interceptors'
import { getFromLocalStorage } from '@/utils/auth'

export const GET = async <T>(
  request: BasicRequest,
): Promise<BasicResponse<T>> => {
  const { headers, path, authenticated } = request

  try {
    const response = await axiosInstance.get(`${path}`, {
      headers,
      withCredentials: authenticated,
    })

    const retrieveData: BasicResponse<T> = {
      body: response.data.body,
    }

    return retrieveData
  } catch (err: any) {
    throw new Error(err)
  }
}

export const POST = async <T>(
  request: BasicRequest,
): Promise<BasicResponse<T>> => {
  const { headers, path, body, authenticated } = request

  const response = await axiosInstance.post(`${path}`, body, {
    headers: headers ?? {
      'Content-Type': 'application/json',
    },
    withCredentials: authenticated,
  })
  const { data } = response
  return data
}

export const PATCH = async <T>(
  request: BasicRequest,
): Promise<BasicResponse<T>> => {
  const { headers, path, formData } = request

  try {
    const response = await axiosInstance.patch(`${path}`, formData, {
      headers: headers ?? {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    const { data } = response

    return data
  } catch (err: any) {
    throw new Error(err)
  }
}

export const DELETE = async <T>(
  request: BasicRequest,
): Promise<BasicResponse<T>> => {
  const { headers, path } = request
  try {
    const response = await axiosInstance.delete(`${path}`, {
      headers: headers ?? {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    const { data } = response

    return data
  } catch (err: any) {
    throw new Error(err)
  }
}

export const PUT = async <T>(
  request: BasicRequest,
): Promise<BasicResponse<T>> => {
  const { headers, path, authenticated, body } = request
  const sendHeaders = headers ?? {
    'Content-Type': 'application/json',
  }

  try {
    const response = await axiosInstance.put(`${path}`, body, {
      headers: sendHeaders,
      withCredentials: authenticated,
    })

    const { data } = response

    return data
  } catch (err: any) {
    throw new Error(err)
  }
}

export const convertQueryParams = (path: string, params: object): string => {
  return (
    `${path}?` +
    Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  )
}

export const getTenant = (): string | null => {
  const item = getFromLocalStorage('organization')
  if (!item) return ''
  return JSON.parse(item).id
}

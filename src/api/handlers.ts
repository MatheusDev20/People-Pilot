import { type BasicRequest, type BasicResponse } from '../@types/http'
import { axiosInstance } from '../utils/axios'

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

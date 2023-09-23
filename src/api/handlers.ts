import { BasicRequest, BasicResponse } from '../@types/http'
import { getTokenFromStorage } from '../utils/auth'
import { axiosInstance } from '../utils/axios'
export const GET = async (request: BasicRequest): Promise<any> => {
  const token = getTokenFromStorage()
  const { headers, path, authenticated } = request

  try {
    const response = await axiosInstance.get(`${path}`, {
      headers: authenticated ? { ...headers, api_token: token } : headers,
    })

    console.log(response)

    if (response.status !== 200) {
      return { statusCode: 500, body: null }
    }

    return response


  } catch (err: any) {
    throw new Error(err)
  }
}

export const POST = async (request: BasicRequest): Promise<any> => {
  const token = getTokenFromStorage()
  const { headers, path, body, authenticated } = request

  const requestHeaders = headers ?? { 'Content-Type': 'application/json' }
  console.log(body)
  try {
    const response = await axiosInstance.post(`${path}`, body, {
      headers: authenticated
        ? { ...requestHeaders, api_token: token }
        : headers,
    },
    )


    if (response.status !== 200) {
      return { statusCode: 500, body: null }
    }

    console.log(response)

    return response
  } catch (err: any) {
    throw new Error(err)
  }
}

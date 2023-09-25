import { BasicRequest } from '../@types/http'
import { axiosInstance } from '../utils/axios'


export const GET = async (request: BasicRequest): Promise<any> => {
  const { headers, path, authenticated } = request

  try {
    const response = await axiosInstance.get(`${path}`, {
      headers,
      withCredentials: authenticated
    })

    if (response.status !== 200) {
      return { body: null }
    }

    const { body } = response.data

    return body


  } catch (err: any) {
    throw new Error(err)
  }
}

export const POST = async (request: BasicRequest): Promise<any> => {
  const { headers, path, body } = request

  try {
    const response = await axiosInstance.post(`${path}`, body, {
      headers: headers ?? { 'Content-Type': 'application/json' },
      withCredentials: true
    })
    console.log(response.data)


    if (response.status !== 200) {
      return { statusCode: 500, body: null }
    }

    return response.data
  } catch (err: any) {
    throw new Error(err)
  }
}

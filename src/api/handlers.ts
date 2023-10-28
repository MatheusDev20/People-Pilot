import { type BasicRequest, type BasicResponse } from '../@types/http'
import { handleRequestError, axiosInstance } from '../utils/axios'

export const GET = async (request: BasicRequest): Promise<any> => {
  const { headers, path, authenticated } = request

  try {
    const response = await axiosInstance.get(`${path}`, {
      headers,
      withCredentials: authenticated,
    })

    const { body } = response.data
    return body
  } catch (err: any) {
    throw new Error(err)
  }
}

export const POST = async <T>(
  request: BasicRequest,
): Promise<BasicResponse<T>> => {
  const { headers, path, body } = request

  try {
    const response = await axiosInstance.post(`${path}`, body, {
      headers: headers ?? {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    const { data } = response
    return data
  } catch (err: any) {
    throw new Error(
      handleRequestError(err, 'Erro no sistema, tente mais tarde'),
    )
  }
}

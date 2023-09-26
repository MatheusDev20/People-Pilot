

import { LoginFormData, LoginPayload} from "../@types";
import { timeout } from "../utils";
import { POST } from './handlers'

export const login = async (data: LoginFormData): Promise<LoginPayload> => {
  try {
    await timeout(2000)
    const response = await POST<LoginPayload>({path: "/auth/login", body: data, authenticated: false })
    const { body } = response

    return body
  }
  catch(err: any) {
    throw new Error(err.message)
  }
}
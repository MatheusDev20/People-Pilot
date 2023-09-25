

import { LoginFormData} from "../@types";
import { ActiveUser, AuthPayload } from "../@types/employees";
import { POST } from './handlers'

export const login = async (data: LoginFormData): Promise<any> => {
  const response = await POST({path: "/auth/login", body: data, authenticated: false })
  console.log(response)
}
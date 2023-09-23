

import { LoginFormData} from "../@types";
import { POST } from './handlers'

export const login = (data: LoginFormData) => {
  const response = POST({path: "/auth/login", authenticated: false, body: data})
  console.log(response)
}
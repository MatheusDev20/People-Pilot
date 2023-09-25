import { GET } from "./handlers"

export const getEmployeeList = async () => {
  const data = await GET({ path: '/employee?name=Tech', authenticated: true })
  return data
}
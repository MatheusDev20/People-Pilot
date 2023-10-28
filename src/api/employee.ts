import { type Employee } from '../@types/employees'
import { type ContextData as CreateEmployeeFormData } from '../contexts/create-employee-form'
import { GET } from './handlers'

export const getEmployeeList = async (): Promise<Employee[]> => {
  const data = await GET({
    path: '/employee?name=Tech',
    authenticated: true,
  })
  return data
}

export const postEmployee = async (
  employeeFormData: CreateEmployeeFormData,
): Promise<void> => {
  // const { stepOne, stepTwo } = employeeFormData
  // const body = {
  //   ...stepOne,
  //   ...stepTwo,
  // }
}

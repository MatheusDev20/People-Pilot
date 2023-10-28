import { type Employee } from '../@types/employees'
import { type ContextData as CreateEmployeeFormData } from '../contexts/create-employee-form'
import { convertDateFormat } from '../utils/dates'
import { GET, POST } from './handlers'

export const getEmployeeList = async (): Promise<Employee[]> => {
  const data = await GET({
    path: '/employee?name=Tech',
    authenticated: true,
  })
  return data
}

export const postEmployee = async (
  employeeFormData: CreateEmployeeFormData,
): Promise<{ createdId: string }> => {
  const { stepOne, stepTwo } = employeeFormData

  const birthDate = convertDateFormat(stepOne.birthDate)
  const hireDate = convertDateFormat(stepTwo.hireDate)

  const body = {
    name: stepOne.name,
    email: stepOne.email,
    password: stepTwo.password,
    birthDate,
    phone: stepOne.phone,
    position: stepTwo.position,
    departmentName: stepTwo.department,
    roles: 'employee',
    hire_date: hireDate,
  }

  const data = await POST<{ createdId: string }>({
    authenticated: false,
    path: '/employee',
    body,
  })

  const {
    body: { createdId },
  } = data

  return { createdId }
}

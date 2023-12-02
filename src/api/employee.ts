import { AxiosError } from 'axios'
import { type Employee } from '../@types/employees'
import { type ContextData as CreateEmployeeFormData } from '../contexts/create-employee-form'
import { ApplicationError } from '../exceptions/errors'

import { convertDateFormat } from '../utils/dates'
import { GET, PATCH, POST } from './handlers'
import { extractApiError } from '../utils/axios'
import { timeout } from '../utils'

export const getEmployeeList = async (): Promise<Employee[]> => {
  const data = await GET({
    path: '/employee',
    authenticated: true,
  })
  return data
}

export const getEmployeeById = async (id: string): Promise<Employee> => {
  const data = await GET({
    path: `/employee/details/${id}`,
    authenticated: true,
  })

  return data
}

export const uploadAvatar = async (file: File, id: string): Promise<string> => {
  const headers = 'multipart/form-data'
  const formData = new FormData()
  formData.append('employee_avatar', file)

  const data = await PATCH<{ id: string }>({
    path: `/employee/avatar/${id}`,
    authenticated: false,
    headers,
    formData,
  })

  return data.body.id
}

export const postEmployee = async (
  employeeFormData: CreateEmployeeFormData,
): Promise<string> => {
  try {
    await timeout(15000)
    const { stepOne, stepTwo, stepThree } = employeeFormData
    const file = stepThree.avatar

    const birthDate = convertDateFormat(stepOne.birthDate)
    const hireDate = convertDateFormat(stepTwo.hireDate)

    const body = {
      name: stepOne.name,
      email: stepOne.email,
      birthDate,
      phone: stepOne.phone,
      position: stepTwo.position,
      departmentName: stepTwo.department,
      role: 'employee',
      hire_date: hireDate,
    }

    const data = await POST<{ id: string }>({
      authenticated: false,
      path: '/employee',
      body,
    })
    if (file) await uploadAvatar(file, data.body.id)
    return data.body.id
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new ApplicationError(extractApiError(err))
    }
    throw new ApplicationError('General System Failure Try again later')
  }
}

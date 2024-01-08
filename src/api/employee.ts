import { AxiosError } from 'axios'
import { type GetEmployeeListParams, type Employee } from '../@types/employees'
import { type ContextData as CreateEmployeeFormData } from '../contexts/create-employee-form'
import { ApplicationError } from '../exceptions/errors'

import { convertDateFormat } from '../utils/dates'
import { GET, PATCH, POST, convertQueryParams } from './handlers'
import { extractApiError } from '../axios/interceptors'
import { type EmployeeAPIResponse } from '../@types/api'
import { employeesMapper } from './mappers/employee'

export const getEmployeeList = async (
  params: GetEmployeeListParams,
): Promise<Employee[]> => {
  const path = !params ? '/employee' : convertQueryParams('/employee', params)
  const response = await GET<Employee[]>({
    path,
    authenticated: true,
  })

  const { body } = response
  return body
}

export const getEmployeeById = async (id: string): Promise<Employee> => {
  const response = await GET<EmployeeAPIResponse>({
    path: `/employee/details/${id}`,
    authenticated: true,
  })
  const { body } = response
  return employeesMapper(body)
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

export const updatePaymentInfo = async (
  paymentInfo: any,
  id: string,
): Promise<void> => {
  await POST<{ id: string }>({
    authenticated: true,
    path: `/employee/payment-info/${id}`,
    body: paymentInfo,
  })
}

export const postEmployee = async (
  employeeFormData: CreateEmployeeFormData,
): Promise<string> => {
  try {
    const { stepOne, stepTwo, stepThree, stepFour } = employeeFormData
    const file = stepFour.avatar

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
    const { id } = data.body

    if (file) await uploadAvatar(file, id)
    await updatePaymentInfo(stepThree, id)

    return data.body.id
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new ApplicationError(extractApiError(err))
    }

    throw new ApplicationError('General System Failure Try again later')
  }
}

import {
  type UpdateDepartmentData,
  type CreateDepartmentForm,
  type Department,
} from '../../@types'
import { type DepartmentAPIResponse } from '../../@types/api'
import { timeout } from '../../utils'
import { DELETE, GET, POST, PUT, getTenant } from '../handlers'
import { departmentsMapper } from './deparments.mapper'

export const listDepartments = async (): Promise<Department[]> => {
  const response = await GET<DepartmentAPIResponse[]>({
    path: '/departments',
    authenticated: true,
    headers: {
      'x-organization-id': getTenant(),
    },
  })
  const { body } = response
  const departments: Department[] = body.map(departmentsMapper)
  return departments
}

export const postDepartment = async (
  data: CreateDepartmentForm,
): Promise<{ id: string }> => {
  const response = await POST<{ id: string }>({
    path: '/departments',
    authenticated: true,
    body: {
      ...data,
    },
    headers: {
      'x-organization-id': getTenant(),
    },
  })
  await timeout(2000)

  const { body } = response
  return { id: body.id }
}

export const excludeDepartment = async (
  departmentId: string,
): Promise<string> => {
  const response = await DELETE<{ id: string }>({
    path: `/departments/${departmentId}`,
    authenticated: true,
    headers: {
      'x-organization-id': getTenant(),
    },
  })

  const { body } = response

  return body.id
}

export const updateDepartment = async (
  updateData: UpdateDepartmentData,
): Promise<string> => {
  await timeout(5000)
  const { id, ...rest } = updateData
  const response = await PUT<{ id: string }>({
    path: `/departments/${id}`,
    authenticated: true,
    body: rest,
    headers: {
      'x-organization-id': getTenant(),
    },
  })

  const { body } = response

  return body.id
}

import { type Department } from '../@types'
import { type DepartmentAPIResponse } from '../@types/api'
import { timeout } from '../utils'
import { DELETE, GET } from './handlers'
import { departmentsMapper } from './mappers/deparments'

export const listDepartments = async (): Promise<Department[]> => {
  const response = await GET<DepartmentAPIResponse[]>({
    path: '/departments',
    authenticated: true,
  })

  const { body } = response

  const departments: Department[] = body.map(departmentsMapper)

  return departments
}

export const excludeDepartment = async (
  departmentId: string,
): Promise<string> => {
  await timeout(3000)
  const response = await DELETE<{ id: string }>({
    path: `/departments/${departmentId}`,
    authenticated: true,
  })

  const { body } = response

  return body.id
}

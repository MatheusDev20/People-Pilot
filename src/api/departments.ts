import { type Department } from '../@types'
import { type DepartmentAPIResponse } from '../@types/api'
import { timeout } from '../utils'
import { DELETE, GET } from './handlers'

export const listDepartments = async (): Promise<Department[]> => {
  const response = await GET<DepartmentAPIResponse[]>({
    path: '/departments',
    authenticated: true,
  })

  const { body } = response

  const departments: Department[] = body.map((dep: DepartmentAPIResponse) => ({
    id: dep.id,
    name: dep.name,
    manager: dep.manager,
    status: dep.isActive ? 'Active' : 'Inactive',
    activeEmployees: dep.employees.length,
  }))

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

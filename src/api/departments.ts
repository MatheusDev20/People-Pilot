import { type Department } from '../@types'
import { type DepartmentAPIResponse } from '../@types/api'
import { GET } from './handlers'

export const listDepartments = async (): Promise<Department[]> => {
  const response = await GET<DepartmentAPIResponse[]>({
    path: '/departments',
    authenticated: true,
  })

  const { body } = response

  const departments: Department[] = body.map((dep: DepartmentAPIResponse) => ({
    name: dep.name,
    manager: dep.manager,
    status: dep.isActive ? 'Active' : 'Inactive',
    activeEmployees: dep.employees.length,
  }))

  return departments
}

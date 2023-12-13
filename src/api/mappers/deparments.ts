import { type Department } from '../../@types'
import { type DepartmentAPIResponse } from '../../@types/api'

/* Parse the data cominng from the API to the format expected by the application */
export const departmentsMapper = (dep: DepartmentAPIResponse): Department => {
  return {
    id: dep.id,
    name: dep.name,
    description: dep.description,
    manager: {
      name: dep.manager.name,
      avatar: dep.manager.avatar,
      email: dep.manager.email,
    },
    status: dep.isActive ? 'Active' : 'Inactive',
    activeEmployees: dep.employees.length,
  }
}

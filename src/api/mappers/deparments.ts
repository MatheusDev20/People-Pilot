import { type Department } from '../../@types'
import { type DepartmentAPIResponse } from '../../@types/api'

/* Parse the data cominng from the API to the format expected by the application */
export const departmentsMapper = (dep: DepartmentAPIResponse): Department => {
  return {
    id: dep.id,
    name: dep.name,
    manager: {
      name: dep.manager.name,
      avatar: dep.manager.avatar,
    },
    status: dep.isActive ? 'Active' : 'Inactive',
    activeEmployees: dep.employees.length,
  }
}

import { type Department } from '../../@types'
import { type DepartmentAPIResponse } from '../../@types/api'

/* Parse the data cominng from the API to the format expected by the application */
export const departmentsMapper = (dep: DepartmentAPIResponse): Department => {
  try {
    return {
      id: dep.id,
      name: dep.name,
      description: dep.description,
      manager: dep.manager
        ? {
            name: dep.manager.name,
            avatar: dep.manager.avatar,
            email: dep.manager.email,
          }
        : null,
      status: dep.isActive ? 'Active' : 'Inactive',
      employees: dep.employees,
      employeeCount: dep.employeeCount,
    }
  } catch (err: any) {
    throw new Error(err)
  }
}

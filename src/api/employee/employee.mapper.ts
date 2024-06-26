import { type EmployeeAPIResponse } from '../../@types/api'
import { type ActiveUser, type Employee } from '../../@types/employees'
import { departmentsMapper } from '../departments/deparments.mapper'

export const employeesMapper = (employee: EmployeeAPIResponse): Employee => {
  try {
    return {
      id: employee.id,
      avatar: employee.avatar,
      birthDate: employee.birthDate,
      department: departmentsMapper(employee.department),
      paymentInfo: employee.paymentInfo ?? null,
      email: employee.email,
      hire_date: employee.hire_date,
      name: employee.name,
      phone: employee.phone,
      position: employee.position,
      status: employee.status,
      isManager: employee.managedDepartments.length > 0,
      documents: employee.documents,
    }
  } catch (err: any) {
    throw new Error(err)
  }
}

export const loggedEmployeeMapper = (
  employee: EmployeeAPIResponse,
): ActiveUser => {
  try {
    return {
      id: employee.id,
      avatar: employee.avatar,
      email: employee.email,
      hire_date: employee.hire_date,
      name: employee.name,
      phone: employee.phone,
      position: employee.position,
      status: employee.status,
      created_at: employee.created_at,
      updated_at: employee.updated_at,
      organization: employee.organization,
    }
  } catch (err: any) {
    throw new Error(err)
  }
}

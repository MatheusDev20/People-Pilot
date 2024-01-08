import { type EmployeeAPIResponse } from '../../@types/api'
import { type Employee } from '../../@types/employees'
import { departmentsMapper } from './deparments'

export const employeesMapper = (employee: EmployeeAPIResponse): Employee => {
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
  }
}

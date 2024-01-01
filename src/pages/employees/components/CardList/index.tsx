import React from 'react'
import { EmployeeCard } from '../Card'
// import { Pagination } from '../Pagination'
import { type Employee } from '../../../../@types/employees'

interface Props {
  list: Employee[]
}
export const CardList = ({ list }: Props): React.JSX.Element => {
  return (
    <main className="flex flex-col gap-0 cursor-pointer">
      <div className="p-8 grid grid-cols-4 gap-4 w-full">
        {list.map((employee) => {
          return (
            <EmployeeCard.Wrapper key={employee.id} id={employee.id}>
              <EmployeeCard.Header
                employeeStatus={
                  employee.status !== 'Active' ? 'Not Active' : employee.status
                }
              />
              <EmployeeCard.Info
                employeeName={employee.name}
                employeePosition={employee.position}
                employeeAvatar={employee.avatar}
              />
              <EmployeeCard.Footer
                department={employee.department}
                email={employee.email}
                phone={employee.phone}
              />
            </EmployeeCard.Wrapper>
          )
        })}
      </div>
    </main>
  )
}

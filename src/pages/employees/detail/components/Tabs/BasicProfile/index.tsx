import React from 'react'
import { InfoLabel } from '../../InfoLabel'
import { type Employee } from '../../../../../../@types/employees'

type Props = {
  employee: Employee
}
export const BasicInfoProfile = ({ employee }: Props): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex">
        <InfoLabel title="Full Name" info={employee.name} w="w-1/2" />
        <InfoLabel title="Email" info={employee.email} w="w-1/2" />
      </section>
      <section className="flex">
        <InfoLabel title="Birth Date" info={employee.birthDate} w="w-1/2" />
        <InfoLabel title="Personal Phone" info={employee.phone} w="w-1/2" />
      </section>
    </div>
  )
}

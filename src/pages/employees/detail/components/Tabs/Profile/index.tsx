import React from 'react'
// import { InfoLabel } from '../../InfoLabel'
import { type Employee } from '../../../../../../@types/employees'
import { Accordion } from '../../../../../../components/Accordion'
import { extract } from '../../../../../../utils'
import {
  PaymentInfoMapper,
  PersonalInfoMapper,
} from '../../../../../../utils/mappers/accordion'

type Props = {
  employee: Employee
}
export const BasicInfoProfile = ({ employee }: Props): React.JSX.Element => {
  return (
    <div className="join join-vertical w-full gap-8">
      <Accordion
        title="Informações Pessoais"
        accordionValues={extract(employee, PersonalInfoMapper)}
      />
      <Accordion
        title="Informações Bancárias"
        accordionValues={
          employee.paymentInfo
            ? extract(employee.paymentInfo, PaymentInfoMapper)
            : null
        }
      />
      {/* <Accordion title="Address" data={employee} /> */}
    </div>
  )
}

import { CustomInput } from '../../../../../../components/Inputs/Standard'
import React from 'react'
import {
  PersonIcon,
  CalendarIcon,
  EmailIcon,
  PhoneIcon,
} from '../../../../../../assets/icons'
import { useCreateEmployeeForm } from '../../../../../../contexts/create-employee-form'
import {
  normalizeDate,
  normalizePhone,
} from '../../../../../../components/Inputs/Masks'

interface Props {
  errors: Record<string, string[]> | null
}

export const StepOne = ({ errors }: Props): React.JSX.Element => {
  const { formData } = useCreateEmployeeForm()

  return (
    <div className="flex flex-col gap-5 w-full items-start ml-4">
      {/* Name */}
      <div className="flex gap-6 w-full p-1.5">
        <CustomInput
          wSize="medium"
          name="name"
          step="stepOne"
          value={formData.stepOne.name}
          error={errors ? errors.name : null}
          icon={<PersonIcon />}
          label="First Name"
          placeholder="Katarine Devito..."
          type="text"
        />
        {/* Email */}
        <CustomInput
          name="email"
          step="stepOne"
          value={formData.stepOne.email}
          wSize="medium"
          error={errors ? errors.email : null}
          label="Email"
          icon={<EmailIcon />}
          placeholder="katarine@stx.com..."
        />
      </div>
      {/* Date of Birth and Email Address */}
      <div className="flex gap-3 w-full p-1.5">
        <CustomInput
          name="birthDate"
          step="stepOne"
          value={formData.stepOne.birthDate}
          wSize="medium"
          error={errors ? errors.birthDate : null}
          label="Birth Date"
          icon={<CalendarIcon />}
          mask={normalizeDate}
          placeholder="09/09/1999..."
        />
        <CustomInput
          name="phone"
          step="stepOne"
          value={formData.stepOne.phone}
          wSize="medium"
          error={errors ? errors.phone : null}
          icon={<PhoneIcon />}
          label="Phone"
          mask={normalizePhone}
          placeholder="(32) 9 99850138..."
        />
      </div>
    </div>
  )
}

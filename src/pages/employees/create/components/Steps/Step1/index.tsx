import { CustomInput } from '../../../../../../components/Inputs/Standard'
import React from 'react'
import {
  PersonIcon,
  CalendarIcon,
  EmailIcon,
  PhoneIcon,
} from '../../../../../../assets/icons'
import { useCreateEmployeeForm } from '../../../../../../contexts/create-employee-form'

interface Props {
  errors: Record<string, string[]> | null
}

export const StepOne = ({ errors }: Props): React.JSX.Element => {
  const { formData, setFormData } = useCreateEmployeeForm()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      stepOne: {
        ...formData.stepOne,
        [e.target.name]: e.target.value,
      },
    })
  }

  return (
    <div className="flex flex-col gap-5 w-full items-start ml-4">
      {/* Name */}
      <div className="flex gap-6 w-full p-1.5">
        <CustomInput
          onChange={(e) => {
            handleInput(e)
          }}
          wSize="medium"
          name="name"
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
          value={formData.stepOne.email}
          onChange={(e) => {
            handleInput(e)
          }}
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
          value={formData.stepOne.birthDate}
          onChange={(e) => {
            handleInput(e)
          }}
          wSize="medium"
          error={errors ? errors.birthDate : null}
          label="Birth Date"
          icon={<CalendarIcon />}
          mask="99/99/9999"
          placeholder="09/09/1999..."
        />
        <CustomInput
          name="phone"
          value={formData.stepOne.phone}
          onChange={(e) => {
            handleInput(e)
          }}
          wSize="medium"
          error={errors ? errors.phone : null}
          icon={<PhoneIcon />}
          label="Phone"
          mask="(99) 999999999"
          placeholder="(32) 999850138..."
        />
      </div>
    </div>
  )
}

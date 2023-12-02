import { CustomInput } from '../../../../../../components/Inputs/Standard'
import React from 'react'
import { useCreateEmployeeForm } from '../../../../../../contexts/create-employee-form'
import {
  hasMask,
  normalizeDate,
  normalizePhone,
} from '../../../../../../components/Inputs/Masks'

interface Props {
  errors: Record<string, string[]> | null
}

export const StepOne = ({ errors }: Props): React.JSX.Element => {
  const { formData, setFormData } = useCreateEmployeeForm()

  const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name
    const mask = hasMask(name)
    const value = mask ? mask(e.target.value) : e.target.value

    setFormData({
      ...formData,
      stepOne: {
        ...formData.stepOne,
        [name]: value,
      },
    })
  }

  return (
    <div className="flex flex-col gap-5 w-full items-start ml-4">
      {/* Name */}
      <div className="flex gap-6 w-full p-1.5">
        <CustomInput
          wSize="medium"
          name="name"
          onChange={handleStepChange}
          value={formData.stepOne.name}
          error={errors ? errors.name : null}
          label="First Name"
          placeholder="Katarine Devito..."
          type="text"
        />
        {/* Email */}
        <CustomInput
          name="email"
          value={formData.stepOne.email}
          onChange={handleStepChange}
          wSize="medium"
          error={errors ? errors.email : null}
          label="Email"
          placeholder="katarine@stx.com..."
        />
      </div>
      {/* Date of Birth and Email Address */}
      <div className="flex gap-3 w-full p-1.5">
        <CustomInput
          name="birthDate"
          onChange={handleStepChange}
          value={formData.stepOne.birthDate}
          wSize="medium"
          error={errors ? errors.birthDate : null}
          label="Birth Date"
          mask={normalizeDate}
          placeholder="09/09/1999..."
        />
        <CustomInput
          name="phone"
          onChange={handleStepChange}
          value={formData.stepOne.phone}
          wSize="medium"
          error={errors ? errors.phone : null}
          label="Phone"
          mask={normalizePhone}
          placeholder="(32) 9 99850138..."
        />
      </div>
    </div>
  )
}

'use client'

import { CustomInput } from '../../../../../../components/Inputs/Standard'
import React from 'react'
import {
  PersonIcon,
  CalendarIcon,
  EmailIcon,
  AddressIcon,
  PhoneIcon,
} from '../../../../../../assets/icons'
import { useCreateEmployeeForm } from '../../../../../../contexts/create-employee-form'

type Props = {
  errors: { [key: string]: string[] } | null
}

export const StepOne = ({ errors }: Props): React.JSX.Element => {
  const { formData, setFormData } = useCreateEmployeeForm()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      stepOne: { ...formData.stepOne, [e.target.name]: e.target.value },
    })
  }

  return (
    <div className="flex flex-col gap-5 w-full items-start ml-4">
      {/* Name and Last Name */}
      <div className="flex gap-6 w-full p-1.5">
        <CustomInput
          onChange={(e) => handleInput(e)}
          wSize="medium"
          name="name"
          // value={formData.stepOne.name}
          error={errors ? errors.name : null}
          icon={<PersonIcon />}
          label="First Name"
          placeholder="Katarine Devito..."
          type="text"
        />
        <CustomInput
          onChange={(e) => handleInput(e)}
          name="lastName"
          error={errors ? errors.lastName : null}
          wSize="medium"
          icon={<PersonIcon />}
          placeholder="Last Name..."
          label="Last Name"
        />
      </div>
      {/* Date of Birth and Email Address */}
      <div className="flex gap-3 w-full p-1.5">
        <CustomInput
          name="birthDate"
          onChange={(e) => handleInput(e)}
          wSize="medium"
          error={errors ? errors.birthDate : null}
          label="Birth Date"
          icon={<CalendarIcon />}
          mask="99/99/9999"
          placeholder="09/09/1999..."
        />
        <CustomInput
          name="email"
          onChange={(e) => handleInput(e)}
          wSize="medium"
          error={errors ? errors.email : null}
          label="Email"
          icon={<EmailIcon />}
          placeholder="katarine@stx.com..."
        />
      </div>
      {/* Address  and Phone */}
      <div className="flex p-1.5 w-full gap-3">
        <CustomInput
          name="phone"
          onChange={(e) => handleInput(e)}
          wSize="medium"
          error={errors ? errors.phone : null}
          icon={<PhoneIcon />}
          label="Address"
          placeholder="134 Trainer Avenue Bloomington IL Illinois 61701"
        />
        <CustomInput
          name="address"
          onChange={(e) => handleInput(e)}
          wSize="medium"
          error={errors ? errors.address : null}
          icon={<AddressIcon />}
          label="Phone"
          mask="(99)-99999-9999"
          placeholder="(32) 999850138 ..."
        />
      </div>
    </div>
  )
}

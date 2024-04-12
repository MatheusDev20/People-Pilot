import { CustomInput } from '../../../../../../components/Inputs/Standard'
import { CustomSelect } from '../../../../../../components/Inputs/Select'
import { useCreateEmployeeForm } from '../../../../../../contexts/create-employee-form'
import React from 'react'
import { hasMask } from '../../../../../../components/Inputs/Masks'
import { useQuery } from '@tanstack/react-query'
import { listDepartments } from '../../../../../../api/departments/departments.query'

interface Props {
  errors: Record<string, string[]> | null
}
export const StepTwo = ({ errors }: Props): React.JSX.Element => {
  const { formData, setFormData } = useCreateEmployeeForm()
  const { data } = useQuery({
    queryKey: ['departments'],
    queryFn: listDepartments,
  })

  const handleStepChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const name = e.target.name
    const mask = hasMask(name)

    const value = mask ? mask(e.target.value) : e.target.value
    setFormData({
      ...formData,
      stepTwo: {
        ...formData.stepTwo,
        [name]: value,
      },
    })
  }

  return (
    <div className="flex flex-col gap-5 w-full items-start ml-10">
      <div className="flex gap-3 w-full p-1.5">
        <CustomSelect
          onChange={handleStepChange}
          step="stepTwo"
          wSize="large"
          name="department"
          value={formData.stepTwo.department}
          error={errors ? errors.department : null}
          label="Departament"
          placeholder="Select an Department..."
          options={data?.map((department) => department.name) ?? []}
        />
        <CustomInput
          onChange={handleStepChange}
          name="position"
          step="stepTwo"
          value={formData.stepTwo.position}
          error={errors ? errors.position : null}
          wSize="medium"
          placeholder="New employee position..."
          label="Position"
        />

        <CustomInput
          onChange={handleStepChange}
          name="hireDate"
          step="stepTwo"
          disabled={true}
          value={formData.stepTwo.hireDate}
          mask="99/99/9999"
          error={errors ? errors.hireDate : null}
          wSize="medium"
          placeholder="01/12/2023..."
          label="Hire Date"
        />
      </div>
    </div>
  )
}

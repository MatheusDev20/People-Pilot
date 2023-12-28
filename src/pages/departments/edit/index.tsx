/* eslint-disable @typescript-eslint/consistent-type-assertions */
// import { useParams } from 'react-router-dom'

import { useLocation } from 'react-router-dom'
import { type CreateDepartmentForm, type Department } from '../../../@types'
import { CustomInput, CustomSelect } from '../../../components/Inputs'
import { StandardButton } from '../../../components/Buttons/Standard'
import { useManagers } from '../../../hooks/managers'
import { type ChangeEvent, useState } from 'react'
import { updateDepartment } from '../../../api/departments'
import { useMutation } from '@tanstack/react-query'
import {
  CustomOption,
  OptionIcon,
} from '../../../components/Inputs/Select/Option'

export const EditDepartmentPage = (): JSX.Element => {
  const { state } = useLocation()
  const department = state.department as Department
  const oldData = {
    name: department.name,
    description: department.description,
    managerEmail: department.manager.email,
  }
  const { managers } = useManagers()

  const [formData, setFormData] = useState<CreateDepartmentForm>(oldData)

  console.log(formData)

  const { mutate, isLoading, isSuccess, isError, reset } = useMutation({
    mutationFn: updateDepartment,
    onSuccess: (data: any) => {
      console.log(data)
    },
  })

  const handleEditDepartment = (): void => {
    const { diff } = extractDiff(formData, oldData)
    console.log('Paylod alterado', diff)
    mutate({ id: department.id, ...diff })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSelect = (e: any): void => {
    setFormData({ ...formData, managerEmail: e.value })
  }

  const extractDiff = (
    dept1: CreateDepartmentForm,
    dept2: CreateDepartmentForm,
  ): { hasDiff: boolean; diff: CreateDepartmentForm } => {
    const diff = {} as CreateDepartmentForm
    for (const key in dept1) {
      const castedKey = key as keyof CreateDepartmentForm
      if (dept1[castedKey] !== dept2[castedKey]) {
        diff[castedKey] = dept1[castedKey]
      }
    }

    return { hasDiff: Object.keys(diff).length > 0, diff }
  }

  const defaultSelectOption = {
    value: department.manager.email,
    label: (
      <CustomOption
        data={department.manager.email}
        img={<OptionIcon imgUrl={department.manager.avatar} />}
      />
    ),
  }
  const { hasDiff } = extractDiff(formData, oldData)
  return (
    <div className="p-8">
      <h1 className="text-sm md:text-3xl font-semibold">
        Edit Department
        <span className="ml-3 text-twitter-blue-main">{department.name}</span>
      </h1>

      <div className="flex flex-col w-full gap-11 items-center justify-center mt-11">
        <div className="w-[50%]">
          <CustomInput
            name="name"
            label="New Department Name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Marketing..."
            wSize="medium"
            error={null}
          />
          <CustomInput
            name="description"
            label="New Short Description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Handle all the billings and and employees Incomes..."
            wSize="medium"
            error={null}
          />
          <CustomSelect
            defaultValue={
              department.manager.email === formData.managerEmail
                ? defaultSelectOption
                : ''
            }
            onChange={handleSelect}
            name="managerEmail"
            label="New Manager"
            wSize="medium"
            placeholder="Choose the manager email to assign the department ..."
            error={null}
            options={managers}
          />
        </div>
        <StandardButton
          disabled={!hasDiff}
          onClick={handleEditDepartment}
          size="w-[25%]"
        >
          {isLoading ? (
            <span className="loading loading-dots"></span>
          ) : (
            'Update Department Data'
          )}
        </StandardButton>
      </div>
    </div>
  )
}

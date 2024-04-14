/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/consistent-type-assertions */

import { type ChangeEvent, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { type CreateDepartmentForm, type Department } from '@/@types'
import { useManagers } from '@/hooks/managers'
import { CustomOption, OptionIcon } from '@/components/Inputs/Select/Option'
import { CustomInput, CustomSelect } from '@/components/Inputs'
import { StandardButton } from '@/components/Buttons/Standard'
import { type ToastData } from '@/hooks/toast'
import { useEditDepartment } from '@/api/departments/department.hooks'

type Props = {
  department: Department
  showToast: (data: ToastData) => void
  modalRef: React.RefObject<HTMLDialogElement>
}
export const EditForm = ({
  department,
  showToast,
  modalRef,
}: Props): JSX.Element => {
  const oldData = {
    name: department.name,
    description: department.description,
    managerEmail: department.manager ? department.manager.email : '',
  }
  const { managers } = useManagers()
  const [formData, setFormData] = useState<CreateDepartmentForm>(oldData)

  const client = useQueryClient()
  const { mutate, isLoading } = useEditDepartment({
    showToast,
    ref: modalRef,
    client,
  })

  const handleEditDepartment = async (): Promise<void> => {
    const { diff } = extractDiff(formData, oldData)
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
  ): { diff: CreateDepartmentForm } => {
    const diff = {} as CreateDepartmentForm
    for (const key in dept1) {
      const castedKey = key as keyof CreateDepartmentForm
      if (dept1[castedKey] !== dept2[castedKey]) {
        diff[castedKey] = dept1[castedKey]
      }
    }

    return { diff }
  }

  const defaultSelectOption = {
    value: department.manager ? department.manager.email : '',
    label: (
      <CustomOption
        data={department.manager ? department.manager.email : ''}
        img={
          <OptionIcon
            imgUrl={department.manager ? department.manager.email : ''}
          />
        }
      />
    ),
  }

  const wasDataModified = Object.keys(
    extractDiff(formData, oldData).diff,
  ).length
  return (
    <>
      <div className="flex flex-col w-full gap-11 items-center justify-center mt-11">
        <div className="w-[80%]">
          <CustomInput
            name="name"
            label="New Department Name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Marketing..."
            wSize="medium"
            error={null}
            maxLength={30}
          />
          <CustomInput
            name="description"
            label="New Short Description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Handle all the billings and and employees Incomes..."
            wSize="medium"
            error={null}
            maxLength={30}
          />
          <CustomSelect
            defaultValue={
              department.manager?.email === formData.managerEmail
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
          disabled={!wasDataModified || isLoading}
          onClick={handleEditDepartment}
          size="w-[25%]"
        >
          {isLoading ? (
            <span className="loading loading-dots"></span>
          ) : (
            'Atualizar'
          )}
        </StandardButton>
      </div>
    </>
  )
}

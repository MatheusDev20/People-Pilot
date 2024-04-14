/* eslint-disable @typescript-eslint/no-misused-promises */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useManagers } from '@/hooks/managers'
import { postDepartment } from '@/api/departments/departments.query'
import { validateSchema } from '@/validations/schemas'
import { createDepartmentSchema } from '@/validations/schemas/departments'
import { StandardButton } from '@/components/Buttons/Standard'
import { type CreateDepartmentForm } from '@/@types'
import { CustomInput, CustomSelect } from '@/components/Inputs'
import { type ToastData } from '@/hooks/toast'
import { useAddDepartment } from '@/api/departments/department.hooks'

type Props = {
  showToast: (data: ToastData) => void
  modalRef: React.RefObject<HTMLDialogElement>
}
export const CreateForm = ({ modalRef, showToast }: Props): JSX.Element => {
  const [formData, setFormData] = useState<CreateDepartmentForm>({
    description: '',
    managerEmail: '',
    name: '',
  })
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null)
  const { managers } = useManagers()

  const queryClient = useQueryClient()

  const { mutate, isLoading } = useAddDepartment({
    client: queryClient,
    ref: modalRef,
    showToast,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSelectChange = (e: any): void => {
    setFormData({
      ...formData,
      managerEmail: e.value,
    })
  }

  const handleSubmitDepartment = async (): Promise<void> => {
    setErrors(null)
    const { errors, veredict } = await validateSchema<CreateDepartmentForm>(
      formData,
      createDepartmentSchema,
    )

    if (!veredict || errors) {
      setErrors(errors)
      return
    }
    mutate(formData)
  }

  return (
    <div className="flex flex-col w-full gap-11 items-center justify-center mt-3">
      <div className="w-[80%]">
        <CustomInput
          name="name"
          label="Department Name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Marketing..."
          wSize="medium"
          error={errors ? errors.name : null}
        />
        <CustomInput
          name="description"
          label="Short Description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Handle all the billings and and employees Incomes..."
          wSize="medium"
          error={errors ? errors.description : null}
        />
        <CustomSelect
          onChange={handleSelectChange}
          name="managerEmail"
          label="Department Manager Email"
          wSize="medium"
          placeholder="Choose the manager email to assign the department ..."
          error={errors ? errors.managerMail : null}
          options={managers}
        />
      </div>
      <StandardButton
        onClick={handleSubmitDepartment}
        size="w-[25%]"
        disabled={Object.values(formData).every((value) => value === '')}
      >
        {isLoading ? <span className="loading loading-dots"></span> : 'Criar'}
      </StandardButton>
    </div>
  )
}

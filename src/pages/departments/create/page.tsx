/* eslint-disable @typescript-eslint/no-misused-promises */
import { useMutation } from '@tanstack/react-query'
import { CustomInput, CustomSelect } from '../../../components/Inputs'
import { useRef, useState } from 'react'
import { type CreateDepartmentForm } from '../../../@types'
import { StandardButton } from '../../../components/Buttons/Standard'
import { useDialog } from '../../../hooks/dialog'
import { CustomDialog } from '../../../components/Dialog'
import { createDepartmentSchema } from '../../../validations/schemas/departments'
import { validateSchema } from '../../../validations/schemas'
import { postDepartment } from '../../../api/departments'
import { useManagers } from '../../../hooks/managers'

export const CreateDepartmentPage = (): JSX.Element => {
  const [formData, setFormData] = useState<CreateDepartmentForm>({
    description: '',
    managerEmail: '',
    name: '',
  })
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null)

  const ref = useRef<HTMLDialogElement>(null)
  const { dialog, show } = useDialog(ref)
  const { managers } = useManagers()

  const { mutate } = useMutation({
    mutationFn: postDepartment,
    onSuccess: (data) => {
      show({
        msg: `Department ${formData.name} created! `,
        title: 'Department Created',
        type: 'success',
        createdId: data.id,
      })
    },
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
    <div className="p-8">
      <CustomDialog
        ref={ref}
        dialogData={dialog}
        redirectUrl="/app/departments"
      />
      {/* Header */}
      <h1 className="text-sm md:text-3xl font-semibold">New Department</h1>

      {/* Form */}
      <div className="flex flex-col w-full gap-11 items-center justify-center mt-3">
        <div className="w-[50%]">
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
          Create Department
        </StandardButton>
      </div>
    </div>
  )
}

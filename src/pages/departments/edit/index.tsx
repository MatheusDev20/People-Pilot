/* eslint-disable @typescript-eslint/consistent-type-assertions */
// import { useParams } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

import { type ChangeEvent, useState, useRef } from 'react'

import { useMutation } from '@tanstack/react-query'
import { type CreateDepartmentForm, type Department } from '@/@types'
import { useManagers } from '@/hooks/managers'
import { useDialog } from '@/hooks/dialog'
import { useToast } from '@/hooks/toast'
import { updateDepartment } from '@/api/departments'
import { CustomOption, OptionIcon } from '@/components/Inputs/Select/Option'
import { ToastMessage } from '@/components/Toast'
import { ActionDialog } from '@/components/Dialog/ActionDialog'
import { CustomInput, CustomSelect } from '@/components/Inputs'
import { StandardButton } from '@/components/Buttons/Standard'

export const EditDepartmentPage = (): JSX.Element => {
  const ref = useRef<HTMLDialogElement>(null)

  const { state } = useLocation()
  const department = state.department as Department
  const oldData = {
    name: department.name,
    description: department.description,
    managerEmail: department.manager ? department.manager.email : '',
  }
  const { managers } = useManagers()
  const { dialog, show, hideDialog } = useDialog(ref)
  const { toast, showToast } = useToast()

  const [formData, setFormData] = useState<CreateDepartmentForm>(oldData)

  const { mutate, isLoading, isSuccess, isError, reset } = useMutation({
    mutationFn: updateDepartment,
    onError: async (error: any) => {
      hideDialog()
      await showToast({
        message: 'Failed to perform update, try again later',
        type: 'error',
        duration: 5000,
      })
      throw error
    },
  })

  const handleEditDepartment = (): void => {
    const { diff } = extractDiff(formData, oldData)
    show({
      msg: 'This action cannot be undone',
      title: `Are you sure you want to update ${department.name} ?`,
      type: 'warning',
      action: {
        cb: () => {
          mutate({ id: department.id, ...diff })
        },
        type: 'edit',
        successMsg: 'Department updated with success!',
      },
    })
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
      <ToastMessage message={toast.message} type={toast.type} />
      <div className="p-8">
        <ActionDialog
          ref={ref}
          dialogData={dialog}
          action={dialog.action}
          actionState={{
            loading: isLoading,
            success: isSuccess,
            error: isError,
          }}
          redirectUrl="/app/departments"
          reset={reset}
        />
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
              'Update Department Data'
            )}
          </StandardButton>
        </div>
      </div>
    </>
  )
}

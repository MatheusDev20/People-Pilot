import { UploadInput } from '../../../../../../components/Inputs/Upload'
import React from 'react'
import genericAvatar from '../../../../../../assets/imgs/generic-avatar.jpg'
import { useCreateEmployeeForm } from '../../../../../../contexts/create-employee-form'

interface Props {
  errors: Record<string, string[]> | null
}

export const StepThree = ({ errors }: Props): React.JSX.Element => {
  const {
    formData: { stepThree },
  } = useCreateEmployeeForm()
  return (
    <div className="flex w-full p-12 gap-5 items-center">
      {!stepThree.avatar || errors?.avatar ? (
        <img
          src={genericAvatar}
          alt="preview"
          className="rounded-full h-36 w-36"
        />
      ) : (
        <img
          src={URL.createObjectURL(stepThree.avatar)}
          alt="preview"
          className="rounded-full h-36 w-36"
        />
      )}
      <UploadInput errors={errors ? errors.avatar : null} />
    </div>
  )
}

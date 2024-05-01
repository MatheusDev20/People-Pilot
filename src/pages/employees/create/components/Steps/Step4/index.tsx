import { UploadInput } from '../../../../../../components/Inputs/Upload'
import React, { type SetStateAction } from 'react'
import genericAvatar from '../../../../../../assets/imgs/fake-avatar1.png'
import { useCreateEmployeeForm } from '../../../../../../contexts/create-employee-form'

interface Props {
  errors: Record<string, string[]> | null
  setErrors: React.Dispatch<SetStateAction<Record<string, string[]> | null>>
  isLoading: boolean
}

const Loading = (): React.JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full gap-5">
      {/* <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" /> */}
      <span className="loading loading-dots w-24 text-primary"></span>
    </div>
  )
}

export const StepFour = ({
  errors,
  setErrors,
  isLoading,
}: Props): React.JSX.Element => {
  const { formData, setFormData } = useCreateEmployeeForm()

  const handleInput = (file: File | null): void => {
    setFormData({
      ...formData,
      stepFour: {
        ...formData.stepFour,
        avatar: file,
      },
    })
  }
  return (
    <div className="flex w-full p-12 gap-5 items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!formData.stepFour.avatar ? (
            <img
              src={genericAvatar}
              alt="preview"
              className="rounded-full h-36 w-36"
            />
          ) : (
            <img
              src={URL.createObjectURL(formData.stepFour.avatar)}
              alt="preview"
              className="rounded-full h-36 w-36"
            />
          )}
          <UploadInput
            handleInputEvent={handleInput}
            errors={errors ?? null}
            setErrors={setErrors}
            uploadHint="Selecione uma imagem de perfil..."
            allowedFormats={['jpg', 'png', 'jpeg']}
            currentFile={formData.stepFour.avatar}
          />
        </>
      )}
    </div>
  )
}

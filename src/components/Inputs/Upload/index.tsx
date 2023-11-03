import React, { type ChangeEvent } from 'react'
import uploadIcon from '../../../assets/svgs/upload.svg'
import { useCreateEmployeeForm } from '../../../contexts/create-employee-form'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

interface Props {
  errors: string[] | null
}
export const UploadInput = ({ errors }: Props): React.JSX.Element => {
  const { setFormData, formData } = useCreateEmployeeForm()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files ? e.target.files[0] : null

    setFormData({
      ...formData,
      stepThree: {
        ...formData.stepThree,
        avatar: file,
      },
    })
  }

  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <img src={uploadIcon} alt="upload-icon" className="w-8 h-8" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop a file
            </p>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
              Allowed formats: PNG,JPG
            </p>
          </div>
          <input type="file" className="hidden" onChange={handleChange} />
        </label>
      </div>
      {errors && (
        <footer className="flex gap-4 items-center">
          <AiOutlineExclamationCircle className="font-semibold text-red-500" />
          <span className="text-sm text-red-500 font-semibold">
            {errors[0]}
          </span>
        </footer>
      )}
    </div>
  )
}

import React, { type ChangeEvent } from 'react'
import uploadIcon from '../../../assets/svgs/upload.svg'
import { useCreateEmployeeForm } from '../../../contexts/create-employee-form'
import { validateFile } from '../../../validations/schemas'

interface Props {
  errors: Record<string, string[]> | null
  setErrors: any
}
export const UploadInput = ({
  errors,
  setErrors,
}: Props): React.JSX.Element => {
  const { setFormData, formData } = useCreateEmployeeForm()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files ? e.target.files[0] : null
    const { errors, veredict } = validateFile(file)
    if (!veredict) {
      setErrors(errors)
      return
    }
    setFormData({
      ...formData,
      stepFour: {
        ...formData.stepFour,
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-500 text-sm"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>

          <span className="text-sm text-red-500">
            {errors.avatar ?? errors.avatar[0]}
          </span>
        </footer>
      )}
    </div>
  )
}

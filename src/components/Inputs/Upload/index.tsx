import React, { type ChangeEvent } from 'react'
import uploadIcon from '../../../assets/svgs/upload.svg'
import { validateFile } from '../../../validations/schemas'
import { Exclamation } from '@/assets/svgs/exclamation'

interface Props {
  errors: Record<string, string[]> | null
  setErrors: any
  uploadHint: string
  allowedFormats: string[]
  handleInputEvent: (file: File | null) => void
  currentFile: File | null
}
export const UploadInput = ({
  errors,
  setErrors,
  uploadHint,
  handleInputEvent,
  allowedFormats,
  currentFile,
}: Props): React.JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files ? e.target.files[0] : null
    const { errors, veredict } = validateFile(file, allowedFormats)
    if (!veredict) {
      setErrors(errors)
      return
    }

    handleInputEvent(file)
  }
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center gap-3 justify-center pt-5 pb-6">
            <img src={uploadIcon} alt="upload-icon" className="w-8 h-8" />
            {currentFile ? (
              <p>{currentFile.name}</p>
            ) : (
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">{uploadHint}</span>
              </p>
            )}

            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
              Formatos Permitidos: {allowedFormats.join(', ').toUpperCase()}
            </p>
          </div>
          <input type="file" className="hidden" onChange={handleChange} />
        </label>
      </div>
      {errors && (
        <footer className="flex gap-4 items-center">
          <Exclamation />
          <span className="text-sm text-red-500">
            {errors.file ?? errors.file[0]}
          </span>
        </footer>
      )}
    </div>
  )
}

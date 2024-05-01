/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable react/jsx-key */
import { type CreateEmployeeDocumentFormData } from '@/@types/employees'
import { usePostDocument } from '@/api/employee/employee.hooks'
import { StandardButton } from '@/components/Buttons/Standard'
import { CustomInput, CustomSelect, UploadInput } from '@/components/Inputs'
import { type ToastData } from '@/hooks/toast'
import { documentMappers } from '@/utils/mappers/documents'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

type Props = {
  employeeId: string
  modalRef: React.RefObject<HTMLDialogElement>
  showToast: (data: ToastData) => void
}
export const DocumentForm = ({
  employeeId,
  modalRef,
  showToast,
}: Props): JSX.Element => {
  const queryClient = useQueryClient()
  const [formData, setFormData] = useState<
    Omit<CreateEmployeeDocumentFormData, 'employeeId'>
  >({
    file: null as File | null,
    type: '',
    metadata: {} as Record<string, string>,
  })

  const [errors, setErrors] = useState<Record<string, string[]> | null>(null)

  const reset = (): void => {
    setFormData({
      file: null,
      type: '',
      metadata: {},
    })
  }

  const { mutate, isLoading } = usePostDocument({
    showToast,
    client: queryClient,
    ref: modalRef,
    reset,
  })

  const mapper = formData.type
    ? documentMappers[formData.type.toLocaleLowerCase()]
    : []

  const handleMetadata = (e: any): void => {
    const { value, name } = e.target
    setFormData({
      ...formData,
      metadata: {
        ...formData.metadata,
        [name]: value,
      },
    })
  }

  const handleType = (e: any): void => {
    setFormData({
      ...formData,
      type: e.target.value,
      metadata: {},
      file: null,
    })
  }

  const handleUpload = (file: File | null): void => {
    setFormData({ ...formData, file })
  }

  const handleSave = (): void => {
    mutate({ employeeId, ...formData })
  }

  const labels = Object.values(mapper).map((v) => {
    const { order, ...rest } = v
    return rest
  })

  return (
    <div className="flex flex-col gap-8 items-center justify-center p-2">
      <CustomSelect
        value={formData.type}
        wSize="medium"
        options={['CPF', 'RG']}
        name="type"
        error={null}
        onChange={handleType}
        placeholder="Tipo de documento"
      />
      {formData.type && labels && (
        <div className="flex w-full">
          <div className="flex w-1/2 flex-col pr-6 pl-6">
            {labels.map((label) => {
              const [k] = Object.keys(label)
              return (
                <CustomInput
                  key={k}
                  name={k}
                  mask={label.mask}
                  value={formData.metadata[k]}
                  onChange={handleMetadata}
                  wSize="large"
                  placeholder={`${label[k as keyof typeof label]}...`}
                  error={null}
                />
              )
            })}
          </div>
          <div className="flex-1 flex items-center p-8">
            <UploadInput
              errors={errors}
              setErrors={setErrors}
              handleInputEvent={handleUpload}
              uploadHint="Clique para selecionar um documento"
              allowedFormats={['pdf']}
              currentFile={formData.file}
            />
          </div>
        </div>
      )}
      <StandardButton
        size="w-[25%]"
        disabled={Object.values(formData).every((value) => value === '')}
        onClick={handleSave}
      >
        {isLoading ? <span className="loading loading-dots"></span> : 'Salvar'}
      </StandardButton>
    </div>
  )
}

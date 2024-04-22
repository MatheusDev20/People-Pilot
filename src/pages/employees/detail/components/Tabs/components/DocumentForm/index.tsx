/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable react/jsx-key */
import { StandardButton } from '@/components/Buttons/Standard'
import { CustomInput, CustomSelect } from '@/components/Inputs'
import { documentMappers } from '@/utils/mappers/documents'
import { useState } from 'react'

export const DocumentForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    type: '',
    metadaData: {} as Record<string, string>,
  })

  const mapper = formData.type
    ? documentMappers[formData.type.toLocaleLowerCase()]
    : []

  const handleMetadata = (e: any): void => {
    const { value, name } = e.target

    setFormData({
      ...formData,
      metadaData: {
        ...formData.metadaData,
        [name]: value,
      },
    })
  }

  const handleType = (e: any): void => {
    setFormData({ ...formData, type: e.target.value, metadaData: {} })
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
                  value={formData.metadaData[k]}
                  onChange={handleMetadata}
                  wSize="large"
                  placeholder={`${label[k as keyof typeof label]}...`}
                  error={null}
                />
              )
            })}
          </div>
          <div className="flex-1 flex items-center p-8">FLEX 1</div>
        </div>
      )}
      <StandardButton
        size="w-[25%]"
        disabled={Object.values(formData).every((value) => value === '')}
      >
        Salvar
      </StandardButton>
    </div>
  )
}

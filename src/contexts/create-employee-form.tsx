/* eslint-disable @typescript-eslint/consistent-type-assertions */
import {
  type StepOneData,
  type StepThreeData,
  type StepTwoData,
} from '../@types/employees'
import React, { createContext, useContext, useMemo, useState } from 'react'

export interface ContextData {
  stepOne: StepOneData
  stepTwo: StepTwoData
  stepThree: StepThreeData
}

interface ContextProps {
  formData: ContextData
  setFormData: React.Dispatch<React.SetStateAction<ContextData>>
}

type StepKeys = keyof ContextData
export type StepValues = ContextData[StepKeys]

export const CreateEmployeeForm = createContext<ContextProps | null>(null)

interface Props {
  children: React.ReactNode
}
const CreateEmployeeFormProvider: React.FC<Props> = ({ children }: Props) => {
  const [formData, setFormData] = useState<ContextData>({
    stepOne: {
      name: '',
      birthDate: '',
      address: '',
      email: '',
      lastName: '',
      phone: '',
    },
    stepTwo: {
      department: '',
      hireDate: new Date().toLocaleDateString('pt-BR'),
      position: '',
    },
    stepThree: {
      avatar: null,
    },
  } as ContextData)

  // Use to memoized the object to avoid unecessary re-renders
  const contextValue = useMemo(
    () => ({
      formData,
      setFormData,
    }),
    [formData, setFormData],
  )

  return (
    <CreateEmployeeForm.Provider value={contextValue}>
      {children}
    </CreateEmployeeForm.Provider>
  )
}

const useCreateEmployeeForm = (): ContextProps => {
  const context = useContext(CreateEmployeeForm)
  if (context == null) {
    throw new Error('useModalContext must be used within a provider')
  }
  return context
}

export { CreateEmployeeFormProvider, useCreateEmployeeForm }

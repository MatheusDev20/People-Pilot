import React, { useRef } from 'react'
import { Stepper } from './components/Stepper'
import { CreateEmployeeFormProvider } from '../../../contexts/create-employee-form'
import { CustomDialog } from '../../../components/Dialog'

export default function CreateEmployeePage(): React.JSX.Element {
  const ref = useRef<HTMLDialogElement>(null)
  const onOpenModal = (): void => {
    ref.current?.showModal()
  }
  return (
    <CreateEmployeeFormProvider>
      <main className="flex flex-col p-8">
        <h1 className="text-sm md:text-3xl font-semibold">New Employee</h1>
        <button className="btn" onClick={onOpenModal}>
          Abrir modal
        </button>
        <CustomDialog ref={ref} />
        <div className="flex mt-8">
          <Stepper />
        </div>
      </main>
    </CreateEmployeeFormProvider>
  )
}

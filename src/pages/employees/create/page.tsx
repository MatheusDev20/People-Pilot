import React from 'react'
import { Stepper } from './components/Stepper'
import { CreateEmployeeFormProvider } from '../../../contexts/create-employee-form'

export default function CreateEmployeePage(): React.JSX.Element {
  return (
    <main className="flex flex-col p-8">
      <h1 className="text-sm md:text-3xl font-semibold">New Employee</h1>

      <div className="flex mt-8">
        <CreateEmployeeFormProvider>
          <Stepper />
        </CreateEmployeeFormProvider>
      </div>
    </main>
  )
}

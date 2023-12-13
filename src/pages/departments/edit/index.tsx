// import { useParams } from 'react-router-dom'

import { useLocation } from 'react-router-dom'
import { type CreateDepartmentForm, type Department } from '../../../@types'
import { CustomInput, CustomSelect } from '../../../components/Inputs'
import { StandardButton } from '../../../components/Buttons/Standard'
import { useManagers } from '../../../hooks/managers'
import { useState } from 'react'

export const EditDepartmentPage = (): JSX.Element => {
  const { state } = useLocation()
  const department = state.department as Department
  const { managers } = useManagers()

  const [formData, setFormData] = useState<CreateDepartmentForm>({
    description: department.description,
    managerEmail: department.manager.email,
    name: department.name,
  })

  return (
    <div className="p-8">
      <h1 className="text-sm md:text-3xl font-semibold">
        Edit Department
        <span className="ml-3 text-twitter-blue-main">{department.name}</span>
      </h1>

      <div className="flex flex-col w-full gap-11 items-center justify-center mt-3">
        <div className="w-[50%]">
          <CustomInput
            name="name"
            label="New Department Name"
            // onChange={handleChange}
            value={formData.name}
            placeholder="Marketing..."
            wSize="medium"
            error={null}
          />
          <CustomInput
            name="description"
            label="New Short Description"
            value={formData.description}
            // onChange={handleChange}
            placeholder="Handle all the billings and and employees Incomes..."
            wSize="medium"
            error={null}
          />
          <CustomSelect
            // onChange={handleSelectChange}
            name="managerEmail"
            label="New Manager"
            wSize="medium"
            placeholder="Choose the manager email to assign the department ..."
            error={null}
            options={managers}
          />
        </div>
        <StandardButton size="w-[25%]">Edit</StandardButton>
      </div>
    </div>
  )
}

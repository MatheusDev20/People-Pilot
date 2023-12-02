import React from 'react'
import { AddEmployeeButton } from '../Buttons/buttons'
import { CustomInput } from '../../../../components/Inputs'

type Props = {
  foundedEmployees: number
}

export const Header = ({ foundedEmployees }: Props): React.JSX.Element => {
  return (
    <header className="items-center gap-6 w-full p-8 border border-red-400 flex justify-between">
      {/* Filter and Total of employees */}
      <div className="w-full border">
        <CustomInput
          type="text"
          label="Search"
          error={null}
          placeholder="Ryan Howard..."
          wSize="large"
        />
      </div>
      <div className="flex gap-20 p-2 items-center justify-center place-self-end w-[30%]">
        <AddEmployeeButton />
      </div>
      {/* Rest of infos and actions that i dont know Yet */}
    </header>
  )
}

import React from 'react'
import { AddEmployeeButton } from '../Buttons/buttons'

type Props = {
  foundedEmployees: number
}

export const Header = ({ foundedEmployees }: Props): React.JSX.Element => {
  return (
    <header className="flex md:justify-between items-center flex-col gap-6 md:flex-row w-full p-8">
      {/* Filter and Total of employees */}
      {/* <span>{user.name}</span> */}
      <div className="flex gap-20 p-2 items-center w-full justify-between">
        <div className="justify-self-end flex gap-12">
          <span>Input de pesquisa</span>
          <AddEmployeeButton />
        </div>
      </div>
      {/* Rest of infos and actions that i dont know Yet */}
    </header>
  )
}

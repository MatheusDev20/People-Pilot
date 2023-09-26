
import React from 'react'
import { AddEmployeeButton, FilterButton } from '../Buttons/buttons'

export const Header = (): React.JSX.Element => {
  return (
    <header className="flex md:justify-between items-center flex-col gap-6 md:flex-row w-full p-8">
      {/* Filter and Total of employees */}
      {/* <span>{user.name}</span> */}
      <div className="flex gap-20 p-2 items-center w-full md:w-1/2 justify-between">
        <span className="text-sm md:text-2xl text-blue-800 whitespace-nowrap md:whitespace-normal md:mt-0 mt-4">
          42 Employees
        </span>
        <div className="justify-self-end w-1/2">
          <FilterButton />
        </div>
      </div>

      {/* Rest of infos and actions that i dont know Yet */}
      <div className="flex gap-20 md:mr-12 mr-0 p-2 items-center justify-between w-full md:w-1/2">
        <div className="flex gap-4 md:ml-0">
          <span className="text-sm  font-semibold text-blue-800 md:text-lg">
            15
          </span>
          <p className="font-semibold text-sm md:text-lg">Selected</p>
        </div>
        <div className="justify-self-end w-1/2">
          <AddEmployeeButton />
        </div>
      </div>
    </header>
  )
}

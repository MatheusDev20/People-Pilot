import { BiFilterAlt } from 'react-icons/bi'
import React from 'react'
import { Link } from 'react-router-dom'
import { PlusUser } from '../../../../assets/svgs/plus'

export const FilterButton = (): React.JSX.Element => {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:border-transparent hover:bg-blue-500 h-12 md:h-10 dark:bg-twitter-blue-main dark:text-white dark:hover:bg-twitter-blue-secondary">
      <div className="flex gap-2 items-center">
        <BiFilterAlt size={20} />
        <span className="text-sm tracking-wide">Filter</span>
      </div>
    </button>
  )
}

export const AddEmployeeButton = (): React.JSX.Element => {
  return (
    <Link className="w-full h-12" to="/app/employee/create">
      <button className="btn bg-twitter-blue-main w-full text-white hover:bg-twitter-blue-secondary">
        <div className="flex gap-2 items-center">
          <PlusUser />
          <span className="md:text-sm hidden md:flex">NEW EMPLOYEE</span>
        </div>
      </button>
    </Link>
  )
}

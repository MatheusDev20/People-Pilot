import { BiFilterAlt } from 'react-icons/bi'
import React from 'react'
import { BsPersonPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

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
    <Link to="/app/employee/create">
      <div className="w-full">
        <button
          className="
           text-blue-800 border border-solid
          border-blue-800 px-4 py-2 rounded
          hover:border-transparent hover:text-white hover:bg-blue-600
          transition duration-300 ease-in-out w-28 md:w-[100%] items-center flex justify-center mr-12 md:mr-0
          dark:bg-twitter-blue-main dark:text-white dark:hover:bg-twitter-blue-secondary"
        >
          <div className="flex gap-2 items-center">
            <BsPersonPlusFill className="hidden md:flex" size={20} />
            <span className="text-xs md:text-sm tracking-wide">
              Register new employee
            </span>
          </div>
        </button>
      </div>
    </Link>
  )
}

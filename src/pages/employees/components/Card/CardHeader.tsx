import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

interface CardLabelProps {
  employeeStatus: 'Not Active' | 'Active'
}

export const CardHeader = ({
  employeeStatus,
}: CardLabelProps): React.JSX.Element => {
  return (
    <header className="flex justify-between items-center">
      <input
        type="checkbox"
        checked={true}
        className="checkbox checkbox-info md:w-5 md:h-5"
      />
      <div className="flex gap-4 items-center">
        {/* <CardLabel status={employeeStatus} /> */}
        <span className="badge bg-success text-white p-2">
          {employeeStatus}
        </span>
        <BsThreeDots className="cursor-pointer hover:text-blue-600 dark:text-white" />
      </div>
    </header>
  )
}

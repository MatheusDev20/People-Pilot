import React from 'react'

interface CardLabelProps {
  employeeStatus: 'Not Active' | 'Active'
}

export const CardHeader = ({
  employeeStatus,
}: CardLabelProps): React.JSX.Element => {
  return (
    <header className="flex justify-end p-3">
      {/* <CardLabel status={employeeStatus} /> */}
      <div className="w-[20%] flex gap-4 items-center">
        <span className="badge bg-success text-white p-2">
          {employeeStatus}
        </span>
      </div>
    </header>
  )
}

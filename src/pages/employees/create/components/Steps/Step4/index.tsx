import React from 'react'

type Props = {
  employeeId: string
}
export const StepFour = ({ employeeId }: Props): React.JSX.Element => {
  return (
    <div className="flex items-center justify-center w-full p-6">
      <h3 className="dark:text-white">New Employee Registered</h3>
      <span className="text-green-500">{employeeId}</span>
    </div>
  )
}

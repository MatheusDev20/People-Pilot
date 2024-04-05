import React from 'react'
import fallBack from '@/assets/imgs/fake-avatar1.png'
interface Props {
  employeeName: string
  employeePosition: string
  employeeAvatar: string
}
export const CardInfo = ({
  employeeName,
  employeePosition,
  employeeAvatar,
}: Props): React.JSX.Element => {
  return (
    <div className="max-w-full flex flex-col p-2 items-center">
      <main className="flex flex-col gap-2">
        <img
          src={employeeAvatar ?? fallBack}
          alt="Employee Avatar"
          className="self-center rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-24 md:h-24 object-cover"
        />
        <div className="flex flex-col items-center p-4 dark:text-white">
          <span className="sm:text-sm md:text-lg font-semibold">
            {employeeName}
          </span>
          <span className="self-center sm:text-xs  md:text-sm text-gray-400 font-semibold">
            {employeePosition}
          </span>
        </div>
      </main>
    </div>
  )
}

import React from 'react'
import GreenMark from '../../../../../../assets/imgs/green-mark.png'
import { StandardButton } from '../../../../../../components/Buttons/Standard'
import { useNavigate } from 'react-router-dom'
type Props = {
  employeeId: string
}
export const StepFour = ({ employeeId }: Props): React.JSX.Element => {
  const navigate = useNavigate()

  const pushToDetails = (): void => {
    navigate(`/app/employee/detail/${employeeId}`)
  }
  return (
    <div className="flex items-center justify-center flex-col gap-12 w-full p-6 border mt-12">
      <img src={GreenMark} className="h-28" />
      <h1 className="dark:text-white text-2xl">
        Employee{' '}
        <span className="text-green-500 text-md ml-2 mr-2">{employeeId}</span>
        registered with success
      </h1>
      <StandardButton
        onClick={() => {
          pushToDetails()
        }}
      >
        See Details
      </StandardButton>
    </div>
  )
}

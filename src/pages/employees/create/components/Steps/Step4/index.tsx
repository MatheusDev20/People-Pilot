import React from 'react'
import GreenMark from '../../../../../../assets/imgs/green-mark.png'
import { StandardButton } from '../../../../../../components/Buttons/Standard'
import { useNavigate } from 'react-router-dom'
import { useCreateEmployeeForm } from '../../../../../../contexts/create-employee-form'
type Props = {
  employeeId: string
}
export const StepFour = ({ employeeId }: Props): React.JSX.Element => {
  const navigate = useNavigate()
  const {
    formData: {
      stepOne: { name },
    },
  } = useCreateEmployeeForm()

  const pushToDetails = (): void => {
    navigate(`/app/employee/detail/${employeeId}`)
  }
  return (
    <div className="flex items-center justify-center flex-col gap-12 w-full p-6 mt-12">
      <img src={GreenMark} className="h-12" />
      <h2 className="dark:text-white text-2xl">
        Employee{' '}
        <span className="text-green-500 text-md ml-2 mr-2">{name}</span>
        Created with sucess
      </h2>
      <p className="text-white">
        Registration ID:{' '}
        <span className="text-twitter-blue-main">{employeeId}</span>
      </p>
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

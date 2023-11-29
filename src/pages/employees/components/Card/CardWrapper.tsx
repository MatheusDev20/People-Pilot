import { type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export const CardWrapper = ({
  children,
  id,
}: {
  children: ReactNode
  id: string
}): JSX.Element => {
  const navigate = useNavigate()

  const navigateDetail = (): void => {
    navigate(`/app/employee/detail/${id}`)
  }
  return (
    <div
      onClick={navigateDetail}
      className="max-w-full border-solid dark:border-darkGray-600 border-2 flex flex-col p-2 gap-6 bg-base-300 hover:dark:border-twitter-blue-secondary transition ease-in-out delay-75 "
    >
      {children}
    </div>
  )
}

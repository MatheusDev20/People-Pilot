/* eslint-disable @typescript-eslint/no-floating-promises */

import { CardList } from './components/CardList'
import { Header } from './components/Header'

import { useEmployeeList } from '../../hooks/employee-list'
import { LoadingDots } from '../../components/Loading/Dots'

export default function EmployeePage(): JSX.Element {
  const { data, isLoading, isError } = useEmployeeList()

  if (isLoading)
    return (
      <div className="flex flex-col md:flex-col sm:h-full items-center justify-center max-w-full">
        <LoadingDots />
      </div>
    )

  return (
    <>
      {isError ? (
        <h1>Deu erro fi</h1>
      ) : (
        <div className="flex flex-col md:flex-col sm:h-full max-w-full">
          <Header foundedEmployees={data.length} />
          <CardList list={data} />
        </div>
      )}
    </>
  )
}

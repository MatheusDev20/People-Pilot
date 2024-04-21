/* eslint-disable @typescript-eslint/no-floating-promises */
import { CardList } from './components/CardList'
import { Header } from './components/Header'
import { LoadingDots } from '../../components/Loading/Dots'
import { useEffect, useState } from 'react'
import { NotFound } from '../../components/Exceptions/NotFound'
import { Pagination } from './components/Pagination'
import { useQuery } from '@tanstack/react-query'
import { getEmployeeList } from '../../api/employee/employee.query'
import { type GetEmployeeListParams } from '../../@types/employees'

export default function EmployeePage(): JSX.Element {
  const [search, setSearch] = useState<string>('')
  const [debounce, setDebounce] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)

  // const { data, isLoading, isError } = useEmployeeList({ page: currentPage })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }
  const params: GetEmployeeListParams = {
    limit: 8,
    page: currentPage,
    role: 'employee',
  }

  const { isLoading, isError, data } = useQuery({
    queryKey: ['employeeList', params],
    queryFn: async ({ queryKey }) =>
      await getEmployeeList(queryKey[1] as GetEmployeeListParams),
  })

  const filteredData = !data
    ? []
    : data.filter((employee) => employee.name.includes(debounce))

  useEffect(() => {
    const tId = setTimeout(() => {
      setDebounce(search)
    }, 250)
    return () => {
      clearTimeout(tId)
    }
  }, [search, 250])

  if (isLoading)
    return (
      <div className="flex flex-col md:flex-col sm:h-full items-center justify-center mt-12 max-w-full">
        <LoadingDots size="w-24" />
      </div>
    )

  return (
    <>
      {isError ? (
        <h1>Error</h1>
      ) : (
        <div className="flex flex-col md:flex-col sm:h-full max-w-full">
          <Header handleChange={handleChange} />
          {!filteredData.length ? (
            <NotFound />
          ) : (
            <CardList list={filteredData} />
          )}
          {data.length !== 0 && (
            <Pagination
              setCurrentPage={setCurrentPage}
              page={currentPage}
              currentData={data}
            />
          )}
        </div>
      )}
    </>
  )
}

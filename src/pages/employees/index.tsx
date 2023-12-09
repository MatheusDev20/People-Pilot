/* eslint-disable @typescript-eslint/no-floating-promises */
import { CardList } from './components/CardList'
import { Header } from './components/Header'
import { useEmployeeList } from '../../hooks/employee-list'
import { LoadingDots } from '../../components/Loading/Dots'
import { useEffect, useState } from 'react'
import { NotFound } from '../../components/Exceptions/NotFound'

export default function EmployeePage(): JSX.Element {
  const [search, setSearch] = useState<string>('')
  const [debounce, setDebounce] = useState<string>('')

  const { data, isLoading, isError } = useEmployeeList()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const filteredData = data.filter((employee) =>
    employee.name.includes(debounce),
  )

  useEffect(() => {
    const tId = setTimeout(() => {
      setDebounce(search)
    }, 500)
    return () => {
      clearTimeout(tId)
    }
  }, [search, 500])

  if (isLoading)
    return (
      <div className="flex flex-col md:flex-col sm:h-full items-center justify-center max-w-full">
        <LoadingDots size="w-24" />
      </div>
    )

  return (
    <>
      {isError ? (
        <h1>Deu erro fi</h1>
      ) : (
        <div className="flex flex-col md:flex-col sm:h-full max-w-full">
          <Header handleChange={handleChange} />
          {!filteredData.length ? (
            <NotFound />
          ) : (
            <CardList list={filteredData} />
          )}
        </div>
      )}
    </>
  )
}

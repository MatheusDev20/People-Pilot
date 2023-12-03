/* eslint-disable @typescript-eslint/no-floating-promises */
import NotFoundPNG from '../../assets/imgs/404.png'
import { CardList } from './components/CardList'
import { Header } from './components/Header'
import { useEmployeeList } from '../../hooks/employee-list'
import { LoadingDots } from '../../components/Loading/Dots'
import { useEffect, useState } from 'react'

export default function EmployeePage(): JSX.Element {
  const [search, setSearch] = useState<string>('')
  const [debounce, setDebounce] = useState<string>('')

  const { data, isLoading, isError } = useEmployeeList()
  console.log(data)
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
        <LoadingDots />
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
            <div className="flex items-center justify-center">
              <span className="text-4xl dark:text-white">
                Nothing found here
              </span>
              <img className="h-96 w-96 object-cover" src={NotFoundPNG} />
            </div>
          ) : (
            <CardList list={filteredData} />
          )}
        </div>
      )}
    </>
  )
}

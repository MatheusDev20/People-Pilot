import { type Department } from '../../@types'
import { getKeysOf } from '../../utils'
import { Table } from '../../components/Table'
import { useQuery } from '@tanstack/react-query'
import { listDepartments } from '../../api/departments'
import { LoadingDots } from '../../components/Loading/Dots'
import { CustomInput } from '../../components/Inputs'
import { PlusButton } from '../employees/components/Buttons/buttons'
import { BuildingIcon } from '../../assets/svgs/building'
import { useState, type ChangeEvent } from 'react'

export const DepartmentsPage = (): JSX.Element => {
  const [search, setSearch] = useState<string>('')
  const { isLoading, data, error } = useQuery({
    queryKey: ['departments'],
    queryFn: listDepartments,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
  }

  const tableHeaders = getKeysOf<Department>(data ? data[0] : undefined)

  if (isLoading)
    return (
      <div className="flex flex-col md:flex-col sm:h-full items-center justify-center max-w-full">
        <LoadingDots />
      </div>
    )
  const filteredData = data?.filter((department) =>
    department.name.includes(search),
  )

  return (
    <>
      <header className="items-center md:gap-6 w-full p-8 flex justify-between">
        <CustomInput
          type="text"
          label="Search for department name ..."
          error={null}
          onChange={handleChange}
          placeholder="Sales..."
          wSize="large"
        />
        <div className="flex gap-20 p-2 items-center justify-center place-self-end w-[30%]">
          <PlusButton
            text="NEW DEPARTMENT"
            icon={<BuildingIcon />}
            routeTo="/app/departments/create"
          />
        </div>
      </header>
      <div className="overflow-x-auto p-5 flex items-center justify-center border-solid">
        {!error && filteredData && (
          <Table
            tableData={{ head: tableHeaders, rows: filteredData }}
            editAction={() => {
              console.log('HI EDIT')
            }}
            deleteAction={() => {
              console.log('HI DELETE')
            }}
          />
        )}
      </div>
    </>
  )
}

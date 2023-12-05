import { type Department } from '../../@types'
import { getKeysOf } from '../../utils'
import { Table } from '../../components/Table'

export const DepartmentsPage = (): JSX.Element => {
  const departments: Department[] = [
    {
      name: 'IT',
      manager: 'John Doe',
      status: 'Active',
      activeEmployees: 14,
    },
    {
      name: 'Sales',
      manager: 'Michael Scott',
      status: 'Active',
      activeEmployees: 14,
    },
  ]
  const tableHeaders = getKeysOf<Department>(departments[0])

  return (
    <div className="overflow-x-auto p-5 border flex items-center justify-center border-solid">
      <Table tableData={{ head: tableHeaders, rows: departments }} />
    </div>
  )
}

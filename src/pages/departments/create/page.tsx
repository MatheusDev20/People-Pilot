import { useQuery } from '@tanstack/react-query'
import { CustomInput, CustomSelect } from '../../../components/Inputs'
import { getEmployeeList } from '../../../api/employee'
import { type GetEmployeeListParams } from '../../../@types/employees'

export const CreateDepartmentPage = (): JSX.Element => {
  const params: GetEmployeeListParams = {
    role: 'managers',
  }
  const { data } = useQuery({
    queryKey: ['managersList', params],
    queryFn: async ({ queryKey }) => {
      const managers = await getEmployeeList(
        queryKey[1] as GetEmployeeListParams,
      )
      return managers.map((manager) => ({
        data: manager.email,
        img: manager.avatar,
      }))
    },
  })

  return (
    <div className="p-8">
      {/* Header */}
      <h1 className="text-sm md:text-3xl font-semibold">New Department</h1>

      {/* Form */}
      <div className="flex flex-col w-full items-center justify-center mt-3">
        <div className="w-[50%]">
          <CustomInput
            label="Department Name"
            placeholder="Marketing..."
            wSize="medium"
            error={null}
          />
          <CustomInput
            label="Short Description"
            placeholder="Handle all the billings and and employees Incomes..."
            wSize="medium"
            error={null}
          />
          <CustomSelect
            label="Manager Email"
            wSize="medium"
            error={null}
            options={data ?? []}
          />
        </div>
      </div>
    </div>
  )
}

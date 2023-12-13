import { useQuery } from '@tanstack/react-query'
import { type GetEmployeeListParams } from '../@types/employees'
import { getEmployeeList } from '../api/employee'

type Manager = {
  img: string
  data: string
}

type Hook = {
  managers: Manager[]
}

export const useManagers = (): Hook => {
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
      })) as Manager[]
    },
  })

  return {
    managers: data ?? [],
  }
}

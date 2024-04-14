/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { type QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import {
  excludeDepartment,
  listDepartments,
  postDepartment,
  updateDepartment,
} from './departments.query'
import { type ToastData } from '@/hooks/toast'

type Props = {
  showToast: (data: ToastData) => void
  ref: React.RefObject<HTMLDialogElement>
  client: QueryClient
}

export const useAddDepartment = ({ showToast, ref, client }: Props) => {
  return useMutation({
    mutationFn: postDepartment,
    onError: async (error: any) => {
      showToast({
        message: 'Falha na criação, tente novamente',
        type: 'error',
        duration: 5000,
      })
      throw error
    },
    onSuccess: async () => {
      client.invalidateQueries({ queryKey: ['departments'] })
      ref.current?.close()
      showToast({
        message: 'Departamento Adicionado com sucesso!',
        type: 'success',
        duration: 5000,
      })
    },
  })
}

export const useDepartmentsList = () => {
  return useQuery({
    queryKey: ['departments'],
    queryFn: listDepartments,
  })
}

export const useEditDepartment = ({ showToast, ref, client }: Props) => {
  return useMutation({
    mutationFn: updateDepartment,
    onError: async (error: any) => {
      showToast({
        message: 'Failed to perform update, try again later',
        type: 'error',
        duration: 5000,
      })
      throw error
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['departments'] })
      ref.current?.close()
      showToast({
        message: 'Dados atualizados com sucesso!',
        type: 'success',
        duration: 5000,
      })
    },
  })
}

export const useExcludeDepartment = ({ client }: Partial<Props>) => {
  return useMutation({
    mutationFn: excludeDepartment,
    onSuccess: () => {
      client?.invalidateQueries({ queryKey: ['departments'] })
    },
  })
}

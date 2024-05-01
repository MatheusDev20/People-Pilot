/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { type QueryClient, useMutation } from '@tanstack/react-query'
import { postEmployeeDocument } from './employee.query'
import { type ToastData } from '@/hooks/toast'

type Props = {
  showToast: (data: ToastData) => void
  ref: React.RefObject<HTMLDialogElement>
  client: QueryClient
  reset: () => void
}

export const usePostDocument = ({ client, ref, showToast, reset }: Props) => {
  return useMutation({
    mutationFn: postEmployeeDocument,
    onSuccess: async () => {
      reset()
      client.invalidateQueries({ queryKey: ['employeeDetail'] })
      ref.current?.close()
      showToast({
        message: 'Documento adicionado com sucesso!',
        type: 'success',
        duration: 5000,
      })
    },
  })
}

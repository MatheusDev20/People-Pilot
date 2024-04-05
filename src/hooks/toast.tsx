import { timeout } from '@/utils'
import { useState } from 'react'

export type ToastData = {
  message: string
  type: 'success' | 'warning' | 'error' | ''
  duration: number | null | 'permanent'
}
type Props = {
  toast: ToastData
  showToast: (toast: ToastData) => Promise<void>
}

export const useToast = (): Props => {
  const [toast, setToast] = useState<ToastData>({
    message: '',
    type: '',
    duration: null,
  })

  const showToast = async (toast: ToastData): Promise<void> => {
    setToast(toast)
    if (toast.duration === 'permanent') return
    await timeout(toast.duration ?? 5000)
    closeToast()
  }

  const closeToast = (): void => {
    setToast({
      message: '',
      type: '',
      duration: null,
    })
  }

  return {
    showToast,
    toast,
  }
}

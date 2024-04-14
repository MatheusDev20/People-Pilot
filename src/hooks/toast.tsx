import { timeout } from '@/utils'
import { useState } from 'react'

export type ToastData = {
  message: string
  type: 'success' | 'warning' | 'error' | ''
  duration: number | null | 'permanent'
}
type Props = {
  toast: ToastData
  showToast: (toast: ToastData) => void
}

export const useToast = (): Props => {
  const [toast, setToast] = useState<ToastData>({
    message: '',
    type: '',
    duration: null,
  })

  const showToast = (toast: ToastData): void => {
    setToast(toast)
    if (toast.duration === 'permanent') return
    timeout(toast.duration ?? 5000)
      .then(() => {
        closeToast()
      })
      .catch(() => {
        closeToast()
      })
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

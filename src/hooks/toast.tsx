import { useState } from 'react'
import { timeout } from '../utils'

type ToastData = {
  message: string
  type: 'success' | 'warning' | 'error' | ''
}

type Props = {
  toast: ToastData
  showToast: (toast: ToastData) => Promise<void>
}

export const useToast = (): Props => {
  const [toast, setToast] = useState<ToastData>({
    message: '',
    type: '',
  })

  const showToast = async (toast: ToastData): Promise<void> => {
    setToast(toast)

    // Default time to toast?
    await timeout(5000)
    closeToast()
  }

  const closeToast = (): void => {
    setToast({
      message: '',
      type: '',
    })
  }

  return {
    showToast,
    toast,
  }
}

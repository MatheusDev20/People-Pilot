import { useState } from 'react'
import { type Dialog } from '../@types'

type DialogHook = {
  dialog: Dialog
  show: (dialog: Dialog) => void
  hideDialog: () => void
}

export const useDialog = (
  ref: React.RefObject<HTMLDialogElement>,
): DialogHook => {
  const [dialog, setDialog] = useState<Dialog>({
    msg: '',
    title: '',
    type: '',
  })

  const show = (dialog: Dialog): void => {
    ref.current?.showModal()
    setDialog(dialog)
  }

  const hideDialog = (): void => {
    setDialog({
      msg: '',
      type: '',
      title: '',
      action: undefined,
      createdId: '',
    })
    ref.current?.close()
  }
  return {
    dialog,
    show,
    hideDialog,
  }
}

/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { type Dialog } from '../../../@types'
import { getIcon, getTextClass } from '../utils'
import { StandardButton } from '../../Buttons/Standard'
import { useNavigate } from 'react-router-dom'

type Props = {
  dialogData: Dialog
  redirectUrl?: string
  reset?: any
}

export const CustomDialog = forwardRef<HTMLDialogElement, Props>(
  (props, ref) => {
    const { dialogData, redirectUrl, reset } = props
    const { msg, title, type } = dialogData

    const navigate = useNavigate()

    const redirect = (): void => {
      if (!redirectUrl) return
      navigate(redirectUrl)
    }

    const closeAndReset = (): void => {
      if (reset) reset()
    }
    return (
      <dialog className="modal" ref={ref}>
        <div className="modal-box w-11/12 max-w-2xl">
          <header className="flex items-center gap-2">
            {getIcon(type)}
            <span className={getTextClass(type)}>{title}</span>
          </header>
          <div className="flex items-center justify-center flex-col mt-5">
            {msg}
          </div>
          <div className="modal-action gap-4">
            {type === 'success' && (
              <StandardButton onClick={redirect}>See Details</StandardButton>
            )}

            <form method="dialog">
              <button onClick={closeAndReset} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    )
  },
)

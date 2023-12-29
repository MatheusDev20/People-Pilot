/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import {
  type DialogActionState,
  type DialogAction,
  type Dialog,
} from '../../@types'
import { getIcon, getTextClass } from './utils'
import { StandardButton } from '../Buttons/Standard'
import { useNavigate } from 'react-router-dom'
import { CreatedMessage } from './components/CreatedEntity'
import { LoadingDots } from '../Loading/Dots'

type Props = {
  dialogData: Dialog
  action?: DialogAction
  actionState?: DialogActionState
  redirectUrl?: string
  reset?: any
}

export const CustomDialog = forwardRef<HTMLDialogElement, Props>(
  (props, ref) => {
    const { dialogData, action, actionState, redirectUrl, reset } = props
    const { msg, title, type, createdId } = dialogData

    const navigate = useNavigate()

    const redirect = (): void => {
      if (!redirectUrl) return
      navigate(redirectUrl)
    }

    const closeAndReset = (): void => {
      if (reset) reset()
    }
    console.log(props)
    return (
      <dialog className="modal" ref={ref}>
        <div className="modal-box w-11/12 max-w-2xl">
          <header className="flex items-center gap-2">
            {actionState?.success ? (
              <>
                <span className={getTextClass('success')}>
                  {/* TODO: Dynamic?? */}
                  {action?.successMsg ?? 'Success!'}
                </span>
                {getIcon('success')}
              </>
            ) : (
              <>
                {getIcon(type)}
                <span className={getTextClass(type)}>{title}</span>
              </>
            )}
          </header>
          {actionState?.loading ? (
            <div className="p-3">
              <LoadingDots size="w-14" />
            </div>
          ) : (
            <div className="flex items-center justify-center flex-col">
              {!actionState?.success && (
                <p className="py-4 mt-3 text-xl">{msg}</p>
              )}{' '}
              {createdId && <CreatedMessage createdId={createdId} />}
            </div>
          )}

          <div className="modal-action gap-4">
            {createdId && (
              <StandardButton onClick={redirect}>See Details</StandardButton>
            )}

            {action?.type && !actionState?.success && (
              <StandardButton
                size="w-[20%]"
                onClick={action.cb}
                disabled={actionState?.loading}
              >
                {actionState?.loading ? (
                  <span className="loading w-4 loading-dots"></span>
                ) : (
                  action.type.toUpperCase()
                )}
              </StandardButton>
            )}

            <form method="dialog">
              <button onClick={redirect || closeAndReset} className="btn">
                Finish
              </button>
            </form>
          </div>
        </div>
      </dialog>
    )
  },
)

/* eslint-disable react/display-name */
import { forwardRef, type ReactNode } from 'react'
import { CircleBorder } from '../CircleBorder'
import { CloseIcon } from '@/assets/svgs/close'

type Props = {
  id: string
  action: string
  children: ReactNode
  ref: string
}

export const GenericModal = forwardRef<HTMLDialogElement, Props>(
  (props, ref) => {
    const { id, action, children } = props
    return (
      <dialog id={`modal_${id}`} className="modal p-8" ref={ref}>
        <div className="modal-box w-11/12 max-w-5xl p-12">
          <header className="flex justify-between">
            <h3 className="font-bold text-lg">{action}</h3>
            <form method="dialog">
              <button>
                <CircleBorder
                  borderColor="neutral"
                  borderHover="twitter-blue-main"
                >
                  <CloseIcon classStyles="w-6 h-6" />
                </CircleBorder>
              </button>
            </form>
          </header>
          <div className="divider w-[100%] mt-3 mb-6 m-auto divider-primary" />
          {children}
        </div>
      </dialog>
    )
  },
)

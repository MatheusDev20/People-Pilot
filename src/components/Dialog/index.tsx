/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { type Feedback } from '../../@types'

type Props = {
  feedback?: Feedback
}

export const CustomDialog = forwardRef<HTMLDialogElement, Props>(
  (props, ref) => {
    const { feedback } = props

    return (
      <dialog className="modal" ref={ref}>
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{feedback?.title}</h3>
          <p className="py-4">{feedback?.msg}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    )
  },
)

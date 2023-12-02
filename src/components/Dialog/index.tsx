/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { type Feedback } from '../../@types'
import { getIcon, getTextClass } from './utils'
import { StandardButton } from '../Buttons/Standard'
import { useNavigate } from 'react-router-dom'

type Props = {
  feedback: Feedback
}

export const CustomDialog = forwardRef<HTMLDialogElement, Props>(
  (props, ref) => {
    const { feedback } = props
    const navigate = useNavigate()
    const pushToDetails = (): void => {
      navigate(`/app/employee/detail/${feedback.createdId as string}`)
    }
    return (
      <dialog className="modal" ref={ref}>
        <div className="modal-box w-11/12 max-w-2xl">
          <header className="flex items-center gap-2">
            <span className={getTextClass(feedback)}>{feedback.title}</span>
            {getIcon(feedback)}
          </header>
          <div className="flex items-center justify-center flex-col">
            <p className="py-4 mt-3 text-xl">{feedback.msg}</p>
            {feedback.createdId && (
              <p>
                Registration ID:
                <span className="text-primary"> {feedback.createdId}</span>
              </p>
            )}
          </div>

          <div className="modal-action gap-4">
            {feedback.createdId && (
              <StandardButton onClick={pushToDetails}>
                See Details
              </StandardButton>
            )}

            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    )
  },
)

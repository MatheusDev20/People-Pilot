import { type Feedback } from '../../@types'
import { CheckIcon } from '../../assets/svgs/check'
import { Exclamation } from '../../assets/svgs/exclamation'

export const getTextClass = (feedback: Feedback): string => {
  const base = 'font-bold text-lg'

  switch (feedback.type) {
    case 'success':
      return 'text-success ' + base

    case 'error':
      return 'text-error ' + base

    default:
      return ''
  }
}

export const getIcon = (feedback: Feedback): JSX.Element => {
  switch (feedback.type) {
    case 'error':
      return <Exclamation />

    case 'success':
      return <CheckIcon />

    default:
      return <></>
  }
}

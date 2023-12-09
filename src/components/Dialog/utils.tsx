import { CheckIcon } from '../../assets/svgs/check'
import { Exclamation } from '../../assets/svgs/exclamation'
import { WarningIcon } from '../../assets/svgs/warning'

export const getTextClass = (
  type: 'success' | 'error' | 'warning' | '',
): string => {
  const base = 'font-bold text-lg'

  switch (type) {
    case 'success':
      return 'text-success ' + base

    case 'error':
      return 'text-error ' + base

    case 'warning':
      return 'text-warning ' + base

    default:
      return ''
  }
}

export const getIcon = (
  type: 'success' | 'error' | 'warning' | '',
): JSX.Element => {
  switch (type) {
    case 'error':
      return <Exclamation />

    case 'success':
      return <CheckIcon />

    case 'warning':
      return <WarningIcon />

    default:
      return <></>
  }
}

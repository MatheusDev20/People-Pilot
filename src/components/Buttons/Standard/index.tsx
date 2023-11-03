import { type ReactNode } from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  disabled?: boolean
}

export const StandardButton = ({
  children,
  disabled,
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        !disabled
          ? 'bg-twitter-blue-main hover:bg-twitter-blue-secondary  text-white font-semibold py-2 px-4 rounded cursor-pointer'
          : 'bg-gray-300 text-white font-semibold py-2 px-4 rounded cursor-pointer',
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

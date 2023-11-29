import { type ReactNode } from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  size?: string
  disabled?: boolean
}

export const StandardButton = ({
  children,
  disabled,
  size,
  ...rest
}: Props): JSX.Element => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        !disabled
          ? `btn-primary btn ${size} hover:bg-blue-400`
          : `btn-disabled btn ${size}`,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

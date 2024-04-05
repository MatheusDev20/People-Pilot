import clsx from 'clsx'
import React, { type ReactNode } from 'react'
interface Props {
  icon: ReactNode
  text: string
  hideText: boolean
}
export const NavItemR = ({
  icon,
  text,
  hideText,
}: Props): React.JSX.Element => {
  return (
    <button className="btn btn-ghost gap-4 w-full">
      {icon}
      <span
        className={clsx(
          'font-bold text-white',
          hideText ? 'hidden' : 'md:block',
        )}
      >
        {text}
      </span>
    </button>
  )
}

import clsx from 'clsx'
import React, { type ReactNode } from 'react'
interface Props {
  icon: ReactNode
  text: string
  hideText: boolean
}

export const NavItem = ({ icon, text, hideText }: Props): React.JSX.Element => {
  return (
    <div className="group flex items-center place-self-center gap-4 px-6 cursor-pointer w-full hover:bg-gray-200 dark:hover:bg-darkGray-600 h-8 rounded-xl">
      <span className="md:text-sm text-gray-500 dark:text-white group-hover:text-white group-hover:font-semibold">
        {icon}
      </span>
      <span
        className={clsx(
          'text-sm text-gray-500 dark:text-white group-hover:text-white group-hover:font-semibold hidden',
          hideText ? 'hidden' : 'md:block',
        )}
      >
        {text}
      </span>
    </div>
  )
}

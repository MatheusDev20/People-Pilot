import React from 'react'
import { Navigation } from './Navigation'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import clsx from 'clsx'

type Props = {
  isOpen: boolean
}

export const Sidebar = ({ isOpen }: Props): React.JSX.Element => {
  const sidebarClass = clsx(
    {
      'md:w-[200px]': isOpen,
      'w-[80px]': isOpen,
      'w-[100px]': !isOpen,
    },
    'border-solid border-neutral border-r-[0.4px] flex-col gap-2 justify-between bg-base-300 sticky top-0',
  )
  return (
    <aside className={sidebarClass}>
      <div className="relative">
        <header className="flex items-center justify-center py-12 ">
          <Link to="/app/employees">
            <Logo isOpen={isOpen} />
          </Link>
        </header>
        <Navigation isOpen={isOpen} />
      </div>
      {/* <ThemeSwitch /> */}
    </aside>
  )
}

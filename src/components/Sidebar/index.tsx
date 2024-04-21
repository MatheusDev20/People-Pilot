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
      'w-[70px]': !isOpen,
    },
    'transition-width duration-200 ease-in-out border-solid border-neutral flex items-center border-r-[0.4px] flex-col bg-base-300 sticky top-0',
  )
  return (
    <aside className={sidebarClass}>
      <div className="fixed">
        <header className="flex items-center justify-center p-3">
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

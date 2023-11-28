import React from 'react'
import { Navigation } from './Navigation'
import { ThemeSwitch } from './ThemeSwitch'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/theme'
import { Logo } from '../Logo'

export const Sidebar = (): React.JSX.Element => {
  const { theme } = useTheme()
  console.log('Theme na Sidebar', theme)

  return (
    <aside
      className={`flex md:w-[230px] w-[80px] border-solid dark:border-darkGray-600 border-r-[0.4px] dark:bg-darkGray-900 flex-col gap-2 h-screen justify-between fixed`}
    >
      <div className="relative">
        <header className="flex items-center justify-center py-12 ">
          <Link to="/app/home">
            <Logo size="text-2xl" />
          </Link>
        </header>
        <Navigation />
      </div>
      <ThemeSwitch />
    </aside>
  )
}

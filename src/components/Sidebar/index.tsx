'use client'
import React from 'react'
import logo from '../../assets/imgs/logo1.png'
import { Navigation } from './Navigation'
import { ThemeSwitch } from './ThemeSwitch'
import { Link } from 'react-router-dom'

export const Sidebar = (): React.JSX.Element => {
  return (
    <aside
      className={`flex md:w-[230px] w-[80px] border border-solid border-gray-200 flex-col gap-2 h-screen justify-between fixed`}
    >
      <div className="relative">
        <header className="flex items-center justify-center py-3">
          <Link to='/app/home'>
            <img src={logo} alt="KSX" className="place-self-center cursor-pointer" />
          </Link>
        </header>
        <Navigation />
      </div>
      <ThemeSwitch />
    </aside>
  )
}

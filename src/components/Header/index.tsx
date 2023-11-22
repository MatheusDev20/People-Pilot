/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import avatar from '../../assets/imgs/fake-avatar1.png'
import { useAuth } from '../../contexts/auth-context'

export const Header = (): React.JSX.Element => {
  const { user, signOut } = useAuth()

  return (
    <header className="flex justify-end p-4 dark:bg-darkGray-900 border-solid dark:border-darkGray-600 border-b-[0.4px]">
      {/* Logged user Avatar */}
      <div className="flex md:justify-normal">
        <div className="flex gap-8 items-center  pl-12 pr-12">
          <div className="flex gap-3 items-center">
            <img
              src={user?.avatar ?? avatar}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer ml-4"
              alt="me"
            />
            {/* Profile Avatar and Role */}
            <div className="flex-col gap-1 justify-center hidden md:flex">
              <span className="text-sm text-twitter-blue-main font-bold">
                {user?.name}
              </span>
              <span className="dark:text-white text-black font-semibold text-xs place-self-center">
                {user?.position}
              </span>
            </div>
          </div>
          {/* <div className="place-self-center">
            <MyDropdown />
          </div> */}
          {/* Logout Button */}
          <div className="flex gap-3">
            <span className="dark:text-white text-sm">Logout</span>
            <svg
              onClick={signOut}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 dark:text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}

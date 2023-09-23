

import React, { useState } from 'react'
import avatar from '../../assets/imgs/fake-avatar.jpg'
import { MyDropdown } from './Dropdown'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsChatLeftText } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { ActiveUser } from '../../@types/employees'

export const Header = ({ userId }: { userId: string }): React.JSX.Element => {
  const [activeUser, setActiveUser] = useState<ActiveUser | null>(null)
  return (
    <header className="flex border-gray-200 justify-between border-b-[1.5px] border-solid p-4">
      {/* Search Input */}
      <div className="flex rounded-xl bg-slate-100 place-self-center md:w-1/4 md:ml-12 ml-28 mr-4 md:mr-0">
        <div className="flex md:w-[15%] p-3 items-center justify-center">
          <AiOutlineSearch size={16} className="place-self-center" />
        </div>
        <input
          type="text"
          className="rounded-xl no-underline bg-slate-100 text-sm block flex-1 p-2.5 outline-none ring-0"
          placeholder="Search Employee ..."
        />
      </div>
      {/* Logged user Avatar */}
      <div className="flex gap-12 justify-self-end md:justify-normal">
        <div className="gap-6 items-center hidden md:flex">
          {/* Icons */}
          <IoIosNotificationsOutline
            size={24}
            className="text-gray-500 font-semibold cursor-pointer hover:text-blue-800"
          />
          <BsChatLeftText className="text-gray-500 font-semibold cursor-pointer hover:text-blue-800" />
        </div>
        <div className="flex gap-6">
          <img
            src={avatar}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
            alt="me"
          />
          {/* Profile Avatar and Role */}
          <div className="flex-col justify-center hidden md:flex">
            <span className="text-sm text-blue-800 font-bold">
              {activeUser?.name}
            </span>
            <span className="text-gray-400 font-semibold text-xs place-self-start">
              {activeUser?.position}
            </span>
          </div>

          <div className="place-self-center mr-11">
            <MyDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}

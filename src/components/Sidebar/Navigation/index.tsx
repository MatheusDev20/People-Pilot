import React from 'react'
// import { AiOutlineHome } from 'react-icons/ai'
// import { FcDepartment } from 'react-icons/fc'
// import { BiTask } from 'react-icons/bi'
import { BsPersonVcard } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { NavItem } from '../NavItem'
import { BuildingIcon } from '../../../assets/svgs/building'

export const Navigation = (): React.JSX.Element => {
  return (
    <nav className="flex flex-col gap-4">
      <div>
        <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-white">
          General
        </h3>
        {/* Nav Item */}
        <div className="flex flex-col mt-3 gap-5">
          <a href="/app/employees">
            <NavItem icon={<BsPersonVcard />} text="Employees" />
          </a>
          <a href="/app/departments">
            <NavItem icon={<BuildingIcon />} text="Departments" />
          </a>
          {/* <a href="/departments">
            <NavItem icon={<FcDepartment />} text="Departments" />
          </a> */}
        </div>
      </div>

      <div>
        <span className="px-4 mb-7 text-xs font-semibold text-gray-400 dark:text-white">
          Support
        </span>
        <div className="flex flex-col mt-3 gap-5">
          <NavItem icon={<FiSettings />} text="Settings" />
        </div>
      </div>
    </nav>
  )
}

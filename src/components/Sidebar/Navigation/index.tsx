import React from 'react'
// import { AiOutlineHome } from 'react-icons/ai'
// import { FcDepartment } from 'react-icons/fc'
// import { BiTask } from 'react-icons/bi'
import { BsPersonVcard } from 'react-icons/bs'
import { NavItemR } from '../NavItem'
import { BuildingIcon } from '../../../assets/svgs/building'
import { Link } from 'react-router-dom'

type Props = {
  isOpen: boolean
}
export const Navigation = ({ isOpen }: Props): React.JSX.Element => {
  return (
    <nav className="flex flex-col gap-4">
      <div>
        {/* Nav Item */}
        <div className="flex flex-col gap-5 p-2 ">
          <Link to="/app/employees">
            <NavItemR
              hideText={!isOpen}
              icon={<BsPersonVcard />}
              text="Employees"
            />
          </Link>
          <Link to="/app/departments">
            <NavItemR
              hideText={!isOpen}
              icon={<BuildingIcon />}
              text="Departments"
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

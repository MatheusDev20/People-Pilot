'use client'

import { Menu } from '@headlessui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export function MyDropdown() {
  return (
    <Menu>
      <Menu.Button className="w-4 h-4">
        <BsThreeDotsVertical color="black" />
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-800'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

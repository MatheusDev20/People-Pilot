import { Menu } from '@headlessui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export function MyDropdown(): JSX.Element {
  return (
    <Menu>
      <Menu.Button className="w-4 h-4">
        <BsThreeDotsVertical className="text-black dark:text-white" />
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

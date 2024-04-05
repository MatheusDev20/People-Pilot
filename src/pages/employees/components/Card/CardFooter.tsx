import { type Department } from '@/@types'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephoneForward } from 'react-icons/bs'

interface Props {
  department: Department
  phone: string
  email: string
}
export const CardFooter = ({
  department,
  phone,
  email,
}: Props): React.JSX.Element => {
  return (
    <footer className="flex flex-col p-5 gap-6 rounded-md bg-accent-content">
      <header className="flex items-center justify-between">
        <div className="flex gap-2 justify-center w-full p-3">
          <p className="text-xs sm:text-sm md:text-md dark:text-twitter-blue-main font-semibold">
            {department.name} {'Department'}
          </p>
        </div>
      </header>

      <section className="flex flex-col gap-3 justify-center items-start">
        <div className="flex gap-5 items-center">
          <span className="text-lg text-blue-500 dark:text-white">
            <BsTelephoneForward />
          </span>
          <p className="text-sm text-black dark:text-white">{phone}</p>
        </div>

        <div className="flex gap-5 items-center">
          <span className="text-lg text-blue-500 dark:text-white">
            <AiOutlineMail />
          </span>
          <p className="text-sm text-black dark:text-white">{email}</p>
        </div>
      </section>
    </footer>
  )
}

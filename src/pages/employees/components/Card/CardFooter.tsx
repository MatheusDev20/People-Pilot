import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephoneForward } from 'react-icons/bs'

export const CardFooter = (): React.JSX.Element => {
  return (
    <footer className="flex flex-col p-5 bg-gray-100 gap-6 rounded-md">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-blue-500 font-semibold">
            Department
          </span>
          <p className="text-sm text-black font-semibold">Design Team</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-sm text-blue-500 font-semibold">
            Hired Date
          </span>
          <p className="text-sm text-black font-semibold">17/05/2023</p>
        </div>
      </header>

      <section className="flex flex-col gap-3 justify-center items-start">
        <div className="flex gap-5 items-center">
          <span className="text-lg text-blue-500 font-semibold">
            <BsTelephoneForward />
          </span>
          <p className="text-sm text-black font-semibold">(32) 999850138</p>
        </div>

        <div className="flex gap-5 items-center">
          <span className="text-lg text-blue-500 font-semibold">
            <AiOutlineMail />
          </span>
          <p className="text-sm text-black font-semibold">nathalia@stx.com</p>
        </div>
      </section>
    </footer>
  )
}

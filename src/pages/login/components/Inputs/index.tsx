import React, { type InputHTMLAttributes, type ReactNode } from 'react'
import { CiCircleAlert } from 'react-icons/ci'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  wSize: 'small' | 'medium' | 'large'
  icon: ReactNode
  label: string
  error: string[] | null
}

export const LoginInput = ({
  wSize,
  icon,
  label,
  error,
  ...rest
}: CustomInputProps): React.JSX.Element => {
  return (
    <>
      <div className="flex flex-col gap-2 w-[70%]">
        <label className="font-semibold text-sm p-2.5 text-white">
          {label}
        </label>
        <input
          {...rest}
          type="text"
          placeholder="Type here"
          className="input input-ghost bg-accent-content w-full text-white"
        />
      </div>
      {error && (
        <footer className="flex gap-4 items-center">
          <CiCircleAlert className="text-red-500" />
          <span className="text-sm text-red-500">{error[0]}</span>
        </footer>
      )}
    </>
  )
}

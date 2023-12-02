import React, { type InputHTMLAttributes } from 'react'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error: string[] | null
}

export const LoginInput = ({
  label,
  error,
  ...rest
}: CustomInputProps): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-2 md:w-[70%] w-full ">
      <label className="font-semibold text-sm p-2.5 text-white">{label}</label>
      <input
        {...rest}
        className="input input-ghost bg-accent-content w-full text-white"
      />
      {error && (
        <footer className="flex gap-4 items-start p-1">
          <span className="text-sm text-red-500">{error[0]}</span>
        </footer>
      )}
    </div>
  )
}

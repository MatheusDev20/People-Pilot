import React, { ButtonHTMLAttributes } from 'react'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SignInButton = ({
  children,
  ...props
}: ButtonProps): React.JSX.Element => {
  return (
    <button
      {...props}
      type="submit"
      className="w-72 flex justify-center text-white bg-blue-800 hover:bg-primary-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      {children}
    </button>
  )
}

import clsx from 'clsx'
import React, { type InputHTMLAttributes } from 'react'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  wSize: 'small' | 'medium' | 'large'
  label?: string
  mask?: any
  error: string[] | null
  step?: 'stepOne' | 'stepTwo' | 'stepThree'
}

const classes = {
  mediumInput: 'w-1/2',
  largeInput: 'w-full',
  smallInput: 'w-1/4',
}

export const CustomInput = ({
  wSize,
  mask,
  label,
  step,
  error,
  ...rest
}: CustomInputProps): React.JSX.Element => {
  return (
    <div
      className={clsx(
        {
          [classes.mediumInput]: wSize === 'medium',
          [classes.largeInput]: wSize === 'large',
          [classes.smallInput]: wSize === 'small',
        },
        'flex flex-col gap-3 w-full p-2',
      )}
    >
      <div className="label">
        {label && (
          <span className="label-text dark:text-white font-semibold">
            {label}
          </span>
        )}
      </div>
      {/* <label className="font-semibold text-sm p-2.5 text-gray-600 dark:text-white">
        {label}
      </label> */}
      <input
        {...rest}
        type="text"
        className={clsx(
          error && 'input-error outline-none',
          'input input-ghost bg-accent-content md:w-full text-white w-[80%]',
        )}
      />
      {error && (
        <footer className="flex gap-4 items-start p-1">
          <span className="text-sm text-red-500">{error[0]}</span>
        </footer>
      )}
    </div>
  )
}

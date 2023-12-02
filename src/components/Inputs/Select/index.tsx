import clsx from 'clsx'
import React, { type InputHTMLAttributes } from 'react'
import { CiCircleAlert } from 'react-icons/ci'

interface CustomInputProps extends InputHTMLAttributes<HTMLSelectElement> {
  wSize: 'small' | 'medium' | 'large'
  label: string
  placeholder?: string
  error: string[] | null
}

const classes = {
  mediumInput: 'w-1/2',
  largeInput: 'w-full',
  smallInput: 'w-1/4',
}

export const CustomSelect = ({
  wSize,
  label,
  error,
  placeholder,
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
      {/* Input Label */}
      <label className="font-semibold text-sm p-2.5 text-gray-600 dark:text-white">
        {label}
      </label>
      {/* Input Itself */}
      <select
        className="select select-ghost w-full bg-accent-content "
        {...rest}
      >
        <option value="">{placeholder}</option>
        <option value="Sales">Sales</option>
        <option value="HR">Human Resources</option>
        <option value="Reception">Reception</option>
        <option value="Accounting">Accounting</option>
      </select>
      {error && (
        <div className="flex gap-4 items-center">
          <CiCircleAlert className="text-red-500" />
          <span className="text-sm text-red-500">{error[0]}</span>
        </div>
      )}
    </div>
  )
}

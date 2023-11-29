import clsx from 'clsx'
import React, { type InputHTMLAttributes, type ReactNode } from 'react'
import { useCreateEmployeeForm } from '../../../contexts/create-employee-form'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  wSize: 'small' | 'medium' | 'large'
  icon: ReactNode
  label: string
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
  icon,
  mask,
  label,
  step,
  error,
  ...rest
}: CustomInputProps): React.JSX.Element => {
  const { formData, setFormData } = useCreateEmployeeForm()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = mask ? mask(e.target.value) : e.target.value

    setFormData({
      ...formData,
      [step as string]: {
        ...formData[step as keyof typeof formData],
        [e.target.name]: value,
      },
    })
  }
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
      <label className="font-semibold text-sm p-2.5 text-gray-600 dark:text-white">
        {label}
      </label>
      <input
        {...rest}
        onChange={handleInput}
        type="text"
        className={clsx(
          error && 'input-error outline-none',
          'input input-ghost bg-accent-content w-full text-white ',
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

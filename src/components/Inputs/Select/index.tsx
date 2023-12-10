import clsx from 'clsx'
import React, { type InputHTMLAttributes } from 'react'
import { CiCircleAlert } from 'react-icons/ci'
import Select, { type StylesConfig } from 'react-select'
import { CustomOption, OptionIcon } from './Option'

type CustomOptionData = {
  img: string
  data: string
}
interface CustomInputProps extends InputHTMLAttributes<HTMLSelectElement> {
  wSize: 'small' | 'medium' | 'large'
  label: string
  placeholder?: string
  error: string[] | null
  options: string[] | CustomOptionData[]
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
  options,
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

      {typeof options[0] !== 'string' ? (
        <ReactSelect
          options={options.map((opt: any) => ({
            data: opt.data,
            img: <OptionIcon imgUrl={opt.img} />,
          }))}
          {...rest}
        />
      ) : (
        <select
          className="select select-ghost w-full bg-accent-content"
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt as string} value={opt as string}>
              {opt as string}
            </option>
          ))}
        </select>
      )}

      {error && (
        <div className="flex gap-4 items-center">
          <CiCircleAlert className="text-red-500" />
          <span className="text-sm text-red-500">{error[0]}</span>
        </div>
      )}
    </div>
  )
}

export const ReactSelect = ({ options, ...rest }: any): JSX.Element => {
  const final = options.map((opt: any) => ({
    value: opt.data,
    label: <CustomOption data={opt.data} img={opt.img} />,
  }))

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      borderRadius: '10px',
      minHeight: '3rem',
      paddingLeft: '1rem',
      paddingRight: '2.5rem',
      fontSize: '0.875rem',
      cursor: 'pointer',
      borderWidth: '1px',
      backgroundColor: 'oklch(var(--ac))',
      borderColor: 'oklch(var(--n))',
    }),

    option: (styles: any, { isFocused }) => ({
      ...styles,
      padding: '0.6rem',
      cursor: 'pointer',
      backgroundColor: !isFocused ? 'oklch(var(--ac))' : 'oklch(var(--b3))',
    }),
  }

  return (
    <Select
      options={final}
      {...rest}
      components={{ IndicatorSeparator: () => null }}
      styles={colourStyles}
    />
  )
}

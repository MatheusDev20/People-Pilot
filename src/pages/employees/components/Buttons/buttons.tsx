import { BiFilterAlt } from 'react-icons/bi'
import React, { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

const renderButton = (
  content: ReactNode,
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>,
  link?: string,
): JSX.Element => {
  const ButtonContent = (
    <button
      {...buttonProps}
      className="btn bg-twitter-blue-main pr-7 pl-7 text-white hover:bg-twitter-blue-secondary"
    >
      <div className="flex gap-2 items-center">{content}</div>
    </button>
  )

  return link ? <Link to={link}>{ButtonContent}</Link> : ButtonContent
}

export const FilterButton = (): React.JSX.Element => {
  return renderButton(
    <>
      <BiFilterAlt size={20} />
      <span className="text-sm tracking-wide">Filter</span>
    </>,
    {
      className:
        'bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 h-12 md:h-10 dark:bg-twitter-blue-main dark:hover:bg-twitter-blue-secondary',
    },
  )
}

type PlusProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  icon: ReactNode
  routeTo?: string
}
export const PlusButton = ({
  text,
  icon,
  routeTo,
  ...rest
}: PlusProps): React.JSX.Element => {
  return renderButton(
    <>
      {icon}
      <span className="md:text-sm hidden md:flex">{text}</span>
    </>,
    rest,
    routeTo,
  )
}

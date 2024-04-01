type Props = {
  children: React.ReactNode
  borderColor: string
  borderHover: string
}
export const CircleBorder = ({
  children,
  borderColor,
  borderHover,
}: Props): JSX.Element => {
  return (
    <div
      className={`border border-${borderColor} rounded-full flex items-center p-2 hover:border-${borderHover} cursor-pointer 
      hover:transition-opacity duration-700 ease-in-out hover:opacity-80`}
    >
      {children}
    </div>
  )
}

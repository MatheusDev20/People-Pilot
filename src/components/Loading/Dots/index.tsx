type Props = {
  size: string
}
export const LoadingDots = ({ size }: Props): React.JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full gap-5">
      <span className={`loading loading-dots ${size} text-primary`}></span>
    </div>
  )
}

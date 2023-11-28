export const Logo = ({ size }: { size: string }): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <span
        className={`${size} place-self-center cursor-pointer dark:text-white font-bebas`}
      >
        DUNDER
      </span>
      <span
        className={`${size} place-self-center cursor-pointer dark:text-white font-bebas`}
      >
        MIFFLIN
      </span>
    </div>
  )
}

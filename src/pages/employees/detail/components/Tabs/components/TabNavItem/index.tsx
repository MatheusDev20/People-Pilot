type Props = {
  icon: JSX.Element
  text: string
}

export const TabNavItem = ({ icon, text }: Props): JSX.Element => {
  return (
    <div className="flex w-full gap-3 items-center justify-center">
      <span className="text-white font-bold">{icon}</span>
      <span className="text-white font-bold">{text}</span>
    </div>
  )
}

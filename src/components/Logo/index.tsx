import PEOPLE_PILOT_LOGO from '../../assets/imgs/people_pilot_logo.png'

export const Logo = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={PEOPLE_PILOT_LOGO}
        alt="logo"
        className="object-cover w-40 h-40"
      />
    </div>
  )
}

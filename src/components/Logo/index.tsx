import PEOPLE_PILOT_LOGO from '../../assets/imgs/people_pilot_logo.png'

export const Logo = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 ">
      <img
        src={PEOPLE_PILOT_LOGO}
        alt="logo"
        className="object-cover md:w-40 md:h-40 sm:w-18 sm:h-18 md:p-0 sm:p-2"
      />
    </div>
  )
}

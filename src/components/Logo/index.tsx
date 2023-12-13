import HRLOGO from '../../assets/imgs/hr_max_logo.png'

export const Logo = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <img src={HRLOGO} alt="logo" className="object-cover w-40 h-40" />
    </div>
  )
}

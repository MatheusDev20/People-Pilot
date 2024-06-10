import clsx from 'clsx'
import DEFAULT_PEOPLE_PILOT_LOGO from '../../assets/imgs/people_pilot_logo.png'

type Props = {
  isOpen: boolean
  brandUrl: string
  brandName?: string
}
export const Logo = ({ isOpen, brandUrl, brandName }: Props): JSX.Element => {
  const styles = clsx(
    !isOpen ? 'w-16 h-12 p-0' : 'md:w-36 md:h-36 w-10 h-10 p-2',
    'object-cover rounded-full',
  )

  return (
    <div className="flex flex-col items-center gap-3 mt-7 rounded-full">
      <img
        src={brandUrl ?? DEFAULT_PEOPLE_PILOT_LOGO}
        alt="logo"
        className={styles}
      />
      {brandName && <h3>{brandName}</h3>}
    </div>
  )
}

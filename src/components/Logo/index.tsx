import clsx from 'clsx'
import DEFAULT_PEOPLE_PILOT_LOGO from '../../assets/imgs/people_pilot_logo.png'

type Props = {
  isOpen: boolean
  brandUrl: string
}
export const Logo = ({ isOpen, brandUrl }: Props): JSX.Element => {
  const styles = clsx(
    !isOpen ? 'w-16 h-16 p-0' : 'md:w-40 md:h-40 w-12 h-12 p-2',
    'object-cover',
  )
  console.log('brandUrl', brandUrl)

  return (
    <div className="flex flex-col gap-3 ">
      <img
        src={brandUrl ?? DEFAULT_PEOPLE_PILOT_LOGO}
        alt="logo"
        className={styles}
      />
    </div>
  )
}

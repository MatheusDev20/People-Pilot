import {
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai'
import { BsBuildingAdd, BsFillPersonFill } from 'react-icons/bs'
import { FaAddressCard } from 'react-icons/fa'
import { CiCircleAlert } from 'react-icons/ci'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdBusiness } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'

export const PersonIcon = (): JSX.Element => <BsFillPersonFill />
export const CalendarIcon = (): JSX.Element => <AiOutlineCalendar />
export const EmailIcon = (): JSX.Element => <AiOutlineMail />
export const PhoneIcon = (): JSX.Element => <AiOutlinePhone />
export const AddressIcon = (): JSX.Element => <FaAddressCard />
export const AlertIcon = (): JSX.Element => <CiCircleAlert />
export const LockIcon = (): JSX.Element => <RiLockPasswordLine />
export const DepartmentIcon = (): JSX.Element => <BsBuildingAdd />
export const Avatar = (): JSX.Element => <RxAvatar />
export const Business = (): JSX.Element => <MdBusiness />

export const StepperCheckIcon = (): JSX.Element => (
  <AiOutlineCheckCircle color="#008000" />
)

export const LogoutIcon = ({
  classStyles,
}: {
  classStyles: string
}): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={classStyles}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      />
    </svg>
  )
}

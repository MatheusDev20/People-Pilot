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

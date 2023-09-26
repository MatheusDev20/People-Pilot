import {
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsBuildingAdd, BsFillPersonFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

export const PersonIcon = (): JSX.Element => <BsFillPersonFill />;
export const CalendarIcon = (): JSX.Element => <AiOutlineCalendar />;
export const EmailIcon = (): JSX.Element => <AiOutlineMail />;
export const PhoneIcon = (): JSX.Element => <AiOutlinePhone />;
export const AddressIcon = (): JSX.Element => <FaAddressCard />;
export const AlertIcon = (): JSX.Element => <CiCircleAlert />;
export const LockIcon = (): JSX.Element => <RiLockPasswordLine />;
export const DepartmentIcon = (): JSX.Element => <BsBuildingAdd />;

import {
  Avatar,
  Business,
  PersonIcon,
} from './../../../../../assets/icons/index'
import { MoneyIcon } from '../../../../../assets/svgs/money'

export * from './Step1'
export * from './Step2'
export * from './Step4'

export const steps = [
  {
    stepId: 0,
    label: 'Personal Informations',
    icon: PersonIcon,
  },
  {
    stepId: 1,
    label: 'Company Informations',
    icon: Business,
  },
  {
    stepId: 2,
    label: 'Payment Information',
    icon: MoneyIcon,
  },
  {
    stepId: 3,
    label: 'Avatar Upload',
    icon: Avatar,
  },
]

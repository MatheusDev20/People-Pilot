import {
  Avatar,
  Business,
  PersonIcon,
} from './../../../../../assets/icons/index'

export * from './Step1'
export * from './Step2'
export * from './Step3'
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
    label: 'Avatar Upload',
    icon: Avatar,
  },
]

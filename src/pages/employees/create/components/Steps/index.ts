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
    label: 'Informações Pessoais',
    icon: PersonIcon,
  },
  {
    stepId: 1,
    label: 'Informações da Empresa',
    icon: Business,
  },
  {
    stepId: 2,
    label: 'Informações Bancárias',
    icon: MoneyIcon,
  },
  {
    stepId: 3,
    label: 'Upload de Imagem',
    icon: Avatar,
  },
]

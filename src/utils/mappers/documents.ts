import { type RG } from '../../@types'
import { type ExtractMapper } from './accordion'

export const RGMapper: ExtractMapper<keyof RG> = [
  { numero: 'Número', order: 1 },
  { orgaoEmissor: 'Orgão Emissor', order: 2 },
  { dataExpiracao: 'Data de Expiração', order: 3 },
]

export const documentMappers: Record<any, any> = {
  rg: RGMapper,
}

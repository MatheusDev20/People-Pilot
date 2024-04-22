import { maskCPF } from '@/components/Inputs/Masks'
import { type CPF, type RG } from '../../@types'
import { type ExtractMapper } from './accordion'

export const RGMapper: ExtractMapper<keyof RG> = [
  { numero: 'Número', order: 1 },
  { orgaoEmissor: 'Orgão Emissor', order: 2 },
  { dataEmissao: 'Data de Emissão', order: 3 },
  { ufEmissor: 'UF Emissor', order: 4 },
]

export const CPFMapper: ExtractMapper<keyof CPF> = [
  { numero: 'Número', order: 1, mask: maskCPF },
]

export const documentMappers: Record<
  string,
  ExtractMapper<keyof RG | keyof CPF>
> = {
  rg: RGMapper,
  cpf: CPFMapper,
}

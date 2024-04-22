import { type PaymentInformation, type Employee } from '../../@types/employees'

type ExtractMapperItem<T extends string | number | symbol> = Partial<
  Record<T, number | string>
> & {
  order: number
  mask?: any
}
export type ExtractMapper<T extends string | number | symbol> = Array<
  ExtractMapperItem<T>
>

export const PersonalInfoMapper: ExtractMapper<keyof Employee> = [
  { id: 'Registration ID', order: 1 },
  { name: 'Full Name', order: 2 },
  { birthDate: 'Birth Date', order: 3 },
  { email: 'Email', order: 4 },
]
export const PaymentInfoMapper: ExtractMapper<keyof PaymentInformation> = [
  { bankName: 'Bank Name', order: 1 },
  { accountType: 'Account Type', order: 2 },
  { agencyNumber: 'Agency Number', order: 3 },
  { pixKey: 'Pix Key', order: 4 },
  { accountNumber: 'Account Number', order: 5 },
]

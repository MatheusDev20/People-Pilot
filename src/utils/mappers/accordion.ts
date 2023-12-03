import { type Employee } from '../../@types/employees'

type K = keyof Employee

type ExtractMapperItem = Partial<Record<K, number | string>> & {
  order: number
}
type ExtractMapper = ExtractMapperItem[]

export const PersonalInfoMapper: ExtractMapper = [
  { id: 'Registration ID', order: 1 },
  { name: 'Full Name', order: 2 },
  { birthDate: 'Birth Date', order: 3 },
  { email: 'Email', order: 4 },
]

import { type AppBanks } from '../@types'
import { GET } from './handlers'

export const getAvailableBanks = async (): Promise<AppBanks[]> => {
  const res = await GET<AppBanks[]>({
    authenticated: true,
    path: '/employee/payment-info/available-banks',
  })
  const { body } = res

  return body
}

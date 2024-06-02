import { type AppBanks } from '../../@types'
import { GET, getTenant } from '../handlers'

export const getAvailableBanks = async (): Promise<AppBanks[]> => {
  const res = await GET<AppBanks[]>({
    authenticated: true,
    path: '/employee/payment-info/available-banks',
    headers: {
      'x-organization-id': getTenant(),
    },
  })
  const { body } = res

  return body
}

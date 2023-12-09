import { type Manager } from '.'

export function isManager(obj: any): obj is Manager {
  return obj && typeof obj.name === 'string' && typeof obj.avatar === 'string'
}

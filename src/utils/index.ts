/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { type AccordionElement } from '../@types'

export const timeout = async (ms: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

export const extract = (
  data: Record<string, any> | Array<Record<string, any>>,
  mapper: Array<Record<string, any>>,
): AccordionElement[] => {
  return Object.entries(data)
    .filter(([k, _]) => mapper.flatMap((obj) => Object.keys(obj)).includes(k))
    .map(([k, v]) => ({
      label: mapper.find((obj) => obj[k])?.[k] ?? k,
      info: v,
      order: mapper.find((obj) => obj[k])?.order,
    }))
    .sort((a, b) => a.order - b.order)
}

export function getKeysOf<T extends object>(
  obj: T | undefined,
  omitKeys: string[] = [],
): Array<keyof T> {
  if (!obj) return []
  return Object.keys(obj).filter((key) => !omitKeys.includes(key)) as Array<
    keyof T
  >
}

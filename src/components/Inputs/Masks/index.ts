type NormalizedPhone = (value: string) => string | undefined
type NormalizedDate = (value: string | undefined) => string

type MaskFn = NormalizedPhone | NormalizedDate

export const normalizeDate = (value: string | undefined): string => {
  if (!value) return ''
  let input = value.replace(/[^0-9]/g, '').slice(0, 8) // Apenas números e limita a 8 dígitos
  if (input.length >= 3) {
    input = input.slice(0, 2) + '/' + input.slice(2)
  }
  if (input.length >= 6) {
    input = input.slice(0, 5) + '/' + input.slice(5)
  }
  return input
}

export const normalizePhone = (value: string): string | undefined => {
  if (!value) return ''
  const input = value.replace(/[^0-9]/g, '').slice(0, 11)

  input.replace(/[^\d]/g, '') // remove all non digits
  return input.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
}

export const hasMask = (name: string): MaskFn | undefined => {
  if (name === 'phone') {
    return normalizePhone
  }
  if (name === 'birthDate') {
    return normalizeDate
  }
}

export type ValidationResult = {
  errors: { [key: string]: string[] } | null
  veredict: boolean
}

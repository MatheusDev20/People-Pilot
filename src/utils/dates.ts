export const convertDateFormat = (dateStr: string): string => {
  const parts = dateStr.split('/')

  if (
    parts.length !== 3 ||
    parts[0].length !== 2 ||
    parts[1].length !== 2 ||
    parts[2].length !== 4
  ) {
    throw new Error('Invalid date format. Expected format: DD/MM/YYYY')
  }
  // Construct the new date format
  const newFormat = `${parts[2]}-${parts[1]}-${parts[0]}`
  return newFormat
}

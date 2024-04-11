export const convertDateFormat = (dateStr: string): string => {
  // Check if the input is in DD/MM/YYYY format
  if (dateStr.includes('/')) {
    const parts = dateStr.split('/')
    if (
      parts.length !== 3 ||
      parts[0].length !== 2 ||
      parts[1].length !== 2 ||
      parts[2].length !== 4
    ) {
      throw new Error('Invalid date format. Expected format: DD/MM/YYYY')
    }
    return `${parts[2]}-${parts[1]}-${parts[0]}`
  } else if (dateStr.includes('-')) {
    const parts = dateStr.split('-')
    if (
      parts.length !== 3 ||
      parts[0].length !== 4 ||
      parts[1].length !== 2 ||
      parts[2].length !== 2
    ) {
      throw new Error('Invalid date format. Expected format: YYYY-MM-DD')
    }
    return `${parts[2]}/${parts[1]}/${parts[0]}`
  } else {
    throw new Error(
      'Invalid date format. Expected formats: DD/MM/YYYY or YYYY-MM-DD',
    )
  }
}

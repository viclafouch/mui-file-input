export function generateUuid(): string {
  return `_${Math.random().toString(36).substr(2, 9)}`
}

export function truncateText(text: string, maxLength: number): string {
  const textLength = text.length

  if (textLength < maxLength) {
    return text
  }

  const charsKeepOneSide = Math.floor((maxLength - 1) / 2)

  return `${text.slice(0, charsKeepOneSide)}…${text.slice(
    text.length - charsKeepOneSide
  )}`
}

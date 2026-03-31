export function getTotalFilesSize(files: File[]) {
  return files.reduce((previousValue, currentFile) => {
    return previousValue + currentFile.size
  }, 0)
}

export function matchIsFile(value: unknown): value is File {
  return typeof window !== 'undefined' && value instanceof File
}

export function getFileDetails(value: File | File[]) {
  const name = matchIsFile(value) ? value.name : (value[0]?.name ?? '')
  const lastDotIndex = name.lastIndexOf('.')
  const extension = lastDotIndex >= 0 ? name.slice(lastDotIndex + 1) : ''
  const filenameWithoutExtension =
    lastDotIndex >= 0 ? name.slice(0, lastDotIndex) : name

  return {
    filename: filenameWithoutExtension,
    extension
  }
}

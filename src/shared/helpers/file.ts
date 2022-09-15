export function getTotalFilesSize(files: File[]): number {
  return files.reduce((previousValue, currentFile) => {
    return previousValue + currentFile.size
  }, 0)
}

export function matchIsFile(value: unknown): value is File {
  return value instanceof File
}

export function fileListToArray(filelist: FileList): File[] {
  return Array.from(filelist)
}

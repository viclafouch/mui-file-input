import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

type TextFieldProps = Omit<
  MuiTextFieldProps,
  'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue'
>

export type MuiFileInputProps<T extends boolean = false> = TextFieldProps & {
  value?: T extends true ? File[] : File | null
  hideSizeText?: boolean
  multiple?: T
  getInputText?: (files: T extends true ? File[] : File | null) => string
  getSizeText?: (files: T extends true ? File[] : File | null) => string
  onChange?: (value: T extends true ? File[] : File | null) => void
}

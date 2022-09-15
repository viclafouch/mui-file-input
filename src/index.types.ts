import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

type TextFieldProps = Omit<
  MuiTextFieldProps,
  'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue'
>

export type MuiFileInputProps = {
  value?: File[] | File | null
  multiple?: boolean
  getInputText?: (files: File[] | File | null) => string
  getSizeText?: (files: File[] | File | null) => string
  onChange?: (value: File[] | File | null) => void
} & TextFieldProps

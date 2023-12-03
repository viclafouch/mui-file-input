import type { IconButtonProps } from '@mui/material/IconButton'
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

type TextFieldProps = Omit<
  MuiTextFieldProps,
  'onChange' | 'select' | 'type' | 'multiline' | 'defaultValue'
>

type MultipleOrSingleFile =
  | {
      value?: File | null
      getInputText?: (files: File | null) => string
      getSizeText?: (files: File | null) => string
      onChange?: (value: File | null) => void
      multiple?: false | undefined
    }
  | {
      value?: File[]
      getInputText?: (files: File[]) => string
      getSizeText?: (files: File[]) => string
      onChange?: (value: File[]) => void
      multiple: true
    }

export type MuiFileInputProps = TextFieldProps & {
  hideSizeText?: boolean
  clearIconButtonProps?: IconButtonProps
} & MultipleOrSingleFile

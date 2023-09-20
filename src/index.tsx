import React from 'react'
import prettyBytes from 'pretty-bytes'
import Input from '@components/Input/Input'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { matchIsNonEmptyArray } from '@shared/helpers/array'
import {
  fileListToArray,
  getFileDetails,
  getTotalFilesSize,
  matchIsFile
} from '@shared/helpers/file'
import type { MuiFileInputProps } from './index.types'

export { MuiFileInputProps }

type NonUndefined<T> = T extends undefined ? never : T

const MuiFileInput = <T extends boolean | undefined>(
  props: MuiFileInputProps<T>,
  propRef: MuiFileInputProps<T>['ref']
) => {
  const {
    value,
    onChange,
    disabled,
    getInputText,
    getSizeText,
    placeholder,
    hideSizeText,
    inputProps,
    InputProps,
    multiple,
    className,
    closeButtonProps,
    ...restTextFieldProps
  } = props
  const inputRef = React.useRef<HTMLInputElement>(null)
  const isMultiple =
    multiple ||
    (inputProps?.multiple as boolean) ||
    (InputProps?.inputProps?.multiple as boolean) ||
    false

  const clearInputValue = () => {
    const inputEl = inputRef.current

    if (inputEl) {
      inputEl.value = ''
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files
    const files = fileList ? fileListToArray(fileList) : []
    clearInputValue()

    if (isMultiple) {
      onChange?.(files as NonNullable<typeof value>)
    } else {
      onChange?.(files[0] as NonNullable<typeof value>)
    }
  }

  const handleClearAll = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (disabled) {
      return
    }

    if (multiple) {
      onChange?.([] as unknown as NonNullable<typeof value>)
    } else {
      onChange?.(null as NonUndefined<typeof value>)
    }
  }

  const hasAtLeastOneFile = Array.isArray(value)
    ? matchIsNonEmptyArray(value)
    : matchIsFile(value)

  const getTheInputText = () => {
    if (value === null || (Array.isArray(value) && value.length === 0)) {
      return placeholder || ''
    }

    if (typeof getInputText === 'function' && value !== undefined) {
      return getInputText(value)
    }

    if (value && hasAtLeastOneFile) {
      if (Array.isArray(value) && value.length > 1) {
        return `${value.length} files`
      }

      return getFileDetails(value)
    }

    return ''
  }

  const getTotalSizeText = (): string => {
    if (typeof getSizeText === 'function' && value !== undefined) {
      return getSizeText(value)
    }

    if (hasAtLeastOneFile) {
      if (Array.isArray(value)) {
        const totalSize = getTotalFilesSize(value)

        return prettyBytes(totalSize)
      }

      if (matchIsFile(value)) {
        return prettyBytes(value.size)
      }
    }

    return ''
  }

  return (
    <TextField
      ref={propRef}
      type="file"
      disabled={disabled}
      onChange={handleChange}
      className={`MuiFileInput-TextField ${className || ''}`}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AttachFileIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            style={{ visibility: hasAtLeastOneFile ? 'visible' : 'hidden' }}
          >
            {!hideSizeText ? (
              <Typography
                variant="caption"
                mr="2px"
                className="MuiFileInput-Typography-size-text"
              >
                {getTotalSizeText()}
              </Typography>
            ) : null}
            <IconButton
              aria-label="Clear"
              title="Clear"
              size="small"
              disabled={disabled}
              className={`${closeButtonProps?.className} MuiFileInput-IconButton`}
              onClick={handleClearAll}
              {...closeButtonProps}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
        ...InputProps,
        inputProps: {
          text: getTheInputText(),
          multiple: isMultiple,
          isPlaceholder:
            value === null || (Array.isArray(value) && value.length === 0),
          ref: inputRef,
          placeholder,
          ...inputProps,
          ...InputProps?.inputProps
        },
        // @ts-ignore
        inputComponent: Input
      }}
      {...restTextFieldProps}
    />
  )
}

const MuiFileInputForwarded = React.forwardRef(MuiFileInput) as <
  T extends boolean | undefined = false
>(
  props: MuiFileInputProps<T> & { ref?: MuiFileInputProps<T>['ref'] }
) => ReturnType<typeof MuiFileInput<T>>

export { MuiFileInputForwarded as MuiFileInput }

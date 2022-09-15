import React from 'react'
import prettyBytes from 'pretty-bytes'
import Input from '@components/Input/Input'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import {
  fileListToArray,
  getTotalFilesSize,
  matchIsFile
} from '@shared/helpers/file'
import { truncateText } from '@shared/helpers/string'
import type { MuiFileInputProps } from './index.types'

export { MuiFileInputProps }

// eslint-disable-next-line react/function-component-definition
function MuiFileInput(
  props: MuiFileInputProps,
  propRef: MuiFileInputProps['ref']
) {
  const {
    value,
    onChange,
    disabled,
    multiple,
    getInputText,
    getSizeText,
    placeholder,
    ...restTextFieldProps
  } = props as MuiFileInputProps & { value: File[] | File | null }
  const inputRef = React.useRef<HTMLInputElement>(null)

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
    onChange?.(files)
  }

  const handleClearAll = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (disabled) {
      return
    }

    if (multiple) {
      onChange?.([])
    } else {
      onChange?.(null)
    }
  }

  const { InputProps } = restTextFieldProps || {}
  const isMultiple = multiple && Array.isArray(value)
  const hasAtLeastOneFile = Array.isArray(value)
    ? value.length > 0
    : matchIsFile(value)

  const getTheInputText = (): string => {
    if (value === null || (isMultiple && value.length === 0)) {
      return placeholder || ''
    }
    if (typeof getInputText === 'function') {
      return getInputText(value)
    }
    if (value !== null && hasAtLeastOneFile) {
      if (isMultiple && value.length > 1) {
        return `${value.length} files`
      }
      const filename = matchIsFile(value) ? value.name : value[0].name
      return truncateText(filename, 20)
    }
    return ''
  }

  const getTotalSizeText = (): string => {
    if (typeof getSizeText === 'function') {
      return getSizeText(value)
    }
    if (hasAtLeastOneFile) {
      if (isMultiple) {
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
      type="file"
      ref={propRef}
      disabled={disabled}
      onChange={handleChange}
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
            <Typography variant="caption" mr="2px">
              {getTotalSizeText()}
            </Typography>
            <IconButton
              aria-label="Clear"
              title="Clear"
              size="small"
              disabled={disabled}
              onClick={handleClearAll}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
        ...InputProps,
        inputProps: {
          text: getTheInputText(),
          multiple,
          isPlaceholder: value === null || (isMultiple && value.length === 0),
          ref: inputRef,
          ...InputProps?.inputProps
        },
        inputComponent: Input
      }}
      {...restTextFieldProps}
    />
  )
}

const MuiFileInputWithRef = React.forwardRef(MuiFileInput)

MuiFileInputWithRef.defaultProps = {
  value: []
}

export { MuiFileInputWithRef as MuiFileInput }

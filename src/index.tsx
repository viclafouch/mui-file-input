import React from 'react'
import prettyBytes from 'pretty-bytes'
import Input from '@components/Input/Input'
import { matchIsNonEmptyArray } from '@shared/helpers/array'
import {
  fileListToArray,
  getFileDetails,
  getTotalFilesSize,
  matchIsFile
} from '@shared/helpers/file'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import type { MuiFileInputProps } from './index.types'

export { MuiFileInputProps }

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

export const MuiFileInput = React.forwardRef(
  (props: MuiFileInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
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
      clearIconButtonProps = {},
      ...restTextFieldProps
    } = props
    const { className: iconButtonClassName = '', ...restClearIconButtonProps } =
      clearIconButtonProps
    const inputRef = React.useRef<HTMLInputElement>(null)

    const { startAdornment, ...restInputProps } = InputProps || {}
    const isMultiple =
      multiple ||
      (inputProps?.multiple as boolean) ||
      (InputProps?.inputProps?.multiple as boolean) ||
      false

    const resetInputValue = () => {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files
      const files = fileList ? fileListToArray(fileList) : []

      if (multiple) {
        onChange?.(files)

        if (files.length === 0) {
          resetInputValue()
        }
      } else {
        onChange?.(files[0] || null)

        if (!files[0]) {
          resetInputValue()
        }
      }
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

    const hasAtLeastOneFile = Array.isArray(value)
      ? matchIsNonEmptyArray(value)
      : matchIsFile(value)

    useIsomorphicLayoutEffect(() => {
      const inputElement = inputRef.current

      if (inputElement && !hasAtLeastOneFile) {
        inputElement.value = ''
      }
    }, [hasAtLeastOneFile])

    const getTheInputText = () => {
      if (value === null || (Array.isArray(value) && value.length === 0)) {
        return placeholder || ''
      }

      if (typeof getInputText === 'function' && value !== undefined) {
        return getInputText(value as File & File[])
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
        return getSizeText(value as File & File[])
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
        ref={ref}
        type="file"
        disabled={disabled}
        onChange={handleChange}
        className={`MuiFileInput-TextField ${className || ''}`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
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
                  lineHeight={1}
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
                className={`${iconButtonClassName} MuiFileInput-ClearIconButton`}
                onClick={handleClearAll}
                {...restClearIconButtonProps}
              />
            </InputAdornment>
          ),
          ...restInputProps,
          inputProps: {
            text: getTheInputText(),
            multiple: isMultiple,
            ref: inputRef,
            isPlaceholder: !hasAtLeastOneFile,
            placeholder,
            ...inputProps,
            ...InputProps?.inputProps
          },
          inputComponent: Input
        }}
        {...restTextFieldProps}
      />
    )
  }
)

import React from 'react'
import prettyBytes from 'pretty-bytes'
import Input from '@components/Input/Input'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { matchIsNonEmptyArray } from '@shared/helpers/array'
import {
  getFileDetails,
  getTotalFilesSize,
  matchIsFile
} from '@shared/helpers/file'
import type { MuiFileInputProps } from './index.types'

export type { MuiFileInputProps }

type ConsumerInputSlotProps = {
  startAdornment?: React.ReactNode
  inputProps?: Record<string, unknown>
  inputComponent?: React.ElementType
  [key: string]: unknown
}

const EMPTY_OBJECT = {} as Record<string, unknown>

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

export const MuiFileInput = (props: MuiFileInputProps) => {
  const {
    value,
    onChange,
    disabled,
    getInputText,
    getSizeText,
    placeholder,
    hideSizeText,
    ref,
    slotProps,
    multiple,
    className,
    clearIconButtonProps = EMPTY_OBJECT,
    ...restTextFieldProps
  } = props
  const { className: iconButtonClassName = '', ...restClearIconButtonProps } =
    clearIconButtonProps
  const inputRef = React.useRef<HTMLInputElement>(null)

  const consumerInputSlotProps = slotProps?.input as
    | ConsumerInputSlotProps
    | undefined
  const consumerStartAdornment = consumerInputSlotProps?.startAdornment
  const {
    startAdornment,
    inputProps: nestedInputProps,
    inputComponent,
    ...consumerRestInputSlotProps
  } = consumerInputSlotProps ?? EMPTY_OBJECT
  void startAdornment
  void nestedInputProps
  void inputComponent

  const consumerHtmlInputProps = slotProps?.htmlInput as
    | Record<string, unknown>
    | undefined
  const { multiple: htmlMultiple, ...consumerRestHtmlInputProps } =
    consumerHtmlInputProps ?? EMPTY_OBJECT
  void htmlMultiple

  const isMultiple = multiple || Boolean(consumerHtmlInputProps?.multiple)

  const resetInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files
    const files = fileList ? Array.from(fileList) : []

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

  const getDisplayText = () => {
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

  const getTotalSizeText = () => {
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
      slotProps={{
        input: {
          startAdornment: consumerStartAdornment ? (
            <InputAdornment position="start">
              {consumerStartAdornment}
            </InputAdornment>
          ) : undefined,
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
          ...consumerRestInputSlotProps,
          // @ts-expect-error -- Input requires custom props (text, isPlaceholder) not in MUI's InputBaseComponentProps
          inputComponent: Input
        },
        htmlInput: {
          text: getDisplayText(),
          multiple: isMultiple,
          ref: inputRef,
          isPlaceholder: !hasAtLeastOneFile,
          placeholder,
          ...consumerRestHtmlInputProps
        }
      }}
      {...restTextFieldProps}
    />
  )
}

import React from 'react'
import { InputBaseComponentProps } from '@mui/material/InputBase'
import Styled from './Input.styled'

type InputProps = InputBaseComponentProps & {
  text: string | { filename: string; extension: string }
  isPlaceholder: boolean
}

const Input = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { text, isPlaceholder, placeholder, ...restInputProps } = props

    return (
      <Styled.Label>
        <input {...restInputProps} ref={ref} />
        {text ? (
          <span
            aria-placeholder={placeholder}
            className={isPlaceholder ? 'MuiFileInput-placeholder' : ''}
          >
            {typeof text === 'string' ? (
              text
            ) : (
              <Styled.Filename>
                <span>{text.filename}</span>
                <span>.{text.extension}</span>
              </Styled.Filename>
            )}
          </span>
        ) : null}
      </Styled.Label>
    )
  }
)

export default Input

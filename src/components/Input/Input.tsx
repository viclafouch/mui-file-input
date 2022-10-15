import React from 'react'
import { InputBaseComponentProps } from '@mui/material/InputBase'
import { generateUuid } from '@shared/helpers/string'
import Styled from './Input.styled'

type InputProps = InputBaseComponentProps & {
  text: string
  isPlaceholder: boolean
}

const Input = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { text, isPlaceholder, placeholder, ...restInputProps } = props
    // eslint-disable-next-line react/hook-use-state
    const [id] = React.useState<string>(() => {
      return generateUuid()
    })

    return (
      <Styled.Label htmlFor={id}>
        <input {...restInputProps} ref={ref} id={id} />
        {text ? (
          <span
            aria-placeholder={placeholder}
            className={isPlaceholder ? 'MuiFileInput-placeholder' : ''}
          >
            {text}
          </span>
        ) : null}
      </Styled.Label>
    )
  }
)

export default Input

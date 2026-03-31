import React from 'react'
import Styled from './Input.styled'

type InputInternalProps = React.ComponentProps<'input'> & {
  text: string | { filename: string; extension: string }
  isPlaceholder: boolean
}

const Input = ({
  text,
  isPlaceholder,
  placeholder,
  ref,
  ...restInputProps
}: InputInternalProps & { ref?: React.Ref<HTMLInputElement> }) => {
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

export default Input

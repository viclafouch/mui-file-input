---
sidebar_position: 6
---

# TypeScript

This package is written in **TypeScript**. So you don't need to create your own types. Here an example if you use **TypeScript**.

**Nota bene**: Props are defined within the `MuiFileInputProps` type.

```tsx
import React from 'react'
import { MuiFileInput, type MuiFileInputProps } from 'mui-file-input'

const MyComponent = () => {
  const [value, setValue] = React.useState<File | null>(null)

  const handleChange = (newValue: File | null) => {
    setValue(newValue)
  }

  return (
    <MuiFileInput
      value={value}
      onChange={handleChange}
      hideSizeText
    />
  )
}
```

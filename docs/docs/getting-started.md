---
sidebar_position: 1
---

# Getting Started

## Install
```bash
npm install mui-file-input --save
```
or you can use **yarn**
```bash
yarn add mui-file-input
```

We have completed installing the package.

## Simple usage

Here is a simple usage for using the component:

```jsx
import React from 'react'
import { MuiFileInput } from 'mui-file-input'

const MyComponent = () => {
  const [file, setFile] = React.useState(null)

  const handleChange = (newFile) => {
    setFile(newFile)
  }

  return (
    <MuiFileInput value={file} onChange={handleChange} />
  )
}
```

## Congratulations !

That's all, now let's deep dive into the [props](/docs/api-reference).
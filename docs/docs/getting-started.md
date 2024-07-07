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

## Next.js integration

Learn how to use MUI file input with Next.js

Once you have installed `MUI File Input` in your next.js project, it is important to transpile it as it is an ESM package first.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
 transpilePackages: ['mui-file-input'],
 // your config
}

module.exports = nextConfig
```

## Congratulations !

That's all, now let's deep dive into the [props](/docs/api-reference).
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
or you can use **pnpm**
```bash
pnpm add mui-file-input
```

We have completed installing the package.

## Simple usage

Here is a simple usage for using the component:

```tsx
import React from 'react'
import { MuiFileInput } from 'mui-file-input'

const MyComponent = () => {
  const [value, setValue] = React.useState(null)

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <MuiFileInput value={value} onChange={handleChange} />
  )
}
```

## Next.js integration

Learn how to use MUI File Input with [Next.js](https://nextjs.org/).

Once you have installed `MUI File Input` in your Next.js project, it is important to transpile it as it is an ESM package first.

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['mui-file-input'],
  // your config
}

export default nextConfig
```

## Congratulations!

That's all, now let's deep dive into the [props](/docs/api-reference).

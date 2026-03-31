<div align="center">
  <img src="https://viclafouch.github.io/mui-file-input/img/logo.svg" width="80" />
</div>
<div align="center">
<h1>Material UI file input</h1>
  <p>A file input designed for the React library <a href="https://mui.com/">MUI (Material UI)</a></p>
</div>
<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/viclafouch/mui-file-input/blob/main/LICENSE)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![npm](https://img.shields.io/npm/v/mui-file-input)](https://www.npmjs.com/package/mui-file-input)

</div>

## Installation

```
npm install mui-file-input
```

## Usage

```jsx
import React from 'react'
import { MuiFileInput } from 'mui-file-input'

const MyComponent = () => {
  const [value, setValue] = React.useState(null)

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return <MuiFileInput value={value} onChange={handleChange} />
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

## [Documentation](https://viclafouch.github.io/mui-file-input/)

## Changelog

Go to [GitHub Releases](https://github.com/viclafouch/mui-file-input/releases)

## TypeScript

This library comes with TypeScript "typings". If you happen to find any bugs in those, create an issue.

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

## LICENSE

MIT

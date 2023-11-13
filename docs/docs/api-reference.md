---
sidebar_position: 3
---

# API Reference

This article discusses the API and props of **MuiFileInput**. Props are defined within `MuiFileInputProps`.

## `value`

- Type: `File` | `null` | `undefined`
- or if `multiple` is present: `File[]` | `undefined`
- Default: `undefined`

### Example

```tsx
const file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});

<MuiFileInput />
<MuiFileInput value={file} />
<MuiFileInput multiple value={[file]}/>
```

## `onChange`

- Type: `(value: File | null) => void`
- or if `multiple` is present: `(value: File[]) => void`

Gets called once the user updates the file value.

Example:

```tsx

const handleChange = (value) => {}

<MuiFileInput onChange={handleChange} />
```

## `inputProps => accept`

- Type: `string | undefined`
- Default: `undefined`

Like the native `accept` attribute, when present, it specifies that the user is allowed to enter (`png`, `jpeg`, videos, `pdf`..).
Check here for more info : https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept

```tsx
// TS will throw an error if the value is a single File instead of an array of Files.
<MuiFileInput inputProps={{ accept: 'video/*' }} />
<MuiFileInput inputProps={{ accept: '.png, .jpeg' }} />
<MuiFileInput inputProps={{ accept: 'audio/*, .pdf' }} />
```

## `multiple`

- Type: `boolean`
- Default: `false`

Like the native `multiple` attribute, when present, it specifies that the user is allowed to enter more than one value in the `<input>` element.
The type of the `value` prop will be `File[]` instead of `File`.

```tsx
// TS will throw an error if the value is a single File instead of an array of Files.
<MuiFileInput multiple />
```

## `hideSizeText`

- Type: `boolean`
- Default: `false`

In case you do not want to display the size of the current value.

```tsx
<MuiFileInput hideSizeText />
```

## `getInputText`

- Type: `(value: File | null) => string`
- or if `multiple` is present: `(value: File[]) => string`
- Default: `undefined`

Customize the render text inside the TextField.

```tsx
<MuiFileInput getInputText={(value) => value ? 'Thanks!' : ''} />
```

## `getSizeText`

- Type: `(value: File | null) => string`
- or if `multiple` is present: `(value: File[]) => string`
- Default: `undefined`

Customize the render text inside the size Typography.

```tsx
<MuiFileInput getSizeText={(value) => 'Very big'} />
```

## `clearIconButtonProps`

- Type: `IconButtonProps`
- Default: `undefined`

Override the clear IconButton and add a MUI icon.

Check here to check out all IconButtonProps : https://mui.com/material-ui/api/icon-button/

⚠ You have to install [@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material) library yourself.

```tsx
import CloseIcon from '@mui/icons-material/Close'
//...

<MuiFileInput
  closeButtonProps={{
    title: "Remove",
    children: <CloseIcon fontSize="small" />
  }}
/>
```

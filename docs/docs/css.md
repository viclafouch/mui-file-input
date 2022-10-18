---
sidebar_position: 5
---

# CSS

Like any component, if you want to override a component's styles using custom classes, you can use the `className` prop.

```jsx
<MuiFileInput className="my-class-name" />
```

Then, you can use the differents global class names (see below) to target an element of `MuiFileInput`.

| 	Global class                            | Description                                                                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `.MuiFileInput-TextField`                        | 	Styles applied to the root element.                                                                                                                   |
| `.MuiFileInput-Typography-size-text`                        | 	Styles applied to the size [Typography](https://mui.com/material-ui/api/typography/).                                                                                                                |
| `.MuiFileInput-IconButton`                        | 	Styles applied to to the clear [IconButton](https://mui.com/material-ui/api/icon-button/) component.                                                                                                       |
| `.MuiFileInput-placeholder`                        | 	Styles applied to the placeholder.                                                                                                                   |

For example: target the `.MuiFileInput-Typography-size-text` global class name to customize the size text.

## Example with styled-component / emotion

```jsx
import { styled } from 'styled-component' // or emotion
import { MuiFileInput } from 'mui-file-input'

const MuiFileInputStyled = styled(MuiFileInput)`
  & input + span {
    color: red;
  }
`

function MyComponent() {
  return <MuiFileInputStyled />
}
```
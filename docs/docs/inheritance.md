---
sidebar_position: 4
---

# TextField inheritance

While not explicitly documented, the props of the MUI **[TextField](https://mui.com/api/text-field)** component are also available on the **MuiFileInput** component.

See: https://mui.com/material-ui/api/text-field/

### Example

```jsx
import AttachFileIcon from '@mui/icons-material/AttachFile'
// ...

<MuiFileInput
  size="small"
  variant="outlined"
  disabled
  InputProps={{
    inputProps: {
      accept: 'video/*'
    },
    startAdornment: <AttachFileIcon />
  }}
/>
```

import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import {
  createTheme,
  InputAdornment,
  TextField,
  ThemeProvider
} from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MuiFileInput } from './index'

export default {
  title: 'MuiFileInput',
  component: MuiFileInput
} as ComponentMeta<typeof MuiFileInput>

const theme = createTheme()

export const Primary: ComponentStory<typeof MuiFileInput> = () => {
  const [value, setValue] = React.useState<File[]>([])

  const handleChange = (newValue: File | File[] | null) => {
    if (Array.isArray(newValue)) {
      setValue(newValue)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <MuiFileInput
        placeholder="Choisir un fichier"
        multiple
        value={value}
        onChange={handleChange}
        label="test"
        size="small"
      />
      <TextField
        placeholder="test"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachFileIcon />
            </InputAdornment>
          )
        }}
      />
    </ThemeProvider>
  )
}

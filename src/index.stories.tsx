import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CloseIcon from '@mui/icons-material/Close'
import { createTheme, ThemeProvider } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import { MuiFileInput } from './index'

export default {
  title: 'MuiFileInput',
  component: MuiFileInput
} satisfies Meta<typeof MuiFileInput>

const theme = createTheme()

export const Primary: StoryFn<typeof MuiFileInput> = () => {
  const [value, setValue] = React.useState<File[]>([])

  const handleChange = (newValue: File[]) => {
    setValue(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      <MuiFileInput
        sx={{ width: 300 }}
        placeholder="Choisir un fichier"
        clearIconButtonProps={{
          children: <CloseIcon fontSize="small" />
        }}
        slotProps={{
          input: {
            startAdornment: <AttachFileIcon />
          },
          htmlInput: {
            accept: '.csv'
          }
        }}
        required
        multiple
        value={value}
        onChange={handleChange}
        label="Your photo"
      />
    </ThemeProvider>
  )
}

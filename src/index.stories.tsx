import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { MuiFileInput } from './index'

export default {
  title: 'MuiFileInput',
  component: MuiFileInput
} as Meta<typeof MuiFileInput>

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
        inputProps={{
          accept: 'video/*'
        }}
        multiple
        value={value}
        onChange={handleChange}
        label="Your photo"
      />
    </ThemeProvider>
  )
}

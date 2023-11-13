import React from 'react'
import { describe, test } from 'vitest'
import { render } from '@testing-library/react'
import { MuiFileInput } from './index'
import '@testing-library/jest-dom'

describe('components/MuiFileInput', () => {
  test('should not crash', () => {
    render(<MuiFileInput />)
  })
})

import React from 'react'
import axe from 'axe-core'
import { describe, test } from 'vitest'
import { render } from '@testing-library/react'
import { MuiFileInput } from './index'
import '@testing-library/jest-dom/vitest'

describe('components/MuiFileInput', () => {
  test('should not crash', () => {
    render(<MuiFileInput />)
  })

  test('should meet accessibility standard WCAG 2.2AAA', async () => {
    const { container } = render(<MuiFileInput label="test label" />)
    const results = await axe.run(container, {
      runOnly: {
        type: 'tag',
        values: [
          'wcag2a',
          'wcag2aa',
          'wcag2aaa',
          'wcag21a',
          'wcag21aa',
          'wcag21aaa',
          'wcag22a',
          'wcag22aa',
          'wcag22aaa'
        ]
      }
    })
    expect(results.violations.length).toBe(0)
  })
})

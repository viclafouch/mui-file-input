import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import dts from 'vite-plugin-dts'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  build: {
    target: 'esnext',
    minify: true,
    lib: {
      formats: ['es'],
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'mui-file-input',
      fileName: format => `mui-file-input.${format}.js`
    },
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true,
        globals: {
          react: 'React',
          '@mui/material/TextField': 'TextField',
          '@mui/material/IconButton': 'IconButton',
          '@mui/material/Typography': 'Typography',
          '@mui/material/styles': 'styles',
          '@mui/icons-material/AttachFile': 'AttachFileIcon',
          '@mui/icons-material/Close': 'CloseIcon',
          '@mui/material/InputAdornment': 'InputAdornment',
          'react/jsx-runtime': 'jsxRuntime',
          'pretty-bytes': 'prettyBytes'
        }
      }
    }
  },
  plugins: [
    peerDepsExternal(),
    react(),
    dts({ rollupTypes: true, exclude: ['/**/*.stories.tsx', '/**/*.test.tsx'] })
  ]
})

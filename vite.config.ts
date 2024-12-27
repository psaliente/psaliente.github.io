/// <reference types="vitest" />
import { coverageConfigDefaults, defaultExclude } from 'vitest/config';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  test: {
    exclude: ['./e2e/*', ...defaultExclude],
    coverage: {
      exclude: ['./e2e/*', ...coverageConfigDefaults.exclude]
    }
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project under /<repo>/, so keep assets relative.
export default defineConfig({
  plugins: [react()],
  base: './',
})

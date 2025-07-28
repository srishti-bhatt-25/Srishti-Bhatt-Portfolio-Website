import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Srishti-Bhatt-Portfolio-Website/',  // <-- IMPORTANT LINE
  plugins: [react()],
})

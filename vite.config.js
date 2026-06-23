import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['vino-browsing-backend.onrender.com'],
    proxy: {
      '/api': {
        target: 'https://vino-browsing-backend.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/media': {
        target: 'https://vino-browsing-backend.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

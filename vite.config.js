import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['api.vinobrowsing.com'],
    proxy: {
      '/api': {
        target: 'https://api.vinobrowsing.com',
        changeOrigin: true,
        secure: false,
      },
      '/media': {
        target: 'https://api.vinobrowsing.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['ribbon-disbelief-preteen.ngrok-free.dev'],
    proxy: {
      '/api': {
        target: 'https://ribbon-disbelief-preteen.ngrok-free.dev',
        changeOrigin: true,
        secure: false,
        headers: {
          'ngrok-skip-browser-warning': '69420'
        }
      },
      '/media': {
        target: 'https://ribbon-disbelief-preteen.ngrok-free.dev',
        changeOrigin: true,
        secure: false,
        headers: {
          'ngrok-skip-browser-warning': '69420'
        }
      }
    }
  }
})

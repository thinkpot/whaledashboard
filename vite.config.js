import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // allow exactly these hostnames (add yours here)
    allowedHosts: ['localhost', '127.0.0.1', '8b29-2401-4900-1c75-499a-cf4-83e4-f7c0-cac2.ngrok-free.app'],
    // if you really want to allow everything (not recommended), use:
    // allowedHosts: true,
  },
})

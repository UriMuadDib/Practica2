import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.56.1',  // Reemplaza con la IP de tu computadora
    port: 5173,           // El puerto que quieres usar
    strictPort: true,     // Asegura que el puerto se respete (opcional)
  },
})

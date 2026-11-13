import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Rutas relativas para que funcione tanto en la raíz como en un subdirectorio
  // (por ejemplo, GitHub Pages).
  base: './',
  preview: {
    // Permite exponer la vista previa mediante túneles de Cloudflare.
    allowedHosts: ['.trycloudflare.com'],
  },
})

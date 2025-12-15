import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración principal de Vite para el proyecto Pseudo-LWay.
// Incluye el plugin de React para soporte JSX y recarga rápida.
// Documentación: https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

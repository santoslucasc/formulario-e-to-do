import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/formulario-e-to-do/', // <--- O NOME EXATO DO SEU REPO NO GITHUB
})

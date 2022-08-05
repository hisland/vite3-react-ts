import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dirListPlugin from 'vite-plugin-dir-list'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dirListPlugin()]
})

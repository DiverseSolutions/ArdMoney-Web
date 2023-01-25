import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteAliases } from 'vite-aliases'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteAliases({
      dir: 'src',
      deep: true,
      depth: 1,
      prefix: '@',
      useConfig: true,
      useTypescript: true,
    })
  ],
})

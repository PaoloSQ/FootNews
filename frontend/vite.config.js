import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@common': path.resolve(__dirname, 'src/components/common'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/_main.scss';`,
      },
    },
  },
})

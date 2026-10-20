import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    open:true,
    proxy:{
      '/api':'https://647b6f7c5a670c19a1c52cd1--glowing-paprenjak-e5a5a4.netlify.app/'
    }
  }
})

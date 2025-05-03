import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // রিপোজিটরি নাম অনুযায়ী পরিবর্তন করুন
})

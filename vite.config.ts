// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // 修正重點：確保這裡包含前後斜線，且名稱必須與 GitHub 倉庫名稱一致
  base: '/my-cool-timer/', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // ... 其他 PWA 設定
    })
  ],
})
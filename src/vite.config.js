// vite.config.js
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '0.0.0.0',   // コンテナ内で全IF待ち受け
    port: 5173,
    hmr: {
      host: 'localhost', // ブラウザから見えるホスト名（開発マシンでアクセスするなら 'localhost' が楽）
      port: 5173,
      protocol: 'ws',
    },
    watch: { usePolling: true }, // Docker環境のファイル監視が不安定な時の保険
  },
  plugins: [
    react(),
    laravel({
      input: ['resources/js/app.jsx'], // ← .jsx に統一（.js を使うなら両方そろえる）
      refresh: true,
    }),
  ],
})

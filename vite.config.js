import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index:             resolve(__dirname, 'index.html'),
        drenering:         resolve(__dirname, 'drenering.html'),
        planering:         resolve(__dirname, 'planering.html'),
        grofting:          resolve(__dirname, 'grofting.html'),
        masseforflyttning: resolve(__dirname, 'masseforflyttning.html'),
      },
    },
  },
})

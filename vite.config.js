import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: "./",
  build: {
    outDir: "nui",
    assetsDir: "assets",
    css: {
      fileName: "assets/index.css",
      assetsDir: "assets"
    },
    rollupOptions: {
      output: {
        entryFileNames: "assets/script.js",
        assetFileNames: "assets/[name].[ext]"
      }
    }
  },
  plugins: [svelte()],
})

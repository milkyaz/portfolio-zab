import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from 'node:path'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [tailwindcss(), vue(), VueDevTools(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

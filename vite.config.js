import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Learn-Svelte/", // change to your repo name
  plugins: [svelte()],
})

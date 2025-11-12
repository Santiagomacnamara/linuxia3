import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base for GitHub Pages: repo name replaced with inferred repository folder name.
  // If this is a user/organization site (username.github.io) use '/'.
  base: '/macboboversionpc/',
  plugins: [react()],
})

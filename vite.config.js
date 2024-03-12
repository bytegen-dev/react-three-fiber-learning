import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), "@babel/plugin-proposal-optional-chaining-assign", "@babel/preset-env",],
})

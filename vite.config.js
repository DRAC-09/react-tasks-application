import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-tasks-application/'
  // base: 'https://DRAC-09.github.io/react-tasks-application'
})
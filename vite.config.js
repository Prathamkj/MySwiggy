// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target:   
 'https://www.swiggy.com/dapi/', // Replace with actual API endpoint
        changeOrigin: true, // Important for CORS
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional, removes '/api' prefix
      },
    },
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['url'],
  },
})
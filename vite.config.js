import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // localhost
  // server:{
  //   proxy:{
  //     '/v2': 'https://www.reliancedigital.in/rildigitalws'
  //   }
  // },
  // netlify
  // server: {
  //   proxy: {
  //     '/v2': {
  //       target: 'https://www.reliancedigital.in',
  //       pathRewrite: { '^/v2': '/rildigitalws' },
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // },
  //vercel
  // server: {
  //   proxy: {
  //     '/v2': {
  //       target: 'https://www.reliancedigital.in/rildigitalws',
  //       pathRewrite: { '^/v2': '' },
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // },
  plugins: [react()],
})

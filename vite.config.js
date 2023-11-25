import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  server: {
    host: '127.0.0.1',
    port: 3334,
    proxy: {
      '/api': {
        target: 'https://ybd.freecourse.vip/', //实际请求地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }

    // proxy: {
    //   '/api': {
    //     target: '', //接口域名（你请求的第三方接口）
    //     changeOrigin: true, //是否跨域 （虚拟的站点需要更管origin）
    //     ws: true, //是否代理 websockets
    //     secure: true, //是否https接口
    //     pathRewrite: {
    //       //路径重置
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash][extname]',
        //manualChunks 两种使用形式
        // manualChunks:{
        //   elementPlus:['element-plus']
        // }
        manualChunks(id) {
          if (id.includes('element-plus')) {
            return 'element-plus'
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // resolve: {
  //   // Vite路径别名配置
  //   alias: {
  //     '@': path.resolve('./src')
  //   }
  // }
})

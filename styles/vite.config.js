import { defineConfig } from 'vite';
import path from 'path';


export default defineConfig ({   
    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "${path.resolve(__dirname, 'styles/scss/global.scss')}";`
          }
        }
      },
      build: {
        rollupOptions: {
          input: 'styles/scss/global.scss',
          output: {
            file: 'styles/styles.css'
          }
        }
      }
})
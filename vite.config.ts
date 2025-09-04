import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ['src/demo/**/*', 'src/App.tsx', 'src/main.tsx']
    })
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'ReactNativeWebUILib',
      formats: ['es', 'umd'],
      fileName: (format) => `react-native-web-ui-lib.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-native-web'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-native-web': 'ReactNativeWeb'
        }
      }
    }
  }
})

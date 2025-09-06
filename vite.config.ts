import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { tamaguiPlugin } from '@tamagui/vite-plugin';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      config: './skylight/config.ts',
      components: ['@tamagui/core'],
    }),
    dts({
      insertTypesEntry: true,
      exclude: ['src/demo/**/*', 'src/App.tsx', 'src/main.tsx'],
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@': resolve(__dirname, 'src/lib'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'DCXSkylight',
      formats: ['es', 'umd'],
      fileName: format => `dcx-skylight.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-native-web'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-native-web': 'ReactNativeWeb',
        },
      },
    },
  },
});

import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
    tsconfigPaths()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ascex-ui',
      fileName: 'ascex-ui'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'lodash', '@radix-ui'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'lodash': 'lodash',
          '@radix-ui': '@radix-ui'
        }
      }
    },
  }

})

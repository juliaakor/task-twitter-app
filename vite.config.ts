import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const defaultConfig = {
  plugins: [
    react({
      babel: {
        presets: ["@babel/preset-typescript"]
      }
    }),
    tsconfigPaths(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.json']
  },
  build: {
    outDir: 'build'
  }
} as UserConfig;

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      ...defaultConfig,
      server: {
        port: 3007,
        open: true,
      },
    }
  }

  return {
    ...defaultConfig,
  }
})

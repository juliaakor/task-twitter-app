import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const defaultConfig = {
  build: {
    outDir: 'build',
  },
  plugins: [
    react({
      babel: {
        presets: ['@babel/preset-typescript'],
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.json'],
  },
} as UserConfig;

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      ...defaultConfig,
      server: {
        open: true,
        port: 3007,
      },
    };
  }

  return {
    ...defaultConfig,
  };
});

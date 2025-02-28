import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import { defineConfig, UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

config();

const getDefaultConfig = (mode: string) =>
  ({
    build: {
      outDir: 'build',
    },
    define: {
      'process.env': {
        MODE: mode,
        ...process.env,
      },
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
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.png'],
    },
  }) as UserConfig;

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      ...getDefaultConfig(mode),
      server: {
        open: true,
        port: 3007,
      },
    };
  }

  return {
    ...getDefaultConfig(mode),
  };
});

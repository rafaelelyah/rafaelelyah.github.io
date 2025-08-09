// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/', // Mantido para deploy na raiz
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    allowedHosts: [
      'skan-dev.nbold.dev',
      'localhost'
    ],
    host: true,
    hmr: {
      host: 'localhost'
    }
  },
  build: {
    outDir: 'dist',
  },
  logLevel: 'info',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@utils': '/src/utils',
    },
  },

});

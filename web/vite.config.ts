import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
  plugins: [react()],
  base: '/',
  server: {
    allowedHosts: [
      env.VITE_ALLOWED_HOST || 'localhost:3000',
    ],
    host: true,
    hmr: {
      host: 'localhost'
    }
  },
  build: {
    outDir: '../backend/public',
    emptyOutDir: true
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
};
});
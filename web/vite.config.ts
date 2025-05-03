import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'skan-dev.nbold.dev', // Your custom domain
      'localhost'           // Keep local development access
    ],
    host: true, // Allow external network access (optional but useful for Cloudflare)
    hmr: {
      host: 'localhost:3000' // Match your Cloudflare domain
    }
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
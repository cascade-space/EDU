
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  base: '/edu-hub-connector-62/', // Updated base path to root
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Maps @ to src folder
    }
  },
  build: {
    sourcemap: true, // Enable source maps
  },
  server: {
    host: "::",
    port: 8080
  }
}));

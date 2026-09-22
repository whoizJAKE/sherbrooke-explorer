import { defineConfig } from 'vite';

// Relative base so the same build loads from GitHub Pages (/sherbrooke-explorer/)
// and from the packaged Electron app (file://).
export default defineConfig({
  base: './',
  server: { port: 5173, strictPort: true },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 2000,
  },
});

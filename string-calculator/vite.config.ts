import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Ensure this is set to 'jsdom'
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
});

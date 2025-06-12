import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 This is the correct code for Vercel deployment
export default defineConfig({
  plugins: [react()],
});

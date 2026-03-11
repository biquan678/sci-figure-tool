import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (id.includes('jspdf')) return 'jspdf-vendor';
          if (id.includes('html2canvas')) return 'html2canvas-vendor';
          if (id.includes('utif')) return 'utif-vendor';
          if (id.includes('i18next') || id.includes('react-i18next')) return 'i18n-vendor';
        },
      },
    },
  },
});

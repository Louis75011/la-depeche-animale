import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'La Dépêche Animale',
        short_name: 'DépêcheAnimale',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#004080',
        icons: [],
      },
    }),
  ],
});

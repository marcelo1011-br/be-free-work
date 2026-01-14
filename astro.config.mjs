// @ts-check
import { defineConfig } from 'astro/config';
import VitePWA from '@vite-pwa/astro';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL base do site sem barra no final para evitar duplicidade
  site: 'https://befreetours.com.br',

  // Configuração para garantir que o Astro não adicione barras extras no final das URLs
  trailingSlash: 'never',

  integrations: [
    // Integração oficial de Sitemap com filtro de limpeza de URLs
    sitemap({
      serialize(item) {
        // Remove barras duplas (//) caso o Astro tente gerá-las
        if (item.url.includes('https://befreetours.com.br//')) {
          item.url = item.url.replace('https://befreetours.com.br//', 'https://befreetours.com.br/');
        }
        return item;
      },
    }),

    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Be Free Tours - Private Tours in Rio',
        short_name: 'Be Free Tours',
        description: 'Premium private tours in Rio de Janeiro since 2013',
        theme_color: '#0a1628',
        background_color: '#0a1628',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{css,js,html,webp,png,svg,ico,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],

  // Os redirecionamentos foram removidos deste arquivo para evitar duplicação e
  // conflitos com o arquivo .htaccess, além de reduzir o tamanho da pasta dist.

  // Build otimizado para gerar pastas limpas
  build: {
    format: 'directory',
  },

  // Servidor de desenvolvimento
  server: {
    port: 3000,
    host: true,
  },
});

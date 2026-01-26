
import { defineConfig } from 'astro/config';
import VitePWA from '@vite-pwa/astro';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  
  site: 'https://befreetours.com.br',

  
  trailingSlash: 'never',

  integrations: [
    
    sitemap({
      serialize(item) {
        
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
                maxAgeSeconds: 60 * 60 * 24 * 365, 
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
                maxAgeSeconds: 60 * 60 * 24 * 365, 
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

  
  

  
  build: {
    format: 'directory',
  },

  
  server: {
    port: 3000,
    host: true,
  },
});

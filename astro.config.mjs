// @ts-check
import { defineConfig } from 'astro/config';
import VitePWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({

  site: 'https://befreetours.com.br',

  integrations: [
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

  // Redirecionamentos (URLs antigas -> Novas URLs)
  redirects: {
    '/home/private-tours-rio/': '/en/private-tours',
    '/home/private-tours-rio/rio-city-tours/christ-redeemer-sugarloaf-tour/': '/en/private-tours/essential-rio',
    '/home/private-tours-rio/rio-city-tours/half-day-highlights/': '/en/private-tours/rio-express',
    '/home/private-tours-rio/rio-day-trips/petropolis-imperial-city/': '/en/private-tours/petropolis-imperial',
    '/home/private-tours-rio/walking-tours/city-center-historic-walk/': '/en/private-tours/downtown-rio-walking',
    '/home/private-tours-rio/rio-day-trips/ilha-grande-speedboat/': '/en/private-tours/island-escape-ilha-grande',
    '/home/private-tours-rio/custom-rio-tours/design-your-tour/': '/en/private-tours/custom-tour',
    '/home/private-tours-rio/rio-city-tours/': '/',
    '/home/private-tours-rio/rio-day-trips/': '/',
    '/home/private-tours-rio/walking-tours/': '/',

    // Tour Slug Redirects - Old slugs redirect to new slugs (SEO preservation)
    '/en/private-tours/unforgettable-rio': '/en/private-tours/essential-rio',
    '/en/private-tours/rio-flash': '/en/private-tours/rio-express',
    '/en/private-tours/sunrise-sugarloaf': '/en/private-tours/first-light-sunrise',
    '/en/private-tours/sunset-magic': '/en/private-tours/golden-hour-rio',
    '/en/private-tours/sunset-roxy': '/en/private-tours/sunset-culture-roxy',
    '/en/private-tours/sky-high': '/en/private-tours/tijuca-rainforest',
    '/en/private-tours/niteroi': '/en/private-tours/niteroi-mac-museum',
    '/en/private-tours/future-visions': '/en/private-tours/modern-rio-museum-tomorrow',
    '/en/private-tours/historical-walking': '/en/private-tours/downtown-rio-walking',
    '/en/private-tours/buzios': '/en/private-tours/buzios-riviera',
    '/en/private-tours/petropolis': '/en/private-tours/petropolis-imperial',
    '/en/private-tours/ilha-grande': '/en/private-tours/island-escape-ilha-grande',

    // Blog Redirects - All old blog posts redirect to main blog page
    '/rio-beyond-the-guidebook/': '/en/blog',
    '/foodie-paradise-unveiling-rios-secret-street-food-gems-beyond-churrasco/': '/en/blog',
    '/which-type-of-tour-matches-with-you/': '/en/blog',
    '/sala-cecilia-meirelles/': '/en/blog',
    '/botanical-garde-rio-de-janeiro/': '/en/blog',
    '/ccbb-centro-cultural-banco-do-brasil/': '/en/blog',
    '/museu-nacional-de-belas-artes/': '/en/blog',
    '/the-plastic-arts-and-brazil-part-1-jean-baptiste-debret-and-brazil/': '/en/blog',
    '/rio-world-capital-of-architecture-by-unesco/': '/en/blog',
    '/lapa-a-rio-wonder/': '/en/blog',
  },

  // Build otimizado
  build: {
    format: 'directory', // URLs sem .html (ex: /en/about ao invés de /en/about.html)
  },

  // Servidor de desenvolvimento
  server: {
    port: 3000,
    host: true,
  },
});

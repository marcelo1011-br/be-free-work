# REPO-AUDIT — Be Free Tours
**Data:** 2026-06-02 | **Branch:** main | **Último commit:** `8336a475` (2026-05-25) | **Auditor:** Claude Code (read-only)

> **Contexto:** Repositório que foi editado intensamente por agentes de IA (Codex CLI / ChatGPT) desde fevereiro de 2026. O objetivo deste relatório é mapear o estado exato do repo — tanto o que está commitado quanto o que está na working tree — antes de qualquer reconstrução.

---

## 1. STACK E VERSÕES

### Pacotes (versões exatas do lockfile `package-lock.json`)
| Pacote | Range em package.json | Versão resolvida |
|---|---|---|
| `astro` | `^6.3.7` | **6.3.7** |
| `@astrojs/sitemap` | `^3.7.2` | **3.7.2** |
| `@vite-pwa/astro` | `^1.2.0` | **1.2.0** |
| `flatpickr` | `^4.6.13` | **4.6.13** |
| `playwright` | `^1.49.1` | **1.57.0** ⚠️ resolvido além da range |

> **Nota:** o `audit-report.md` antigo (2026-04-01, ainda presente na raiz) menciona "Astro 6.1.2" — versão desatualizada, o repo foi atualizado desde então.

### Gerenciador de pacotes
- Lockfile: `package-lock.json` (npm, lockfileVersion 3)
- Node em uso no sistema: `v22.17.0`
- Node esperado pelo projeto: **não especificado** — sem `.nvmrc`, sem `.node-version`, sem campo `engines` em `package.json`

### Scripts disponíveis
```json
"dev":      "astro dev"
"build":    "astro build"
"preview":  "astro preview"
"astro":    "astro"
"brochure": "node scripts/generate-brochures.js"
```

### Frameworks de UI
**Nenhum.** Projeto 100% Astro components (`.astro`) + JavaScript vanilla. Sem React, Vue, Svelte ou Solid.

### Adapter / output mode
Sem adapter de SSR. Output é **static** com `build.format: 'directory'` → cada página vira `/pagina/index.html`. Toda a lógica de roteamento e i18n acontece em build time.

---

## 2. COMO AS PÁGINAS SÃO COMPOSTAS

### Roteamento i18n
Implementado por **pastas** (`src/pages/en/`, `src/pages/es/`, `src/pages/pt-br/`). Sem middleware, sem configuração `i18n` nativa do Astro. Rotas dinâmicas usam `export async function getStaticPaths()` que lê os arrays de dados por idioma.

```
src/pages/
  index.astro                    ← raiz: noindex + meta-refresh → /en/
  404.astro
  en/
    index.astro
    {13 páginas estáticas}
    blog/[slug].astro             ← getStaticPaths → getCollection('blog') filtrado por idioma
    private-tours/[slug].astro    ← getStaticPaths → tours['en']
    experiences/[slug].astro      ← getStaticPaths → experiences['en']
  es/  (estrutura espelhada com slugs localizados)
  pt-br/  (estrutura espelhada com slugs localizados)
```

### Layout único
**`src/layouts/BaseLayout.astro`** — layout compartilhado por todas as páginas. Props:

| Prop | Efeito |
|---|---|
| `title` | `<title>` (fallback: default por idioma) |
| `description` | `<meta name="description">` |
| `image` | URL da OG image |
| `type` | `og:type` (`website`/`article`) |
| `noindex` | injeta `noindex, nofollow` |
| `preloadImage` / `preloadImageSrcSet` / `preloadImageSizes` | `<link rel="preload" as="image">` |
| `schema` | Schema(s) adicionais para o `@graph` (array ou objeto único) |
| `ogTags` | Overrides de Open Graph e Twitter (objeto `{property: value}`) |

Componentes globais instanciados no layout: `Navbar`, `Footer`, `ExitIntentPopup`, `TourSelectModal`.

### Geração de title / meta / canonical / hreflang / schema

Toda a lógica de SEO vive em `BaseLayout.astro` (frontmatter) + `src/utils/seoHelpers.js`:

- **canonical:** `new URL(Astro.url.pathname, siteUrl)` onde `siteUrl = Astro.site.toString().replace(/\/$/, "")`
- **hreflang:** `getHreflangPaths(currentPath)` em `src/i18n/hreflang.js` → retorna `{ en, es, "pt-br" }` com paths corretos; 4 tags emitidas (`en`, `es`, `pt-BR`, `x-default → en`)
- **schema.org:** padrão `@graph`. BaseLayout cria nó `Organization/TravelAgency/LocalBusiness` com `aggregateRating: { ratingValue: "4.9", reviewCount: "800" }`. Cada página injeta schemas adicionais via prop `schema` que são merged no mesmo `@graph`.
- **JSON-LD:** gerado programaticamente por helpers em `seoHelpers.js` (1145 linhas). Nunca hardcoded inline nas páginas.

### Dicionário de UI
`src/i18n/ui.js` — objeto `{ en: {...}, es: {...}, "pt-br": {...} }` com ~100 chaves flat por idioma. Usado via `useTranslations(lang)` de `src/i18n/utils.js`.

---

## 3. ONDE MORA O CONTEÚDO

### Tours — `src/data/tours.js` (1861 linhas)
Objeto `{ en: [...], es: [...], "pt-br": [...] }`. **Dados completamente triplicados por idioma** — não há referência cruzada; cada array de idioma é independente. O mapeamento de slugs entre idiomas é feito separadamente em `src/i18n/hreflang.js`.

**Tours ativos por idioma (slugs não-comentados):**

| # | EN | ES | PT-BR |
|---|---|---|---|
| 1 | `essential-rio` | `essential-rio` | `rio-essencial` |
| 2 | `rio-express` | `rio-express` | `passeio-expresso-rio-5-horas-cristo-pao-acucar` |
| 3 | `first-light-sunrise` | `amanecer-rio` | `nascer-sol-pao-acucar-cristo-redentor-passeio-privado` |
| 4 | `golden-hour-rio` | `hora-dorada-rio` | `passeio-por-do-sol-rio-cristo-redentor-pao-acucar` |
| 5 | `sunset-culture-roxy` | `atardecer-cultura-roxy` | `por-do-sol-cultura-roxy` |
| 6 | `island-escape-ilha-grande` | `island-escape-ilha-grande` | `island-escape-ilha-grande` |
| 7 | `petropolis-imperial` | `petropolis-imperial` | `passeio-privado-petropolis-cidade-imperial` |
| 8 | `tijuca-rainforest` | `bosque-tijuca` | `pao-acucar-floresta-tijuca-jardim-botanico-passeio` |
| 9 | `niteroi-mac-museum` | `niteroi-museo-mac` | `niteroi-museo-arte-contemporanea-passeio-privado` |
| 10 | `modern-rio-museum-tomorrow` | `rio-moderno-museo-manana` | `museu-amanha-experiencia-carnaval-rio-passeio` |
| 11 | `custom-tour` | `tour-personalizado` | `passeio-personalizado` |

**Tours desativados (inside `/* */` em tours.js):**
- `buzios-riviera` (EN/ES/PT-BR) — também comentado em `hreflang.js` e `.htaccess`
- `downtown-rio-walking`, `santa-teresa-walking`, `food-walking`, `little-africa` (EN) — migrados para `experiences.js`
- Equivalentes ES/PT-BR dos walking tours também comentados em seus blocos

**Estrutura de preços:**
- `{ from: N, priceTable: {1: N, ..., 12: N} }` — por grupo, USD
- `{ standard: {1: N, ...} }` — por grupo de barco (Ilha Grande)
- `{ perPerson: N }` — por pessoa (experiences)
- `{ custom: true }` — sem preço fixo

### Experiences — `src/data/experiences.js`
Mesma estrutura (`{ en, es, "pt-br" }`). Experiences ativas:

| EN slug | ES slug | PT-BR slug | Pricing |
|---|---|---|---|
| `rio-food-walking-tour` | `tour-gastronomico-rio` | `food-walking-tour-rio` | $155/pax |
| `little-africa-walking-tour` | `pequena-africa-tour` | `pequena-africa-tour` | — |
| `downtown-rio-walking` | `downtown-rio-walking` | `downtown-rio-walking` | — |
| `santa-teresa-walking` | `santa-teresa-walking` | `santa-teresa-walking` | — |

Desativado: `community-based-experience` / `experiencia-comunitaria` / `experiencia-comunidade` (comentado nas 3 línguas)

### Blog — `src/content/blog/` (Content Collection)
`src/content.config.ts` define **uma única coleção `blog`** com `glob: '**/*.{md,mdx}'` apontando para `./src/content/blog`. Os 27 posts de 3 idiomas ficam no mesmo pool — isso causa o warning "duplicate id" no build (posts com mesmo slug em idiomas diferentes).

```
src/content/blog/
  en/   → 9 posts .md
  es/   → 9 posts .md
  pt-br/→ 9 posts .md
```

Slugs dos posts (EN → ES → PT-BR):
| EN slug | ES slug | PT-BR slug |
|---|---|---|
| `best-time-visit-rio-2026` | (mesmo) | (mesmo) |
| `christ-redeemer-complete-guide-2026` | (mesmo) | (mesmo) |
| `hidden-beaches-rio-locals-love` | (mesmo) | (mesmo) |
| `how-much-does-private-tour-rio-cost` | `cuanto-cuesta-tour-privado-rio-de-janeiro` | `quanto-custa-passeio-privativo-rio-de-janeiro` |
| `is-rio-de-janeiro-safe-for-tourists` | (mesmo) | (mesmo) |
| `rio-carnaval-history-2026` | `historia-carnaval-rio-2026` | (mesmo) |
| `rio-de-janeiro-3-days-itinerary` | `rio-de-janeiro-3-dias-itinerario` | `rio-de-janeiro-3-dias-roteiro` |
| `rio-food-guide-must-try-dishes` | (mesmo) | (mesmo) |
| `rio-private-vs-group-tour` | `rio-tour-privado-vs-grupal` | `rio-passeio-privativo-vs-grupo` |

> 5 dos 9 posts têm o **mesmo slug em todos os 3 idiomas** — sem localização de slug.

### Outros dados
`homeContent.js`, `pageContent.js`, `testimonials.js`, `dayTripsContent.js`, `experiencesHubContent.js`, `privateToursHubContent.js`, `privateGuideContent.js`, `galleryContent.js` — todos arquivos JS com objetos `{ en, es, "pt-br" }`.

### Variáveis de ambiente
`.env.example`:
```
PUBLIC_FORMSPREE_BOOKING=mgoeyojz   # ATIVA — BookingModal → formspree.io/f/mgoeyojz
# PUBLIC_FORMSPREE_CONTACT=          # Reservado
# PUBLIC_FORMSPREE_NEWSLETTER=       # Reservado
# PUBLIC_FORMSPREE_QUOTE=            # Reservado
```
Único uso de `import.meta.env`: `src/config/formspree.js`. Se a variável estiver ausente em build, falha explicitamente.

---

## 4. SEO / MIGRAÇÃO

### Sitemap
Gerado por `@astrojs/sitemap` em `astro.config.mjs`:
- Filtro: exclui `https://befreetours.com.br/` (raiz sem idioma)
- Serialize: injeta hreflang links via `getHreflangPaths()` em cada URL e corrige eventual double-slash
- Output: `sitemap-index.xml` (referenciado em `robots.txt`)

### Redirects — `public/.htaccess` (único arquivo de redirects)
Não existe `_redirects`, `vercel.json`, `netlify.toml` nem redirects em `astro.config.mjs`.

**Estrutura do .htaccess:**

**Bloco 1 — HTTPS + host canônico (301):**
```
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^befreetours\.com\.br$ [NC]
RewriteRule ^ https://befreetours.com.br%{REQUEST_URI} [R=301,L]
```

**Bloco 2 — Raiz → /en/ (⚠️ 302, não 301):**
```
RewriteRule ^$ /en/ [R=302,L]
```

**Bloco 3 — Normalização index.html (301):**
```
RewriteRule ^(.*)/index\.html$ /$1/ [R=301,L]
```

**Bloco 4 — Redirects SEO (~80 regras 301):**

```apache
# Estrutura /home/ legada do site antigo
Redirect 301 /home/private-tours-rio/ /en/private-tours
Redirect 301 /home/private-tours-rio/rio-city-tours/ /en/private-tours
Redirect 301 /home/private-tours-rio/rio-day-trips/ /en/private-tours
Redirect 301 /home/private-tours-rio/walking-tours/ /en/private-tours
Redirect 301 /home/private-tours-rio/custom-rio-tours/design-your-tour/ /en/private-tours/custom-tour
Redirect 301 /home/private-tours-rio/rio-city-tours/christ-redeemer-sugarloaf-tour/ /en/private-tours/essential-rio
Redirect 301 /home/private-tours-rio/rio-city-tours/half-day-highlights/ /en/private-tours/rio-express
Redirect 301 /home/private-tours-rio/rio-day-trips/ilha-grande-speedboat/ /en/private-tours/island-escape-ilha-grande
Redirect 301 /home/private-tours-rio/rio-day-trips/petropolis-imperial-city/ /en/private-tours/petropolis-imperial
Redirect 301 /home/private-tours-rio/walking-tours/city-center-historic-walk/ /en/private-tours/downtown-rio-walking

# Slugs renomeados — EN
Redirect 301 /en/private-tours/unforgettable-rio /en/private-tours/essential-rio
Redirect 301 /en/private-tours/rio-flash /en/private-tours/rio-express
Redirect 301 /en/private-tours/sunrise-sugarloaf /en/private-tours/first-light-sunrise
Redirect 301 /en/private-tours/sunset-magic /en/private-tours/golden-hour-rio
Redirect 301 /en/private-tours/sunset-roxy /en/private-tours/sunset-culture-roxy
Redirect 301 /en/private-tours/ilha-grande /en/private-tours/island-escape-ilha-grande
Redirect 301 /en/private-tours/petropolis /en/private-tours/petropolis-imperial
Redirect 301 /en/private-tours/sky-high /en/private-tours/tijuca-rainforest
Redirect 301 /en/private-tours/niteroi /en/private-tours/niteroi-mac-museum
Redirect 301 /en/private-tours/future-visions /en/private-tours/modern-rio-museum-tomorrow
Redirect 301 /en/private-tours/historical-walking /en/private-tours/downtown-rio-walking

# Slugs renomeados — ES
Redirect 301 /es/tours-privados/rio-inolvidable /es/tours-privados/essential-rio
Redirect 301 /es/tours-privados/rio-flash /es/tours-privados/rio-express
Redirect 301 /es/tours-privados/amanecer-pao-acucar /es/tours-privados/amanecer-rio
Redirect 301 /es/tours-privados/magia-atardecer /es/tours-privados/hora-dorada-rio
Redirect 301 /es/tours-privados/atardecer-roxy /es/tours-privados/atardecer-cultura-roxy
Redirect 301 /es/tours-privados/ilha-grande /es/tours-privados/island-escape-ilha-grande
Redirect 301 /es/tours-privados/petropolis /es/tours-privados/petropolis-imperial
Redirect 301 /es/tours-privados/cielo-alto /es/tours-privados/bosque-tijuca
Redirect 301 /es/tours-privados/niteroi /es/tours-privados/niteroi-museo-mac
Redirect 301 /es/tours-privados/visiones-futuro /es/tours-privados/rio-moderno-museo-manana
Redirect 301 /es/tours-privados/caminata-historica /es/tours-privados/downtown-rio-walking

# Slugs renomeados — PT-BR
Redirect 301 /pt-br/passeios-privados/rio-inesquecivel /pt-br/passeios-privados/rio-essencial
Redirect 301 /pt-br/passeios-privados/rio-flash /pt-br/passeios-privados/passeio-expresso-rio-5-horas-cristo-pao-acucar
Redirect 301 /pt-br/passeios-privados/nascer-sol-pao-acucar /pt-br/passeios-privados/nascer-sol-pao-acucar-cristo-redentor-passeio-privado
Redirect 301 /pt-br/passeios-privados/magia-por-do-sol /pt-br/passeios-privados/passeio-por-do-sol-rio-cristo-redentor-pao-acucar
Redirect 301 /pt-br/passeios-privados/por-do-sol-roxy /pt-br/passeios-privados/por-do-sol-cultura-roxy
Redirect 301 /pt-br/passeios-privados/ilha-grande /pt-br/passeios-privados/island-escape-ilha-grande
Redirect 301 /pt-br/passeios-privados/petropolis /pt-br/passeios-privados/passeio-privado-petropolis-cidade-imperial
Redirect 301 /pt-br/passeios-privados/alto-ceu /pt-br/passeios-privados/pao-acucar-floresta-tijuca-jardim-botanico-passeio
Redirect 301 /pt-br/passeios-privados/niteroi /pt-br/passeios-privados/niteroi-museo-arte-contemporanea-passeio-privado
Redirect 301 /pt-br/passeios-privados/visoes-futuro /pt-br/passeios-privados/museu-amanha-experiencia-carnaval-rio-passeio
Redirect 301 /pt-br/passeios-privados/caminhada-historica /pt-br/passeios-privados/downtown-rio-walking

# Blog e institucional
Redirect 301 /rio-beyond-the-guidebook/ /en/blog
Redirect 301 /en/contato/ /en/contact
Redirect 301 /pt-br/contact /pt-br/contato
Redirect 301 /privacy-policy/ /en/privacy-policy

# Correções específicas antes dos catch-alls
Redirect 301 /en/tours-privados/downtown-rio-walking /en/private-tours/downtown-rio-walking
Redirect 301 /pt-br/tours-privados/hora-dorada-rio /pt-br/passeios-privados/por-do-sol-cultura-roxy

# Catch-alls para idiomas errados
RedirectMatch 301 ^/en/tours-privados/(.*)$ /en/private-tours
RedirectMatch 301 ^/pt-br/tours-privados/(.*)$ /pt-br/passeios-privados

# Blog duplication fixes (404s do GSC)
RedirectMatch 301 ^/(en|es|pt-br)/blog/blog/(.+)$ /$1/blog/$2
RedirectMatch 301 ^/en/blog/en/(.+)$ /en/blog/$1
RedirectMatch 301 ^/es/blog/es/(.+)$ /es/blog/$1
RedirectMatch 301 ^/pt-br/blog/pt-br/(.+)$ /pt-br/blog/$1

# Estrutura /tours/ antiga
Redirect 301 /en/tours/unforgettable-rio-christ-redeemer-sugarloaf-tour /en/private-tours/essential-rio
Redirect 301 /en/tours/petropolis-imperial-city-private-tour /en/private-tours/petropolis-imperial
Redirect 301 /en/tours/rio-food-walking-tour-brazilian-cuisine /en/experiences/rio-food-walking-tour
Redirect 301 /en/tours/little-africa-heritage-tour-rio-afro-brazilian-culture /en/experiences/little-africa-walking-tour
Redirect 301 /es/tours/tour-privado-petropolis-ciudad-imperial /es/tours-privados/petropolis-imperial
Redirect 301 /es/tours/tour-herencia-pequena-africa-rio-cultura-afrobrasile /es/experiencias/pequena-africa-tour
Redirect 301 /pt-br/tours/passeio-privado-petropolis-cidade-imperial /pt-br/passeios-privados/passeio-privado-petropolis-cidade-imperial
Redirect 301 /pt-br/tours/tour-gastronomico-rio-cozinha-brasileira /pt-br/experiencias/food-walking-tour-rio
Redirect 301 /pt-br/tours/tour-heranca-pequena-africa-rio-cultura-afrobrasileira /pt-br/experiencias/pequena-africa-tour

# Idioma errado em private-tours
Redirect 301 /es/private-tours /es/tours-privados
Redirect 301 /es/private-tours/ /es/tours-privados/
Redirect 301 /pt-br/private-tours /pt-br/passeios-privados
Redirect 301 /pt-br/private-tours/ /pt-br/passeios-privados/
Redirect 301 /es/private-tours/essential-rio /es/tours-privados/essential-rio
Redirect 301 /es/private-tours/first-light-sunrise /es/tours-privados/amanecer-rio
Redirect 301 /pt-br/private-tours/essential-rio /pt-br/passeios-privados/rio-essencial

# URLs sem idioma (site anterior)
Redirect 301 /private-tours-rio /en/private-tours
Redirect 301 /private-tours-rio/ /en/private-tours/
Redirect 301 /private-tour-rio-de-janeiro /en/private-tours
Redirect 301 /sunrise-at-sugar-loaf-and-christ-the-redeemer /en/private-tours/first-light-sunrise
Redirect 301 /sunrise-at-sugar-loaf-and-christ-the-redeemer/ /en/private-tours/first-light-sunrise
# ... (mais ~15 variantes de slugs sem prefixo de idioma)

# Posts legados do blog sem idioma
Redirect 301 /which-type-of-tour-matches-with-you/ /en/blog
Redirect 301 /rio-world-capital-of-architecture-by-unesco/ /en/blog
# ... (mais ~8 posts legados)

# WordPress e páginas institucionais legadas
Redirect 301 /wp-content/uploads/2024/07/be-free-tours-brochure-download.pdf /en/private-tours
Redirect 301 /privacy-policy /en/privacy-policy
Redirect 301 /cookie-policy-us /en/privacy-policy
Redirect 301 /cookie-policy-us/ /en/privacy-policy
```

### Hreflang e Canonical
- **Canonical:** `new URL(Astro.url.pathname, siteUrl)` — com trailing slash (pois `trailingSlash: 'always'`)
- **Hreflang:** `getHreflangPaths()` em `src/i18n/hreflang.js` — mapas hardcoded para tours, experiences, blog e páginas estáticas; fallback por substituição de prefixo. 4 tags por página (`en`, `es`, `pt-BR`, `x-default → en`)

### robots.txt
**Estático** em `public/robots.txt`. Permite todos os crawlers. Bots de IA explicitamente permitidos: GPTBot, Claude-Web, Google-Extended, PerplexityBot, CCBot, FacebookBot. Aponta para `sitemap-index.xml`.

---

## 5. BUILD E DEPLOY

### Build
```bash
npm run build  →  astro build
```
Output: `dist/` — HTML estático. Configurações críticas:
```js
site: 'https://befreetours.com.br'
trailingSlash: 'always'
build: { format: 'directory' }
```

### Deploy
**Sem CI/CD.** Sem `.github/workflows/`, sem configuração de deploy automatizado, sem arquivo de pipeline. Deploy é manual para a Hostinger, presumivelmente via FTP ou hPanel File Manager. **Nenhuma evidência no repo de qual commit está publicado em produção.**

---

## 6. INVENTÁRIO E SAÚDE (sumário)

### Árvore src/ (3 níveis)
```
src/
├── components/       (25 arquivos .astro)
│   ├── BookingModal.astro ⚠️ modificado (unstaged)
│   ├── Breadcrumbs.astro
│   ├── CTAFinal.astro
│   ├── DayTripsPillar.astro     ← novo no último commit grande (mai/26)
│   ├── DayTripsTeaser.astro     ← novo
│   ├── ExitIntentPopup.astro
│   ├── ExperiencesHubSections.astro ⚠️ modificado (unstaged)
│   ├── FAQ.astro
│   ├── FeaturedExperiences.astro
│   ├── FeaturedTours.astro ⚠️ modificado (unstaged)
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── HeroPages.astro          ← novo no último commit grande
│   ├── HomepageTestimonials.astro
│   ├── HowItWorks.astro ⚠️ modificado (unstaged)
│   ├── Navbar.astro
│   ├── PrivateGuidePillar.astro ← novo
│   ├── PrivateGuideTeaser.astro ← novo
│   ├── PrivateToursHubSections.astro ⚠️ modificado (unstaged)
│   ├── ProductDetailPage.astro
│   ├── Testimonials.astro
│   ├── TourCard.astro
│   ├── TourSelectModal.astro
│   ├── TrustBar.astro
│   └── WhyUs.astro
├── config/
│   └── formspree.js
├── content/
│   └── blog/
│       ├── en/   (9 posts .md)
│       ├── es/   (9 posts .md)
│       └── pt-br/ (9 posts .md)
├── content.config.ts
├── data/
│   ├── dayTripsContent.js       ← novo (mai/26)
│   ├── experiencesHubContent.js ← novo
│   ├── experiences.js
│   ├── galleryContent.js
│   ├── homeContent.js
│   ├── pageContent.js
│   ├── privateGuideContent.js   ← novo
│   ├── privateToursHubContent.js← novo
│   ├── testimonials.js
│   └── tours.js
├── i18n/
│   ├── blogSlugMap.js
│   ├── hreflang.js
│   ├── routes.js
│   ├── ui.js
│   └── utils.js
├── images/
│   ├── about/
│   ├── blog/       (10 imagens .webp)
│   ├── gallery/    (43 imagens .webp)
│   ├── heroes/     (1 imagem home hero)
│   ├── logo/       (logo.png + logo.svg)
│   └── tours/
│       ├── cards/  (15 imagens -card.webp)
│       └── heroes/ (16 imagens -hero.webp)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── 404.astro
│   ├── index.astro
│   ├── en/     (13 estáticas + 3 rotas [slug])
│   ├── es/     (13 estáticas + 3 rotas [slug])
│   └── pt-br/  (13 estáticas + 3 rotas [slug])
├── styles/
│   ├── brochure.css
│   └── global.css ⚠️ modificado (unstaged)
└── utils/
    ├── dateHelpers.js
    └── seoHelpers.js
```

---

## 7. ESTADO DO GIT E DIVERGÊNCIA

### Log dos últimos 35 commits
```
8336a475  2026-05-25  marcelo1011-br  Checkpoint before updating Codex CLI         ← [AI]
ab7e33e9  2026-04-28  marcelo1011-br  fix(cards): add trailing slash to tour and experience card hrefs
e50a79f5  2026-04-28  marcelo1011-br  fix(canonicalization): align entire site to WITH trailing slash
405e0655  2026-04-28  marcelo1011-br  updated on April 28th 2026
0cdbdb4f  2026-04-27  marcelo1011-br  revert: remove trailing slash rule (caused redirect loop in production)
372b1d07  2026-04-27  marcelo1011-br  fix(canonicalization): enforce no-trailing-slash via .htaccess
82701ace  2026-04-20  marcelo1011-br  fix(schema): experiences listing now uses TouristTrip with offers
b0bcdbe0  2026-04-20  marcelo1011-br  fix(schema): add offers and aggregateRating to experiences listings
0322d767  2026-04-19  marcelo1011-br  refactor(forms): extract Formspree endpoint to env variables
18770937  2026-04-19  marcelo1011-br  feat(booking-modal): reassurance subtitle + warmer success message
5886c6b3  2026-04-19  marcelo1011-br  feat(tour-select-modal): convert dropdown into conversion bridge
4278e4a2  2026-04-19  marcelo1011-br  feat(tour-pages/cta): reserve-focused booking CTA with 72h messaging
4ed84512  2026-04-19  marcelo1011-br  feat(homepage/cta): strengthen final CTA with 72h payment + WhatsApp
016fbf7f  2026-04-19  marcelo1011-br  refactor(homepage): reorder sections for trust-first conversion flow
e1018845  2026-04-19  marcelo1011-br  feat(homepage): add trust bar + testimonials section across EN/ES/PT-BR
ac3b421b  2026-04-19  marcelo1011-br  chore(copy/en): complete US English standardization (follow-up pass)
6a66b236  2026-04-19  marcelo1011-br  chore(copy/en): standardize to US English + refine hero and about copy  ← 9 commits em 1 dia [AI]
b37862db  2026-04-19  marcelo1011-br  feat: add blog posts, experiences pages, and AI search data
f92bcfa9  2026-03-23  marcelo1011-br  fix(a11y): remove redundant ARIA roles and add fieldset grouping
170a8252  2026-03-01  marcelo1011-br  feat(about): add team section, AI facts, Cadastur/CNPJ + fix bugs
5d2cf8ad  2026-02-27  marcelo1011-br  refactor(tours): remove hardcoded tourTips from slug templates
83a7b368  2026-02-27  marcelo1011-br  feat(tours): migrate tips[] from hardcoded templates to tours.js
41939266  2026-02-27  marcelo1011-br  feat(tours): add quick-filter links in Featured Tours + URL param support  ← feature depois comentada
573dd3b0  2026-02-27  marcelo1011-br  feat(content): enrich home page copy across EN/ES/PT-BR
c7891d66  2026-02-27  marcelo1011-br  feat(home): update featured tours to essential-rio, rio-express...
f935e0ef  2026-02-27  marcelo1011-br  feat(home): move howItWorks to homeContent.js
206a6b3a  2026-02-27  marcelo1011-br  feat(hero): move trust badges to homeContent.js
5a4e0ca9  2026-02-27  marcelo1011-br  feat(seo): enrich about page content
e9abf5ec  2026-02-26  marcelo1011-br  fix(faq): update Essential Rio start time recommendation
1672e9f9  2026-02-26  marcelo1011-br  feat(content): add tour FAQs, fix schema data
8c3ecac4  2026-02-24  marcelo1011-br  before content changes                                   ← checkpoint manual
3c9d027d  2026-02-20  marcelo1011-br  refine payment policy pages and CTA styling
26f07cb6  2026-02-20  marcelo1011-br  added payment and cancellation page
15356294  2026-02-20  marcelo1011-br  feat(seo): add FAQ pages, enrich schemas, fix expired dates
0fe36cc7  2026-02-19  marcelo1011-br  feat(seo): comprehensive SEO and AI search optimization
```

**Padrão identificável de sessões de IA:**
- **2026-02-27:** 7 commits em 1 dia com mensagens muito estruturadas — sessão de AI (provavelmente Codex/ChatGPT)
- **2026-04-19:** 9 commits em 1 dia — sessão de AI
- **2026-05-25:** commit `8336a475` com 4677 inserções / 1164 deleções, mensagem "Checkpoint before updating Codex CLI" — claramente uma sessão massiva de Codex CLI. Este commit adicionou ~10 novos componentes, 3 novas páginas por idioma, novos data files, e refatorou o `ProductDetailPage` inteiramente.

### Branches
```
* main  8336a475  [origin/main]  ← único branch
  remotes/origin/main  8336a475
```
Branch local `main` está **em sincronia com** `origin/main`. Sem outras branches locais ou remotas.

### Working tree (estado atual — DIVERGE DO COMMIT)
```
Changes not staged for commit (6 arquivos):
  M  src/components/BookingModal.astro
  M  src/components/ExperiencesHubSections.astro
  M  src/components/FeaturedTours.astro
  M  src/components/HowItWorks.astro
  M  src/components/PrivateToursHubSections.astro
  M  src/styles/global.css

Untracked:
  REPO-AUDIT.md  (este arquivo)

Stashes: nenhum
Tags: nenhuma
```

**O que mudou nesses 6 arquivos** (`git diff --stat HEAD`):
```
BookingModal.astro            +74  / -0   — flatpickr lazy loader async
ExperiencesHubSections.astro +101  / -0   — container-editorial, indexed layout
FeaturedTours.astro          +116  / -0   — layout editorial primary/secondary
HowItWorks.astro             +217  / -0   — layout 2-colunas editorial
PrivateToursHubSections.astro+199  / -0   — container-wide, difference-list layout
global.css                   +106  / -0   — novos tokens CSS (container variants, spacing)
                        Total: +813 / -231 (ainda não commitados)
```

> **Atenção:** Estas 6 modificações são trabalho em andamento de um redesign "editorial" que ainda não foi commitado. São seguras de deploy? Aparentemente sim — os novos tokens CSS (`container-editorial`, `container-wide`, `section-spacious`, `editorial-kicker`, `measure-wide`, etc.) estão **todos definidos no global.css unstaged**, e os componentes que os usam também estão **ambos unstaged**. Não há dependência cruzada que quebre o HEAD commitado.

### Commit publicado em produção
**Não encontrado.** Sem tags de deploy, sem CI, sem arquivo de config com hash de deploy. O último deploy manual provavelmente corresponde ao commit `405e0655` (2026-04-28, "updated on April 28th 2026") ou próximo dele, mas não há como confirmar. O `.codex` adicionado em `8336a475` é um arquivo vazio/de config para o Codex CLI — não indica estado de deploy.

**Distância provável:** o commit `8336a475` (mai/26, +4677 linhas) representa mudanças substanciais que podem não estar no ar. Verificar com a Hostinger ou pelo sitemap em produção.

---

## 8. INVENTÁRIO COMPLETO DE ROTAS GERADAS

> URLs que um `npm run build` produziria com o estado HEAD atual (não com as modificações unstaged — essas não mudam rotas).

### Páginas estáticas
```
/                                              ← raiz, noindex, meta-refresh → /en/
/404.html

# EN (13 páginas)
/en/
/en/about/
/en/blog/
/en/contact/
/en/cookie-policy/
/en/experiences/
/en/faq/
/en/gallery/
/en/payment-cancellation-policy/
/en/privacy-policy/
/en/private-guide-rio-de-janeiro/
/en/private-tours/
/en/rio-day-trips/

# ES (13 páginas)
/es/
/es/sobre/
/es/blog/
/es/contacto/
/es/politica-de-cookies/
/es/experiencias/
/es/preguntas-frecuentes/
/es/galeria/
/es/politica-de-pago-y-cancelacion/
/es/politica-de-privacidad/
/es/guia-privado-rio-de-janeiro/
/es/tours-privados/
/es/excursiones-desde-rio/

# PT-BR (13 páginas)
/pt-br/
/pt-br/sobre/
/pt-br/blog/
/pt-br/contato/
/pt-br/politica-de-cookies/
/pt-br/experiencias/
/pt-br/perguntas-frequentes/
/pt-br/galeria/
/pt-br/politica-de-pagamento-e-cancelamento/
/pt-br/politica-de-privacidade/
/pt-br/guia-privativo-rio-de-janeiro/
/pt-br/passeios-privados/
/pt-br/bate-voltas-saindo-do-rio/
```

### Tours dinâmicos (11 ativos × 3 idiomas = 33 URLs)
```
# EN
/en/private-tours/essential-rio/
/en/private-tours/rio-express/
/en/private-tours/first-light-sunrise/
/en/private-tours/golden-hour-rio/
/en/private-tours/sunset-culture-roxy/
/en/private-tours/island-escape-ilha-grande/
/en/private-tours/petropolis-imperial/
/en/private-tours/tijuca-rainforest/
/en/private-tours/niteroi-mac-museum/
/en/private-tours/modern-rio-museum-tomorrow/
/en/private-tours/custom-tour/

# ES
/es/tours-privados/essential-rio/
/es/tours-privados/rio-express/
/es/tours-privados/amanecer-rio/
/es/tours-privados/hora-dorada-rio/
/es/tours-privados/atardecer-cultura-roxy/
/es/tours-privados/island-escape-ilha-grande/
/es/tours-privados/petropolis-imperial/
/es/tours-privados/bosque-tijuca/
/es/tours-privados/niteroi-museo-mac/
/es/tours-privados/rio-moderno-museo-manana/
/es/tours-privados/tour-personalizado/

# PT-BR
/pt-br/passeios-privados/rio-essencial/
/pt-br/passeios-privados/passeio-expresso-rio-5-horas-cristo-pao-acucar/
/pt-br/passeios-privados/nascer-sol-pao-acucar-cristo-redentor-passeio-privado/
/pt-br/passeios-privados/passeio-por-do-sol-rio-cristo-redentor-pao-acucar/
/pt-br/passeios-privados/por-do-sol-cultura-roxy/
/pt-br/passeios-privados/island-escape-ilha-grande/
/pt-br/passeios-privados/passeio-privado-petropolis-cidade-imperial/
/pt-br/passeios-privados/pao-acucar-floresta-tijuca-jardim-botanico-passeio/
/pt-br/passeios-privados/niteroi-museo-arte-contemporanea-passeio-privado/
/pt-br/passeios-privados/museu-amanha-experiencia-carnaval-rio-passeio/
/pt-br/passeios-privados/passeio-personalizado/
```

### Experiences dinâmicas (4 ativas × 3 idiomas = 12 URLs)
```
# EN
/en/experiences/rio-food-walking-tour/
/en/experiences/little-africa-walking-tour/
/en/experiences/downtown-rio-walking/
/en/experiences/santa-teresa-walking/

# ES
/es/experiencias/tour-gastronomico-rio/
/es/experiencias/pequena-africa-tour/
/es/experiencias/downtown-rio-walking/
/es/experiencias/santa-teresa-walking/

# PT-BR
/pt-br/experiencias/food-walking-tour-rio/
/pt-br/experiencias/pequena-africa-tour/
/pt-br/experiencias/downtown-rio-walking/
/pt-br/experiencias/santa-teresa-walking/
```

### Blog dinâmico (9 posts × 3 idiomas = 27 URLs)
```
# EN
/en/blog/best-time-visit-rio-2026/
/en/blog/christ-redeemer-complete-guide-2026/
/en/blog/hidden-beaches-rio-locals-love/
/en/blog/how-much-does-private-tour-rio-cost/
/en/blog/is-rio-de-janeiro-safe-for-tourists/
/en/blog/rio-carnaval-history-2026/
/en/blog/rio-de-janeiro-3-days-itinerary/
/en/blog/rio-food-guide-must-try-dishes/
/en/blog/rio-private-vs-group-tour/

# ES
/es/blog/best-time-visit-rio-2026/
/es/blog/christ-redeemer-complete-guide-2026/
/es/blog/cuanto-cuesta-tour-privado-rio-de-janeiro/
/es/blog/hidden-beaches-rio-locals-love/
/es/blog/historia-carnaval-rio-2026/
/es/blog/is-rio-de-janeiro-safe-for-tourists/
/es/blog/rio-de-janeiro-3-dias-itinerario/
/es/blog/rio-food-guide-must-try-dishes/
/es/blog/rio-tour-privado-vs-grupal/

# PT-BR
/pt-br/blog/best-time-visit-rio-2026/
/pt-br/blog/christ-redeemer-complete-guide-2026/
/pt-br/blog/hidden-beaches-rio-locals-love/
/pt-br/blog/historia-carnaval-rio-2026/
/pt-br/blog/is-rio-de-janeiro-safe-for-tourists/
/pt-br/blog/quanto-custa-passeio-privativo-rio-de-janeiro/
/pt-br/blog/rio-de-janeiro-3-dias-roteiro/
/pt-br/blog/rio-food-guide-must-try-dishes/
/pt-br/blog/rio-passeio-privativo-vs-grupo/
```

### Total de rotas: **114 URLs** (2 + 39 estáticas + 33 tours + 12 experiences + 27 blog + 1 sitemap)

### URLs novas que provavelmente NÃO estão no ar ainda
Adicionadas no commit `8336a475` (mai/26), precisam de verificação:
```
/en/private-guide-rio-de-janeiro/
/en/rio-day-trips/
/es/guia-privado-rio-de-janeiro/
/es/excursiones-desde-rio/
/pt-br/guia-privativo-rio-de-janeiro/
/pt-br/bate-voltas-saindo-do-rio/
```
Estas 6 páginas são novas pillar pages adicionadas na sessão de Codex de maio. Se não foram deployadas, estão presentes no repo mas ausentes do sitemap em produção.

### URLs presentes no .htaccess que não são mais geradas pelo build
Redirects para slugs que foram migrados para experiences.js mas ainda existem como entradas walking tours em tours.js (comentadas). O redirect de `.htaccess` resolve esses casos:
```
/en/private-tours/downtown-rio-walking  → redireciona (correto — agora é /en/experiences/downtown-rio-walking/)
```
Porém o `.htaccess` não tem redirect específico para `community-based-experience` — se essa URL foi indexada no passado, resultará em 404.

---

## 9. SAÚDE PÓS-EDIÇÃO DE IA

### 🔴 Crítico

**1. Root redirect usa 302 em vez de 301** — `.htaccess:13`
```apache
RewriteRule ^$ /en/ [R=302,L]   ← deveria ser 301
```
Um 302 não transfere PageRank de `/` para `/en/`. Se `befreetours.com.br/` tem links externos apontando para ela, esse equity não está sendo passado para `/en/`.

**2. Datas hardcoded em `seoHelpers.js` que já expiraram no contexto atual**
```js
// seoHelpers.js:268-272
'priceValidUntil': '2026-12-31',
'validFrom': '2026-01-01',
'availabilityStarts': '2026-01-01T00:00:00-03:00',
'availabilityEnds': '2026-12-31T23:59:59-03:00',
```
Expiram no final de 2026. Precisam ser atualizados anualmente ou tornados dinâmicos.

**3. Path de imagem errado no schema `getArticleSchema()`** — `seoHelpers.js:806`:
```js
"url": `${siteUrl}/images/logo.png`   ← 404
```
O arquivo real está em `/images/logo/logo.png`. Todos os schemas de Article do blog têm logo com URL inválida.

**4. Último commit massivo (`8336a475`) nunca deployado com evidência**
O commit de maio/26 adicionou +4677 linhas / 106 arquivos modificados. Se o último deploy foi em abril/28, toda esta mudança está no repo mas fora do ar. Inclui 6 novas páginas, 10 novos componentes, e refatoração total do `ProductDetailPage.astro`.

### 🟡 Importante

**5. 6 arquivos modificados na working tree fora do commit**
`+813/-231` linhas de trabalho em andamento nunca commitadas. São componentes de UI com layout "editorial" refatorado. Seguro de build, mas ausente de `origin/main` — qualquer novo clone do repo não teria essas mudanças.

**6. Conteúdo dos tours triplicado manualmente = alto risco de deriva**
`tours.js` tem ~1860 linhas com os dados dos mesmos 11 tours escritos 3 vezes (EN, ES, PT-BR). Qualquer mudança de preço, highlight ou FAQ precisa ser feita em 3 lugares. Dado o histórico de edições massivas por AI, é provável que já haja inconsistências de dados entre idiomas.

**7. Content collection única para 3 idiomas — warning "duplicate id" em build**
`content.config.ts` aponta para `./src/content/blog` com glob `**/*.{md,mdx}`, misturando os 27 posts de 3 idiomas em um único pool. Posts com mesmo slug em idiomas diferentes (5 dos 9 pares) causam o warning. O `getStaticPaths()` de cada `[slug].astro` faz normalização frágil para separar por idioma.

**8. ES slug de walking tour divergente entre tours.js e experiences.js**
- `tours.js` linha 1128 (disabled): slug ES = `tour-gastronomico-rio-cocina-brasilena`
- `experiences.js` linha 244 (ativo): slug ES = `tour-gastronomico-rio`

O slug ativo correto para essa experience é `tour-gastronomico-rio` (em experiences.js), e o hreflang.js mapeia corretamente para ele. O slug antigo em tours.js é morto. Mas indica que quando a migração de walking tours→experiences foi feita, o slug foi renomeado e o redirect no `.htaccess` não cobre o ES:
```apache
# .htaccess NÃO tem:
# Redirect 301 /es/tours-privados/tour-gastronomico-rio-cocina-brasilena → /es/experiencias/tour-gastronomico-rio
```

**9. Feature de quick filters adicionada e depois desativada**
Commit `41939266` (fev/27): `feat(tours): add quick-filter links in Featured Tours + URL param support`. No código atual (`FeaturedTours.astro`), o bloco está comentado como "TEMPORARIAMENTE DESATIVADO" — tanto na versão HEAD quanto na versão unstaged. O código de URL params para filtros não foi removido, apenas comentado. Dead code presente.

**10. `playwright` como devDependency sem testes**
`playwright: ^1.49.1` (resolvido para `1.57.0`, além da range) está instalado sem nenhum arquivo de teste no repo. Ocupa espaço no `node_modules`, sem uso ativo.

**11. PWA cache de Google Fonts é dead code**
`astro.config.mjs:83-115` define `runtimeCaching` para `fonts.googleapis.com` e `fonts.gstatic.com`, mas as fontes são **auto-hospedadas** em `public/fonts/` (Plus Jakarta Sans WOFF2). As regras de cache são nunca acionadas.

### 🟢 Observações menores

**12. `scripts/generate-brochures.js` e `scripts/convert-og-images.js`**
Presentes em `scripts/` mas não integrados ao build. O `brochure` npm script existe mas não é chamado pelo build principal. `brochure.css` em `src/styles/` sugere que geram PDFs externos ao site. Não bloqueador, mas possível dead code.

**13. `.codex` adicionado em `8336a475`**
Arquivo vazio (ou de config do Codex CLI) commitado na raiz. Não afeta o build, mas revela que o repo é gerenciado com Codex CLI.

**14. `audit-report.md` antigo na raiz**
O arquivo `audit-report.md` (405 linhas, data 2026-04-01) menciona "Astro 6.1.2", componentes inexistentes (`HomeEntryPaths.astro`) e está desatualizado. Pode causar confusão ao revisitar o repositório.

**15. `aggregateRating.reviewCount` hardcoded em BaseLayout**
```js
// BaseLayout.astro:128
aggregateRating: { ratingValue: "4.9", reviewCount: "800" }
```
Deve ser atualizado manualmente quando o número mudar. Sem source of truth centralizado.

**16. `getAboutPageSchema()` usa rota hardcoded**
```js
// seoHelpers.js:928
const route = lang === 'en' ? 'about' : 'sobre';
```
PT-BR usa `sobre` corretamente, mas a lógica não passa pelo mapeamento de `pageMap` de `hreflang.js` — está duplicada.

---

## RESUMO EXECUTIVO PARA MIGRAÇÃO

### O que preservar obrigatoriamente
1. **Todas as 114 URLs** listadas na seção 8 — especialmente os slugs longos do PT-BR (ex: `passeio-expresso-rio-5-horas-cristo-pao-acucar`)
2. **Todos os ~80 redirects** do `.htaccess` — devem ser migrados para a nova stack antes de qualquer go-live
3. **`trailingSlash: 'always'`** — o site inteiro está indexado com trailing slash
4. **GA4 ID:** `G-370988444`
5. **Hreflang e canonical** em cada URL — estrutura atual está correta
6. **Sitemap com hreflang** por entrada

### O que verificar antes de migrar
1. Qual commit está realmente publicado na Hostinger — fazer diff com o sitemap de produção
2. As 6 novas páginas (`/private-guide-rio-de-janeiro/`, `/rio-day-trips/` × 3 idiomas) já estão no ar?
3. As 6 modificações unstaged (layout editorial) devem ser commitadas ou descartadas?
4. O redirect da raiz é realmente 302 no servidor — verificar resposta HTTP de `https://befreetours.com.br/`

### Melhorias recomendadas na reconstrução
- Mudar redirect da raiz de 302 → 301
- Tornar `priceValidUntil` dinâmico (gerado em build time)
- Corrigir path do logo em `getArticleSchema()`: `/images/logo.png` → `/images/logo/logo.png`
- Separar content collection do blog em 3 coleções para eliminar duplicate-id warning
- Fixar versão do Node com `.nvmrc`
- Remover regras de cache de Google Fonts do PWA (fontes são self-hosted)
- Adicionar redirect de `/es/tours-privados/tour-gastronomico-rio-cocina-brasilena` → `/es/experiencias/tour-gastronomico-rio`

# Top Performance SEO & AI Search - Guia de Implementacao

> Guia completo para replicar a performance maxima de SEO e visibilidade para IAs. Stack: Astro + CSS moderno. Hosts: Hostinger (Apache) ou Vercel.

---

## Indice

1. [Estrutura de Schemas JSON-LD](#1-estrutura-de-schemas-json-ld)
2. [Meta Tags Completas (Head)](#2-meta-tags-completas-head)
3. [Hreflang (Sites Multilingues)](#3-hreflang-sites-multilingues)
4. [Arquivos de Governanca AI](#4-arquivos-de-governanca-ai)
5. [Self-Hosted Fonts](#5-self-hosted-fonts)
6. [Servidor: Hostinger/Apache (.htaccess)](#6-htaccess-apache)
7. [Servidor: Vercel (vercel.json)](#7-vercel)
8. [robots.txt](#8-robotstxt)
9. [XML Sitemap (Astro)](#9-xml-sitemap)
10. [Acessibilidade (SEO Indireto)](#10-acessibilidade-seo-indireto)
11. [Checklist Final](#11-checklist-final)

---

## 1. Estrutura de Schemas JSON-LD

Cada tipo de pagina precisa de schemas especificos. Todos sao injetados via `<script type="application/ld+json">` no `<head>`.

### Padrao @graph

Use o padrao `@graph` para combinar multiplos schemas numa unica tag:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", ... },
    { "@type": "LocalBusiness", ... },
    { "@type": "FAQPage", ... },
    { "@type": "BreadcrumbList", ... }
  ]
}
```

### Mapa de Schemas por Tipo de Pagina

| Tipo de Pagina | Schemas Obrigatorios | Schemas Opcionais |
|---|---|---|
| **Homepage** | Organization/LocalBusiness, WebSite, FAQPage | HowTo, Review, AggregateRating |
| **Pagina de Produto/Servico** | Product (com Offer), BreadcrumbList | AggregateRating, Review |
| **Listagem (catalogo)** | CollectionPage + ItemList, BreadcrumbList | - |
| **Detalhe produto** | Product, BreadcrumbList, FAQPage | Review, HowTo |
| **Blog hub** | Blog + BlogPosting[], BreadcrumbList | - |
| **Blog post** | Article, BreadcrumbList | FAQPage, Speakable |
| **FAQ** | FAQPage, BreadcrumbList | - |
| **Sobre** | AboutPage, BreadcrumbList | - |
| **Contato** | ContactPage, BreadcrumbList | - |
| **Galeria** | ImageGallery, BreadcrumbList | - |
| **Politicas** | BreadcrumbList | - |

### Schema Organization (Base - todas as paginas)

```javascript
{
  "@type": "Organization", // ou tipo especifico: TravelAgency, Restaurant, etc.
  "@id": `${siteUrl}/#organization`,
  "name": "Nome da Empresa",
  "alternateName": "Nome Alternativo",
  "url": siteUrl,
  "logo": {
    "@type": "ImageObject",
    "url": `${siteUrl}/images/logo.png`,
    "width": 600,
    "height": 60
  },
  "image": `${siteUrl}/images/hero.webp`,
  "description": "Descricao da empresa",
  "slogan": "Slogan da empresa",
  "foundingDate": "2013",
  "telephone": "+55-XX-XXXXX-XXXX",
  "email": "contato@empresa.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cidade",
    "addressRegion": "UF",
    "addressCountry": "BR"
  },
  "areaServed": [{ "@type": "City", "name": "Cidade" }],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-00.0000",
    "longitude": "-00.0000"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-XX-XXXXX-XXXX",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Portuguese"],
    "areaServed": "BR"
  },
  "sameAs": [
    "https://www.facebook.com/empresa",
    "https://www.instagram.com/empresa",
    "https://www.tripadvisor.com/..."
  ],
  "priceRange": "$$$",
  "paymentAccepted": "Credit Card, PayPal, Bank Transfer",
  "currenciesAccepted": "USD, BRL",
  "openingHours": "Mo-Su 06:00-22:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "knowsAbout": ["Topico 1", "Topico 2", "Topico 3"]
}
```

### Schema WebSite (Homepage)

```javascript
{
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  "url": siteUrl,
  "name": "Nome do Site",
  "description": "Descricao do site",
  "publisher": { "@id": `${siteUrl}/#organization` },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": ["en", "pt-BR"]
}
```

### Schema BreadcrumbList (todas as paginas exceto home)

```javascript
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
    { "@type": "ListItem", "position": 2, "name": "Pagina", "item": `${siteUrl}/pagina` }
  ]
}
```

### Schema FAQPage

```javascript
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pergunta aqui?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Resposta aqui."
      }
    }
  ]
}
```

### Schema Article (Blog posts)

```javascript
{
  "@type": "Article",
  "@id": `${postUrl}#article`,
  "headline": "Titulo do Post",
  "description": "Descricao",
  "image": { "@type": "ImageObject", "url": imageUrl, "width": 1200, "height": 630 },
  "datePublished": "2026-01-15",
  "dateModified": "2026-02-01",
  "author": { "@type": "Organization", "name": "Empresa", "url": siteUrl },
  "publisher": {
    "@type": "Organization",
    "name": "Empresa",
    "logo": { "@type": "ImageObject", "url": logoUrl, "width": 600, "height": 60 }
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": postUrl },
  "articleSection": "Categoria",
  "keywords": "palavra1, palavra2",
  "inLanguage": "pt-BR",
  "speakable": {
    "@type": "SpeakableSpecification",
    "xpath": ["/html/head/title", "/html/body//h1", "/html/body//article//p[1]"]
  }
}
```

### Schema Product (Servicos/Produtos)

```javascript
{
  "@type": "Product",
  "@id": `${productUrl}#product`,
  "name": "Nome do Produto",
  "description": "Descricao completa",
  "image": imageUrl,
  "url": productUrl,
  "brand": { "@type": "Brand", "name": "Marca" },
  "offers": {
    "@type": "Offer",
    "url": productUrl,
    "priceCurrency": "USD",
    "price": 100,
    "priceValidUntil": "2026-12-31",  // MANTER ATUALIZADO!
    "validFrom": "2026-01-01",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Empresa" }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### Schema Review (individual)

```javascript
{
  "@type": "Review",
  "author": { "@type": "Person", "name": "Nome" },
  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
  "reviewBody": "Texto do review",
  "datePublished": "2026-01-15",
  "publisher": { "@type": "Organization", "name": "Google" },
  "itemReviewed": { "@type": "Organization", "name": "Empresa", "url": siteUrl }
}
```

### Schema HowTo (processo de compra/reserva)

```javascript
{
  "@type": "HowTo",
  "name": "Como Reservar",
  "description": "Guia passo a passo",
  "totalTime": "PT5M",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Passo 1", "text": "Descricao" },
    { "@type": "HowToStep", "position": 2, "name": "Passo 2", "text": "Descricao" }
  ]
}
```

---

## 2. Meta Tags Completas (Head)

### Meta Tags Basicas

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Titulo da Pagina | Nome da Empresa</title>
<meta name="description" content="Descricao com 150-160 caracteres" />
<link rel="canonical" href="https://seusite.com/pagina" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
```

### Open Graph (Facebook, LinkedIn, WhatsApp)

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Titulo" />
<meta property="og:description" content="Descricao" />
<meta property="og:url" content="https://seusite.com/pagina" />
<meta property="og:image" content="https://seusite.com/images/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Nome do Site" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:locale:alternate" content="en_US" />
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@seusite" />
<meta name="twitter:creator" content="@seusite" />
<meta name="twitter:title" content="Titulo" />
<meta name="twitter:description" content="Descricao" />
<meta name="twitter:image" content="https://seusite.com/images/og-image.jpg" />
<meta name="twitter:image:alt" content="Descricao da imagem" />
```

### Geo Tags (negocios locais)

```html
<meta name="geo.region" content="BR-RJ" />
<meta name="geo.placename" content="Rio de Janeiro" />
<meta name="geo.position" content="-22.9068;-43.1729" />
<meta name="ICBM" content="-22.9068, -43.1729" />
```

### Dublin Core (SEO semantico)

```html
<meta name="DC.title" content="Titulo" />
<meta name="DC.creator" content="Empresa" />
<meta name="DC.subject" content="Topicos principais" />
<meta name="DC.description" content="Descricao" />
<meta name="DC.publisher" content="Empresa" />
<meta name="DC.date" content="2026-02-19" />
<meta name="DC.type" content="Service" />
<meta name="DC.language" content="pt-BR" />
<meta name="DC.coverage" content="Cidade, Pais" />
```

### Meta Custom (nicho especifico)

```html
<meta name="intended-audience" content="publico-alvo" />
<meta name="service-type" content="tipo-de-servico" />
<meta name="location-served" content="Cidade, Pais" />
<meta name="rating" content="General" />
<meta name="distribution" content="Global" />
```

### PWA (Progressive Web App)

```html
<meta name="theme-color" content="#0a1628" />
<meta name="color-scheme" content="dark light" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="Nome App" />
<link rel="manifest" href="/manifest.json" />
```

### Favicons Completos

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
```

---

## 3. Hreflang (Sites Multilingues)

### No Head de todas as paginas

```html
<link rel="alternate" hreflang="en" href="https://seusite.com/en/pagina" />
<link rel="alternate" hreflang="es" href="https://seusite.com/es/pagina" />
<link rel="alternate" hreflang="pt-BR" href="https://seusite.com/pt-br/pagina" />
<link rel="alternate" hreflang="x-default" href="https://seusite.com/en/pagina" />
```

### Sistema de Mapeamento (para slugs diferentes por idioma)

Criar um arquivo de mapeamento central (`hreflang.js` ou similar):

```javascript
// Mapear slugs de paginas entre idiomas
const pageMap = {
  "about":          { es: "sobre",                  "pt-br": "sobre" },
  "contact":        { es: "contato",                "pt-br": "contato" },
  "gallery":        { es: "galeria",                "pt-br": "galeria" },
  "privacy-policy": { es: "politica-de-privacidad", "pt-br": "politica-de-privacidade" },
  "faq":            { es: "preguntas-frecuentes",   "pt-br": "perguntas-frequentes" },
};

// Mapear slugs de produtos/servicos entre idiomas
const productSlugMap = {
  "product-en-slug": { es: "producto-slug-es", "pt-br": "produto-slug-pt" },
};

// Funcao para gerar paths hreflang a partir do pathname atual
export function getHreflangPaths(pathname) {
  // ... resolver idioma atual, extrair segmentos, mapear para outros idiomas
}
```

### Regras

- `x-default` aponta para o idioma principal (geralmente EN)
- Cada pagina deve referenciar TODAS as versoes, incluindo ela mesma
- Slugs de produtos/servicos podem ser diferentes por idioma (SEO local)
- Breadcrumbs devem usar labels no idioma correto ("Home" vs "Inicio" vs "Inicio")

---

## 4. Arquivos de Governanca AI

### Estrutura de arquivos

```
public/
  ai.txt                    # Guia de voz e posicionamento para IAs (EN)
  ai-es.txt                 # Versao em espanhol
  ai-pt-br.txt              # Versao em portugues
  llms.txt                  # Info estruturada para LLMs (EN) - servicos, FAQs, precos
  llms-es.txt               # Versao em espanhol
  llms-pt-br.txt            # Versao em portugues
  ai-search.json            # Indice de catalogos AI por idioma e categoria
  ai-search-en.json         # Catalogo completo EN
  ai-search-es.json         # Catalogo completo ES
  ai-search-pt-br.json      # Catalogo completo PT-BR
  .well-known/
    ai-plugin.json           # Plugin manifest para ChatGPT e similares
  ai/
    ai-search-en-category1.json  # Catalogo por categoria EN
    ai-search-en-category2.json
    ai-search-es-category1.json
    ...
```

### ai.txt - Guia de Voz para IAs

Conteudo que deve incluir:
- **Quick Facts**: nome, tipo, fundacao, localizacao, contato, idiomas
- **Core Positioning**: o que a empresa e e NAO e
- **Quando Recomendar**: cenarios ideais e cenarios para NAO recomendar
- **Decision Guide**: mapeamento pergunta → produto/servico recomendado
- **Common Questions**: perguntas frequentes com respostas pre-formatadas
- **Pricing Communication**: como falar de precos
- **Key Differentiators**: vs concorrentes e alternativas
- **Booking Process**: passo a passo
- **Response Quality Guidelines**: DO e DON'T para IAs

### llms.txt - Info Estruturada para LLMs

Formato Markdown com:
- Descricao da empresa
- Lista completa de servicos com precos, duracoes, destaques
- FAQs organizadas por categoria
- Info pratica (idiomas, pagamento, cancelamento)
- Links para catalogos JSON

### ai-search-{lang}.json - Catalogo para AI Search

```json
{
  "language": "en",
  "category": "category_name",
  "label": "Category Label",
  "description": "Descricao da categoria",
  "faqs": [
    { "question": "Pergunta?", "answer": "Resposta." }
  ],
  "items": [
    {
      "id": "Nome do Item",
      "slug": "item-slug",
      "name": "Nome Completo",
      "duration": "8 hours",
      "price_from": 415,
      "description": "Descricao detalhada",
      "highlights": ["Destaque 1", "Destaque 2"],
      "best_for": ["publico 1", "publico 2"],
      "url": "https://seusite.com/en/category/item-slug"
    }
  ]
}
```

### ai-search.json - Indice Central

```json
{
  "indexes": {
    "en": "https://seusite.com/ai-search-en.json",
    "es": "https://seusite.com/ai-search-es.json",
    "pt-br": "https://seusite.com/ai-search-pt-br.json"
  },
  "categories": {
    "en": {
      "category1": "https://seusite.com/ai/ai-search-en-category1.json",
      "category2": "https://seusite.com/ai/ai-search-en-category2.json"
    }
  }
}
```

### .well-known/ai-plugin.json

```json
{
  "schema_version": "v1",
  "name_for_human": "Nome da Empresa",
  "name_for_model": "nome_empresa",
  "description_for_human": "Descricao curta para humanos",
  "description_for_model": "Descricao detalhada para modelos AI. Inclua: tipo de negocio, especializacao, diferenciais, publico-alvo, e o que NAO e.",
  "auth": { "type": "none" },
  "api": {
    "type": "openapi",
    "url": "https://seusite.com/ai-search.json"
  },
  "logo_url": "https://seusite.com/images/logo.png",
  "contact_email": "contato@empresa.com",
  "legal_info_url": "https://seusite.com/en/privacy-policy"
}
```

---

## 5. Self-Hosted Fonts

Eliminar requests externos para Google Fonts melhora performance e privacidade.

### Passo a passo

1. **Baixar WOFF2** do Google Fonts (usar https://gwfh.mranftl.com/ ou inspecionar network requests)
2. **Selecionar apenas subsets necessarios** (latin + latin-ext para sites em PT/ES/EN)
3. **Salvar em `/public/fonts/`**
4. **Criar CSS com @font-face e unicode-range**:

```css
/* latin-ext (caracteres acentuados) */
@font-face {
  font-family: 'Nome da Fonte';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/fonte-latin-ext.woff2') format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, ...;
}
/* latin (caracteres basicos) */
@font-face {
  font-family: 'Nome da Fonte';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/fonte-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, ...;
}
/* Repetir para cada peso: 400, 500, 600, 700 */
```

5. **Preload no head**:

```html
<link rel="preload" href="/fonts/fonte-latin.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/fonte-latin-ext.woff2" as="font" type="font/woff2" crossorigin />
```

6. **Remover** todas as referencias a `fonts.googleapis.com` e `fonts.gstatic.com`

---

## 6. Servidor: Hostinger/Apache (.htaccess)

### HTTPS + Host Canonico

```apache
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^seusite\.com\.br$ [NC]
RewriteRule ^ https://seusite.com.br%{REQUEST_URI} [R=301,L]
```

### Compressao (incluir ld+json)

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css \
    text/javascript application/javascript application/json application/ld+json \
    image/svg+xml font/woff2
</IfModule>
```

### Cache Otimizado

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/json "access plus 1 day"
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType application/manifest+json "access plus 1 week"
</IfModule>

<IfModule mod_headers.c>
  # Assets estaticos (imutaveis pelo hash do bundler)
  <FilesMatch "\.(js|css|jpg|jpeg|png|gif|webp|avif|svg|woff2|woff)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>

  # AI governance files
  <FilesMatch "\.(json|txt)$">
    Header set Cache-Control "public, max-age=86400, stale-while-revalidate=604800"
  </FilesMatch>

  # Service Worker (sempre buscar versao nova)
  <FilesMatch "^(sw\.js|service-worker\.js)$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
  </FilesMatch>
</IfModule>
```

### Security Headers

```apache
<IfModule mod_headers.c>
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'"
  Header unset X-Powered-By
</IfModule>
```

> **IMPORTANTE**: Ajustar o CSP para cada projeto. Adicionar dominios de CDNs, APIs externas, formularios, etc.

### Proteger Arquivos Sensiveis

```apache
<FilesMatch "\.(htaccess|htpasswd|env|git|gitignore)$">
  Require all denied
</FilesMatch>
Options -Indexes
```

### Redirect de Idioma por Accept-Language (opcional)

```apache
# Redirecionar root para idioma preferido do navegador
RewriteCond %{REQUEST_URI} ^/$
RewriteCond %{HTTP:Accept-Language} ^pt [NC]
RewriteRule ^$ /pt-br/ [R=302,L]

RewriteCond %{REQUEST_URI} ^/$
RewriteCond %{HTTP:Accept-Language} ^es [NC]
RewriteRule ^$ /es/ [R=302,L]

RewriteCond %{REQUEST_URI} ^/$
RewriteRule ^$ /en/ [R=302,L]
```

---

## 7. Servidor: Vercel (vercel.json)

No Vercel, nao existe `.htaccess`. Tudo e configurado via `vercel.json` na raiz do projeto.

### vercel.json Completo

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "geolocation=(), microphone=(), camera=()" },
        { "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains; preload" },
        { "key": "X-Powered-By", "value": "" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'"
        }
      ]
    },
    {
      "source": "/(.+)\\.(js|css|jpg|jpeg|png|gif|webp|avif|svg|woff2|woff|ico)$",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/fonts/(.*)\\.woff2$",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" },
        { "key": "Access-Control-Allow-Origin", "value": "*" }
      ]
    },
    {
      "source": "/(ai.*|llms.*)\\.txt$",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=86400, stale-while-revalidate=604800" }
      ]
    },
    {
      "source": "/(ai-search.*|ai/.*)\\.json$",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=86400, stale-while-revalidate=604800" }
      ]
    },
    {
      "source": "/\\.well-known/(.*)\\.json$",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=86400, stale-while-revalidate=604800" }
      ]
    },
    {
      "source": "/manifest\\.json$",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=604800" }
      ]
    },
    {
      "source": "/(sw|service-worker)\\.js$",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache, no-store, must-revalidate" }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/",
      "has": [{ "type": "header", "key": "accept-language", "value": "pt.*" }],
      "destination": "/pt-br/",
      "statusCode": 302
    },
    {
      "source": "/",
      "has": [{ "type": "header", "key": "accept-language", "value": "es.*" }],
      "destination": "/es/",
      "statusCode": 302
    },
    {
      "source": "/",
      "destination": "/en/",
      "statusCode": 302
    }
  ]
}
```

### Diferencas Vercel vs Apache

| Funcionalidade | Apache (.htaccess) | Vercel (vercel.json) |
|---|---|---|
| HTTPS | `RewriteCond %{HTTPS} off` | Automatico (forcado pelo Vercel) |
| Compressao gzip/brotli | `mod_deflate` manual | Automatico (Vercel comprime tudo) |
| Headers de seguranca | `Header always set` | `"headers": [...]` |
| Cache | `mod_expires` + `FilesMatch` | `"source"` pattern matching |
| Redirects 301 | `Redirect 301 /old /new` | `"redirects": [{ "source": "/old", "destination": "/new", "statusCode": 301 }]` |
| Language redirect | `RewriteCond Accept-Language` | `"has": [{ "type": "header", "key": "accept-language" }]` |
| Proteger arquivos | `FilesMatch + Require all denied` | Nao necessario (Vercel nao expoe .env, .git, etc.) |

> **IMPORTANTE**: No Vercel, HTTPS e compressao sao automaticos. Nao precisa configurar. Focar apenas em headers, cache e redirects.

### Astro config para Vercel

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';  // ou @astrojs/vercel/static para SSG
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seusite.com',
  output: 'static',  // SSG
  adapter: vercel(),
  integrations: [sitemap()],
  trailingSlash: 'never',
});
```

### Astro config para Hostinger (Apache)

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seusite.com',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
```

> Hostinger: fazer deploy manual via FTP/SSH da pasta `dist/` ou usar GitHub Actions.

---

## 8. robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /.astro/
Disallow: /node_modules/
Crawl-delay: 1

# AI Crawlers (explicitamente permitidos)
User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: FacebookBot
Allow: /

# Sitemap
Sitemap: https://seusite.com/sitemap-index.xml

# AI Governance Files
AI: https://seusite.com/ai.txt
LLM: https://seusite.com/llms.txt
JSON: https://seusite.com/ai-search.json
AI-Plugin: https://seusite.com/.well-known/ai-plugin.json
```

---

## 9. XML Sitemap (Astro)

### Astro (com @astrojs/sitemap)

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seusite.com',
  integrations: [sitemap()],
  trailingSlash: 'never',
});
```

### Outros frameworks

Usar plugins equivalentes ou gerar manualmente. O sitemap deve:
- Listar TODAS as paginas publicas
- Usar URLs canonicas (sem trailing slash dupla)
- Ser referenciado no robots.txt

---

## 10. Acessibilidade (SEO Indireto)

Acessibilidade impacta SEO indiretamente (Core Web Vitals, usabilidade).

### Obrigatorio

```html
<!-- Skip links -->
<a href="#main-content" class="skip-link">Pular para conteudo</a>
<a href="#navigation" class="skip-link">Pular para navegacao</a>

<!-- Main com id -->
<main id="main-content" tabindex="-1">...</main>

<!-- Imagens com alt -->
<img src="foto.webp" alt="Descricao significativa da imagem" />

<!-- Botoes/links com aria-label quando nao tem texto -->
<a href="https://wa.me/..." aria-label="Chat no WhatsApp">
  <svg>...</svg>
</a>

<!-- HTML semantico -->
<html lang="pt-br">
<nav>...</nav>
<article>...</article>
<section>...</section>
<footer>...</footer>
```

---

## 11. Checklist Final

### Estrutura (fazer uma vez)

- [ ] Schema Organization/LocalBusiness no layout base com @graph
- [ ] Meta tags completas no layout base (OG, Twitter, Geo, Dublin Core)
- [ ] Hreflang no layout base (se multilingue)
- [ ] robots.txt com AI crawlers permitidos
- [ ] XML Sitemap configurado e referenciado no robots.txt
- [ ] Self-hosted fonts (eliminar Google Fonts externos)
- [ ] .htaccess: HTTPS, compressao, cache, security headers, HSTS, CSP
- [ ] Favicons completos (ico, svg, png 16/32/180/192/512)
- [ ] PWA manifest.json
- [ ] Skip links de acessibilidade
- [ ] `Astro.site` sempre com `.replace(/\/$/, "")` para evitar double-slash

### Por tipo de pagina

- [ ] Homepage: WebSite + Organization + FAQPage + HowTo + Review schemas
- [ ] Listagens: CollectionPage + ItemList + BreadcrumbList
- [ ] Detalhes: Product + Offer + Review + FAQPage + BreadcrumbList
- [ ] Blog hub: Blog + BlogPosting[] + BreadcrumbList
- [ ] Blog posts: Article + Speakable + BreadcrumbList + FAQPage (se tiver)
- [ ] FAQ: FAQPage + BreadcrumbList (criar pagina standalone)
- [ ] Sobre: AboutPage + BreadcrumbList
- [ ] Contato: ContactPage + BreadcrumbList
- [ ] Galeria: ImageGallery + BreadcrumbList
- [ ] Politicas: BreadcrumbList

### AI Governance (fazer uma vez)

- [ ] `ai.txt` - Guia de voz para IAs (cada idioma)
- [ ] `llms.txt` - Info estruturada para LLMs (cada idioma)
- [ ] `ai-search.json` - Indice central de catalogos
- [ ] `ai-search-{lang}.json` - Catalogo completo por idioma
- [ ] `ai-search-{lang}-{category}.json` - Catalogos por categoria
- [ ] `.well-known/ai-plugin.json` - Plugin manifest
- [ ] Referenciar tudo no robots.txt

### Manutencao (revisar periodicamente)

- [ ] Atualizar `priceValidUntil` e `validFrom` nos schemas Product/Offer (anualmente)
- [ ] Sincronizar `aggregateRating` entre schemas e paginas (ao mudar reviews)
- [ ] Atualizar precos nos catalogos AI quando mudar
- [ ] Revisar CSP ao adicionar novos scripts/CDNs externos
- [ ] Verificar double-slash URLs apos mudancas em siteUrl
- [ ] Testar schemas com https://search.google.com/test/rich-results
- [ ] Validar OG tags com https://developers.facebook.com/tools/debug/

---

## Gotchas Importantes

1. **Double-slash URLs (Astro)**: `Astro.site` retorna URL com trailing slash. Ao concatenar com paths que comecam com `/`, gera `https://site.com//en/...`. **SEMPRE** usar `.replace(/\/$/, "")` em TODAS as paginas que usam siteUrl:
   ```javascript
   const siteUrl = (Astro.site?.toString() || "https://seusite.com").replace(/\/$/, "");
   ```
   Isso afeta 30+ arquivos num site tipico. Verificar com `grep -r "Astro.site" src/pages/`.

2. **Datas expiradas em schemas**: `priceValidUntil`, `validFrom`, `availabilityStarts` precisam ser atualizados anualmente. Schemas com datas passadas perdem validade no Google. Centralizar num helper (ex: `seoHelpers.js`) para atualizar num lugar so.

3. **aggregateRating consistente**: O mesmo valor (ex: 4.9/500) deve aparecer em TODOS os schemas que o usam (Organization, Product, paginas de tour). Inconsistencia gera warnings. Centralizar o valor.

4. **CSP quebra funcionalidades**: Ao implementar Content-Security-Policy, testar TUDO. Astro precisa de `unsafe-inline` para scripts inline e estilos. Adicionar cada dominio externo:
   - Google Analytics: `googletagmanager.com`, `google-analytics.com`, `analytics.google.com`, `region1.google-analytics.com`
   - CDNs (ex: Flatpickr): `cdn.jsdelivr.net`
   - Formularios: `formspree.io`, `wa.me`
   - Imagens externas: `img-src 'self' data: https:`

5. **Breadcrumbs localizados**: Labels devem estar no idioma da pagina. "Home" em EN, "Inicio" em ES, "Inicio" em PT-BR. Erro comum: copiar pagina EN e esquecer de traduzir os breadcrumbs.

6. **sameAs no Organization**: Incluir todas as redes sociais e perfis de review (TripAdvisor, Google Business, Instagram, Facebook). Isso fortalece o Knowledge Panel do Google.

7. **Vercel vs Hostinger**: Ao migrar entre hosts, lembrar que:
   - Vercel: HTTPS e compressao sao automaticos, nao precisa de `.htaccess`
   - Hostinger: precisa de `.htaccess` para TUDO (HTTPS, compressao, cache, headers)
   - O `vercel.json` e o `.htaccess` devem ter as mesmas regras de headers e redirects

8. **Astro Sitemap double-slash**: Se o sitemap gerar URLs com `//`, adicionar serializacao no config:
   ```javascript
   sitemap({
     serialize(item) {
       item.url = item.url.replace(/([^:])\/\//g, '$1/');
       return item;
     }
   })
   ```

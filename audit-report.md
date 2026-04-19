# Relatório de Auditoria — Be Free Tours
**Data:** 2026-04-01
**Auditor:** Claude Sonnet 4.6 (Claude Code)
**Stack:** Astro 6.1.2 SSG, trilíngue (EN/ES/PT-BR), Apache .htaccess, PWA

---

## Dimensão 1 — Qualidade do Código

### ✅ Pontos Fortes

**Semântica HTML sólida**
- Uso correto de elementos semânticos: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`, `<figure>` em todos os componentes auditados.
- A `Navbar.astro` usa `<header>` externo com `<nav aria-label="Main navigation" id="navigation">` — excelente para navegação de leitores de tela.
- O componente `TourCard.astro` usa `<article>` (linha 74) corretamente — cada card de tour é um item de conteúdo independente.
- O componente `Testimonials.astro` usa `<article class="testimonial-card">` para cada depoimento — semântica precisa.
- O `HomeEntryPaths.astro` usa `<article class="entry-card">` para os dois caminhos de entrada (Tours Privados / Experiências).
- O `FeaturedTours.astro` tem duas `<section>` distintas com semântica correta: `.how-it-works` e `.featured-tours`.
- Hierarquia de headings coerente na home: sem `<h1>` explícito nas páginas de índice (o `<h1>` está no componente `Hero.astro`), `<h2>` usados em todas as seções, `<h3>` nos cards — progressão lógica.

**Acessibilidade (a11y) bem implementada**
- Skip links presentes no `BaseLayout.astro` (linhas 354–355): `"Skip to main content"` e `"Skip to navigation"`.
- `<main id="main-content" tabindex="-1">` (linha 358) para receber foco via skip link.
- `aria-label` no toggle do menu mobile: `"Toggle menu"` (linha 167 do Navbar.astro).
- `aria-expanded` gerenciado corretamente no menu mobile via JavaScript.
- Popup de exit intent tem `role="dialog"` e `aria-labelledby="exit-popup-title"` (linhas 42–43 do ExitIntentPopup.astro).
- FAQ usa `aria-expanded` nas perguntas expandíveis (faq.astro, linha 40).
- `prefers-reduced-motion` implementado no CSS global (global.css, linha 88): todas as animações são desabilitadas quando o usuário prefere.
- Botão flutuante do WhatsApp tem `aria-label="Chat on WhatsApp"` (BaseLayout.astro, linha 455).
- `*:focus-visible` com outline visível implementado globalmente (global.css, linhas 1225–1235).

**CSS e sistema de design robusto**
- Sistema completo de design tokens via CSS custom properties (global.css) — cores, espaçamentos, tipografia, sombras.
- Uso de `oklch()` com fallback para browsers sem suporte (linhas 104–198 do global.css) — progressão elegante.
- `prefers-reduced-transparency` e `prefers-contrast` também implementados.
- `clamp()` usado extensivamente para tipografia e espaçamentos responsivos.
- Breakpoints mobile/desktop bem definidos (principalmente 768px).
- Camadas CSS (`@layer reset, base, themes, components, utilities, overrides`) — excelente organização.

**Performance**
- Imagens de tours usam `<Image>` do Astro com `format="webp"`, `width`, `height` e `loading="lazy"` (TourCard.astro, linhas 76–84).
- Fontes self-hosted com `rel="preload"` no `<head>` (BaseLayout.astro, linhas 210–212).
- Logo pré-carregado com `rel="preload"` (linha 210).
- GZIP via `mod_deflate` e cache com `mod_expires` no .htaccess.
- `backdrop-filter` com `-webkit-` prefix em todos os lugares.
- PWA com service worker via `@vite-pwa/astro`.

**Componentes Astro bem estruturados**
- Reutilização exemplar: `TourCard` é usado tanto para tours quanto para experiences via `section` prop.
- `ProductDetailPage.astro` é um componente unificado para tours e experiences — sem duplicação de lógica.
- `FeaturedTours.astro` e `FeaturedExperiences.astro` seguem o mesmo padrão — coerência.
- Lógica de imagens com fallback em cascata (`TourCard.astro`, linhas 44–50): tenta `imageSlug-card.webp` → trunca slug → fallback para `essential-rio-card.webp`.
- Componentes recebem `lang` como prop e usam `useTranslations(lang)` — internacionalização limpa.

---

### ⚠️ Problemas Menores

**1. `aria-hidden="true"` não sendo atualizado para `aria-hidden="false"` quando o popup é mostrado — implementado corretamente, mas há um timing gap**
- `ExitIntentPopup.astro`: O overlay começa com `aria-hidden="true"` (linha 41). O script remove esse atributo corretamente (linha 275: `overlay.setAttribute('aria-hidden', 'false')`). Porém, o foco não é movido para dentro do dialog quando ele abre. Segundo WCAG 2.1 (SC 2.4.3), um dialog deve receber foco quando aberto.
- **Arquivo:** `src/components/ExitIntentPopup.astro`, linha 274–276.

**2. Botão "mobile-menu-toggle" sem label atualizado conforme estado**
- O `aria-label="Toggle menu"` (Navbar.astro, linha 167) não muda para algo como "Fechar menu" quando expandido. Usuários de leitor de tela não têm contexto verbal do estado.
- **Arquivo:** `src/components/Navbar.astro`, linha 167.

**3. Ícones SVG decorativos sem `aria-hidden="true"` em alguns componentes**
- `Footer.astro` tem SVGs de ícone de email e telefone (linhas 117–131) sem `aria-hidden="true"`. São decorativos — devem ser marcados como `aria-hidden`.
- `FeaturedTours.astro` tem o SVG do conector de steps (linha 79) sem `aria-hidden`.
- **Arquivos:** `src/components/Footer.astro`, `src/components/FeaturedTours.astro`.

**4. CSS local duplicado em alguns componentes**
- `faq.astro` define uma classe `.btn-primary` local (linhas 177–188) que duplica estilos do sistema global. Risco de divergência visual se o global mudar.
- **Arquivo:** `src/pages/en/faq.astro`, linhas 177–188.

**5. Imagens de galeria com `alt=""` vazio**
- Galerias em `/en/gallery.astro`, `/es/galeria.astro` e `/pt-br/galeria.astro` usam `alt=""` (linha 150/152). Para imagens puramente decorativas isso é aceitável, mas galerias de fotos de tour geralmente comunicam conteúdo visual relevante.
- **Arquivos:** `src/pages/en/gallery.astro:150`, `src/pages/es/galeria.astro:152`, `src/pages/pt-br/galeria.astro:152`.

**6. Redundância de lógica `monthMap`/`toIsoDate` nas três páginas de index**
- O mesmo bloco de código (linhas 24–45) está triplicado em `en/index.astro`, `es/index.astro` e `pt-br/index.astro`. Deveria estar em um utilitário compartilhado.

**7. `tours.js` tem triplicação de dados**
- Todo o catálogo de tours está em três cópias (en, es, pt-br) dentro do mesmo arquivo. Para campos não traduzidos (preços, duração, slugs, blocked dates), há redundância de dados. Uma estrutura com base em EN e traduções como overlays reduziria o tamanho do arquivo e o risco de inconsistências.

**8. Hardcoded `siteInfo.logo` no BaseLayout usando path errado**
- `BaseLayout.astro`, linha 67: `logo: siteUrl + '/images/logo.png'`. O arquivo real é `/images/logo/logo.svg`. Já na página de index (linha 54) usa `${siteUrl}/images/logo/logo.png`. O path `/images/logo.png` pode não existir.
- **Arquivo:** `src/layouts/BaseLayout.astro`, linha 67.

**9. Falta de `<time>` para datas**
- Datas dos depoimentos (`"Feb 2026"`, `"Jan 2026"`) são renderizadas como texto simples. O elemento semântico `<time datetime="2026-02">` seria mais adequado.
- **Arquivo:** `src/components/Testimonials.astro`, linha 82.

**10. Badge de testemunho não traduzido no `FeaturedTours.astro`**
- `tourBadgeMap` (linha 43) usa badges em inglês/espanhol/pt-br, mas o mapeamento é por título do tour — se o título mudar em qualquer idioma, o badge deixa de aparecer silenciosamente.

---

### 🔴 Problemas Críticos

**1. Foco não gerenciado no dialog de exit intent e no modal de seleção de tour**
- Quando o `ExitIntentPopup` abre, o foco permanece onde estava. Por WCAG 2.1 SC 2.1.2 e SC 2.4.3, modais devem prender o foco internamente (focus trap) e retorná-lo ao elemento de origem ao fechar.
- O mesmo problema afeta o `TourSelectModal`.
- **Arquivo:** `src/components/ExitIntentPopup.astro` (script, linhas 256–313).

**2. `*:focus { outline: none; }` no CSS global sem garantia de substituição**
- `global.css`, linha 1221: `*:focus { outline: none; }` remove o outline padrão de todos os elementos. Há um substituto via `*:focus-visible` na linha 1225, mas browsers sem suporte total a `:focus-visible` (Edge Legacy, alguns móveis) perderão completamente os indicadores de foco — violação de WCAG 2.1 SC 2.4.7.
- **Arquivo:** `src/styles/global.css`, linha 1221.

**3. CSP bloqueia imagens do TripAdvisor**
- `Content-Security-Policy` no `.htaccess` (linha 153): `img-src 'self' data: https:`. Isso permite HTTPS de qualquer origem, o que é amplo — mas a CSP não lista `media-src`, o que pode afetar vídeos. Mais relevante: o domínio `https://cdn.tripadvisor.com` não está listado explicitamente. Se a logo do TripAdvisor vier de um CDN externo, pode ser bloqueada dependendo do path.

**4. Inconsistência de dados: `reviewCount` entre MEMORY.md (500) e código (600)**
- A MEMORY.md registra "500 reviews" mas todas as páginas e schemas usam "600". Os docs antigos (`top-performance-seo-ias.md`, `diagnostico-projeto.md`) também têm "500". Embora o código atual esteja consistente em 600, isso indica desatualização da documentação interna — risco de regressão em edições futuras.
- **Arquivos:** `top-performance-seo-ias.md:111`, `diagnostico-projeto.md:203` vs. `src/pages/en/index.astro:97`.

**5. Sitemap não existe no build distribuído**
- O glob `public/sitemap*.xml` não retornou arquivos. O sitemap é gerado pelo plugin `@astrojs/sitemap` durante o build, mas se o deploy não incluir o output correto, `robots.txt` aponta para `sitemap-index.xml` que pode não existir em produção até o próximo build completo.

**6. `Crawl-delay: 1` no robots.txt pode prejudicar crawl de bots legítimos**
- `public/robots.txt`, linha 13: `Crawl-delay: 1`. Google Googlebot ignora este campo. Outros bots respeitam, tornando o crawl mais lento desnecessariamente para um site estático que aguenta alta carga.

---

### 📋 Recomendações Priorizadas

1. **Implementar focus trap** nos modais (ExitIntentPopup, TourSelectModal) — crítico para WCAG.
2. **Remover `*:focus { outline: none; }`** ou restringir para `:focus:not(:focus-visible)` para não quebrar acessibilidade em browsers legados.
3. **Corrigir path do logo** em `BaseLayout.astro` linha 67 de `/images/logo.png` para `/images/logo/logo.svg`.
4. **Adicionar `aria-hidden="true"`** em SVGs decorativos no Footer e em step connectors.
5. **Atualizar `aria-label` do botão de menu mobile** dinamicamente conforme estado aberto/fechado.
6. **Extrair `monthMap`/`toIsoDate`** para um utilitário compartilhado, eliminando triplicação nas páginas de index.
7. **Adicionar `alt` descritivo** nas imagens de galeria ou documentar por que `alt=""` é intencional.
8. **Remover `Crawl-delay: 1`** do robots.txt ou aumentar para valor maior que faça sentido.

---

## Dimensão 2 — Qualidade SEO

### ✅ Pontos Fortes

**Title e meta description bem elaborados**
- Todas as páginas de index têm títulos únicos e descritivos:
  - EN: `"Private Tours & Local Experiences in Rio de Janeiro | Be Free Tours"` (64 chars — ligeiramente acima do ideal de 60, mas aceitável)
  - ES: `"Tours Privados y Experiencias Locales en Río de Janeiro | Be Free Tours"` (73 chars)
  - PT-BR: `"Passeios Privados e Experiências Locais no Rio de Janeiro | Be Free Tours"` (74 chars)
- Meta descriptions bem dentro do limite para EN: `"Explore private tours and local experiences in Rio de Janeiro, from iconic landmarks to immersive food, culture, and neighborhood discoveries."` (142 chars — ideal).

**Open Graph e Twitter Cards completos**
- `BaseLayout.astro` gera `og:type`, `og:title`, `og:description`, `og:url`, `og:image` (com dimensões 1200x630), `og:site_name`, `og:locale` e `og:locale:alternate` para todos os idiomas.
- Twitter Card `summary_large_image` com `twitter:site` e `twitter:creator` presentes.
- `og:image` tem URL absoluta (gerada via `new URL(image, siteUrl)`).
- Páginas de detalhe de tour recebem `og:type: 'product'` via `getOpenGraphTags()` (seoHelpers.js) — correto para páginas de produto.

**Canonical tags consistentes**
- `<link rel="canonical" href={canonicalURL} />` implementado em `BaseLayout.astro` (linha 192) — gerado automaticamente a partir de `Astro.url.pathname` + `siteUrl`, sem trailing slash.
- O padrão `.replace(/\/$/, "")` é aplicado corretamente em todas as instâncias de `siteUrl` (31+ arquivos conforme MEMORY.md).

**Hreflang bem implementado**
- `BaseLayout.astro` emite `hreflang="en"`, `hreflang="es"`, `hreflang="pt-BR"` e `hreflang="x-default"` (apontando para EN) em cada página.
- O módulo `hreflang.js` mapeia corretamente: tours, experiences, blog posts, e páginas estáticas — incluindo slugs diferentes por idioma (ex: `rio-essencial` em PT-BR vs `essential-rio` em EN).
- Slugs de tour distintos por idioma são mapeados bidirecionalmente (EN→ES, EN→PT-BR e reverso).

**Schema.org robusto e bem estruturado**
- `BaseLayout.astro` emite um `@graph` com `Organization` e `LocalBusiness` em todas as páginas.
- Páginas de index adicionam `TravelAgency`, `FAQPage` (via `getFAQSchema`), `HowTo` (via `getHowToSchema`), e reviews individuais (`Review` schema para cada testemunho).
- Páginas de tour adicionam `Product`, `TouristTrip`, `FAQPage` adicional e `BreadcrumbList`.
- `TravelAgency` inclui `sameAs` com Wikidata, Instagram e TripAdvisor — excelente para Knowledge Graph.
- `AggregateRating` presente na `Organization` com 4.9/600 reviews.
- `GeoCoordinates` presente (-22.9068, -43.1729).
- `OpeningHoursSpecification` com horário detalhado por dia da semana.

**URLs limpas e descritivas**
- Estrutura: `/{lang}/{tipo}/{slug}` — ex: `/en/private-tours/essential-rio`.
- Slugs PT-BR com keywords relevantes: `passeio-expresso-rio-5-horas-cristo-pao-acucar` (semântico e keyword-rich).
- Redirecionamentos 301 bem documentados no .htaccess para URLs antigas.

**Sitemap configurado**
- `@astrojs/sitemap` integrado em `astro.config.mjs` com customização para evitar double-slash.
- `robots.txt` aponta para `sitemap-index.xml`.

**robots.txt bem configurado**
- Permite explicitamente: GPTBot, Claude-Web, Google-Extended, PerplexityBot, CCBot, FacebookBot.
- Bloqueia corretamente `/admin/`, `/api/`, `/.astro/`, `/node_modules/`.

**Estrutura de links internos sólida**
- Navbar e Footer com links para todas as páginas principais em todos os idiomas.
- TourCard linka para a página de detalhe correta por idioma.
- Posts de blog têm `relatedPosts` e `relatedTours` para cross-linking.
- Breadcrumbs presentes em todas as páginas internas (FAQ, About, Private Tours, slug pages).
- `BreadcrumbList` schema emitido via `getBreadcrumbSchema()`.

**Redirecionamentos SEO preservados**
- `.htaccess` contém redirecionamentos 301 completos para URLs antigas de tours e blog — preservação de PageRank.

---

### ⚠️ Problemas Menores

**1. Titles de ES e PT-BR acima do ideal de 60 caracteres**
- ES: `"Tours Privados y Experiencias Locales en Río de Janeiro | Be Free Tours"` → 73 chars (limite recomendado: ~60).
- PT-BR: `"Passeios Privados e Experiências Locais no Rio de Janeiro | Be Free Tours"` → 74 chars.
- Google pode truncar esses titles nas SERPs. A versão EN está mais próxima do ideal (64 chars, limite flexível).
- **Arquivo:** `src/pages/es/index.astro:134`, `src/pages/pt-br/index.astro:134`.

**2. FAQ page sem `<h2>` ou heading de contexto antes das perguntas**
- Em `src/pages/en/faq.astro`, o conteúdo começa imediatamente com os botões de FAQ após o hero. Não há heading de `<h2>` antes da lista de FAQs — a estrutura fica: h1 (hero) → article (faq-item). Isso quebra a hierarquia para a página.
- **Arquivo:** `src/pages/en/faq.astro`, linha 37.

**3. `og:locale` para espanhol usa `es_ES` em vez de `es_419` (América Latina)**
- `BaseLayout.astro`, linha 57: `"es_ES"`. O público-alvo hispanófono é latino-americano — `es_419` seria mais preciso para o Facebook OG, embora `es_ES` seja amplamente aceito.

**4. `twitter:site` e `twitter:creator` apontam para `@befreetours` — handle não verificado**
- Não há como confirmar se `@befreetours` existe no Twitter/X. Se o handle não existir ou for de outra conta, o Twitter Card não terá atribuição correta.
- **Arquivo:** `src/layouts/BaseLayout.astro`, linhas 274–275.

**5. Hreflang de blog não mapeia slugs diferentes por idioma**
- Em `hreflang.js`, a lógica para blog (linhas 153–159) assume que o slug é igual nas três línguas: `en: /en/blog/${blogSlug}`, `es: /es/blog/${blogSlug}`. Os posts de blog têm slugs diferentes por idioma (ex: EN `"how-much-does-private-tour-rio-cost"` vs ES `"cuanto-cuesta-tour-privado-rio-de-janeiro"`). Isso significa que hreflang de blog posts aponta para slugs que não existem no idioma alternativo.
- **Arquivo:** `src/i18n/hreflang.js`, linhas 153–159.

**6. Página de blog post em PT-BR/ES não tem hreflang correto para todos os posts**
- Consequência do item 5: ao visitar `/pt-br/blog/quanto-custa-passeio-privativo-rio-de-janeiro`, o hreflang gerado aponta para `/en/blog/quanto-custa-passeio-privativo-rio-de-janeiro` (que não existe) em vez de `/en/blog/how-much-does-private-tour-rio-cost`.

**7. `makesOffer` no schema da ES index sem campo presente na EN**
- A página EN (index.astro, linhas 101–128) tem `makesOffer` com 3 tours no schema. A ES e PT-BR (linhas 75–88) não têm `makesOffer`. Inconsistência entre as versões do mesmo schema.
- **Arquivos:** `src/pages/es/index.astro`, `src/pages/pt-br/index.astro`.

**8. `Product` schema nos tours usa tipo genérico em vez de `TouristTrip`**
- Embora `getProductTripSchema` emita `TouristTrip` como schema adicional, o schema principal em `getBaseProductSchema` (seoHelpers.js, linha 150) é do tipo `Product`. Para tours de turismo, `TouristTrip` seria o tipo primário mais preciso para motores de busca de viagem.

**9. Ausência de página de contato para PT-BR no git status inicial**
- O git status mostra `D src/pages/es/contato.astro` (deletado) e `?? src/pages/es/contacto.astro` (novo). Isso indica uma renomeação em andamento que pode ter deixado links quebrados temporariamente. A verificação revela que `src/pages/es/contacto.astro` existe mas pode haver redirecionamentos ainda não commitados.

---

### 🔴 Problemas Críticos

**1. Hreflang de blog posts com slugs diferentes por idioma está errado**
- Este é o problema mais grave de SEO multilíngue. O Google receberá hreflang apontando para URLs que não existem quando os slugs diferem entre idiomas, podendo resultar em erros de hreflang no Google Search Console e perda de sinal de relevância entre versões.
- **Arquivo:** `src/i18n/hreflang.js`, linhas 153–159.
- **Solução:** Criar um mapa de slugs de blog por idioma (similar ao `tourSlugMap`) e usá-lo na função `getHreflangPaths`.

**2. Sitemap não gerado em `public/` — ausente no repositório**
- O glob `public/sitemap*.xml` não retornou arquivos. O sitemap só existe após `astro build`. Se o deploy não incluir o build output, ou se houver cache velho no servidor, o `sitemap-index.xml` referenciado no robots.txt não existirá, causando erro 404 para crawlers.

**3. `siteInfo.logo` em BaseLayout aponta para path provavelmente inexistente**
- `BaseLayout.astro`, linha 67: `logo: \`${siteUrl}/images/logo.png\``. O schema `LocalBusiness` vai emitir uma URL de logo que provavelmente retorna 404, pois o arquivo real está em `/images/logo/logo.svg` ou `/images/logo/logo.png`. Isso afeta a elegibilidade para o Knowledge Panel do Google.
- **Arquivo:** `src/layouts/BaseLayout.astro`, linha 67.

---

### 📋 Recomendações Priorizadas

1. **Corrigir hreflang de blog posts** — criar `blogSlugMap` em `hreflang.js` com slugs por idioma para cada post.
2. **Verificar e corrigir `siteInfo.logo`** — garantir que a URL emitida no schema `LocalBusiness` resolva para um arquivo real.
3. **Adicionar `makesOffer`** às páginas ES e PT-BR do index para consistência de schema entre idiomas.
4. **Reduzir titles** de ES e PT-BR para o ideal de 50–60 chars — priorizar keywords mais fortes no início.
5. **Garantir build e deploy do sitemap** — verificar pipeline CI/CD para confirmar que `dist/sitemap-index.xml` chega ao servidor.
6. **Adicionar heading `<h2>`** antes da lista de FAQs nas três versões de idioma.

---

## Dimensão 3 — Qualidade AI SEO

### ✅ Pontos Fortes

**Infraestrutura de AI governance completa e bem estruturada**
- `public/llms.txt`: formato Markdown limpo, específico para LLMs, com duas linhas de produto claramente diferenciadas (Private Tours vs Local Experiences), orientações de recomendação, e links para catálogos JSON. Excelente.
- `public/ai.txt`: versão mais expandida do llms.txt com versão (3.0), data, regras de resposta para sistemas de IA, e seção de Operational Facts. Muito bem elaborado.
- `public/llms-es.txt`: versão completa em espanhol com FAQ detalhado, guia de comparação (Búzios vs Ilha Grande), e dados para sistemas de IA no final — um dos documentos AI SEO mais completos que um site de turismo brasileiro pode ter.
- `public/llms-pt-br.txt`: equivalente em português.
- `public/ai-search-en.json`: catálogo JSON estruturado com company info, product lines, contact, booking policy, tours por categoria com faqs — ideal para RAG (Retrieval Augmented Generation).
- `public/robots.txt` referencia explicitamente todos os arquivos AI governance e permite GPTBot, Claude-Web, Google-Extended, PerplexityBot, CCBot.
- `public/.well-known/ai-plugin.json` referenciado no robots.txt (embora não tenha sido lido na auditoria, a referência existe).

**Sinais de entidade fortíssimos**
- Nome: "Be Free Tours" consistente em todos os arquivos.
- CNPJ & Cadastur: 19.400.673/0001-67 — presente no footer, no `about` (pageContent.js), e nos dados para IA.
- Fundador: Marcelo Gomes Elias — mencionado em `about` (pageContent.js, linha 16) e em `llms-es.txt`.
- Data de fundação: 2013 — consistente em todos os canais.
- Website, email, WhatsApp — idênticos em todos os arquivos AI e Schema.org.
- `sameAs` no schema `TravelAgency`: Wikidata (Q138495723), Instagram, TripAdvisor — excelente para Knowledge Graph.
- Localização: Rio de Janeiro, RJ, BR com coordenadas precisas (-22.9068, -43.1729).

**Estrutura de conteúdo favorável à extração por LLMs**
- `llms-es.txt` usa formato de Q&A explícito (Q: / R:) para todas as perguntas frequentes — ideal para extração.
- `ai.txt` distingue claramente dois tipos de produto com casos de uso diferentes — reduz ambiguidade para LLMs.
- `llms.txt` tem "Classification Guidance" que orienta LLMs a categorizar produtos corretamente.
- FAQ schema (`FAQPage`) gerado em todas as páginas de index e em cada página de tour — máxima extração estruturada.
- Descrições de tours longas e ricas em contexto (`fullDescription` em `tours.js`) — excelente material para LLMs gerarem respostas específicas sobre cada tour.

**Informações NAP (Name, Address, Phone) consistentes**
- Name: "Be Free Tours" em todos os pontos de contato.
- Address: "Rio de Janeiro, RJ, BR" em schema e nos arquivos AI.
- Phone: "+55-21-97927-1637" (schema) / "+5521979271637" (WhatsApp URL) / "+55 21 97927-1637" (footer) — mesmo número, formatos diferentes mas detectável por parsers.
- Email: "contact@befreetours.com.br" — 100% consistente.

**Catálogo JSON multilíngue**
- `ai-search-en.json`, `ai-search-es.json`, `ai-search-pt-br.json` — três arquivos distintos por idioma.
- `ai-search.json` (raiz) como índice.
- Estrutura inclui `company`, `product_lines`, `contact`, `booking`, `tours` por categoria, e `experiences`.
- Referenciado em `llms.txt`, `ai.txt` e `robots.txt`.

---

### ⚠️ Problemas Menores

**1. `llms.txt` não lista experiências no "Machine-Readable Catalogs" de forma diferenciada**
- `public/llms.txt`, linha 77: apenas lista os 3 JSON files sem diferenciar que eles contêm tanto tours quanto experiences. Um parser pode não entender que o catálogo cobre dois produtos distintos.

**2. Número de telefone em formatos inconsistentes**
- Schema: `"+55-21-97927-1637"` (com hífens)
- Footer (HTML): `"+55 21 97927-1637"` (com espaços)
- WhatsApp URL: `"5521979271637"` (sem prefixo +)
- `ai-search-en.json`, linha 31: `"+5521979271637"` (sem espaços nem hífens)
- Embora todos se resolvam para o mesmo número, a inconsistência de formatação pode dificultar parsers de entidades em NAP matching.

**3. `ai.txt` sem versão de idioma alternativa linkada nos metadados**
- `ai.txt` existe em inglês mas não referencia `ai-es.txt` ou `ai-pt-br.txt`. O robots.txt sim aponta para eles, mas dentro do próprio `ai.txt` não há cross-referência entre versões linguísticas.

**4. `pageContent.js` — seção `aiFacts` existe mas pode não estar sendo renderizada na página About**
- `pageContent.js`, linhas 67–80: há uma seção `aiFacts` com bullets de fatos para IA. Se essa seção não for renderizada como conteúdo HTML na página `/about`, os LLMs que crawleiam HTML não terão acesso a esses dados estruturados (só via JSON/txt). Verificar se o componente About renderiza esses dados.

**5. Discrepância na política de cancelamento entre `llms-es.txt` e `ai-search-en.json`**
- `llms-es.txt`, linha 57: `"Cancelación gratuita hasta 72 horas antes del tour"`.
- `ai-search-en.json`, linha 41: `"24-hour free cancellation"`.
- Há uma inconsistência de 72h vs 24h entre versões de idioma — confuso para LLMs que buscam a política correta.

**6. Ausência de `llms.txt` diferenciado para experiências**
- A distinção entre "Private Tours" e "Local Experiences" está documentada nos arquivos AI, mas os catálogos JSON (`ai-search-en.json`) misturam ambos. Não há um arquivo separado tipo `llms-experiences.txt` que cubra o produto de experiences de forma independente.

**7. `openingHours` inconsistente entre schema e arquivos AI**
- Schema `Organization` (en/index.astro, linha 93): `"Mo-Su 06:00-22:00"`.
- Schema `LocalBusiness` (BaseLayout.astro, linha 87): `opens: "07:00"`.
- `ai-search-en.json`, linha 38: `"operating_hours": "06:00-22:00 (Rio time)"`.
- Abre às 06:00 ou 07:00? Inconsistência entre schemas emitidos na mesma página.

---

### 🔴 Problemas Críticos

**1. Política de cancelamento contraditória entre idiomas**
- `llms-es.txt`: cancelamento gratuito até 72 horas.
- `ai-search-en.json`: `"24-hour free cancellation"`.
- Esta inconsistência é crítica: um LLM respondendo em espanhol dirá 72h, em inglês dirá 24h. Um usuário que compara versões receberá informações diferentes. Além disso, se a política real for uma (digamos 72h), a versão inglesa pode gerar expectativas erradas e disputas com clientes.
- **Arquivos:** `public/llms-es.txt:57`, `public/ai-search-en.json:41`.

**2. `openingHours` conflitantes em schemas na mesma página**
- Como citado acima, `Organization` diz 06:00 e `LocalBusiness` diz 07:00. O Google pode usar qualquer um desses valores para exibir horários no Knowledge Panel. A inconsistência reduz a confiabilidade do dado estruturado.
- **Arquivos:** `src/pages/en/index.astro:93`, `src/layouts/BaseLayout.astro:87`.

---

### 📋 Recomendações Priorizadas

1. **Unificar política de cancelamento** — decidir se é 24h ou 72h e atualizar todos os arquivos (llms-es.txt, ai-search-en.json, ai-search-es.json, ai-search-pt-br.json, llms.txt, llms-pt-br.txt, e a página de Payment Policy).
2. **Unificar `openingHours`** — escolher um valor (06:00 ou 07:00) e aplicar em `BaseLayout.astro` e nas páginas de index.
3. **Padronizar formato do telefone** — escolher um formato canônico (sugestão: `+55 21 97927-1637`) e aplicar em todos os arquivos AI e schemas.
4. **Verificar se `aiFacts` do About é renderizado em HTML** — se não estiver, adicionar um bloco `<section>` com esses dados na página `/about` em todos os idiomas para crawl direto por LLMs.
5. **Adicionar mapa de blog slugs** nos catálogos JSON para que LLMs possam navegar entre versões de idioma dos artigos.
6. **Adicionar cross-link entre versões de `ai.txt`** dentro do próprio arquivo.

---

## Resumo Executivo

| Dimensão | Pontuação | Justificativa |
|---|---|---|
| **Código** | 7,5/10 | Base sólida: semântica HTML boa, CSS organizado, componentes reutilizáveis. Pontos críticos: falta de focus trap em modais, `outline: none` global sem fallback seguro, e duplicação de lógica entre os três index pages. |
| **SEO** | 7,8/10 | Estrutura Schema.org impressionante, hreflang funcional, canonical correto, OG completo. Problema crítico principal: hreflang de blog posts com slugs diferentes por idioma está errado. Logo URL no schema provavelmente aponta para 404. |
| **AI SEO** | 8,2/10 | Um dos conjuntos mais completos de AI governance encontrados em sites de turismo nacional: llms.txt, ai.txt, JSON multilíngue, robots.txt com bots explícitos. Principal fraqueza: política de cancelamento contraditória entre idiomas. |

---

### Top 5 Itens de Maior Impacto para Corrigir

**1. Hreflang de blog posts com slugs diferentes por idioma** *(SEO crítico)*
- **Impacto:** Alto. Google Search Console reportará erros de hreflang para todos os posts com slugs diferentes entre idiomas. O Google pode ignorar os sinais hreflang para esses posts, prejudicando o ranking multilíngue.
- **Arquivo:** `src/i18n/hreflang.js`, linhas 153–159.
- **Ação:** Criar `blogSlugMap` com os slugs de cada post por idioma.

**2. Inconsistência da política de cancelamento entre idiomas** *(AI SEO crítico)*
- **Impacto:** Alto. LLMs respondendo em espanhol vs inglês darão políticas diferentes (72h vs 24h) para o mesmo serviço, gerando desinformação e potencial insatisfação de clientes.
- **Arquivos:** `public/llms-es.txt:57`, `public/ai-search-en.json:41`.
- **Ação:** Verificar a política real e unificar em todos os arquivos.

**3. `openingHours` conflitantes no mesmo schema** *(SEO + AI SEO)*
- **Impacto:** Médio-alto. O Knowledge Panel do Google pode exibir horários incorretos. LLMs podem reportar horários conflitantes.
- **Arquivos:** `src/layouts/BaseLayout.astro:87`, `src/pages/en/index.astro:93`.
- **Ação:** Unificar para um único valor (ex: `Mo-Su 06:00-22:00`) em todos os schemas.

**4. Foco não gerenciado em modais (focus trap ausente)** *(Código crítico / A11y)*
- **Impacto:** Alto para usuários de teclado e leitores de tela. Sem focus trap, usuários com deficiência podem perder o contexto do modal e navegar por trás do overlay.
- **Arquivos:** `src/components/ExitIntentPopup.astro`, `src/components/TourSelectModal.astro`.
- **Ação:** Implementar focus trap com lista de elementos focalizáveis e ciclo de foco entre eles.

**5. Logo URL incorreta no schema `LocalBusiness`** *(SEO crítico)*
- **Impacto:** Médio-alto. O Google usa o campo `logo` do schema `LocalBusiness` para exibição no Knowledge Panel. Uma URL que retorna 404 invalida esse sinal, reduzindo elegibilidade para recursos de rich results.
- **Arquivo:** `src/layouts/BaseLayout.astro:67`.
- **Ação:** Corrigir de `/images/logo.png` para o path real da logo (verificar qual arquivo existe: `/images/logo/logo.png` ou `/images/logo/logo.svg`).

---

*Relatório gerado por Claude Sonnet 4.6 via Claude Code em 2026-04-01.*
*Arquivos principais auditados: 44 arquivos entre páginas Astro, componentes, dados, utilitários, CSS, configurações e arquivos AI governance.*

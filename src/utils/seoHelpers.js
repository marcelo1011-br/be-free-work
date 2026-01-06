/* ================================
 *  BE FREE TOURS - SEO Helpers (ENHANCED)
 *  Funções para gerar metadata e schema
 *  + Review Schema ⭐
 *  + Open Graph 📱
 *  + FAQ Schema expandido 🎯
 *  ================================ */

/**
 * Gera metadata SEO para página de tour individual
 */
export function getTourSEO(tour, lang) {
  const langMap = {
    en: {
      titleSuffix: 'Private Tour in Rio | Be Free Tours',
      metaTemplate: 'Book this private tour in Rio de Janeiro. ',
    },
    es: {
      titleSuffix: 'Tour Privado en Río | Be Free Tours',
      metaTemplate: 'Reserva este tour privado en Río de Janeiro. ',
    },
    'pt-br': {
      titleSuffix: 'Passeio Privado no Rio | Be Free Tours',
      metaTemplate: 'Reserve este passeio privado no Rio de Janeiro. ',
    },
  };

  const langText = langMap[lang] || langMap.en;

  return {
    title: `${tour.title} | ${langText.titleSuffix}`,
    description: `${langText.metaTemplate}${tour.shortDescription}`,
    image: tour.thumbnail || '/images/og-default.jpg',
  };
}

/**
 * 🆕 Gera Open Graph metadata completa
 */
export function getOpenGraphTags(tour, lang, siteUrl) {
  const tourRoute = getTourRoute(lang);
  const tourUrl = `${siteUrl}/${lang}/${tourRoute}/${tour.slug}`;
  const imageUrl = tour.thumbnail?.startsWith('http')
  ? tour.thumbnail
  : `${siteUrl}${tour.thumbnail || '/images/og-default.jpg'}`;

  // Rating se disponível
  const rating = tour.reviews?.aggregateRating?.ratingValue || null;
  const reviewCount = tour.reviews?.aggregateRating?.reviewCount || null;

  return {
    'og:type': 'product',
    'og:url': tourUrl,
    'og:title': tour.title,
    'og:description': tour.shortDescription,
    'og:image': imageUrl,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:site_name': 'Be Free Tours',
    'og:locale': lang === 'pt-br' ? 'pt_BR' : lang,

    // Twitter Card
    'twitter:card': 'summary_large_image',
    'twitter:title': tour.title,
    'twitter:description': tour.shortDescription,
    'twitter:image': imageUrl,

    // Rating meta (se disponível)
    ...(rating && {
      'product:rating:value': rating,
      'product:rating:count': reviewCount,
    }),
  };
}

function getTourRoute(lang) {
  return lang === "en"
    ? "private-tours"
    : lang === "es"
      ? "tours-privados"
      : "passeios-privados";
}

/**
 * Gera JSON-LD schema para tour (TourProduct + Offer)
 */
export function getTourSchema(tour, lang, siteUrl) {
  // Calcula preço mínimo
  let price = 0;
  if (tour.pricing.from) {
    price = tour.pricing.from;
  } else if (tour.pricing.perPerson) {
    price = tour.pricing.perPerson;
  } else if (tour.pricing.standard) {
    const prices = Object.values(tour.pricing.standard);
    price = Math.min(...prices);
  }

  const tourRoute = getTourRoute(lang);
  const tourUrl = `${siteUrl}/${lang}/${tourRoute}/${tour.slug}`;
  const imageUrl = tour.thumbnail?.startsWith('http')
  ? tour.thumbnail
  : `${siteUrl}${tour.thumbnail}`;

  // Rating base ou do tour
  const rating = tour.reviews?.aggregateRating || {
    ratingValue: '5.0',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  };

  return [
    {
      '@type': 'Product',
      '@id': `${tourUrl}#product`,
      'name': tour.title,
      'description': tour.fullDescription,
      'image': imageUrl,
      'url': tourUrl,
      'brand': {
        '@type': 'Brand',
        'name': 'Be Free Tours',
      },
      'offers': {
        '@type': 'Offer',
        'url': tourUrl,
        'priceCurrency': 'USD',
        'price': price,
        'priceValidUntil': '2026-12-31',
        'validFrom': '2025-01-01',
        'availability': 'https://schema.org/InStock',
        'availabilityStarts': '2025-01-01T00:00:00-03:00',
        'availabilityEnds': '2026-12-31T23:59:59-03:00',
        'acceptedPaymentMethod': [
          'https://schema.org/CreditCard',
          'https://schema.org/PaymentCard',
          'http://purl.org/goodrelations/v1#PayPal',
          'http://purl.org/goodrelations/v1#BankTransferInAdvance'
        ],
        'seller': {
          '@type': 'Organization',
          'name': 'Be Free Tours',
        },
        'itemCondition': 'https://schema.org/NewCondition',
        'shippingDetails': {
          '@type': 'OfferShippingDetails',
          'shippingDestination': {
            '@type': 'DefinedRegion',
            'addressCountry': 'BR'
          }
        }
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': rating.ratingValue,
        'reviewCount': rating.reviewCount,
        'bestRating': rating.bestRating || '5',
        'worstRating': rating.worstRating || '1',
      },
    },
    {
      '@type': 'TouristAttraction',
      '@id': `${tourUrl}#attraction`,
      'name': tour.title,
      'description': tour.shortDescription,
      'image': imageUrl,
      'touristType': 'Tourists',
      'availableLanguage': ['en', 'es', 'pt'],
    },
  ];
}

/**
 * 🆕 Gera Review Schema com reviews reais do Viator/TripAdvisor
 */
export function getReviewSchema(tour, siteUrl, lang) {
  if (!tour.reviews || !tour.reviews.reviewsList || tour.reviews.reviewsList.length === 0) {
    return null;
  }

  const tourRoute = getTourRoute(lang);
  const tourUrl = `${siteUrl}/${lang}/${tourRoute}/${tour.slug}`;

  return tour.reviews.reviewsList.map((review, index) => ({
    '@type': 'Review',
    '@id': `${tourUrl}#review-${index + 1}`,
    'itemReviewed': {
      '@type': 'Product',
      'name': tour.title,
      'url': tourUrl,
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': review.rating,
      'bestRating': '5',
      'worstRating': '1',
    },
    'author': {
      '@type': 'Person',
      'name': review.author,
    },
    'datePublished': review.date,
    'reviewBody': review.text,
    'publisher': {
      '@type': 'Organization',
      'name': review.source, // "Viator" ou "TripAdvisor"
    },
  }));
}

/**
 * Gera breadcrumb schema
 */
export function getBreadcrumbSchema(items, siteUrl) {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * 🆕 Gera FAQPage schema EXPANDIDO (mais FAQs = melhor SEO)
 */
export function getFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return {
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.q || faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a || faq.answer,
      },
    })),
  };
}

/**
 * Gera WebSite schema com search action (permite pesquisa no Google)
 */
export function getWebSiteSchema(siteUrl) {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    'url': siteUrl,
    'name': 'Be Free Tours',
    'description': 'Premium Private Tours in Rio de Janeiro',
    'publisher': {
      '@id': `${siteUrl}/#organization`,
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${siteUrl}/en/private-tours?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    'inLanguage': ['en', 'es', 'pt-BR'],
  };
}

/**
 * Gera metadata para páginas estáticas (About, Contact, etc)
 */
export function getPageSEO(pageName, lang) {
  const metadata = {
    en: {
      about: {
        title: 'About Us - Be Free Tours | Rio Tour Company Since 2013',
        description:
        'Meet Be Free Tours: Born and raised in Rio, crafting personalized private tours since 2013. Local expertise, authentic experiences, and memories that last a lifetime.',
      },
      contact: {
        title: 'Contact Us - Be Free Tours | Get in Touch',
        description:
        'Contact Be Free Tours for your Rio adventure. WhatsApp, email, or form - we respond within 24 hours. Free pickup anywhere in Rio.',
      },
      privateTours: {
        title: 'Private Tours in Rio de Janeiro | Be Free Tours',
        description:
        'Explore Rio with our handcrafted private tours. City highlights, day trips, and walking experiences. Skip-the-line access, flexible itineraries, expert local guides.',
      },
    },
    es: {
      about: {
        title: 'Nosotros - Be Free Tours | Empresa de Tours desde 2013',
        description:
        'Conoce Be Free Tours: Nacidos y criados en Río, creando tours privados personalizados desde 2013. Experiencia local, vivencias auténticas y recuerdos inolvidables.',
      },
      contact: {
        title: 'Contáctanos - Be Free Tours | Tours Privados en Río',
        description:
        'Contacta a Be Free Tours para tu aventura en Río. WhatsApp, email o formulario - respondemos en 24 horas. Recogida gratis en cualquier lugar de Río.',
      },
      privateTours: {
        title: 'Tours Privados en Río de Janeiro | Be Free Tours',
        description:
        'Explora Río con nuestros tours privados personalizados. Tours de ciudad, excursiones y experiencias a pie. Acceso sin filas, itinerarios flexibles, guías locales expertos.',
      },
    },
    'pt-br': {
      about: {
        title: 'Sobre Nós - Be Free Tours | Empresa de Passeios desde 2013',
        description:
        'Conheça a Be Free Tours: Nascidos e criados no Rio, criando passeios privados personalizados desde 2013. Expertise local, experiências autênticas e memórias inesquecíveis.',
      },
      contact: {
        title: 'Fale Conosco - Be Free Tours | Passeios Privados no Rio',
        description:
        'Entre em contato com a Be Free Tours para sua aventura no Rio. WhatsApp, email ou formulário - respondemos em 24 horas. Busca grátis em qualquer lugar do Rio.',
      },
      privateTours: {
        title: 'Passeios Privados no Rio de Janeiro | Be Free Tours',
        description:
        'Explore o Rio com nossos passeios privados personalizados. Tours pela cidade, passeios de dia inteiro e experiências a pé. Acesso sem filas, itinerários flexíveis, guias locais especialistas.',
      },
    },
  };

  return metadata[lang]?.[pageName] || metadata.en[pageName];
}

/**
 * 🆕 Gera HowTo Schema (Como Reservar um Tour)
 * IAs e Google ADORAM este schema!
 */
export function getHowToSchema(lang, siteUrl) {
  const howToContent = {
    en: {
      name: "How to Book a Private Tour in Rio",
      description: "Simple step-by-step guide to booking your private tour with Be Free Tours",
      steps: [
        {
          name: "Choose Your Tour",
          text: "Browse our collection of 14 unique private tours. From iconic landmarks like Christ the Redeemer to hidden gems, pick the experience that matches your interests.",
          image: `${siteUrl}/images/step-choose.jpg`,
        },
        {
          name: "Select Date and Group Size",
          text: "Pick your preferred date and let us know how many people will join. All our tours are private, so you'll have personalized attention.",
          image: `${siteUrl}/images/step-select.jpg`,
        },
        {
          name: "Contact Us",
          text: "Reach out via WhatsApp (+55 21 97927-1637), email (contact@befreetours.com.br), or our contact form. We respond within 24 hours.",
          image: `${siteUrl}/images/step-contact.jpg`,
        },
        {
          name: "Receive Confirmation",
          text: "Get instant confirmation with tour details, pickup time, and guide information. We'll answer any questions you have.",
          image: `${siteUrl}/images/step-confirm.jpg`,
        },
        {
          name: "Enjoy Your Tour",
          text: "On tour day, your guide meets you at your hotel. Relax and enjoy Rio with skip-the-line access, expert commentary, and flexible itinerary.",
          image: `${siteUrl}/images/step-enjoy.jpg`,
        },
      ],
    },
    es: {
      name: "Cómo Reservar un Tour Privado en Río",
      description: "Guía paso a paso para reservar tu tour privado con Be Free Tours",
      steps: [
        {
          name: "Elige tu Tour",
          text: "Explora nuestra colección de 14 tours privados únicos. Desde monumentos icónicos como el Cristo Redentor hasta joyas escondidas.",
          image: `${siteUrl}/images/step-choose.jpg`,
        },
        {
          name: "Selecciona Fecha y Grupo",
          text: "Elige tu fecha preferida y dinos cuántas personas participarán. Todos nuestros tours son privados.",
          image: `${siteUrl}/images/step-select.jpg`,
        },
        {
          name: "Contáctanos",
          text: "Comunícate por WhatsApp (+55 21 97927-1637), email o formulario. Respondemos en 24 horas.",
          image: `${siteUrl}/images/step-contact.jpg`,
        },
        {
          name: "Recibe Confirmación",
          text: "Obtén confirmación instantánea con detalles del tour, hora de recogida e información del guía.",
          image: `${siteUrl}/images/step-confirm.jpg`,
        },
        {
          name: "Disfruta tu Tour",
          text: "El día del tour, tu guía te recoge en tu hotel. Relájate y disfruta de Río con acceso sin filas.",
          image: `${siteUrl}/images/step-enjoy.jpg`,
        },
      ],
    },
    "pt-br": {
      name: "Como Reservar um Passeio Privado no Rio",
      description: "Guia passo a passo para reservar seu passeio privado com Be Free Tours",
      steps: [
        {
          name: "Escolha seu Passeio",
          text: "Navegue por nossa coleção de 14 passeios privados únicos. De marcos icônicos como o Cristo Redentor a joias escondidas.",
          image: `${siteUrl}/images/step-choose.jpg`,
        },
        {
          name: "Selecione Data e Grupo",
          text: "Escolha sua data preferida e nos diga quantas pessoas participarão. Todos os nossos passeios são privados.",
          image: `${siteUrl}/images/step-select.jpg`,
        },
        {
          name: "Entre em Contato",
          text: "Fale conosco por WhatsApp (+55 21 97927-1637), email ou formulário. Respondemos em 24 horas.",
          image: `${siteUrl}/images/step-contact.jpg`,
        },
        {
          name: "Receba Confirmação",
          text: "Obtenha confirmação instantânea com detalhes do passeio, horário de busca e informações do guia.",
          image: `${siteUrl}/images/step-confirm.jpg`,
        },
        {
          name: "Aproveite seu Passeio",
          text: "No dia do passeio, seu guia te busca no hotel. Relaxe e aproveite o Rio com acesso sem filas.",
          image: `${siteUrl}/images/step-enjoy.jpg`,
        },
      ],
    },
  };

  const content = howToContent[lang] || howToContent.en;

  return {
    "@type": "HowTo",
    "@id": `${siteUrl}/${lang}#howto`,
    name: content.name,
    description: content.description,
    step: content.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
    totalTime: "PT5M", // 5 minutos para reservar
  };
}

/**
 * 🆕 Gera Article Schema completo para posts do blog
 */
export function getArticleSchema(post, lang, siteUrl) {
  const postUrl = `${siteUrl}/${lang}/blog/${post.slug}`;
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : post.image
      ? `${siteUrl}${post.image}`
      : post.imageSlug
        ? `${siteUrl}/images/blog/${post.imageSlug}.webp`
        : `${siteUrl}/images/og-default.jpg`;

  return {
    "@type": "Article",
    "@id": `${postUrl}#article`,
    "headline": post.title,
    "description": post.description,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630,
    },
    "datePublished": post.publishDate,
    "dateModified": post.updateDate || post.publishDate,
    "author": {
      "@type": "Organization",
      "name": post.author || "Be Free Tours",
      "url": siteUrl,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Be Free Tours",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/logo.png`,
        "width": 600,
        "height": 60,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "articleSection": post.category,
    "keywords": post.tags?.join(", ") || "",
    "inLanguage": lang === "pt-br" ? "pt-BR" : lang,
    "speakable": {
      "@type": "SpeakableSpecification",
      "xpath": [
        "/html/head/title",
        "/html/body//h1",
        "/html/body//article//p[1]"
      ]
    },
  };
}

/**
 * Get TouristTrip schema for tour pages
 * ESSENCIAL para tour operators - Google entende que é uma viagem turística
 */
export function getTouristTripSchema(tour, lang, siteUrl) {
  const langMap = {
    en: 'English',
    es: 'Spanish',
    'pt-br': 'Portuguese'
  };

  const tourRoute = getTourRoute(lang);
  const tourUrl = `${siteUrl}/${lang}/${tourRoute}/${tour.slug}`;

  return {
    "@type": "TouristTrip",
    "@id": `${tourUrl}#trip`,
    "name": tour.title,
    "description": tour.description,
    "url": tourUrl,
    "image": `${siteUrl}/images/tours/heroes/${tour.slug}-hero.webp`,
    
    // Tipo de turista ideal
    "touristType": tour.bestFor || ["Families", "Couples", "Solo travelers"],
    
    // Idiomas disponíveis
    "inLanguage": langMap[lang],
    "availableLanguage": ["English", "Spanish", "Portuguese"],
    
    // Itinerário detalhado
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": tour.highlights?.length || 0,
      "itemListElement": tour.highlights?.map((highlight, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": highlight,
          "description": `Visit ${highlight} on this tour`
        }
      })) || []
    },
    
    // Ofertas (pricing)
    "offers": {
      "@type": "Offer",
      "price": tour.pricing.from || tour.pricing.perPerson || tour.pricing.standard?.['1-3'] || "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": tourUrl,
      "validFrom": "2025-01-01",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "Organization",
        "name": "Be Free Tours"
      }
    },
    
    // Duração
    "duration": tour.duration,
    
    // Ponto de partida
    "departureLocation": {
      "@type": "Place",
      "name": "Rio de Janeiro",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ",
        "addressCountry": "BR"
      }
    },
    
    // Provider
    "provider": {
      "@type": "TravelAgency",
      "name": "Be Free Tours",
      "url": siteUrl,
      "telephone": "+5521979271637"
    }
  };
}

// ============================================
// NEW SCHEMAS FOR SEO 100/100
// ============================================

/**
 * AboutPage Schema
 * Para páginas "Sobre"
 */
export function getAboutPageSchema(lang, siteUrl) {
  const route = lang === 'en' ? 'about' : 'sobre';

  return {
    "@type": "AboutPage",
    "@id": `${siteUrl}/${lang}/${route}#webpage`,
    "url": `${siteUrl}/${lang}/${route}`,
    "name": lang === 'en' ? "About Be Free Tours" : lang === 'es' ? "Sobre Be Free Tours" : "Sobre a Be Free Tours",
    "description": "Premium private tour operator in Rio de Janeiro since 2013",
    "mainEntity": {
      "@type": "TravelAgency",
      "@id": `${siteUrl}/#organization`,
      "name": "Be Free Tours"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/${lang}/${route}#breadcrumb`
    }
  };
}

/**
 * ContactPage Schema
 * Para páginas de contato
 */
export function getContactPageSchema(lang, siteUrl) {
  const route = lang === 'en' ? 'contact' : 'contato';

  return {
    "@type": "ContactPage",
    "@id": `${siteUrl}/${lang}/${route}#webpage`,
    "url": `${siteUrl}/${lang}/${route}`,
    "name": lang === 'en' ? "Contact Be Free Tours" : lang === 'es' ? "Contacto Be Free Tours" : "Contato Be Free Tours",
    "description": "Get in touch with Be Free Tours for your private Rio tour",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+5521979271637",
      "email": "contact@befreetours.com.br",
      "availableLanguage": ["English", "Spanish", "Portuguese"],
      "areaServed": "BR"
    }
  };
}

/**
 * Blog/CollectionPage Schema
 * Para página de listagem de blog
 */
export function getBlogSchema(posts, lang, siteUrl) {
  return {
    "@type": "Blog",
    "@id": `${siteUrl}/${lang}/blog#blog`,
    "url": `${siteUrl}/${lang}/blog`,
    "name": "Be Free Tours Blog",
    "description": "Travel tips, guides and insider knowledge about Rio de Janeiro",
    "blogPost": posts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "@id": `${siteUrl}/${lang}/blog/${post.slug.replace(`${lang}/`, '')}#article`,
      "url": `${siteUrl}/${lang}/blog/${post.slug.replace(`${lang}/`, '')}`,
      "headline": post.data.title,
      "description": post.data.description
    }))
  };
}

/**
 * CollectionPage Schema (Tours Listing)
 * Para página de listagem de tours
 */
export function getToursCollectionSchema(tours, lang, siteUrl) {
  const route = lang === 'en' ? 'private-tours' : lang === 'es' ? 'tours-privados' : 'passeios-privados';

  return {
    "@type": "CollectionPage",
    "@id": `${siteUrl}/${lang}/${route}#collection`,
    "url": `${siteUrl}/${lang}/${route}`,
    "name": lang === 'en' ? "Private Tours in Rio de Janeiro" : lang === 'es' ? "Tours Privados en Río de Janeiro" : "Passeios Privados no Rio de Janeiro",
    "description": "Discover our exclusive collection of private tours in Rio de Janeiro",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": tours.length,
      "itemListElement": tours.slice(0, 15).map((tour, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristTrip",
          "@id": `${siteUrl}/${lang}/${route}/${tour.slug}#trip`,
          "name": tour.title,
          "description": tour.description,
          "url": `${siteUrl}/${lang}/${route}/${tour.slug}`
        }
      }))
    }
  };
}

/**
 * Open Graph Article Tags
 * Para blog posts
 */
export function getArticleOGTags(post) {
  return {
    'article:published_time': post.data.publishDate || new Date().toISOString(),
    'article:modified_time': post.data.updateDate || post.data.publishDate || new Date().toISOString(),
    'article:author': 'Be Free Tours',
    'article:section': post.data.category || 'Travel',
    'article:tag': post.data.tags?.join(',') || 'Rio de Janeiro, Brazil, Travel'
  };
}

/**
 * ImageGallery Schema
 * Para página de galeria de fotos
 */
export function getImageGallerySchema(images, lang, siteUrl) {
  const route = lang === 'en' ? 'gallery' : 'galeria';

  const titles = {
    en: "Rio de Janeiro Photo Gallery - Be Free Tours",
    es: "Galería de Fotos de Río de Janeiro - Be Free Tours",
    "pt-br": "Galeria de Fotos do Rio de Janeiro - Be Free Tours"
  };

  const descriptions = {
    en: "Explore stunning photos of Rio de Janeiro's iconic landmarks, beautiful beaches, and vibrant culture captured during our private tours.",
    es: "Explora impresionantes fotos de los lugares icónicos de Río de Janeiro, hermosas playas y vibrante cultura capturadas durante nuestros tours privados.",
    "pt-br": "Explore fotos impressionantes dos pontos turísticos icônicos do Rio de Janeiro, praias lindas e cultura vibrante capturadas durante nossos passeios privados."
  };

  return {
    "@type": "ImageGallery",
    "@id": `${siteUrl}/${lang}/${route}#gallery`,
    "url": `${siteUrl}/${lang}/${route}`,
    "name": titles[lang] || titles.en,
    "description": descriptions[lang] || descriptions.en,
    "publisher": {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "Be Free Tours"
    },
    "image": images.slice(0, 20).map(img => ({
      "@type": "ImageObject",
      "contentUrl": `${siteUrl}${img.url}`,
      "thumbnailUrl": `${siteUrl}${img.thumbnail}`,
      "name": img.title,
      "description": img.description,
      "caption": img.caption,
      "creator": {
        "@type": "Organization",
        "name": "Be Free Tours"
      },
      "copyrightNotice": "© Be Free Tours - All rights reserved",
      "creditText": "Be Free Tours"
    }))
  };
}

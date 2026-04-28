


import { pageContent } from "../data/pageContent.js";

function truncateMetaDescription(text, maxLength = 158) {
  if (text.length <= maxLength) return text;
  const trimmed = text.slice(0, maxLength + 1);
  const safeCut = Math.max(trimmed.lastIndexOf(". "), trimmed.lastIndexOf(", "), trimmed.lastIndexOf(" "));
  const base = safeCut > 110 ? trimmed.slice(0, safeCut) : trimmed.slice(0, maxLength - 1);
  return `${base.trim().replace(/[.,;:!?-]+$/, "")}.`;
}

function getIntentDescription(item, lang, section = "tours") {
  const copy = {
    en: {
      tours: `${item.title} is a private guided tour in Rio de Janeiro with iconic landmarks, full logistics, and skip-the-line planning.`,
      experiences: `${item.title} is a local Rio de Janeiro experience with immersive, walking-based discovery focused on culture, food, history, and things to do.`,
    },
    es: {
      tours: `${item.title} es un tour privado guiado en Río de Janeiro con lugares icónicos, logística completa y planificación sin filas.`,
      experiences: `${item.title} es una experiencia local en Río de Janeiro con recorrido inmersivo a pie, enfocada en cultura, comida, historia y qué hacer en Río.`,
    },
    "pt-br": {
      tours: `${item.title} é um passeio privado guiado no Rio de Janeiro com pontos icônicos, logística completa e planejamento sem filas.`,
      experiences: `${item.title} é uma experiência local no Rio de Janeiro com descoberta imersiva a pé, focada em cultura, comida, história e o que fazer no Rio.`,
    },
  };

  const langCopy = copy[lang] || copy.en;
  const description = langCopy[section === "experiences" ? "experiences" : "tours"];
  return truncateMetaDescription(description);
}

export function getTourSEO(tour, lang, imageUrl, section = 'tours') {
  const langMap = {
    en: {
      titleSuffix: section === 'experiences' ? 'Rio de Janeiro Experience' : 'Private Tour in Rio de Janeiro',
    },
    es: {
      titleSuffix: section === 'experiences' ? 'Experiencia en Río de Janeiro' : 'Tour Privado en Río de Janeiro',
    },
    'pt-br': {
      titleSuffix: section === 'experiences' ? 'Experiência no Rio de Janeiro' : 'Passeio Privado no Rio de Janeiro',
    },
  };

  const langText = langMap[lang] || langMap.en;

  const resolvedImage = imageUrl || '/images/og-default.jpg';

  return {
    title: `${tour.title} | ${langText.titleSuffix}`,
    description: getIntentDescription(tour, lang, section),
    image: resolvedImage,
  };
}


export function getOpenGraphTags(tour, lang, siteUrl, imageUrl, section = 'tours') {
  const tourRoute = getTourRoute(lang, section);
  const tourUrl = `${siteUrl}/${lang}/${tourRoute}/${tour.slug}/`;
  const resolvedImage = imageUrl || '/images/og-default.jpg';
  const absoluteImageUrl = resolvedImage?.startsWith('http')
  ? resolvedImage
  : `${siteUrl}${resolvedImage}`;

  
  const rating = tour.reviews?.aggregateRating?.ratingValue || null;
  const reviewCount = tour.reviews?.aggregateRating?.reviewCount || null;

  return {
    'og:type': 'product',
    'og:url': tourUrl,
    'og:title': tour.title,
    'og:description': tour.shortDescription,
    'og:image': absoluteImageUrl,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:site_name': 'Be Free Tours',
    'og:locale': lang === 'pt-br' ? 'pt_BR' : lang,

    
    'twitter:card': 'summary_large_image',
    'twitter:title': tour.title,
    'twitter:description': tour.shortDescription,
    'twitter:image': absoluteImageUrl,

    
    ...(rating && {
      'product:rating:value': rating,
      'product:rating:count': reviewCount,
    }),
  };
}

function getTourRoute(lang, section = 'tours') {
  if (section === 'experiences') {
    return lang === "en" ? "experiences" : "experiencias";
  }

  return lang === "en"
    ? "private-tours"
    : lang === "es"
      ? "tours-privados"
      : "passeios-privados";
}

export function getProductRoute(lang, section = 'tours') {
  return getTourRoute(lang, section);
}

function getStructuredDataPrice(pricing = {}) {
  if (!pricing || pricing.custom) return null;
  if (pricing.from) return pricing.from;
  if (pricing.perPerson) return pricing.perPerson;

  if (pricing.standard) {
    const prices = Object.values(pricing.standard).filter(
      (value) => typeof value === "number" && Number.isFinite(value)
    );

    if (prices.length > 0) {
      return Math.min(...prices);
    }
  }

  return null;
}


function getBaseProductSchema(tour, lang, siteUrl, imageUrl, section = 'tours') {
  const price = getStructuredDataPrice(tour.pricing);
  const tourRoute = getTourRoute(lang, section);
  const tourUrl = `${siteUrl}/${lang}/${tourRoute}/${tour.slug}/`;
  const resolvedImage = imageUrl || '/images/og-default.jpg';
  const absoluteImageUrl = resolvedImage?.startsWith('http')
  ? resolvedImage
  : `${siteUrl}${resolvedImage}`;

  
  const rating = tour.reviews?.aggregateRating || {
    ratingValue: '4.9',
    reviewCount: '800',
    bestRating: '5',
    worstRating: '1',
  };

  return {
    '@type': 'Product',
    '@id': `${tourUrl}#product`,
    'name': tour.title,
    'description': tour.fullDescription,
    'image': absoluteImageUrl,
    'url': tourUrl,
    'brand': {
      '@type': 'Brand',
      'name': 'Be Free Tours',
    },
    ...(price !== null && {
      'offers': {
        '@type': 'Offer',
        'url': tourUrl,
        'priceCurrency': 'USD',
        'price': price,
        'priceValidUntil': '2026-12-31',
        'validFrom': '2026-01-01',
        'availability': 'https://schema.org/InStock',
        'availabilityStarts': '2026-01-01T00:00:00-03:00',
        'availabilityEnds': '2026-12-31T23:59:59-03:00',
        'acceptedPaymentMethod': [
          'https://schema.org/CreditCard',
          'https://schema.org/PaymentCard',
          'http://purl.org/goodrelations/v1#PayPal',
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
    }),
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': rating.ratingValue,
      'reviewCount': rating.reviewCount,
      'bestRating': rating.bestRating || '5',
      'worstRating': rating.worstRating || '1',
    },
  };
}

export function getTourSchema(tour, lang, siteUrl, imageUrl, section = 'tours') {
  const tourRoute = getTourRoute(lang, section);
  const tourUrl = `${siteUrl}/${lang}/${tourRoute}/${tour.slug}/`;
  const resolvedImage = imageUrl || '/images/og-default.jpg';
  const absoluteImageUrl = resolvedImage?.startsWith('http')
  ? resolvedImage
  : `${siteUrl}${resolvedImage}`;

  return [
    getBaseProductSchema(tour, lang, siteUrl, imageUrl, section),
    {
      '@type': 'TouristAttraction',
      '@id': `${tourUrl}#attraction`,
      'name': tour.title,
      'description': tour.shortDescription,
      'image': absoluteImageUrl,
      'touristType': 'Tourists',
      'availableLanguage': ['en', 'es', 'pt'],
    },
  ];
}

export function getExperienceSchema(item, lang, siteUrl, imageUrl) {
  const itemRoute = getTourRoute(lang, 'experiences');
  const itemUrl = `${siteUrl}/${lang}/${itemRoute}/${item.slug}/`;
  const resolvedImage = imageUrl || '/images/og-default.jpg';
  const absoluteImageUrl = resolvedImage?.startsWith('http')
    ? resolvedImage
    : `${siteUrl}${resolvedImage}`;

  return [
    getBaseProductSchema(item, lang, siteUrl, imageUrl, 'experiences'),
    {
      '@type': 'TouristAttraction',
      '@id': `${itemUrl}#attraction`,
      'name': item.title,
      'description': item.shortDescription,
      'image': absoluteImageUrl,
      'touristType': 'Travelers',
      'availableLanguage': ['en', 'es', 'pt'],
    },
  ];
}

export function getProductSEO(item, lang, imageUrl, section = 'tours') {
  return getTourSEO(item, lang, imageUrl, section);
}

export function getProductSchema(item, lang, siteUrl, imageUrl, section = 'tours') {
  return section === 'experiences'
    ? getExperienceSchema(item, lang, siteUrl, imageUrl)
    : getTourSchema(item, lang, siteUrl, imageUrl, section);
}

export function getProductReviewSchema(item, siteUrl, lang, section = 'tours') {
  return getReviewSchema(item, siteUrl, lang, section);
}

export function getProductOpenGraphTags(item, lang, siteUrl, imageUrl, section = 'tours') {
  return getOpenGraphTags(item, lang, siteUrl, imageUrl, section);
}


export function getReviewSchema(tour, siteUrl, lang, section = 'tours') {
  if (!tour.reviews || !tour.reviews.reviewsList || tour.reviews.reviewsList.length === 0) {
    return null;
  }

  const tourRoute = getTourRoute(lang, section);
  const tourUrl = `${siteUrl}/${lang}/${tourRoute}/${tour.slug}/`;

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
      'name': review.source, 
    },
  }));
}


export function getBreadcrumbSchema(items, siteUrl) {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${siteUrl}${item.url.endsWith('/') ? item.url : item.url + '/'}`,
    })),
  };
}


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


export function getTourFAQSchema(tour, lang, section = 'tours') {
  const faqs = [];
  const hasPickup = tour.included.some((i) => /pickup|busca|recogida/i.test(i));
  const includedList = tour.included.join(', ');
  const isExperience = section === 'experiences';

  // Q1: Price
  let priceAnswer;
  if (tour.pricing.custom) {
    const answers = {
      en: `${tour.title} is a fully customized private tour — pricing depends on your specific itinerary, group size, and chosen attractions. Request a free quote to get a personalized estimate.`,
      es: `${tour.title} es un tour privado completamente personalizado — el precio depende de tu itinerario específico, tamaño del grupo y atracciones elegidas. Solicita un presupuesto gratuito para obtener una estimación personalizada.`,
      'pt-br': `${tour.title} é um passeio privado totalmente personalizado — o preço depende do seu itinerário específico, tamanho do grupo e atrações escolhidas. Solicite um orçamento gratuito para obter uma estimativa personalizada.`,
    };
    priceAnswer = answers[lang];
  } else if (tour.pricing.perPerson) {
    const answers = {
      en: isExperience
        ? `${tour.title} is priced at USD ${tour.pricing.perPerson} per person. This experience is walking-based and guide-led, so pricing is per participant rather than per vehicle.`
        : `${tour.title} is priced at USD ${tour.pricing.perPerson} per person. This walking tour does not require vehicle logistics, so pricing is per participant with a certified guide.`,
      es: isExperience
        ? `${tour.title} tiene un precio de USD ${tour.pricing.perPerson} por persona. Esta experiencia es guiada y se realiza a pie, por lo que el precio es por participante y no por vehículo.`
        : `${tour.title} tiene un precio de USD ${tour.pricing.perPerson} por persona. Este tour a pie no requiere logística de vehículo, por lo que pagas por participante con guía certificado.`,
      'pt-br': isExperience
        ? `${tour.title} tem preço de USD ${tour.pricing.perPerson} por pessoa. Esta experiência é guiada e feita a pé, então o valor é por participante e não por veículo.`
        : `${tour.title} tem preço de USD ${tour.pricing.perPerson} por pessoa. Este passeio a pé não exige logística de veículo, então o valor é por participante com guia certificado.`,
    };
    priceAnswer = answers[lang];
  } else if (tour.pricing.standard) {
    const minPrice = Math.min(...Object.values(tour.pricing.standard));
    const entries = Object.entries(tour.pricing.standard).map(([k, v]) => `USD ${v} (${k})`).join(' / ');
    const answers = {
      en: `${tour.title} starts from USD ${minPrice} per group. Pricing by group size: ${entries}. The price covers the entire private speedboat — the more people in your group, the lower the cost per person.`,
      es: `${tour.title} comienza desde USD ${minPrice} por grupo. Precios por tamaño de grupo: ${entries}. El precio cubre la lancha privada completa — cuantas más personas en tu grupo, menor el costo por persona.`,
      'pt-br': `${tour.title} começa a partir de USD ${minPrice} por grupo. Preços por tamanho de grupo: ${entries}. O preço cobre a lancha privativa completa — quanto mais pessoas no grupo, menor o custo por pessoa.`,
    };
    priceAnswer = answers[lang];
  } else {
    const answers = {
      en: `${tour.title} starts from USD ${tour.pricing.from} per group. The tour is priced per group, not per person — for couples and families, the cost per person drops significantly. Payment is only required 72 hours before the tour.`,
      es: `${tour.title} comienza desde USD ${tour.pricing.from} por grupo. El precio es por grupo, no por persona — para parejas y familias, el costo por persona baja considerablemente. El pago solo se requiere 72 horas antes del tour.`,
      'pt-br': `${tour.title} começa a partir de USD ${tour.pricing.from} por grupo. O preço é por grupo, não por pessoa — para casais e famílias, o custo por pessoa cai consideravelmente. O pagamento só é necessário 72 horas antes do passeio.`,
    };
    priceAnswer = answers[lang];
  }

  const q1 = { en: `How much does ${tour.title} cost?`, es: `¿Cuánto cuesta ${tour.title}?`, 'pt-br': `Quanto custa ${tour.title}?` };
  faqs.push({ q: q1[lang], a: priceAnswer });

  // Q2: What's included
  const q2 = { en: `What is included in ${tour.title}?`, es: `¿Qué incluye ${tour.title}?`, 'pt-br': `O que está incluído em ${tour.title}?` };
  const a2 = {
    en: `${tour.title} includes: ${includedList}.`,
    es: `${tour.title} incluye: ${includedList}.`,
    'pt-br': `${tour.title} inclui: ${includedList}.`,
  };
  faqs.push({ q: q2[lang], a: a2[lang] });

  // Q3: Duration
  const q3 = { en: `How long is ${tour.title}?`, es: `¿Cuánto dura ${tour.title}?`, 'pt-br': `Qual a duração de ${tour.title}?` };
  const a3 = {
    en: `${tour.title} lasts ${tour.duration}. The exact start time depends on your booking preferences and will be confirmed when you reserve.`,
    es: `${tour.title} dura ${tour.duration}. La hora exacta de inicio depende de tus preferencias de reserva y se confirma al reservar.`,
    'pt-br': `${tour.title} tem duração de ${tour.duration}. O horário exato de início depende das suas preferências de reserva e é confirmado ao reservar.`,
  };
  faqs.push({ q: q3[lang], a: a3[lang] });

  // Q4: Hotel pickup
  const q4 = { en: `Does ${tour.title} include hotel pickup?`, es: `¿${tour.title} incluye recogida en el hotel?`, 'pt-br': `${tour.title} inclui busca no hotel?` };
  const a4 = hasPickup
    ? {
        en: `Yes. ${tour.title} includes door-to-door pickup from any hotel, Airbnb, cruise terminal, or airport in Rio de Janeiro. Drop-off at the same location is also included.`,
        es: `Sí. ${tour.title} incluye recogida puerta a puerta desde cualquier hotel, Airbnb, terminal de cruceros o aeropuerto de Río de Janeiro. El traslado de regreso al mismo lugar también está incluido.`,
        'pt-br': `Sim. ${tour.title} inclui busca porta a porta em qualquer hotel, Airbnb, terminal de cruzeiros ou aeroporto no Rio de Janeiro. O retorno ao mesmo local também está incluído.`,
      }
    : {
        en: isExperience
          ? `${tour.title} starts at a central meeting point in Rio. This experience does not include private vehicle logistics or hotel pickup — your guide will meet you at the designated starting location.`
          : `${tour.title} is a walking tour that starts at a central meeting point in Rio. There is no private vehicle or hotel pickup — your certified guide will meet you at the designated starting location.`,
        es: isExperience
          ? `${tour.title} comienza en un punto de encuentro céntrico en Río. Esta experiencia no incluye logística de vehículo privado ni recogida en hotel — tu guía te recibirá en el punto de inicio indicado.`
          : `${tour.title} es un tour a pie que comienza en un punto de encuentro central en Río. No incluye vehículo privado ni recogida en hotel — tu guía certificado te recibirá en el punto de inicio designado.`,
        'pt-br': isExperience
          ? `${tour.title} começa em um ponto de encontro central no Rio. Esta experiência não inclui logística de veículo privativo nem busca no hotel — seu guia encontrará você no local combinado.`
          : `${tour.title} é um passeio a pé que começa em um ponto de encontro central no Rio. Não há veículo privativo ou busca no hotel — seu guia certificado irá te encontrar no ponto de partida designado.`,
      };
  faqs.push({ q: q4[lang], a: a4[lang] });

  // Q5: Restrictions (only if present)
  if (tour.restrictions) {
    const q5 = {
      en: `Are there any availability restrictions for ${tour.title}?`,
      es: `¿Hay restricciones de disponibilidad para ${tour.title}?`,
      'pt-br': `Há restrições de disponibilidade para ${tour.title}?`,
    };
    const a5 = {
      en: `Yes. ${tour.restrictions} Book in advance to secure your preferred date.`,
      es: `Sí. ${tour.restrictions} Reserva con anticipación para asegurar tu fecha preferida.`,
      'pt-br': `Sim. ${tour.restrictions} Reserve com antecedência para garantir sua data preferida.`,
    };
    faqs.push({ q: q5[lang], a: a5[lang] });
  }

  return faqs;
}

export function getProductFAQSchema(item, lang, section = 'tours') {
  return getTourFAQSchema(item, lang, section);
}


export function getWebSiteSchema(siteUrl) {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    'url': siteUrl,
    'name': 'Be Free Tours',
    'description': 'Premium private tours and local experiences in Rio de Janeiro',
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
        'Private guided tours in Rio de Janeiro with full logistics, iconic landmarks, local guides, and smooth planning for high-intent travelers.',
      },
      experiences: {
        title: 'Experiences in Rio de Janeiro | Be Free Tours',
        description:
        'Discover local things to do in Rio through immersive, walking-based experiences focused on food, culture, history, and everyday city life.',
      },
      faq: {
        title: 'FAQ — Private Tours Rio de Janeiro | Be Free Tours',
        description:
        'Answers to the most common questions about private tours in Rio de Janeiro — pricing, what\'s included, cancellation policy, hotel pickup, languages, and more.',
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
        'Tours privados guiados en Río de Janeiro con logística completa, lugares icónicos, guías locales y planificación fluida para viajeros listos para reservar.',
      },
      experiences: {
        title: 'Experiencias en Río de Janeiro | Be Free Tours',
        description:
        'Descubre qué hacer en Río con experiencias locales e inmersivas a pie, centradas en cultura, comida, historia y la vida cotidiana carioca.',
      },
      faq: {
        title: 'Preguntas Frecuentes — Tours Privados Río de Janeiro | Be Free Tours',
        description:
        'Respuestas a las preguntas más frecuentes sobre tours privados en Río de Janeiro — precios, qué incluye, cancelación, traslado al hotel, idiomas y más.',
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
        'Passeios privados guiados no Rio de Janeiro com logística completa, pontos icônicos, guias locais e planejamento fluido para viajantes prontos para reservar.',
      },
      experiences: {
        title: 'Experiências no Rio de Janeiro | Be Free Tours',
        description:
        'Descubra o que fazer no Rio com experiências locais e imersivas a pé, focadas em cultura, comida, história e no cotidiano carioca.',
      },
      faq: {
        title: 'Perguntas Frequentes — Passeios Privados Rio de Janeiro | Be Free Tours',
        description:
        'Respostas às perguntas mais comuns sobre passeios privados no Rio de Janeiro — preços, o que inclui, cancelamento, busca no hotel, idiomas e mais.',
      },
    },
  };

  return metadata[lang]?.[pageName] || metadata.en[pageName];
}


export function getHowToSchema(lang, siteUrl) {
  const howToContent = {
    en: {
      name: "How to Book a Private Tour in Rio",
      description: "Simple step-by-step guide to booking your private tour with Be Free Tours",
      steps: [
        {
          name: "Choose Your Tour",
          text: "Browse our collection of 12 private tours with transport, logistics, and landmark-focused itineraries. From iconic sights like Christ the Redeemer to full-day escapes, pick the option that matches your plans.",
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
          text: "On tour day, your guide meets you at your hotel. Relax and enjoy Rio with expert commentary and a flexible itinerary.",
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
          text: "Explora nuestra colección de 12 tours privados con transporte, logística y enfoque en lugares icónicos. Desde el Cristo Redentor hasta escapadas de día completo, elige la opción que mejor se adapta a tu viaje.",
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
          text: "El día del tour, tu guía te recoge en tu hotel. Relájate y disfruta de Río con acceso programado.",
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
          text: "Explore nossa coleção de 12 passeios privados com transporte, logística e foco em pontos icônicos. Do Cristo Redentor aos bate-voltas de dia inteiro, escolha a opção que melhor combina com a sua viagem.",
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
          text: "No dia do passeio, seu guia te busca no hotel. Relaxe e aproveite o Rio com acesso programado.",
          image: `${siteUrl}/images/step-enjoy.jpg`,
        },
      ],
    },
  };

  const content = howToContent[lang] || howToContent.en;

  return {
    "@type": "HowTo",
    "@id": `${siteUrl}/${lang}/#howto`,
    name: content.name,
    description: content.description,
    step: content.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
    totalTime: "PT5M", 
  };
}


export function getArticleSchema(post, lang, siteUrl) {
  const postUrl = `${siteUrl}/${lang}/blog/${post.slug}/`;
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


export function getTouristTripSchema(tour, lang, siteUrl, section = 'tours') {
  const langMap = {
    en: 'English',
    es: 'Spanish',
    'pt-br': 'Portuguese'
  };

  const tourRoute = getTourRoute(lang, section);
  const imageSlug = tour.imageSlug || tour.slug;
  const tourUrl = `${siteUrl}/${lang}/${tourRoute}/${tour.slug}/`;
  const price = getStructuredDataPrice(tour.pricing);

  return {
    "@type": "TouristTrip",
    "@id": `${tourUrl}#trip`,
    "name": tour.title,
    "description": tour.shortDescription,
    "url": tourUrl,
    "image": `${siteUrl}/images/tours/heroes/${imageSlug}-hero.webp`,
    
    
    "touristType": tour.bestFor || ["Families", "Couples", "Solo travelers"],
    
    
    "inLanguage": langMap[lang],
    "availableLanguage": ["English", "Spanish", "Portuguese"],
    
    
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
    
    
    ...(price !== null && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": tourUrl,
        "validFrom": "2026-01-01",
        "priceValidUntil": "2026-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Be Free Tours"
        }
      },
    }),
    
    
    "duration": tour.duration,
    
    
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
    
    
    "provider": {
      "@type": "TravelAgency",
      "name": "Be Free Tours",
      "url": siteUrl,
      "telephone": "+5521979271637"
    }
  };
}

export function getProductTripSchema(item, lang, siteUrl, section = 'tours') {
  return section === 'experiences' ? null : getTouristTripSchema(item, lang, siteUrl, section);
}






export function getAboutPageSchema(lang, siteUrl) {
  const route = lang === 'en' ? 'about' : 'sobre';
  const aiFacts = pageContent.about[lang]?.aiFacts?.items || [];
  const additionalProperty = aiFacts
    .map((item) => {
      const separatorIndex = item.indexOf(':');
      if (separatorIndex === -1) {
        return null;
      }

      return {
        "@type": "PropertyValue",
        "name": item.slice(0, separatorIndex).trim(),
        "value": item.slice(separatorIndex + 1).trim(),
      };
    })
    .filter(Boolean);

  return {
    "@type": "AboutPage",
    "@id": `${siteUrl}/${lang}/${route}/#webpage`,
    "url": `${siteUrl}/${lang}/${route}/`,
    "name": lang === 'en' ? "About Be Free Tours" : lang === 'es' ? "Sobre Be Free Tours" : "Sobre a Be Free Tours",
    "description": "Premium private tour operator in Rio de Janeiro since 2013",
    "mainEntity": {
      "@type": "TravelAgency",
      "@id": `${siteUrl}/#organization`,
      "name": "Be Free Tours",
      "foundingDate": "2013",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ",
        "addressCountry": "BR",
      },
      "availableLanguage": ["English", "Spanish", "Portuguese"],
      "additionalProperty": additionalProperty
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/${lang}/${route}#breadcrumb`
    }
  };
}


export function getContactPageSchema(lang, siteUrl) {
  const route = lang === 'en' ? 'contact' : lang === 'es' ? 'contacto' : 'contato';

  return {
    "@type": "ContactPage",
    "@id": `${siteUrl}/${lang}/${route}/#webpage`,
    "url": `${siteUrl}/${lang}/${route}/`,
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


export function getBlogSchema(posts, lang, siteUrl) {
  return {
    "@type": "Blog",
    "@id": `${siteUrl}/${lang}/blog/#blog`,
    "url": `${siteUrl}/${lang}/blog/`,
    "name": "Be Free Tours Blog",
    "description": "Travel tips, guides and insider knowledge about Rio de Janeiro",
    "blogPost": posts.slice(0, 10).map(post => {
      const cleanSlug = String(post.slug).split("/").filter(Boolean).pop();
      return {
        "@type": "BlogPosting",
        "@id": `${siteUrl}/${lang}/blog/${cleanSlug}/#article`,
        "url": `${siteUrl}/${lang}/blog/${cleanSlug}/`,
        "headline": post.data.title,
        "description": post.data.description
      };
    })
  };
}


export function getToursCollectionSchema(tours, lang, siteUrl, section = 'tours') {
  const route = getTourRoute(lang, section);
  const itemFragment = section === 'experiences' ? 'product' : 'trip';
  const names = {
    tours: {
      en: "Private Tours in Rio de Janeiro",
      es: "Tours Privados en Río de Janeiro",
      "pt-br": "Passeios Privados no Rio de Janeiro",
    },
    experiences: {
      en: "Experiences in Rio de Janeiro",
      es: "Experiencias en Río de Janeiro",
      "pt-br": "Experiências no Rio de Janeiro",
    },
  };

  const descriptions = {
    tours: "Discover our exclusive collection of private tours in Rio de Janeiro",
    experiences: "Discover our curated collection of immersive experiences in Rio de Janeiro",
  };

  return {
    "@type": "CollectionPage",
    "@id": `${siteUrl}/${lang}/${route}/#collection`,
    "url": `${siteUrl}/${lang}/${route}/`,
    "name": names[section]?.[lang] || names.tours[lang] || names.tours.en,
    "description": descriptions[section] || descriptions.tours,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": tours.length,
      "itemListElement": tours.slice(0, 15).map((tour, index) => {
        const itemUrl = `${siteUrl}/${lang}/${route}/${tour.slug}/`;
        const price = getStructuredDataPrice(tour.pricing);
        return {
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "TouristTrip",
            "@id": `${itemUrl}#${itemFragment}`,
            "name": tour.title,
            "description": tour.shortDescription,
            "url": itemUrl,
            ...(section === 'experiences' && {
              "offers": {
                "@type": "Offer",
                "price": price !== null ? price.toString() : "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": itemUrl,
                "validFrom": new Date().toISOString().split('T')[0],
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "800",
                "bestRating": "5",
                "worstRating": "1",
              },
            }),
          },
        };
      })
    }
  };
}

export function getProductsCollectionSchema(items, lang, siteUrl, section = 'tours') {
  return getToursCollectionSchema(items, lang, siteUrl, section);
}


export function getArticleOGTags(post) {
  return {
    'article:published_time': post.data.publishDate || new Date().toISOString(),
    'article:modified_time': post.data.updateDate || post.data.publishDate || new Date().toISOString(),
    'article:author': 'Be Free Tours',
    'article:section': post.data.category || 'Travel',
    'article:tag': post.data.tags?.join(',') || 'Rio de Janeiro, Brazil, Travel'
  };
}


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
    "@id": `${siteUrl}/${lang}/${route}/#gallery`,
    "url": `${siteUrl}/${lang}/${route}/`,
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

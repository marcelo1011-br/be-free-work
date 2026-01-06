/**
 * BE FREE TOURS - Gallery Content
 * Image descriptions and metadata for the photo gallery
 *
 * INSTRUÇÕES PARA ADICIONAR IMAGENS REAIS:
 *
 * 1. Coloque todas as imagens em: src/images/gallery/
 *
 * 2. Nomes de arquivo: rio-01.webp até rio-24.webp
 *    (Você pode usar qualquer nome, apenas atualize o imageSrc abaixo)
 *
 * 3. Formato aceito: JPG, JPEG, PNG ou WebP
 *    Recomendado: WebP (menor tamanho, melhor performance)
 *
 * 4. Proporções: LIVRES - aceita qualquer proporção!
 *    - Paisagem (landscape): 16:9, 3:2, 4:3, etc.
 *    - Retrato (portrait): 2:3, 3:4, 9:16, etc.
 *    - Quadrado: 1:1
 *    O grid se auto-ajusta às diferentes proporções
 *
 * 5. Tamanho recomendado:
 *    - Largura: 1200-1600px (para boa qualidade em telas grandes)
 *    - Altura: livre, de acordo com a proporção da imagem
 *
 * 6. A galeria aceita: *.{jpeg,jpg,png,webp}
 */

/**
 * Gallery Filters - Used for category filtering in the gallery
 */
export const galleryFilters = {
  all: {
    en: "All Photos",
    es: "Todas las Fotos",
    "pt-br": "Todas as Fotos"
  },
  christRedeemer: {
    en: "Christ the Redeemer",
    es: "Cristo Redentor",
    "pt-br": "Cristo Redentor"
  },
  sugarloaf: {
    en: "Sugarloaf Mountain",
    es: "Pan de Azúcar",
    "pt-br": "Pão de Açúcar"
  },
  beaches: {
    en: "Beaches",
    es: "Playas",
    "pt-br": "Praias"
  },
  historic: {
    en: "Historic Rio",
    es: "Río Histórico",
    "pt-br": "Rio Histórico"
  },
  nature: {
    en: "Nature & Parks",
    es: "Naturaleza y Parques",
    "pt-br": "Natureza e Parques"
  },
  culture: {
    en: "Food & Culture",
    es: "Gastronomía y Cultura",
    "pt-br": "Gastronomia e Cultura"
  }
};

/**
 * Gallery Page Content - Text for the gallery page UI
 */
export const galleryContent = {
  en: {
    hero: {
      title: "Photo Gallery",
      subtitle: "Explore the breathtaking beauty of Rio de Janeiro through our lens"
    },
    filterLabel: "Filter by category:",
    categories: {
      all: "All Photos",
      christRedeemer: "Christ the Redeemer",
      sugarloaf: "Sugarloaf Mountain",
      beaches: "Beaches",
      historic: "Historic Rio",
      nature: "Nature & Parks",
      culture: "Food & Culture"
    },
    cta: {
      title: "Ready to Experience Rio?",
      subtitle: "Book your personalized private tour and create your own unforgettable memories",
      buttonPrimary: "View Tours",
      buttonSecondary: "Contact Us"
    }
  },
  es: {
    hero: {
      title: "Galería de Fotos",
      subtitle: "Explora la impresionante belleza de Río de Janeiro a través de nuestro lente"
    },
    filterLabel: "Filtrar por categoría:",
    categories: {
      all: "Todas las Fotos",
      christRedeemer: "Cristo Redentor",
      sugarloaf: "Pan de Azúcar",
      beaches: "Playas",
      historic: "Río Histórico",
      nature: "Naturaleza y Parques",
      culture: "Gastronomía y Cultura"
    },
    cta: {
      title: "¿Listo para Experimentar Río?",
      subtitle: "Reserva tu tour privado personalizado y crea tus propios recuerdos inolvidables",
      buttonPrimary: "Ver Tours",
      buttonSecondary: "Contáctanos"
    }
  },
  "pt-br": {
    hero: {
      title: "Galeria de Fotos",
      subtitle: "Explore a beleza deslumbrante do Rio de Janeiro através das nossas lentes"
    },
    filterLabel: "Filtrar por categoria:",
    categories: {
      all: "Todas as Fotos",
      christRedeemer: "Cristo Redentor",
      sugarloaf: "Pão de Açúcar",
      beaches: "Praias",
      historic: "Rio Histórico",
      nature: "Natureza e Parques",
      culture: "Gastronomia e Cultura"
    },
    cta: {
      title: "Pronto para Experimentar o Rio?",
      subtitle: "Reserve seu tour privado personalizado e crie suas próprias memórias inesquecíveis",
      buttonPrimary: "Ver Passeios",
      buttonSecondary: "Fale Conosco"
    }
  }
};

/**
 * Gallery Images Data
 * imageSrc: filename in src/images/gallery/ (imported dynamically by pages)
 */
export const galleryImages = [
  // Image 01 - Sugarloaf Cable Car
  {
    id: "sugarloaf-01",
    category: "sugarloaf",
    imageSrc: "rio-01.webp",
    title: {
      en: "Sugarloaf Cable Car Experience",
      es: "Experiencia en el Teleférico del Pan de Azúcar",
      "pt-br": "Experiência no Bondinho do Pão de Açúcar"
    },
    description: {
      en: "Happy tourists enjoying the scenic cable car ride with Sugarloaf Mountain in the background",
      es: "Turistas felices disfrutando del paseo panorámico en teleférico con el Pan de Azúcar al fondo",
      "pt-br": "Turistas felizes aproveitando o passeio panorâmico de bondinho com o Pão de Açúcar ao fundo"
    },
    alt: {
      en: "Tourists at Sugarloaf Mountain cable car",
      es: "Turistas en el teleférico del Pan de Azúcar",
      "pt-br": "Turistas no bondinho do Pão de Açúcar"
    }
  },

  // Image 02 - Christ Redeemer Selfie
  {
    id: "christ-02",
    category: "christRedeemer",
    imageSrc: "rio-02.webp",
    title: {
      en: "Selfie with Christ the Redeemer",
      es: "Selfie con el Cristo Redentor",
      "pt-br": "Selfie com o Cristo Redentor"
    },
    description: {
      en: "Memorable moment - tourists taking a selfie with the iconic Christ the Redeemer statue",
      es: "Momento memorable - turistas tomándose una selfie con la icónica estatua del Cristo Redentor",
      "pt-br": "Momento memorável - turistas tirando selfie com a icônica estátua do Cristo Redentor"
    },
    alt: {
      en: "Tourist selfie at Christ the Redeemer",
      es: "Selfie de turistas en el Cristo Redentor",
      "pt-br": "Selfie de turistas no Cristo Redentor"
    }
  },

  // Image 03 - Christ Redeemer Sunset
  {
    id: "christ-03",
    category: "christRedeemer",
    imageSrc: "rio-03.webp",
    title: {
      en: "Sunset at Corcovado",
      es: "Atardecer en el Corcovado",
      "pt-br": "Pôr do Sol no Corcovado"
    },
    description: {
      en: "Group of tourists enjoying the golden hour at Christ the Redeemer during sunset",
      es: "Grupo de turistas disfrutando de la hora dorada en el Cristo Redentor durante el atardecer",
      "pt-br": "Grupo de turistas aproveitando a hora dourada no Cristo Redentor durante o pôr do sol"
    },
    alt: {
      en: "Tourists at Christ the Redeemer at sunset",
      es: "Turistas en el Cristo Redentor al atardecer",
      "pt-br": "Turistas no Cristo Redentor ao pôr do sol"
    }
  },

  // Image 04 - Panoramic View
  {
    id: "panoramic-01",
    category: "christRedeemer",
    imageSrc: "rio-04.webp",
    title: {
      en: "Panoramic Rio View",
      es: "Vista Panorámica de Río",
      "pt-br": "Vista Panorâmica do Rio"
    },
    description: {
      en: "Breathtaking panoramic view of Rio de Janeiro with beaches and mountains",
      es: "Impresionante vista panorámica de Río de Janeiro con playas y montañas",
      "pt-br": "Vista panorâmica de tirar o fôlego do Rio de Janeiro com praias e montanhas"
    },
    alt: {
      en: "Panoramic view of Rio de Janeiro",
      es: "Vista panorámica de Río de Janeiro",
      "pt-br": "Vista panorâmica do Rio de Janeiro"
    }
  },

  // Image 05 - Waterfall in Tijuca
  {
    id: "nature-01",
    category: "nature",
    imageSrc: "rio-05.webp",
    title: {
      en: "Tijuca Forest Waterfall",
      es: "Cascada del Bosque de Tijuca",
      "pt-br": "Cachoeira da Floresta da Tijuca"
    },
    description: {
      en: "Tourists exploring the beautiful waterfalls in Tijuca National Park rainforest",
      es: "Turistas explorando las hermosas cascadas en el bosque del Parque Nacional de Tijuca",
      "pt-br": "Turistas explorando as belas cachoeiras na floresta do Parque Nacional da Tijuca"
    },
    alt: {
      en: "Waterfall at Tijuca Forest",
      es: "Cascada en el Bosque de Tijuca",
      "pt-br": "Cachoeira na Floresta da Tijuca"
    }
  },

  // Image 06 - Cable Car Ride
  {
    id: "sugarloaf-02",
    category: "sugarloaf",
    imageSrc: "rio-06.webp",
    title: {
      en: "Inside the Cable Car",
      es: "Dentro del Teleférico",
      "pt-br": "Dentro do Bondinho"
    },
    description: {
      en: "Happy tourists enjoying the scenic cable car ride to Sugarloaf Mountain",
      es: "Turistas felices disfrutando del viaje escénico en teleférico al Pan de Azúcar",
      "pt-br": "Turistas felizes aproveitando o passeio panorâmico de bondinho para o Pão de Açúcar"
    },
    alt: {
      en: "Tourists in Sugarloaf cable car",
      es: "Turistas en el teleférico del Pan de Azúcar",
      "pt-br": "Turistas no bondinho do Pão de Açúcar"
    }
  },

  // Image 07 - Maracanã Stadium
  {
    id: "culture-01",
    category: "culture",
    imageSrc: "rio-07.webp",
    title: {
      en: "Maracanã Stadium Visit",
      es: "Visita al Estadio Maracanã",
      "pt-br": "Visita ao Estádio Maracanã"
    },
    description: {
      en: "Tourist at the iconic Maracanã Stadium, temple of Brazilian football",
      es: "Turista en el icónico Estadio Maracanã, templo del fútbol brasileño",
      "pt-br": "Turista no icônico Estádio Maracanã, templo do futebol brasileiro"
    },
    alt: {
      en: "Tourist at Maracanã Stadium",
      es: "Turista en el Estadio Maracanã",
      "pt-br": "Turista no Estádio Maracanã"
    }
  },

  // Image 08 - Historic Downtown
  {
    id: "historic-01",
    category: "historic",
    imageSrc: "rio-08.webp",
    title: {
      en: "Historic Downtown Tour",
      es: "Tour por el Centro Histórico",
      "pt-br": "Tour pelo Centro Histórico"
    },
    description: {
      en: "Group of tourists exploring Rio's historic downtown with equestrian monument",
      es: "Grupo de turistas explorando el centro histórico de Río con monumento ecuestre",
      "pt-br": "Grupo de turistas explorando o centro histórico do Rio com monumento equestre"
    },
    alt: {
      en: "Tourists at historic downtown Rio",
      es: "Turistas en el centro histórico de Río",
      "pt-br": "Turistas no centro histórico do Rio"
    }
  },

  // Image 09 - Museum of Tomorrow
  {
    id: "culture-02",
    category: "culture",
    imageSrc: "rio-09.webp",
    title: {
      en: "Museum of Tomorrow Area",
      es: "Área del Museo del Mañana",
      "pt-br": "Área do Museu do Amanhã"
    },
    description: {
      en: "Tourists at the modern Museum of Tomorrow area in Porto Maravilha",
      es: "Turistas en el área moderna del Museo del Mañana en Porto Maravilha",
      "pt-br": "Turistas na área moderna do Museu do Amanhã na Porto Maravilha"
    },
    alt: {
      en: "Tourists at Museum of Tomorrow",
      es: "Turistas en el Museo del Mañana",
      "pt-br": "Turistas no Museu do Amanhã"
    }
  },

  // Image 10 - Sugarloaf Viewpoint
  {
    id: "sugarloaf-03",
    category: "sugarloaf",
    imageSrc: "rio-10.webp",
    title: {
      en: "Sugarloaf Mountain Viewpoint",
      es: "Mirador del Pan de Azúcar",
      "pt-br": "Mirante do Pão de Açúcar"
    },
    description: {
      en: "Tourists enjoying the spectacular 360-degree panoramic view from Sugarloaf Mountain",
      es: "Turistas disfrutando de la espectacular vista panorámica de 360 grados desde el Pan de Azúcar",
      "pt-br": "Turistas aproveitando a espetacular vista panorâmica de 360 graus do Pão de Açúcar"
    },
    alt: {
      en: "Panoramic view from Sugarloaf Mountain",
      es: "Vista panorámica desde el Pan de Azúcar",
      "pt-br": "Vista panorâmica do Pão de Açúcar"
    }
  },

  // Image 11 - Botanical Garden
  {
    id: "nature-02",
    category: "nature",
    imageSrc: "rio-11.webp",
    title: {
      en: "Botanical Garden Stroll",
      es: "Paseo por el Jardín Botánico",
      "pt-br": "Passeio pelo Jardim Botânico"
    },
    description: {
      en: "Tourists exploring the beautiful palm trees avenue at Rio's Botanical Garden",
      es: "Turistas explorando la hermosa avenida de palmeras en el Jardín Botánico de Río",
      "pt-br": "Turistas explorando a bela alameda de palmeiras no Jardim Botânico do Rio"
    },
    alt: {
      en: "Tourists at Botanical Garden",
      es: "Turistas en el Jardín Botánico",
      "pt-br": "Turistas no Jardim Botânico"
    }
  },

  // Image 12 - Flamengo Store
  {
    id: "culture-03",
    category: "culture",
    imageSrc: "rio-12.webp",
    title: {
      en: "Brazilian Football Culture",
      es: "Cultura del Fútbol Brasileño",
      "pt-br": "Cultura do Futebol Brasileiro"
    },
    description: {
      en: "Tourists with personalized Flamengo jerseys experiencing Brazilian football culture",
      es: "Turistas con camisetas personalizadas del Flamengo experimentando la cultura del fútbol brasileño",
      "pt-br": "Turistas com camisas personalizadas do Flamengo vivenciando a cultura do futebol brasileiro"
    },
    alt: {
      en: "Tourists with Flamengo jerseys",
      es: "Turistas con camisetas del Flamengo",
      "pt-br": "Turistas com camisas do Flamengo"
    }
  },

  // Image 13 - Christ the Redeemer Family
  {
    id: "christ-04",
    category: "christRedeemer",
    imageSrc: "rio-13.webp",
    title: {
      en: "Family at Christ the Redeemer",
      es: "Familia en el Cristo Redentor",
      "pt-br": "Família no Cristo Redentor"
    },
    description: {
      en: "Family enjoying unforgettable moments at the foot of Christ the Redeemer statue",
      es: "Familia disfrutando momentos inolvidables al pie de la estatua del Cristo Redentor",
      "pt-br": "Família aproveitando momentos inesquecíveis ao pé da estátua do Cristo Redentor"
    },
    alt: {
      en: "Family photo at Christ the Redeemer",
      es: "Foto familiar en el Cristo Redentor",
      "pt-br": "Foto de família no Cristo Redentor"
    }
  },

  // Image 14 - Historic Center Guides
  {
    id: "historic-02",
    category: "historic",
    imageSrc: "rio-14.webp",
    title: {
      en: "Guided Historic Tour",
      es: "Tour Histórico Guiado",
      "pt-br": "Tour Histórico Guiado"
    },
    description: {
      en: "Be Free Tours guides with tourists in Rio's colorful historic center",
      es: "Guías de Be Free Tours con turistas en el colorido centro histórico de Río",
      "pt-br": "Guias da Be Free Tours com turistas no colorido centro histórico do Rio"
    },
    alt: {
      en: "Tour guides at historic center",
      es: "Guías turísticos en el centro histórico",
      "pt-br": "Guias turísticos no centro histórico"
    }
  },

  // Image 15 - Rooftop Dining
  {
    id: "culture-04",
    category: "culture",
    imageSrc: "rio-15.webp",
    title: {
      en: "Rooftop Dining Experience",
      es: "Experiencia Gastronómica en Azotea",
      "pt-br": "Experiência Gastronômica no Terraço"
    },
    description: {
      en: "Tourists enjoying Brazilian cuisine with spectacular mountain views at a rooftop restaurant",
      es: "Turistas disfrutando de la cocina brasileña con vistas espectaculares de las montañas en un restaurante de azotea",
      "pt-br": "Turistas aproveitando a gastronomia brasileira com vistas espetaculares das montanhas em restaurante de terraço"
    },
    alt: {
      en: "Rooftop dining in Rio",
      es: "Comida en azotea en Río",
      "pt-br": "Jantar no terraço no Rio"
    }
  },

  // Image 16 - Local Market
  {
    id: "culture-05",
    category: "culture",
    imageSrc: "rio-16.webp",
    title: {
      en: "Local Market Tour",
      es: "Tour por el Mercado Local",
      "pt-br": "Tour pelo Mercado Local"
    },
    description: {
      en: "Tourists experiencing authentic Brazilian culture at a local market with our guide",
      es: "Turistas experimentando la auténtica cultura brasileña en un mercado local con nuestro guía",
      "pt-br": "Turistas vivenciando a autêntica cultura brasileira em um mercado local com nosso guia"
    },
    alt: {
      en: "Tourists at local market",
      es: "Turistas en mercado local",
      "pt-br": "Turistas no mercado local"
    }
  },

  // Image 17 - Selarón Steps
  {
    id: "historic-03",
    category: "historic",
    imageSrc: "rio-17.webp",
    title: {
      en: "Selarón Steps",
      es: "Escalera Selarón",
      "pt-br": "Escadaria Selarón"
    },
    description: {
      en: "Tourists at the famous colorful Selarón Steps, one of Rio's most iconic artistic landmarks",
      es: "Turistas en la famosa Escalera Selarón colorida, uno de los monumentos artísticos más icónicos de Río",
      "pt-br": "Turistas na famosa Escadaria Selarón colorida, um dos marcos artísticos mais icônicos do Rio"
    },
    alt: {
      en: "Tourists at Selarón Steps",
      es: "Turistas en la Escalera Selarón",
      "pt-br": "Turistas na Escadaria Selarón"
    }
  },

  // Image 18 - Accessible Tour Christ
  {
    id: "christ-05",
    category: "christRedeemer",
    imageSrc: "rio-18.webp",
    title: {
      en: "Accessible Christ the Redeemer Tour",
      es: "Tour Accesible al Cristo Redentor",
      "pt-br": "Tour Acessível ao Cristo Redentor"
    },
    description: {
      en: "Couple enjoying accessible tour to Christ the Redeemer - everyone can visit!",
      es: "Pareja disfrutando de tour accesible al Cristo Redentor - ¡todos pueden visitar!",
      "pt-br": "Casal aproveitando tour acessível ao Cristo Redentor - todos podem visitar!"
    },
    alt: {
      en: "Accessible tour at Christ the Redeemer",
      es: "Tour accesible en el Cristo Redentor",
      "pt-br": "Tour acessível no Cristo Redentor"
    }
  },

  // Image 19 - Inclusive Tourism
  {
    id: "christ-06",
    category: "christRedeemer",
    imageSrc: "rio-19.webp",
    title: {
      en: "Inclusive Tourism at Corcovado",
      es: "Turismo Inclusivo en el Corcovado",
      "pt-br": "Turismo Inclusivo no Corcovado"
    },
    description: {
      en: "Be Free Tours providing accessible and inclusive experiences at Christ the Redeemer",
      es: "Be Free Tours brindando experiencias accesibles e inclusivas en el Cristo Redentor",
      "pt-br": "Be Free Tours proporcionando experiências acessíveis e inclusivas no Cristo Redentor"
    },
    alt: {
      en: "Inclusive tour guide with tourists",
      es: "Guía turístico inclusivo con turistas",
      "pt-br": "Guia turístico inclusivo com turistas"
    }
  },

  // Image 20 - Selarón Group
  {
    id: "historic-04",
    category: "historic",
    imageSrc: "rio-20.webp",
    title: {
      en: "Group at Selarón Steps",
      es: "Grupo en la Escalera Selarón",
      "pt-br": "Grupo na Escadaria Selarón"
    },
    description: {
      en: "Friends posing at the vibrant and colorful Selarón Steps in Lapa",
      es: "Amigos posando en la vibrante y colorida Escalera Selarón en Lapa",
      "pt-br": "Amigos posando na vibrante e colorida Escadaria Selarón na Lapa"
    },
    alt: {
      en: "Group of tourists at Selarón Steps",
      es: "Grupo de turistas en la Escalera Selarón",
      "pt-br": "Grupo de turistas na Escadaria Selarón"
    }
  },

  // Image 21 - Copacabana View
  {
    id: "beach-01",
    category: "beaches",
    imageSrc: "rio-21.webp",
    title: {
      en: "Copacabana Beach View",
      es: "Vista de la Playa de Copacabana",
      "pt-br": "Vista da Praia de Copacabana"
    },
    description: {
      en: "Spectacular aerial view of Copacabana Beach from Sugarloaf Mountain",
      es: "Espectacular vista aérea de la Playa de Copacabana desde el Pan de Azúcar",
      "pt-br": "Vista aérea espetacular da Praia de Copacabana do Pão de Açúcar"
    },
    alt: {
      en: "Aerial view of Copacabana Beach",
      es: "Vista aérea de la Playa de Copacabana",
      "pt-br": "Vista aérea da Praia de Copacabana"
    }
  },

  // Image 22 - Sugarloaf Group
  {
    id: "sugarloaf-04",
    category: "sugarloaf",
    imageSrc: "rio-22.webp",
    title: {
      en: "Friends at Sugarloaf",
      es: "Amigos en el Pan de Azúcar",
      "pt-br": "Amigos no Pão de Açúcar"
    },
    description: {
      en: "Group of friends enjoying the stunning views from Sugarloaf Mountain cable car station",
      es: "Grupo de amigos disfrutando de las impresionantes vistas desde la estación del teleférico del Pan de Azúcar",
      "pt-br": "Grupo de amigos aproveitando as vistas deslumbrantes da estação do bondinho do Pão de Açúcar"
    },
    alt: {
      en: "Tourist group at Sugarloaf Mountain",
      es: "Grupo de turistas en el Pan de Azúcar",
      "pt-br": "Grupo de turistas no Pão de Açúcar"
    }
  },

  // Image 23 - Selarón Family
  {
    id: "historic-05",
    category: "historic",
    imageSrc: "rio-23.webp",
    title: {
      en: "Family at Selarón with Brazilian Flag",
      es: "Familia en Selarón con Bandera Brasileña",
      "pt-br": "Família na Selarón com Bandeira Brasileira"
    },
    description: {
      en: "Family celebrating at the colorful Selarón Steps with mosaic Brazilian flag",
      es: "Familia celebrando en la colorida Escalera Selarón con la bandera brasileña en mosaico",
      "pt-br": "Família celebrando na colorida Escadaria Selarón com a bandeira brasileira em mosaico"
    },
    alt: {
      en: "Family at Selarón Steps",
      es: "Familia en la Escalera Selarón",
      "pt-br": "Família na Escadaria Selarón"
    }
  },

  // Image 24 - Selarón Mosaic
  {
    id: "historic-06",
    category: "historic",
    imageSrc: "rio-24.webp",
    title: {
      en: "Selarón Mosaic Art",
      es: "Arte de Mosaico Selarón",
      "pt-br": "Arte em Mosaico Selarón"
    },
    description: {
      en: "Tourists admiring the intricate mosaic artwork at Jorge Selarón's famous steps",
      es: "Turistas admirando el intrincado trabajo de mosaico en los famosos escalones de Jorge Selarón",
      "pt-br": "Turistas admirando o intrincado trabalho de mosaico nos famosos degraus de Jorge Selarón"
    },
    alt: {
      en: "Mosaic art at Selarón Steps",
      es: "Arte de mosaico en la Escalera Selarón",
      "pt-br": "Arte em mosaico na Escadaria Selarón"
    }
  }
];

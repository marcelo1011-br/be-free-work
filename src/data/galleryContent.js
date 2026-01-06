/**
 * BE FREE TOURS - Gallery Content
 * Image descriptions and metadata for the photo gallery
 *
 * INSTRUÇÕES PARA ADICIONAR IMAGENS REAIS:
 *
 * 1. Coloque todas as imagens em: src/images/gallery/
 *
 * 2. Nomes de arquivo: livres. A galeria importa automaticamente tudo
 *    da pasta e usa o nome do arquivo como título/alt.
 *    Dica: use nomes descritivos para melhorar acessibilidade.
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

/**
 * experiences — fatos invariantes (single-source, 1x por item) + prose nativa por locale.
 * Gerado do dado triplicado preservando a SAÍDA byte-a-byte (verificado deep-equal).
 *
 * - facts[<chave EN>]   = invariantes idênticos nos 3 locales (pricing estrutural, duração-número,
 *   slots, datas bloqueadas, cutoff, startTime, categoria, isFeatured). Editar UMA vez.
 * - durationUnit        = palavra da unidade, por locale.
 * - pricingDisplayText  = texto livre do preço custom (prose), por locale.
 * - prose[locale][chave]= conteúdo nativo (título, descrições, inclusões, itinerário, FAQ, slug…).
 */

const order = [
  "rio-food-walking-tour",
  "little-africa-walking-tour",
  "downtown-rio-walking",
  "santa-teresa-walking"
];

const durationUnit = { en: "hours", es: "horas", "pt-br": "horas" };

const facts = {
  "rio-food-walking-tour": {
    "category": "walking-tours",
    "pricing": {
      "perPerson": 155
    },
    "bookingTimeSlots": [
      "10:00",
      "14:00",
      "17:00"
    ],
    "bookingBlockedDates": [
      "2026-12-24",
      "2026-12-25",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "10:00, 14:00, 17:00",
    "durationValue": 4
  },
  "little-africa-walking-tour": {
    "category": "walking-tours",
    "pricing": {
      "perPerson": 85
    },
    "bookingTimeSlots": [
      "09:00",
      "14:00"
    ],
    "bookingBlockedDates": [
      "2026-12-24",
      "2026-12-25",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "09:00, 14:00",
    "durationValue": 3
  },
  "downtown-rio-walking": {
    "category": "walking-tours",
    "pricing": {
      "perPerson": 65
    },
    "bookingTimeSlots": [
      "10:00",
      "12:00",
      "14:00"
    ],
    "bookingBlockedDates": [
      "2026-12-24",
      "2026-12-25",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "10:00, 12:00, 14:00",
    "durationValue": 3.5
  },
  "santa-teresa-walking": {
    "category": "walking-tours",
    "pricing": {
      "perPerson": 65
    },
    "bookingTimeSlots": [
      "10:00",
      "12:30",
      "15:00"
    ],
    "bookingBlockedDates": [
      "2026-12-24",
      "2026-12-25",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "10:00, 12:30, 15:00",
    "durationValue": 2.5
  }
};

const pricingDisplayText = {
  "en": {},
  "es": {},
  "pt-br": {}
};

const prose = {
  "en": {
    "rio-food-walking-tour": {
      "id": "Rio Food Walking Tour",
      "slug": "rio-food-walking-tour",
      "imageSlug": "food-walking",
      "title": "Rio Food Walking Tour",
      "shortDescription": "Taste classic Brazilian flavors with a local guide on a private food walk through one of Rio's most vibrant neighborhoods.",
      "fullDescription": "The Rio Food Walking Tour was designed for travelers who want to understand the city through taste, conversation, and the places locals actually return to. Over the course of a relaxed private walk, your guide introduces you to the dishes, drinks, and stories that define everyday eating in Rio de Janeiro.\n\nYou will stop at carefully chosen bars, snack counters, and specialty spots to try a mix of savory and sweet staples. Depending on the day and the neighborhood flow, tastings may include pastel, coxinha, pão de queijo, fresh tropical juices, brigadeiro, and a proper Brazilian coffee or caipirinha. This is not a rushed sampling session. It is a paced cultural experience where each stop adds context.\n\nAlong the way, your guide explains how food in Rio reflects the city itself: Portuguese traditions, African influence, migration from other regions of Brazil, and the social role of street bars and casual restaurants. You will also receive practical local insight on what to order, what times Cariocas eat, and where to continue exploring after the experience ends.\n\nBecause this is a private experience, the rhythm is flexible. If your group wants to spend longer talking with a host, pause for photos, or focus more on savory tastings than sweets, the guide adjusts accordingly. It is an ideal choice for first-time visitors who want a more grounded introduction to the city as well as repeat travelers looking for a more local side of Rio.",
      "highlights": [
        "Private tasting walk with a local guide",
        "Classic Brazilian snacks and drinks",
        "Stories behind Rio's everyday food culture",
        "Flexible pacing tailored to your group"
      ],
      "included": [
        "Private local guide",
        "Selected food tastings",
        "One drink tasting",
        "Neighborhood recommendations after the experience"
      ],
      "notIncluded": [
        "Hotel pickup and drop-off",
        "Additional food or drinks beyond the included tastings",
        "Gratuities"
      ],
      "faqs": [
        {
          "q": "How much food is included on the Rio Food Walking Tour?",
          "a": "The experience includes multiple tasting stops and is designed to feel substantial rather than symbolic. Most guests finish comfortably full, especially on the afternoon and evening departures."
        },
        {
          "q": "Can you accommodate dietary restrictions?",
          "a": "Yes, with advance notice. Vegetarian requests are usually easy to adapt. More restrictive diets may reduce the number of traditional tastings, so tell us your needs before booking."
        }
      ],
      "tips": [
        "Arrive hungry. The included tastings are generous enough to replace a light meal.",
        "Wear comfortable walking shoes since the experience moves between several local stops.",
        "Tell your guide about any allergies or dietary restrictions before the day of the experience."
      ]
    },
    "little-africa-walking-tour": {
      "id": "Little Africa Walking Tour",
      "slug": "little-africa-walking-tour",
      "imageSlug": "little-africa",
      "title": "Little Africa Walking Tour",
      "shortDescription": "Discover the places, memory, and resistance that shaped Rio's Afro-Brazilian heritage on a private guided walk through Little Africa.",
      "fullDescription": "Little Africa is one of the most historically important areas in Rio de Janeiro, yet many visitors pass through the region without understanding its role in shaping the city and the country. This private walking tour offers a focused introduction to the people, places, and cultural legacies tied to Rio's Afro-Brazilian history.\n\nYour guide leads you through key sites connected to the transatlantic slave trade, religious expression, music, labor, and urban transformation. Depending on the day and site access, the route may include Cais do Valongo, Pedra do Sal, Largo de São Francisco da Prainha, and nearby streets whose stories are essential to understanding samba, resistance, and Black identity in Rio.\n\nThis is not a checklist tour. The experience is built around interpretation. Your guide provides historical context, explains why these places still matter today, and connects the neighborhood's past to present-day cultural life. Guests consistently describe this as one of the most meaningful ways to understand Rio beyond its postcard landmarks.\n\nBecause the tour is private, there is room for questions and reflection. It works especially well for travelers interested in history, culture, identity, and the deeper formation of Brazil.",
      "highlights": [
        "Cais do Valongo and surrounding heritage sites",
        "Pedra do Sal and the roots of samba culture",
        "Afro-Brazilian history explained with context",
        "Private pace with space for questions"
      ],
      "included": [
        "Private certified local guide",
        "Historical interpretation throughout the route",
        "Flexible private walking pace"
      ],
      "notIncluded": [
        "Hotel pickup and drop-off",
        "Food and drinks",
        "Gratuities"
      ],
      "faqs": [
        {
          "q": "Is the Little Africa experience mainly historical or also cultural?",
          "a": "It is both. The route is grounded in major historical sites, but the guide also explains the living cultural legacy of the area, especially in relation to samba, religion, and Black identity in Rio."
        },
        {
          "q": "Is this a physically demanding walk?",
          "a": "No. The pace is moderate and the distance is manageable for most travelers, with pauses built into the experience for storytelling and observation."
        }
      ],
      "tips": [
        "Bring water and sun protection. Some parts of the route have limited shade.",
        "This experience rewards curiosity, so come ready with questions.",
        "If you are also interested in samba or food, ask us about pairing this route with another local experience."
      ]
    },
    "downtown-rio-walking": {
      "id": "Downtown Rio on Foot: Selarón Steps & Hidden Gems",
      "slug": "downtown-rio-walking",
      "imageSlug": "downtown-rio-walking",
      "title": "Downtown Rio on Foot: Selarón Steps & Hidden Gems",
      "shortDescription": "Discover downtown Rio's architectural treasures and colonial history on a private walking experience through the city's historic center.",
      "fullDescription": "Rio de Janeiro's historic downtown is one of the most layered urban environments in the Americas. This private walking experience was designed to show you its architecture, public squares, classic interiors, and street-level stories with a local guide who knows what is behind each facade.\n\nMeeting point is Cinelândia, from where the route can include landmarks such as Theatro Municipal, Confeitaria Colombo, the Metropolitan Cathedral, colonial passages, and the Selarón Steps between Lapa and Santa Teresa.\n\nBecause this is a private experience, the guide can adapt the pacing and emphasis to your interests. It is ideal for travelers who want a more grounded introduction to central Rio and its historical identity.",
      "highlights": [
        "Cinelândia and Theatro Municipal",
        "Confeitaria Colombo",
        "Metropolitan Cathedral",
        "Lapa and Selarón Steps",
        "Historic downtown streets"
      ],
      "included": [
        "Private certified local guide",
        "Historical and cultural interpretation",
        "Flexible private walking pace"
      ],
      "notIncluded": [
        "Hotel pickup and drop-off",
        "Food and drinks",
        "Personal purchases"
      ],
      "faqs": [
        {
          "q": "Is this a private walking experience or a group tour?",
          "a": "This is a private walking experience for your group only. The guide adjusts the pace and context to your interests."
        },
        {
          "q": "Does it include hotel pickup?",
          "a": "No. The experience starts at a central meeting point in downtown Rio, easy to reach by Uber, taxi, or metro."
        }
      ],
      "tips": [
        "Wear comfortable walking shoes. The route includes historic-center streets and a short climb at Selarón Steps.",
        "Bring water and sun protection, especially on warmer days.",
        "Weekdays usually offer the liveliest downtown atmosphere."
      ]
    },
    "santa-teresa-walking": {
      "id": "Santa Teresa Walking Tour: Art, History & Hidden Corners",
      "slug": "santa-teresa-walking",
      "imageSlug": "santa-teresa-walking-tour",
      "title": "Santa Teresa Walking Tour: Art, History & Hidden Corners",
      "shortDescription": "Explore one of Rio's most atmospheric neighborhoods through art, viewpoints, historic streets, and everyday local life.",
      "fullDescription": "Santa Teresa sits on a hillside above downtown Rio and retains one of the city's most distinctive neighborhood identities. This private walking experience focuses on its artistic atmosphere, older streets, viewpoints, and local daily rhythm.\n\nYour guide leads you through Santa Teresa's central streets and cultural corners, connecting architecture, social history, and present-day life. Depending on the rhythm of the day, the route may include Largo dos Guimarães, Parque das Ruínas, traditional bars, and neighborhood viewpoints.\n\nIt works especially well for travelers who want a more local, walkable, and cultural side of Rio beyond the landmark circuit.",
      "highlights": [
        "Largo dos Guimarães",
        "Parque das Ruínas",
        "Historic houses and artist spaces",
        "Traditional bars and local life",
        "Hidden viewpoints"
      ],
      "included": [
        "Private certified local guide",
        "Historical and cultural context",
        "Flexible private walking pace"
      ],
      "notIncluded": [
        "Hotel pickup and drop-off",
        "Food and drinks",
        "Personal purchases"
      ],
      "faqs": [
        {
          "q": "What makes Santa Teresa different from the rest of Rio?",
          "a": "Santa Teresa has a village-like atmosphere with hillside streets, artist culture, and a slower local rhythm than Rio's beachfront neighborhoods."
        },
        {
          "q": "Does this experience include transportation?",
          "a": "No. It starts at a neighborhood meeting point, and arrival guidance is shared after booking."
        }
      ],
      "tips": [
        "Wear shoes with good grip. Some streets in Santa Teresa are steep and cobbled.",
        "Bring a camera. The neighborhood's viewpoints and textures are especially photogenic.",
        "Ask your guide about adding a local bar or cafe stop if you want a slower pace."
      ]
    }
  },
  "es": {
    "rio-food-walking-tour": {
      "id": "Tour Gastronómico por Río",
      "slug": "tour-gastronomico-rio",
      "imageSlug": "food-walking",
      "title": "Tour Gastronómico por Río",
      "shortDescription": "Prueba sabores clásicos de Brasil con un guía local en un recorrido gastronómico privado por uno de los barrios más vibrantes de Río.",
      "fullDescription": "El Tour Gastronómico por Río fue diseñado para viajeros que quieren entender la ciudad a través del sabor, la conversación y los lugares a los que los locales realmente vuelven. A lo largo de una caminata privada y relajada, tu guía te presenta platos, bebidas e historias que definen la forma cotidiana de comer en Río de Janeiro.\n\nHarás paradas en bares, puestos y locales seleccionados para probar una mezcla de clásicos dulces y salados. Según el día y el flujo del barrio, las degustaciones pueden incluir pastel, coxinha, pão de queijo, jugos tropicales, brigadeiro y un café brasileño o una caipiriña. No es una sesión apresurada de muestras. Es una experiencia cultural con ritmo, donde cada parada añade contexto.\n\nDurante el recorrido, tu guía explica cómo la comida en Río refleja la propia ciudad: tradiciones portuguesas, influencia africana, migración de otras regiones de Brasil y el papel social de los bares y restaurantes informales. También recibirás recomendaciones prácticas sobre qué pedir, en qué horarios comen los cariocas y dónde seguir explorando después de la experiencia.\n\nComo se trata de una experiencia privada, el ritmo es flexible. Si tu grupo quiere pasar más tiempo conversando con un anfitrión, detenerse para fotos o centrarse más en sabores salados que dulces, el guía se adapta.",
      "highlights": [
        "Recorrido privado de degustación con guía local",
        "Snacks y bebidas clásicas de Brasil",
        "Historias detrás de la cultura gastronómica de Río",
        "Ritmo flexible adaptado a tu grupo"
      ],
      "included": [
        "Guía local privado",
        "Degustaciones seleccionadas",
        "Una degustación de bebida",
        "Recomendaciones locales al final de la experiencia"
      ],
      "notIncluded": [
        "Recogida y regreso al hotel",
        "Comidas o bebidas adicionales fuera de las degustaciones incluidas",
        "Propinas"
      ],
      "faqs": [
        {
          "q": "¿Cuánta comida incluye el tour gastronómico?",
          "a": "La experiencia incluye varias paradas de degustación y está pensada para sentirse generosa, no simbólica. La mayoría de los viajeros terminan satisfechos, especialmente en las salidas de la tarde y la noche."
        },
        {
          "q": "¿Pueden adaptar la experiencia a restricciones alimentarias?",
          "a": "Sí, con aviso previo. Las solicitudes vegetarianas suelen ser fáciles de adaptar. Dietas más restrictivas pueden reducir el número de degustaciones tradicionales disponibles."
        }
      ],
      "tips": [
        "Llega con hambre. Las degustaciones incluidas suelen sustituir una comida ligera.",
        "Usa calzado cómodo, ya que la experiencia se mueve entre varias paradas del barrio.",
        "Informa a tu guía sobre alergias o restricciones alimentarias antes del día de la experiencia."
      ]
    },
    "little-africa-walking-tour": {
      "id": "Tour a Pie por la Pequeña África",
      "slug": "pequena-africa-tour",
      "imageSlug": "little-africa",
      "title": "Tour a Pie por la Pequeña África",
      "shortDescription": "Descubre los lugares, la memoria y la resistencia que dieron forma a la herencia afrobrasileña de Río en un recorrido privado por la Pequeña África.",
      "fullDescription": "La Pequeña África es una de las zonas históricamente más importantes de Río de Janeiro, aunque muchos viajeros la recorren sin entender su papel en la formación de la ciudad y del país. Este tour privado a pie ofrece una introducción clara a las personas, lugares y legados culturales vinculados a la historia afrobrasileña de Río.\n\nTu guía te lleva por sitios clave relacionados con la trata transatlántica, la expresión religiosa, la música, el trabajo y la transformación urbana. Según el día y el acceso a los espacios, la ruta puede incluir Cais do Valongo, Pedra do Sal, Largo de São Francisco da Prainha y calles cercanas cuya historia es esencial para entender el samba, la resistencia y la identidad negra en Río.\n\nNo es un tour de lista rápida. La experiencia está construida alrededor de la interpretación. Tu guía aporta contexto histórico, explica por qué estos lugares siguen siendo relevantes hoy y conecta el pasado del barrio con la vida cultural actual.\n\nComo el recorrido es privado, hay espacio para preguntas y reflexión. Funciona especialmente bien para viajeros interesados en historia, cultura, identidad y en una comprensión más profunda de Brasil.",
      "highlights": [
        "Cais do Valongo y otros sitios patrimoniales",
        "Pedra do Sal y los orígenes de la cultura del samba",
        "Historia afrobrasileña explicada con contexto",
        "Ritmo privado con espacio para preguntas"
      ],
      "included": [
        "Guía local certificado privado",
        "Interpretación histórica durante toda la ruta",
        "Ritmo flexible de caminata privada"
      ],
      "notIncluded": [
        "Recogida y regreso al hotel",
        "Comidas y bebidas",
        "Propinas"
      ],
      "faqs": [
        {
          "q": "¿La experiencia es principalmente histórica o también cultural?",
          "a": "Es ambas cosas. La ruta se apoya en sitios históricos fundamentales, pero el guía también explica el legado cultural vivo del área, especialmente en relación con el samba, la religión y la identidad negra en Río."
        },
        {
          "q": "¿Es una caminata físicamente exigente?",
          "a": "No. El ritmo es moderado y la distancia es manejable para la mayoría de los viajeros, con pausas durante el recorrido para la explicación y la observación."
        }
      ],
      "tips": [
        "Lleva agua y protección solar. Algunas partes del recorrido tienen poca sombra.",
        "Esta experiencia se aprovecha más con curiosidad, así que ven con preguntas.",
        "Si también te interesa la gastronomía o la música, podemos sugerir cómo combinar esta ruta con otra experiencia local."
      ]
    },
    "downtown-rio-walking": {
      "id": "Centro de Río a Pie: Escaleras de Selarón y Joyas Ocultas",
      "slug": "downtown-rio-walking",
      "imageSlug": "downtown-rio-walking",
      "title": "Centro de Río a Pie: Escaleras de Selarón y Joyas Ocultas",
      "shortDescription": "Descubre el centro histórico de Río a pie con arquitectura, plazas, cafés clásicos y contexto local guiado.",
      "fullDescription": "El centro histórico de Río de Janeiro es uno de los espacios urbanos más ricos de la ciudad para una experiencia guiada a pie. Esta experiencia privada se centra en arquitectura, historia y el ritmo cotidiano del centro, conectando plazas, edificios emblemáticos, cafés históricos y la zona de Lapa con la Escadaria Selarón.\n\nTu guía adapta el ritmo al interés del grupo y convierte el recorrido en una lectura clara del centro de Río: cómo evolucionó, por qué estos lugares siguen siendo importantes y cómo se conectan con la ciudad actual.\n\nEs una gran opción para viajeros que quieren conocer Río más allá de los paisajes icónicos y entrar en su dimensión histórica y urbana.",
      "highlights": [
        "Cinelândia y Theatro Municipal",
        "Confeitaria Colombo",
        "Catedral Metropolitana",
        "Lapa y Escadaria Selarón",
        "Historia urbana del centro de Río"
      ],
      "included": [
        "Guía local privado certificado",
        "Interpretación histórica y cultural",
        "Ritmo flexible de caminata privada"
      ],
      "notIncluded": [
        "Recogida y regreso al hotel",
        "Comidas y bebidas",
        "Compras personales"
      ],
      "faqs": [
        {
          "q": "¿Es una experiencia privada o un tour grupal?",
          "a": "Es una experiencia privada para tu grupo. El guía adapta el ritmo y el enfoque según tus intereses."
        },
        {
          "q": "¿Incluye recogida en el hotel?",
          "a": "No. El recorrido comienza en un punto de encuentro céntrico y fácil de alcanzar en Uber, taxi o metro."
        }
      ],
      "tips": [
        "Usa calzado cómodo para caminar. El recorrido incluye calles del centro y una subida corta en la Escadaria Selarón.",
        "Lleva agua y protección solar, especialmente en días calurosos.",
        "Entre semana suele sentirse mejor el ritmo auténtico del centro de Río."
      ]
    },
    "santa-teresa-walking": {
      "id": "Tour a Pie por Santa Teresa: Arte, Historia y Rincones Ocultos",
      "slug": "santa-teresa-walking",
      "imageSlug": "santa-teresa-walking-tour",
      "title": "Tour a Pie por Santa Teresa: Arte, Historia y Rincones Ocultos",
      "shortDescription": "Recorre Santa Teresa a pie para descubrir arte, miradores, historia y la vida cotidiana de uno de los barrios más atmosféricos de Río.",
      "fullDescription": "Santa Teresa conserva una identidad muy distinta dentro de Río de Janeiro. Esta experiencia privada a pie recorre sus calles en ladera, miradores, espacios culturales y rincones del barrio para ofrecer una lectura más local y pausada de la ciudad.\n\nTu guía conecta arquitectura, historia social, arte y vida cotidiana mientras avanzan por las calles y plazas más características de Santa Teresa. Dependiendo del ritmo del día, pueden aparecer miradores, bares tradicionales y espacios culturales del barrio.\n\nEs ideal para viajeros que buscan un Río más caminable, íntimo y cultural, lejos de la lógica de las visitas de cobertura amplia.",
      "highlights": [
        "Largo dos Guimarães",
        "Parque das Ruínas",
        "Casas históricas y espacios creativos",
        "Bares tradicionales y ambiente local",
        "Miradores escondidos"
      ],
      "included": [
        "Guía local privado certificado",
        "Contexto histórico y cultural",
        "Ritmo flexible de caminata privada"
      ],
      "notIncluded": [
        "Recogida y regreso al hotel",
        "Comidas y bebidas",
        "Compras personales"
      ],
      "faqs": [
        {
          "q": "¿Qué hace diferente a Santa Teresa?",
          "a": "Santa Teresa tiene un ambiente de barrio con calles empedradas, historia artística y una vida local muy distinta a la de las zonas de playa."
        },
        {
          "q": "¿Incluye transporte?",
          "a": "No. La experiencia comienza en un punto de encuentro del barrio y compartimos la mejor forma de llegar después de la reserva."
        }
      ],
      "tips": [
        "Usa zapatos con buen agarre. Algunas calles del barrio son empinadas y adoquinadas.",
        "Lleva cámara. Los miradores y las texturas del barrio son muy fotogénicos.",
        "Si quieres un ritmo más relajado, pide a tu guía incluir una parada en un bar o café local."
      ]
    }
  },
  "pt-br": {
    "rio-food-walking-tour": {
      "id": "Rio Food Walking Tour",
      "slug": "food-walking-tour-rio",
      "imageSlug": "food-walking",
      "title": "Rio Food Walking Tour",
      "shortDescription": "Prove sabores clássicos do Brasil com um guia local em uma caminhada gastronômica privativa por um dos bairros mais vibrantes do Rio.",
      "fullDescription": "O Rio Food Walking Tour foi pensado para viajantes que querem entender a cidade pelo sabor, pela conversa e pelos lugares aos quais os moradores realmente voltam. Ao longo de uma caminhada privativa e sem pressa, seu guia apresenta pratos, bebidas e histórias que definem a forma cotidiana de comer no Rio de Janeiro.\n\nVocê fará paradas em bares, balcões e endereços selecionados para provar uma mistura de clássicos doces e salgados. Dependendo do dia e do ritmo do bairro, as degustações podem incluir pastel, coxinha, pão de queijo, sucos tropicais, brigadeiro e um café brasileiro ou uma caipirinha. Não é uma sequência apressada de amostras. É uma experiência cultural com contexto em cada parada.\n\nAo longo do percurso, seu guia explica como a comida no Rio reflete a própria cidade: tradições portuguesas, influência africana, migração de outras regiões do Brasil e o papel social de bares e restaurantes casuais. Você também recebe dicas práticas sobre o que pedir, em que horários os cariocas comem e onde continuar explorando depois da experiência.\n\nComo se trata de uma experiência privativa, o ritmo é flexível. Se o seu grupo quiser passar mais tempo conversando com um anfitrião, parar para fotos ou focar mais em sabores salgados do que doces, o guia ajusta o percurso.",
      "highlights": [
        "Caminhada privativa de degustação com guia local",
        "Petiscos e bebidas clássicas do Brasil",
        "Histórias por trás da cultura gastronômica carioca",
        "Ritmo flexível adaptado ao seu grupo"
      ],
      "included": [
        "Guia local privativo",
        "Degustações selecionadas",
        "Uma degustação de bebida",
        "Recomendações locais ao final da experiência"
      ],
      "notIncluded": [
        "Busca e retorno ao hotel",
        "Comidas ou bebidas extras além das degustações incluídas",
        "Gorjetas"
      ],
      "faqs": [
        {
          "q": "Quanta comida está incluída no Rio Food Walking Tour?",
          "a": "A experiência inclui várias paradas de degustação e foi pensada para ser generosa, não simbólica. A maioria dos viajantes termina satisfeita, especialmente nas saídas da tarde e da noite."
        },
        {
          "q": "Vocês conseguem adaptar a experiência para restrições alimentares?",
          "a": "Sim, com aviso prévio. Pedidos vegetarianos costumam ser fáceis de adaptar. Dietas mais restritivas podem reduzir o número de degustações tradicionais disponíveis."
        }
      ],
      "tips": [
        "Chegue com fome. As degustações incluídas normalmente substituem uma refeição leve.",
        "Use calçado confortável, já que a experiência passa por várias paradas do bairro.",
        "Avise seu guia sobre alergias ou restrições alimentares antes do dia da experiência."
      ]
    },
    "little-africa-walking-tour": {
      "id": "Pequena África Walking Tour",
      "slug": "pequena-africa-tour",
      "imageSlug": "little-africa",
      "title": "Pequena África Walking Tour",
      "shortDescription": "Descubra lugares, memória e resistência que ajudaram a moldar a herança afro-brasileira do Rio em uma caminhada privativa pela Pequena África.",
      "fullDescription": "A Pequena África é uma das áreas historicamente mais importantes do Rio de Janeiro, embora muitos viajantes passem pela região sem entender seu papel na formação da cidade e do país. Este passeio privativo a pé oferece uma introdução clara às pessoas, lugares e legados culturais ligados à história afro-brasileira do Rio.\n\nSeu guia conduz o percurso por pontos-chave relacionados ao tráfico transatlântico, à expressão religiosa, à música, ao trabalho e à transformação urbana. Dependendo do dia e do acesso aos espaços, a rota pode incluir o Cais do Valongo, a Pedra do Sal, o Largo de São Francisco da Prainha e ruas próximas cuja história é essencial para compreender o samba, a resistência e a identidade negra no Rio.\n\nNão é um passeio de lista rápida. A experiência foi construída em torno da interpretação. Seu guia oferece contexto histórico, explica por que esses lugares continuam importantes hoje e conecta o passado do bairro à vida cultural atual.\n\nComo o percurso é privativo, há espaço para perguntas e reflexão. Funciona especialmente bem para viajantes interessados em história, cultura, identidade e em uma compreensão mais profunda do Brasil.",
      "highlights": [
        "Cais do Valongo e outros pontos de patrimônio",
        "Pedra do Sal e as raízes da cultura do samba",
        "História afro-brasileira explicada com contexto",
        "Ritmo privativo com espaço para perguntas"
      ],
      "included": [
        "Guia local certificado privativo",
        "Interpretação histórica durante todo o percurso",
        "Ritmo flexível de caminhada privativa"
      ],
      "notIncluded": [
        "Busca e retorno ao hotel",
        "Comidas e bebidas",
        "Gorjetas"
      ],
      "faqs": [
        {
          "q": "A experiência é mais histórica ou também cultural?",
          "a": "É as duas coisas. A rota se apoia em pontos históricos fundamentais, mas o guia também explica o legado cultural vivo da área, especialmente em relação ao samba, à religião e à identidade negra no Rio."
        },
        {
          "q": "É uma caminhada fisicamente exigente?",
          "a": "Não. O ritmo é moderado e a distância é administrável para a maioria dos viajantes, com pausas ao longo do percurso para explicação e observação."
        }
      ],
      "tips": [
        "Leve água e proteção solar. Algumas partes do percurso têm pouca sombra.",
        "Essa experiência rende mais com curiosidade, então venha com perguntas.",
        "Se você também se interessa por gastronomia ou música, podemos sugerir como combinar essa rota com outra experiência local."
      ]
    },
    "downtown-rio-walking": {
      "id": "Centro do Rio a Pé: Escadaria Selarón e Joias Escondidas",
      "slug": "downtown-rio-walking",
      "imageSlug": "downtown-rio-walking",
      "title": "Centro do Rio a Pé: Escadaria Selarón e Joias Escondidas",
      "shortDescription": "Descubra o centro histórico do Rio a pé com arquitetura, praças, cafés clássicos e contexto local guiado.",
      "fullDescription": "O centro histórico do Rio de Janeiro é um dos melhores lugares da cidade para uma experiência guiada a pé. Esta experiência privada conecta arquitetura, história e o ritmo cotidiano do centro, passando por praças, edifícios emblemáticos, cafés históricos e a região da Lapa com a Escadaria Selarón.\n\nSeu guia adapta o ritmo ao interesse do grupo e transforma o percurso em uma leitura clara do centro do Rio: como ele se formou, por que esses lugares ainda importam e como se conectam com a cidade de hoje.\n\nÉ uma ótima escolha para viajantes que querem conhecer um Rio mais urbano, histórico e vivido no dia a dia.",
      "highlights": [
        "Cinelândia e Theatro Municipal",
        "Confeitaria Colombo",
        "Catedral Metropolitana",
        "Lapa e Escadaria Selarón",
        "História urbana do centro do Rio"
      ],
      "included": [
        "Guia local privado certificado",
        "Interpretação histórica e cultural",
        "Ritmo flexível de caminhada privada"
      ],
      "notIncluded": [
        "Busca e retorno no hotel",
        "Comidas e bebidas",
        "Compras pessoais"
      ],
      "faqs": [
        {
          "q": "É uma experiência privada ou passeio em grupo?",
          "a": "É uma experiência privada para o seu grupo. O guia adapta o ritmo e o foco conforme seus interesses."
        },
        {
          "q": "Inclui busca no hotel?",
          "a": "Não. A experiência começa em um ponto de encontro central, fácil de chegar de Uber, táxi ou metrô."
        }
      ],
      "tips": [
        "Use tênis confortável. O percurso inclui caminhada pelo centro e uma subida curta na Escadaria Selarón.",
        "Leve água e proteção solar, especialmente em dias mais quentes.",
        "Em dias úteis, o centro costuma mostrar melhor o ritmo autêntico da cidade."
      ]
    },
    "santa-teresa-walking": {
      "id": "Tour a Pé por Santa Teresa: Arte, História e Cantos Escondidos",
      "slug": "santa-teresa-walking",
      "imageSlug": "santa-teresa-walking-tour",
      "title": "Tour a Pé por Santa Teresa: Arte, História e Cantos Escondidos",
      "shortDescription": "Explore Santa Teresa a pé para descobrir arte, mirantes, história e o lado mais atmosférico da vida carioca.",
      "fullDescription": "Santa Teresa mantém uma identidade muito própria dentro do Rio de Janeiro. Esta experiência privada a pé percorre ruas em ladeira, mirantes, espaços culturais e cantos do bairro para apresentar um lado mais local e desacelerado da cidade.\n\nSeu guia conecta arquitetura, história social, arte e vida cotidiana enquanto vocês caminham pelas áreas mais emblemáticas de Santa Teresa. Dependendo do ritmo do dia, a experiência pode incluir mirantes, bares tradicionais e espaços culturais do bairro.\n\nÉ ideal para quem busca um Rio mais caminhável, intimista e cultural, longe da lógica de cobertura ampla dos passeios clássicos.",
      "highlights": [
        "Largo dos Guimarães",
        "Parque das Ruínas",
        "Casarões históricos e espaços criativos",
        "Bares tradicionais e vida local",
        "Mirantes escondidos"
      ],
      "included": [
        "Guia local privado certificado",
        "Contexto histórico e cultural",
        "Ritmo flexível de caminhada privada"
      ],
      "notIncluded": [
        "Busca e retorno no hotel",
        "Comidas e bebidas",
        "Compras pessoais"
      ],
      "faqs": [
        {
          "q": "O que torna Santa Teresa diferente?",
          "a": "Santa Teresa tem clima de bairro, ruas em ladeira, história artística e uma vida local bem diferente da orla."
        },
        {
          "q": "Inclui transporte?",
          "a": "Não. A experiência começa em um ponto de encontro no bairro e compartilhamos a melhor forma de chegar após a reserva."
        }
      ],
      "tips": [
        "Use sapatos com boa aderência. Algumas ruas do bairro são íngremes e de paralelepípedo.",
        "Leve câmera. Os mirantes e as texturas do bairro rendem ótimas fotos.",
        "Se quiser um ritmo mais lento, peça ao guia para incluir uma parada em bar ou café local."
      ]
    }
  }
};

const FACT_FIELDS = [
  "category",
  "isFeatured",
  "pricing",
  "bookingTimeSlots",
  "bookingBlockedDates",
  "bookingCutoffDays",
  "startTime"
];

function build(locale) {
  return order.map((key) => {
    const f = facts[key] || {};
    const item = { ...(prose[locale]?.[key] || {}) };
    for (const fk of FACT_FIELDS) { if (fk in f) item[fk] = f[fk]; }
    const dt = pricingDisplayText[locale]?.[key];
    if (f.pricing && dt !== undefined) item.pricing = { ...f.pricing, displayText: dt };
    if ("durationValue" in f) item.duration = `${f.durationValue} ${durationUnit[locale]}`;
    return item;
  });
}

export const experiences = { en: build("en"), es: build("es"), "pt-br": build("pt-br") };

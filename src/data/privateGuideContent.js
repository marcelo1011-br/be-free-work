/**
 * privateGuideContent.js — fonte única de conteúdo do pillar "private guide".
 *
 * DUAS CAMADAS (mesmo padrão do dayTripsContent.js):
 *  1. Fatos (neutros, 1×): privateGuideTourKeys + privateGuideFacts.
 *  2. Prose nativa por locale: privateGuideProse (EN/ES/PT-BR — copy nativa, não tradução).
 *
 * Termos travados:
 *  - Keyword do guia por locale: EN "private guide", ES "guía privado", PT "guia particular".
 *  - PT: o GUIA é "particular" (keyword/slug guia-particular-rio-de-janeiro), mas a LINHA DE
 *    PRODUTO permanece "passeios privativos". Os dois termos convivem de propósito.
 *  - Hrefs resolvidos pelo componente via tourKey (tours) e token (contact / private-tours),
 *    NUNCA hardcoded — o slug localizado (ex.: Rio Express PT longo) resolve sozinho.
 *  - Nota decimal: EN/ES "4.9"; PT "4,9".
 */

// --- Camada 1: fatos ---------------------------------------------------------

// Tours recomendados pelo pillar. Chaves = slug EN canônico em tours.js. Ordem = exibição.
export const privateGuideTourKeys = ["custom-tour", "essential-rio", "rio-express"];

// Credenciais factuais — eixo de diferenciação. Vão na COPY (seção "why"), NÃO no schema
// como AggregateRating (decisão: Service sem AggregateRating; rating é conteúdo visível).
export const privateGuideFacts = {
  operatingSince: 2013,
  languages: ["English", "Spanish", "Portuguese"],
  ratingValue: "4.9",
  reviewCount: "800",
};

// --- Camada 2: prose nativa por locale --------------------------------------

export const privateGuideProse = {
  en: {
    title: "Private Guide in Rio de Janeiro | Be Free Tours",
    metaDescription:
      "Explore Rio with a private, licensed local guide who shapes the day around your pace, interests and travel style — flexible planning, real local context, one dedicated group.",

    hero: {
      title: "Private Guide in Rio de Janeiro",
      subtitle:
        "See Rio at your own pace with a licensed local guide focused on your group alone — reading the city beyond the postcard, handling the timing, and adjusting the day as it unfolds.",
      primaryCta: { label: "Plan your day with a private guide", token: "contact" },
      secondaryCta: { label: "Browse private tours", token: "private-tours" },
    },

    intro: {
      kicker: "Private guiding, real local context",
      title: "A private guide does more than name the landmarks.",
      paragraphs: [
        "In a city like Rio, a good private guide turns a short stay into a day that actually flows — choosing the right order of visits, timing the busy sites, and reading the streets beyond the viewpoints most visitors already know.",
        "We pair that local reading with private, one-group service and the practical logistics behind it, so your day feels personal and considered rather than packaged.",
      ],
    },

    comparison: {
      title: "Private guide or private tour?",
      items: [
        {
          title: "A private guide",
          text: "Fits when you want local interpretation, a flexible pace and someone giving your group their full attention through the day.",
        },
        {
          title: "A private tour",
          text: "Fits when you'd rather have a set itinerary with a defined route, guide, transport and tickets arranged ahead of time.",
        },
        {
          title: "How we usually work",
          text: "Most Be Free days combine the two — a private guide and a planned route, with room to adapt as the day goes.",
        },
      ],
    },

    idealFor: {
      title: "Who it's a good fit for",
      items: [
        "First-time visitors who want Rio to make sense quickly.",
        "Families, couples, solo travelers, seniors and small private groups.",
        "Travelers on limited time who want smooth timing and fewer decisions to make.",
        "Anyone who'd rather set the pace than follow a fixed group schedule.",
      ],
    },

    help: {
      title: "What your guide handles",
      items: [
        "The signature sights — Christ the Redeemer, Sugarloaf, historic downtown — placed in the right order and the right light.",
        "The neighborhoods, viewpoints, food stops and context that don't show up on a standard route.",
        "Timing, tickets and the route decisions that quietly shape how the whole day feels.",
        "Real-time changes when weather, traffic or the group's energy call for it.",
      ],
    },

    recommended: {
      title: "Good ways to explore with us",
      items: [
        { tourKey: "custom-tour", text: "Build the day from scratch around your interests, timing and pace." },
        { tourKey: "essential-rio", text: "A full-day private route through Rio's essentials — made for a first visit." },
        { tourKey: "rio-express", text: "A focused private half-day for travelers short on time." },
      ],
      hubLabel: "Compare all private tours",
      hubToken: "private-tours",
    },

    why: {
      title: "Why book your private guide with Be Free",
      items: [
        "A licensed private tour operator in Rio de Janeiro, running since 2013 and registered with Cadastur.",
        "Locally licensed guides, with service in English, Spanish and Portuguese.",
        "A 4.9-star rating across more than 800 traveler reviews.",
        "Private pace, planning support before the day, and pickup from your hotel, Airbnb, port or airport when it's part of the tour.",
      ],
    },

    faqs: [
      {
        q: "Can I hire a private guide without a fixed itinerary?",
        a: "Yes. The Custom Private Tour is built for exactly that — a guide-led day shaped from scratch around your interests, timing and pace.",
      },
      {
        q: "Is transport included?",
        a: "It's included on the private tours that need a vehicle. Walking-based experiences start from a central meeting point instead.",
      },
      {
        q: "Can the guide change the plan as we go?",
        a: "Yes — a private day flexes in a way a group schedule can't, especially around pace, viewpoints, food stops and the weather.",
      },
      {
        q: "Do you offer guides in English, Spanish and Portuguese?",
        a: "Yes. We work with local guides who can lead the day in English, Spanish or Portuguese, subject to availability.",
      },
      {
        q: "Is this a good option for families or seniors?",
        a: "Often the best one — a private guide means a calmer pace and far fewer logistics for families, seniors and anyone who'd rather not manage the details.",
      },
      {
        q: "Should I pick a custom tour or an existing private tour?",
        a: "Take an existing private tour if one already matches your plans. Choose a custom day if you'd rather have the guide, route and timing designed around you.",
      },
    ],
    faqTitle: "Frequently asked questions",

    finalCta: {
      title: "Want a private guide for your days in Rio?",
      text: "Tell us your dates, your interests and the pace you like. We'll point you to the right private tour — or build a custom day around you.",
      primaryLabel: "Start planning",
      primaryToken: "contact",
      secondaryLabel: "See private tours",
      secondaryToken: "private-tours",
    },
  },

  es: {
    title: "Guía privado en Río de Janeiro | Be Free Tours",
    metaDescription:
      "Descubre Río con un guía privado local y licenciado que organiza el día según tu ritmo, tus intereses y tu forma de viajar — planificación flexible, contexto local real y atención para un solo grupo.",

    hero: {
      title: "Guía privado en Río de Janeiro",
      subtitle:
        "Conoce Río a tu propio ritmo con un guía local licenciado dedicado solo a tu grupo — que lee la ciudad más allá de la postal, resuelve los tiempos y ajusta el día a medida que avanza.",
      primaryCta: { label: "Planifica tu día con un guía privado", token: "contact" },
      secondaryCta: { label: "Ver tours privados", token: "private-tours" },
    },

    intro: {
      kicker: "Guía privado, contexto local real",
      title: "Un guía privado hace mucho más que nombrar los monumentos.",
      paragraphs: [
        "En una ciudad como Río, un buen guía privado convierte una estadía corta en un día que fluye de verdad: elige el orden correcto de las visitas, calcula los horarios de los sitios más concurridos y lee las calles más allá de los miradores que casi todos ya conocen.",
        "A esa lectura local sumamos un servicio privado, para un solo grupo, y toda la logística práctica detrás — para que el día se sienta personal y pensado, no un paquete más.",
      ],
    },

    comparison: {
      title: "¿Guía privado o tour privado?",
      items: [
        {
          title: "Un guía privado",
          text: "Encaja cuando buscas interpretación local, un ritmo flexible y alguien que dedica toda su atención a tu grupo durante el día.",
        },
        {
          title: "Un tour privado",
          text: "Encaja cuando prefieres un itinerario definido, con ruta, guía, transporte y entradas resueltos de antemano.",
        },
        {
          title: "Cómo solemos trabajar",
          text: "La mayoría de los días con Be Free combinan ambos — un guía privado y una ruta planificada, con margen para adaptar el día sobre la marcha.",
        },
      ],
    },

    idealFor: {
      title: "Para quién funciona bien",
      items: [
        "Quienes visitan Río por primera vez y quieren entender la ciudad rápido.",
        "Familias, parejas, viajeros solos, personas mayores y grupos privados pequeños.",
        "Viajeros con poco tiempo que quieren buenos tiempos y menos decisiones que tomar.",
        "Quien prefiere marcar su propio ritmo en lugar de seguir un horario fijo de grupo.",
      ],
    },

    help: {
      title: "De qué se ocupa tu guía",
      items: [
        "Los lugares emblemáticos — el Cristo Redentor, el Pan de Azúcar, el centro histórico — en el orden y la luz adecuados.",
        "Los barrios, miradores, paradas de comida y el contexto que no aparecen en una ruta estándar.",
        "Los horarios, las entradas y las decisiones de ruta que definen, sin que se note, cómo se siente todo el día.",
        "Los cambios en tiempo real cuando el clima, el tráfico o la energía del grupo lo piden.",
      ],
    },

    recommended: {
      title: "Buenas formas de explorar con nosotros",
      items: [
        { tourKey: "custom-tour", text: "Arma el día desde cero según tus intereses, tus tiempos y tu ritmo." },
        { tourKey: "essential-rio", text: "Una ruta privada de día completo por lo esencial de Río — pensada para una primera visita." },
        { tourKey: "rio-express", text: "Un medio día privado y directo para quien tiene el tiempo justo." },
      ],
      hubLabel: "Comparar todos los tours privados",
      hubToken: "private-tours",
    },

    why: {
      title: "Por qué reservar tu guía privado con Be Free",
      items: [
        "Un operador de tours privados en Río de Janeiro, activo desde 2013 y registrado en Cadastur.",
        "Guías locales licenciados, con atención en inglés, español y portugués.",
        "Una valoración de 4.9 estrellas sobre más de 800 reseñas de viajeros.",
        "Ritmo privado, apoyo en la planificación antes del día y recogida en tu hotel, Airbnb, puerto o aeropuerto cuando forma parte del tour.",
      ],
    },

    faqs: [
      {
        q: "¿Puedo contratar un guía privado sin un itinerario fijo?",
        a: "Sí. El Tour Privado a Medida está pensado justo para eso — un día guiado que se arma desde cero según tus intereses, tus tiempos y tu ritmo.",
      },
      {
        q: "¿El transporte está incluido?",
        a: "Está incluido en los tours privados que necesitan vehículo. Las experiencias a pie parten, en cambio, desde un punto de encuentro central.",
      },
      {
        q: "¿El guía puede cambiar el plan sobre la marcha?",
        a: "Sí — un día privado se adapta como un horario de grupo no puede, sobre todo con el ritmo, los miradores, las paradas de comida y el clima.",
      },
      {
        q: "¿Ofrecen guías en inglés, español y portugués?",
        a: "Sí. Trabajamos con guías locales que pueden guiar el día en inglés, español o portugués, según disponibilidad.",
      },
      {
        q: "¿Es una buena opción para familias o personas mayores?",
        a: "Muchas veces la mejor — un guía privado significa un ritmo más tranquilo y mucha menos logística para familias, personas mayores y quien prefiere no ocuparse de los detalles.",
      },
      {
        q: "¿Elijo un tour a medida o un tour privado ya existente?",
        a: "Toma un tour ya existente si alguno coincide con tus planes. Elige un día a medida si prefieres que el guía, la ruta y los tiempos se diseñen para ti.",
      },
    ],
    faqTitle: "Preguntas frecuentes",

    finalCta: {
      title: "¿Quieres un guía privado para tus días en Río?",
      text: "Cuéntanos tus fechas, tus intereses y el ritmo que prefieres. Te recomendaremos el tour privado adecuado — o crearemos un día a medida para ti.",
      primaryLabel: "Empezar a planificar",
      primaryToken: "contact",
      secondaryLabel: "Ver tours privados",
      secondaryToken: "private-tours",
    },
  },

  "pt-br": {
    title: "Guia particular no Rio de Janeiro | Be Free Tours",
    metaDescription:
      "Conheça o Rio com um guia de turismo particular e licenciado, que organiza o dia conforme o seu ritmo, seus interesses e seu jeito de viajar — planejamento flexível, contexto local real e atenção para um único grupo.",

    hero: {
      title: "Guia particular no Rio de Janeiro",
      subtitle:
        "Conheça o Rio no seu ritmo, com um guia local licenciado dedicado só ao seu grupo — que lê a cidade além do cartão-postal, resolve os horários e ajusta o dia enquanto ele acontece.",
      primaryCta: { label: "Planeje seu dia com um guia particular", token: "contact" },
      secondaryCta: { label: "Ver passeios privativos", token: "private-tours" },
    },

    intro: {
      kicker: "Guia particular, contexto local real",
      title: "Um guia particular faz muito mais do que nomear os pontos turísticos.",
      paragraphs: [
        "Numa cidade como o Rio, um bom guia particular transforma uma estadia curta num dia que flui de verdade: escolhe a ordem certa das visitas, acerta os horários dos lugares mais cheios e lê as ruas para além dos mirantes que quase todo mundo já conhece.",
        "A essa leitura local somamos um serviço particular, para um único grupo, e toda a logística prática por trás — para que o dia seja pessoal e bem pensado, e não mais um pacote.",
      ],
    },

    comparison: {
      title: "Guia particular ou passeio privativo?",
      items: [
        {
          title: "Um guia particular",
          text: "Combina quando você quer interpretação local, ritmo flexível e alguém com atenção total no seu grupo ao longo do dia.",
        },
        {
          title: "Um passeio privativo",
          text: "Combina quando você prefere um roteiro definido, com rota, guia, transporte e ingressos resolvidos com antecedência.",
        },
        {
          title: "Como costumamos trabalhar",
          text: "A maioria dos dias com a Be Free combina os dois — um guia particular e uma rota planejada, com espaço para adaptar o dia durante o passeio.",
        },
      ],
    },

    idealFor: {
      title: "Para quem funciona bem",
      items: [
        "Quem visita o Rio pela primeira vez e quer entender a cidade rápido.",
        "Famílias, casais, viajantes solo, pessoas idosas e pequenos grupos privativos.",
        "Viajantes com pouco tempo, que querem horários fluidos e menos decisões para tomar.",
        "Quem prefere marcar o próprio ritmo em vez de seguir um horário fixo de grupo.",
      ],
    },

    help: {
      title: "Do que o seu guia cuida",
      items: [
        "Os lugares icônicos — Cristo Redentor, Pão de Açúcar, Centro histórico — na ordem e na luz certas.",
        "Os bairros, mirantes, paradas gastronômicas e o contexto que não entram numa rota padrão.",
        "Os horários, os ingressos e as decisões de rota que definem, sem aparecer, como o dia inteiro flui.",
        "Os ajustes em tempo real quando o clima, o trânsito ou a energia do grupo pedem.",
      ],
    },

    recommended: {
      title: "Boas formas de explorar com a gente",
      items: [
        { tourKey: "custom-tour", text: "Monte o dia do zero conforme seus interesses, seu tempo e seu ritmo." },
        { tourKey: "essential-rio", text: "Uma rota privativa de dia inteiro pelo essencial do Rio — feita para a primeira visita." },
        { tourKey: "rio-express", text: "Um meio dia privativo e direto para quem tem o tempo contado." },
      ],
      hubLabel: "Comparar todos os passeios privativos",
      hubToken: "private-tours",
    },

    why: {
      title: "Por que reservar seu guia particular com a Be Free",
      items: [
        "Uma operadora local de passeios privativos no Rio de Janeiro, ativa desde 2013 e cadastrada no Cadastur.",
        "Guias locais licenciados, com atendimento em inglês, espanhol e português.",
        "Nota 4,9 estrelas em mais de 800 avaliações de viajantes.",
        "Ritmo privativo, apoio no planejamento antes do dia e busca no seu hotel, Airbnb, porto ou aeroporto quando faz parte do passeio.",
      ],
    },

    faqs: [
      {
        q: "Posso contratar um guia particular sem roteiro fixo?",
        a: "Sim. O Passeio Personalizado foi feito exatamente para isso — um dia guiado montado do zero conforme seus interesses, seu tempo e seu ritmo.",
      },
      {
        q: "O transporte está incluído?",
        a: "Está incluído nos passeios privativos que precisam de veículo. Já as experiências a pé começam num ponto de encontro central.",
      },
      {
        q: "O guia pode mudar o plano durante o passeio?",
        a: "Sim — um dia privativo se adapta como um horário de grupo não consegue, principalmente no ritmo, nos mirantes, nas paradas gastronômicas e no clima.",
      },
      {
        q: "Vocês oferecem guias em inglês, espanhol e português?",
        a: "Sim. Trabalhamos com guias locais que podem conduzir o dia em inglês, espanhol ou português, sujeito à disponibilidade.",
      },
      {
        q: "É uma boa opção para famílias ou pessoas idosas?",
        a: "Muitas vezes a melhor — um guia particular significa um ritmo mais tranquilo e bem menos logística para famílias, pessoas idosas e quem prefere não cuidar dos detalhes.",
      },
      {
        q: "Escolho um passeio personalizado ou um passeio privativo já existente?",
        a: "Pegue um passeio já existente se algum combina com seus planos. Escolha um dia personalizado se prefere guia, rota e horários desenhados para você.",
      },
    ],
    faqTitle: "Perguntas frequentes",

    finalCta: {
      title: "Quer um guia particular para seus dias no Rio?",
      text: "Conte suas datas, seus interesses e o ritmo que você prefere. Vamos indicar o passeio privativo certo — ou criar um dia personalizado para você.",
      primaryLabel: "Começar o planejamento",
      primaryToken: "contact",
      secondaryLabel: "Ver passeios privativos",
      secondaryToken: "private-tours",
    },
  },
};

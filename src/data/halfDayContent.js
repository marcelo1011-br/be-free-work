/**
 * halfDayContent.js — fonte única de conteúdo do pillar "half-day / meio período".
 *
 * DUAS CAMADAS (mesmo padrão de dayTripsContent.js / privateGuideContent.js):
 *  1. Fatos (neutros, 1×): halfDayTourKeys + halfDayFacts.
 *  2. Prose nativa por locale: halfDayProse (EN x-default / ES / PT-BR — copy nativa
 *     VERBATIM das copies aprovadas, não tradução mecânica).
 *
 * Âncoras: 3 tours de meio período, por key EN canônica de tours.js. NÃO há categoria
 * "half-day" em tours.js — o hub filtra por esta LISTA FIXA de keys, não por campo.
 *
 * Termos travados:
 *  - PT: "meio período" (nunca "meio-dia"); linha de produto "passeios privativos".
 *  - ES: "tú" pan-hispânico neutro; "traslado / te pasamos a buscar".
 *  - Hrefs resolvidos pelo componente via tourKey (tours) e token (contact/private-tours),
 *    NUNCA hardcoded — o slug localizado (ex.: Rio Express PT longo) resolve sozinho.
 *  - Invariantes: água mineral incluída (sem quantidade); skip-the-line SÓ do bondinho do
 *    Pão de Açúcar (Cristo = ingresso incluído); custo "on your own / por tu cuenta / por
 *    conta própria", sem marketplace; contato email+WhatsApp juntos.
 */

// --- Camada 1: fatos ---------------------------------------------------------

// Âncoras do pillar. Chaves = slug EN canônico em tours.js. Ordem = exibição na comparação.
export const halfDayTourKeys = ["first-light-sunrise", "rio-express", "golden-hour-rio"];

// Fatos operacionais das âncoras — exatos, não fixar hora rígida no Golden Hour (sazonal).
export const halfDayFacts = {
  "rio-express": { hours: 5, when: "flexible" },
  "first-light-sunrise": { hours: 6, when: "saturdays", start: "4 AM" },
  "golden-hour-rio": { hours: 6, when: "sunset-seasonal" },
};

// --- Camada 2: prose nativa por locale --------------------------------------

export const halfDayProse = {
  en: {
    title: "Half-Day Tours in Rio de Janeiro | Be Free Tours",
    metaDescription:
      "See Christ the Redeemer and Sugarloaf in a single morning or afternoon — private, guided half-day tours in Rio, built around your time. Sunrise, flexible daytime, or sunset.",

    hero: {
      title: "Half-Day Tours in Rio de Janeiro",
      subtitle:
        "See Christ the Redeemer and Sugarloaf in a single morning or afternoon — private, guided, and built around your time in Rio.",
      primaryCta: { label: "Explore half-day tours", token: "private-tours" },
    },

    intro: {
      paragraphs: [
        "Rio's two icons don't require a full day. In five to six hours, a private guide and driver take you to both Christ the Redeemer and Sugarloaf Mountain, skip the cable-car line at Sugarloaf, and still leave you half a day for the beach, a long lunch, or your flight out. A half-day tour is the efficient way to see the essentials without handing over your whole schedule.",
      ],
    },

    comparison: {
      title: "Choose your light",
      intro:
        "Three half-day tours cover the same icons at very different hours. The right one depends on the light you want and how your day is shaped.",
      columns: { tour: "Tour", length: "Length", when: "When", bestFor: "Best for" },
      items: [
        {
          tourKey: "first-light-sunrise",
          tour: "Rio at First Light",
          length: "6 hours",
          when: "Sunrise · Saturdays · 4 AM start",
          bestFor: "Photographers and early risers who want Sugarloaf and Christ before the crowds",
        },
        {
          tourKey: "rio-express",
          tour: "Rio Express",
          length: "5 hours",
          when: "Flexible · morning or early afternoon",
          bestFor: "Cruise passengers and tight schedules — the most efficient window on the icons",
        },
        {
          tourKey: "golden-hour-rio",
          tour: "Golden Hour Rio",
          length: "6 hours",
          when: "Sunset",
          bestFor: "Christ in warm afternoon light, then sunset from Sugarloaf as the city lights come on",
        },
      ],
    },

    idealFor: {
      title: "Ideal for",
      items: [
        "Cruise passengers with limited port time — Rio Express includes pickup from the Pier Mauá cruise terminal",
        "Arrival or departure days, when you want the icons but not a full day out",
        "Travelers who want their mornings or afternoons free for the beach",
        "Photographers chasing sunrise or sunset light over Guanabara Bay",
      ],
    },

    help: {
      title: "How we help",
      paragraphs: [
        "Tell us your dates, your group size, and how much of the day you want to keep for yourself — we'll recommend the half-day that fits and arrange pickup anywhere in Rio. Reach us by email or WhatsApp, whichever you prefer.",
      ],
    },

    recommended: {
      title: "Recommended tours",
      hubLabel: "Compare all private tours",
      hubToken: "private-tours",
    },

    why: {
      title: "Why book a private half-day with us",
      items: [
        "Private, your group only — no shared vans, no waiting on strangers",
        "A certified local guide in your language",
        "Door-to-door pickup and drop-off anywhere in Rio, including the cruise port",
        "Skip-the-line at the Sugarloaf cable car — Christ the Redeemer tickets are included, and the skip-the-line access applies to the Sugarloaf cable car",
        "Bottled water on board",
        "A route planned so five or six hours actually covers the icons, not the queues",
      ],
    },

    costWedge: {
      text: "Doing Christ and Sugarloaf on your own means ticket queues, two transfers, and a lot of guesswork on timing. We fold it into one seamless half-day, so the hours go to the views instead of the logistics.",
      ctaLabel: "Book a half-day tour",
      ctaToken: "contact",
    },

    faqs: [
      {
        q: "Is five or six hours enough to see Rio's main sights?",
        a: "Yes. With a private guide, door-to-door transport, and skip-the-line access at the Sugarloaf cable car, a half-day covers Christ the Redeemer and Sugarloaf comfortably. The time goes to the views rather than to queues and transfers.",
      },
      {
        q: "Which half-day tour should I choose?",
        a: "It depends on the light you want. Rio Express is the flexible daytime option and the best fit for tight schedules. Rio at First Light is a sunrise tour that runs on Saturdays, starting at 4 AM. Golden Hour Rio is built around sunset. Tell us your dates and we'll match you to the right one.",
      },
      {
        q: "Are these tours good for cruise passengers?",
        a: "Yes — Rio Express was designed for port days. Pickup from the Pier Mauá cruise terminal is included, and the five-hour format fits comfortably inside most port windows, with your guide making sure you're back on time.",
      },
      {
        q: "Can I do a half-day tour on my arrival or departure day?",
        a: "Often, yes. If your flight times allow, a half-day is a good way to use an otherwise idle arrival or departure day. Share your schedule and we'll tell you honestly whether it works.",
      },
      {
        q: "Is skip-the-line access included?",
        a: "Skip-the-line access applies to the Sugarloaf Mountain cable car, and it's included. Christ the Redeemer entrance tickets are included in the price as well.",
      },
      {
        q: "Are the tours private?",
        a: "Yes. Each half-day tour is private to your group — your own guide, your own vehicle, and a pace you set.",
      },
    ],
    faqTitle: "Frequently asked questions",

    finalCta: {
      title: "Not sure which half-day fits your trip?",
      text: "Tell us your dates and how much of the day you want free — we'll recommend the right one and arrange pickup anywhere in Rio. Email or WhatsApp, whichever you prefer.",
      primaryLabel: "Start planning",
      primaryToken: "contact",
      secondaryLabel: "Browse private tours",
      secondaryToken: "private-tours",
    },
  },

  es: {
    title: "Tours de Medio Día en Río de Janeiro | Be Free Tours",
    metaDescription:
      "Visita el Cristo Redentor y el Pan de Azúcar en una sola mañana o tarde — tours privados de medio día en Río, pensados según tu tiempo. Amanecer, diurno flexible o atardecer.",

    hero: {
      title: "Tours de Medio Día en Río de Janeiro",
      subtitle:
        "Visita el Cristo Redentor y el Pan de Azúcar en una sola mañana o tarde: privado, con guía y pensado según tu tiempo en Río.",
      primaryCta: { label: "Ver tours de medio día", token: "private-tours" },
    },

    intro: {
      paragraphs: [
        "Los dos íconos de Río no exigen un día entero. En cinco o seis horas, un guía privado y un conductor te llevan al Cristo Redentor y al Pan de Azúcar, sin hacer la fila del teleférico del Pan de Azúcar, y todavía te queda medio día libre para la playa, un almuerzo tranquilo o tu vuelo de salida. Un tour de medio día es la forma eficiente de ver lo esencial sin entregar toda tu agenda.",
      ],
    },

    comparison: {
      title: "Elige tu luz",
      intro:
        "Tres tours de medio día recorren los mismos íconos a horas muy distintas. El indicado depende de la luz que quieras y de cómo esté armado tu día.",
      columns: { tour: "Tour", length: "Duración", when: "Cuándo", bestFor: "Ideal para" },
      items: [
        {
          tourKey: "first-light-sunrise",
          tour: "Río al Amanecer",
          length: "6 horas",
          when: "Amanecer · sábados · salida 4 AM",
          bestFor: "Fotógrafos y madrugadores que quieren el Pan de Azúcar y el Cristo sin multitudes",
        },
        {
          tourKey: "rio-express",
          tour: "Río Express",
          length: "5 horas",
          when: "Flexible · mañana o primera hora de la tarde",
          bestFor: "Pasajeros de crucero y agendas ajustadas: la ventana más eficiente sobre los íconos",
        },
        {
          tourKey: "golden-hour-rio",
          tour: "Hora Dorada",
          length: "6 horas",
          when: "Atardecer",
          bestFor: "El Cristo con luz cálida y luego el atardecer desde el Pan de Azúcar, con la ciudad encendiéndose abajo",
        },
      ],
    },

    idealFor: {
      title: "Ideal para",
      items: [
        "Pasajeros de crucero con poco tiempo en puerto — Río Express incluye el traslado desde la terminal de cruceros de Pier Mauá",
        "Días de llegada o salida, cuando quieres los íconos pero no un día entero",
        "Viajeros que quieren la mañana o la tarde libre para la playa",
        "Fotógrafos que buscan la luz del amanecer o del atardecer sobre la Bahía de Guanabara",
      ],
    },

    help: {
      title: "Cómo ayudamos",
      paragraphs: [
        "Cuéntanos tus fechas, el tamaño de tu grupo y cuánto del día quieres conservar para ti — te recomendamos el medio día que encaja y organizamos el traslado en cualquier punto de Río. Escríbenos por email o WhatsApp, lo que prefieras.",
      ],
    },

    recommended: {
      title: "Tours recomendados",
      hubLabel: "Comparar todos los tours privados",
      hubToken: "private-tours",
    },

    why: {
      title: "Por qué reservar un medio día privado con nosotros",
      items: [
        "Privado, solo tu grupo — sin combis compartidas ni esperas",
        "Guía local certificado en tu idioma",
        "Traslado puerta a puerta en cualquier punto de Río, incluida la terminal de cruceros",
        "Sin fila en el teleférico del Pan de Azúcar — las entradas del Cristo Redentor están incluidas, y el acceso sin fila corresponde al teleférico del Pan de Azúcar",
        "Agua mineral a bordo",
        "Una ruta pensada para que cinco o seis horas alcancen para los íconos, no para las colas",
      ],
    },

    costWedge: {
      text: "Hacer el Cristo y el Pan de Azúcar por tu cuenta significa colas para entradas, dos traslados y mucho cálculo con los horarios. Nosotros lo resolvemos en un medio día sin costuras, para que las horas vayan a las vistas y no a la logística.",
      ctaLabel: "Reserva tu tour de medio día",
      ctaToken: "contact",
    },

    faqs: [
      {
        q: "¿Alcanzan cinco o seis horas para ver lo principal de Río?",
        a: "Sí. Con guía privado, traslado puerta a puerta y acceso sin fila en el teleférico del Pan de Azúcar, un medio día cubre el Cristo Redentor y el Pan de Azúcar con comodidad. El tiempo va a las vistas y no a las colas ni a los traslados.",
      },
      {
        q: "¿Cuál tour de medio día elijo?",
        a: "Depende de la luz que quieras. Río Express es la opción diurna flexible y la mejor para agendas ajustadas. Río al Amanecer es un tour de amanecer que sale los sábados a las 4 AM. Hora Dorada gira en torno al atardecer. Dinos tus fechas y te orientamos.",
      },
      {
        q: "¿Sirven para pasajeros de crucero?",
        a: "Sí — Río Express está pensado para días de puerto. Incluye el traslado desde la terminal de cruceros de Pier Mauá, y el formato de cinco horas entra cómodo en la mayoría de las ventanas de puerto; tu guía se asegura de que vuelvas a tiempo.",
      },
      {
        q: "¿Puedo hacer un medio día el día de llegada o de salida?",
        a: "Muchas veces, sí. Si tus horarios de vuelo lo permiten, un medio día aprovecha bien un día de llegada o salida que quedaría vacío. Cuéntanos tu itinerario y te decimos con honestidad si es viable.",
      },
      {
        q: "¿Está incluido el acceso sin fila?",
        a: "El acceso sin fila corresponde al teleférico del Pan de Azúcar y está incluido. Las entradas del Cristo Redentor también están incluidas en el precio.",
      },
      {
        q: "¿Los tours son privados?",
        a: "Sí. Cada tour de medio día es privado para tu grupo: tu propio guía, tu propio vehículo y el ritmo que marques.",
      },
    ],
    faqTitle: "Preguntas frecuentes",

    finalCta: {
      title: "¿No sabes cuál medio día encaja en tu viaje?",
      text: "Cuéntanos tus fechas y cuánto del día quieres libre; te recomendamos el indicado y organizamos el traslado en cualquier punto de Río. Por email o WhatsApp, como prefieras.",
      primaryLabel: "Empezar a planificar",
      primaryToken: "contact",
      secondaryLabel: "Ver tours privados",
      secondaryToken: "private-tours",
    },
  },

  "pt-br": {
    title: "Passeios de Meio Período no Rio de Janeiro | Be Free Tours",
    metaDescription:
      "Conheça o Cristo Redentor e o Pão de Açúcar em uma única manhã ou tarde — passeios privativos de meio período no Rio, no seu tempo. Nascer do sol, diurno flexível ou pôr do sol.",

    hero: {
      title: "Passeios de Meio Período no Rio de Janeiro",
      subtitle:
        "Conheça o Cristo Redentor e o Pão de Açúcar em uma única manhã ou tarde — privativo, com guia e no seu tempo no Rio.",
      primaryCta: { label: "Ver passeios de meio período", token: "private-tours" },
    },

    intro: {
      paragraphs: [
        "Os dois cartões-postais do Rio não exigem um dia inteiro. Em cinco a seis horas, um guia privativo e um motorista levam você ao Cristo Redentor e ao Pão de Açúcar, sem enfrentar a fila do bondinho do Pão de Açúcar, e ainda sobra meio dia livre para a praia, um almoço sem pressa ou o seu voo de volta. Um passeio de meio período é a forma eficiente de ver o essencial sem abrir mão da agenda inteira.",
      ],
    },

    comparison: {
      title: "Escolha a sua luz",
      intro:
        "Três passeios de meio período percorrem os mesmos cartões-postais em horas bem diferentes. O certo depende da luz que você quer e de como o seu dia está montado.",
      columns: { tour: "Passeio", length: "Duração", when: "Quando", bestFor: "Ideal para" },
      items: [
        {
          tourKey: "first-light-sunrise",
          tour: "Rio ao Nascer do Sol",
          length: "6 horas",
          when: "Nascer do sol · sábados · saída às 4h",
          bestFor: "Fotógrafos e quem madruga e quer o Pão de Açúcar e o Cristo sem multidão",
        },
        {
          tourKey: "rio-express",
          tour: "Rio Express",
          length: "5 horas",
          when: "Flexível · manhã ou início da tarde",
          bestFor: "Passageiros de cruzeiro e agendas apertadas: a janela mais eficiente nos cartões-postais",
        },
        {
          tourKey: "golden-hour-rio",
          tour: "Pôr do Sol (Golden Hour)",
          length: "6 horas",
          when: "Fim de tarde",
          bestFor: "O Cristo na luz dourada e o pôr do sol do alto do Pão de Açúcar, com a cidade se acendendo lá embaixo",
        },
      ],
    },

    idealFor: {
      title: "Ideal para",
      items: [
        "Passageiros de cruzeiro com pouco tempo em terra — o Rio Express inclui embarque no terminal de cruzeiros do Pier Mauá",
        "Dias de chegada ou partida, quando você quer os cartões-postais mas não um dia inteiro",
        "Viajantes que querem a manhã ou a tarde livre para a praia",
        "Fotógrafos atrás da luz do nascer ou do pôr do sol sobre a Baía de Guanabara",
      ],
    },

    help: {
      title: "Como ajudamos",
      paragraphs: [
        "Conte pra gente suas datas, o tamanho do grupo e quanto do dia você quer manter livre — recomendamos o meio período que encaixa e organizamos o transporte em qualquer ponto do Rio. Fale com a gente por email ou WhatsApp, como preferir.",
      ],
    },

    recommended: {
      title: "Passeios recomendados",
      hubLabel: "Comparar todos os passeios privativos",
      hubToken: "private-tours",
    },

    why: {
      title: "Por que reservar um meio período privativo com a gente",
      items: [
        "Privativo, só o seu grupo — sem vans compartilhadas nem espera",
        "Guia local credenciado no seu idioma",
        "Transporte porta a porta em qualquer ponto do Rio, inclusive o terminal de cruzeiros",
        "Sem fila no bondinho do Pão de Açúcar — os ingressos do Cristo Redentor estão inclusos, e o acesso sem fila é do bondinho do Pão de Açúcar",
        "Água mineral a bordo",
        "Um roteiro pensado para que cinco ou seis horas rendam nos cartões-postais, não nas filas",
      ],
    },

    costWedge: {
      text: "Fazer o Cristo e o Pão de Açúcar por conta própria significa fila de ingresso, dois deslocamentos e muita conta com horário. A gente resolve tudo em um meio período sem emenda, para as horas irem para as vistas, não para a logística.",
      ctaLabel: "Reservar passeio de meio período",
      ctaToken: "contact",
    },

    faqs: [
      {
        q: "Cinco ou seis horas dão para ver o principal do Rio?",
        a: "Dão. Com guia privativo, transporte porta a porta e acesso sem fila no bondinho do Pão de Açúcar, um meio período cobre o Cristo Redentor e o Pão de Açúcar com folga. O tempo vai para as vistas, não para as filas e os deslocamentos.",
      },
      {
        q: "Qual passeio de meio período eu escolho?",
        a: "Depende da luz que você quer. O Rio Express é a opção diurna flexível e a melhor para agendas apertadas. O Rio ao Nascer do Sol sai aos sábados, às 4h. O de Pôr do Sol gira em torno do fim de tarde. Conte suas datas que a gente orienta.",
      },
      {
        q: "Servem para passageiros de cruzeiro?",
        a: "Servem — o Rio Express foi pensado para dias de cruzeiro. Inclui embarque no terminal de cruzeiros do Pier Mauá, e o formato de cinco horas cabe bem na maioria das janelas de porto; o guia garante o retorno a tempo.",
      },
      {
        q: "Dá para fazer um meio período no dia de chegada ou de partida?",
        a: "Muitas vezes, sim. Se os horários do voo permitirem, um meio período aproveita bem um dia de chegada ou partida que ficaria vazio. Conte seu itinerário que a gente diz com honestidade se dá.",
      },
      {
        q: "O acesso sem fila está incluso?",
        a: "O acesso sem fila é do bondinho do Pão de Açúcar e está incluso. Os ingressos do Cristo Redentor também estão inclusos no preço.",
      },
      {
        q: "Os passeios são privativos?",
        a: "São. Cada passeio de meio período é privativo do seu grupo: seu guia, seu veículo e o ritmo que você define.",
      },
    ],
    faqTitle: "Perguntas frequentes",

    finalCta: {
      title: "Não sabe qual meio período combina com a sua viagem?",
      text: "Conte suas datas e quanto do dia você quer livre — a gente recomenda o certo e organiza o transporte em qualquer ponto do Rio. Por email ou WhatsApp, como preferir.",
      primaryLabel: "Começar o planejamento",
      primaryToken: "contact",
      secondaryLabel: "Ver passeios privativos",
      secondaryToken: "private-tours",
    },
  },
};

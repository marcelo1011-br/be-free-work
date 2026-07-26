/**
 * dayTripsContent.js — conteúdo editorial do pillar "day trips / bate e volta".
 *
 * Arquitetura em DUAS CAMADAS (espelha a disciplina anti-triplicação do tours.js):
 *
 *   1. dayTripsDestinations — CAMADA DE FATOS (1×, sem locale).
 *      Liga cada destino a um tourKey de tours.js. Os hrefs NÃO vivem aqui:
 *      o componente resolve o href a partir de tourKey, usando o slug já
 *      localizado em tours.js. Assim não há drift de URL entre locales.
 *
 *   2. dayTripsProse — CAMADA EDITORIAL (por locale, copy NATIVA).
 *      Só texto + labels de CTA. NENHUMA URL de tour é hardcodada aqui.
 *      Destinos são citados por NOME, nunca por link.
 *
 * TOKENS DE AÇÃO nos CTAs (o componente mapeia token -> href; não são URLs):
 *   'quote'        -> página/fluxo de contato-orçamento (email + WhatsApp)
 *   'destinations' -> âncora para a seção de destinos nesta mesma página
 *   (os cards de destino não usam token: linkam para o tour do seu tourKey)
 *
 * DISCIPLINA ÂMBAR: o componente aplica teto 3/página. Os CTAs primários
 * (hero + finalCta, action 'quote') são candidatos a âmbar/reserva; os
 * secundários e os links de card são ghost/outline. Labels escritos com isso
 * em mente (no máx. 2 ações distintas no corpo: 'quote' e 'destinations').
 *
 * FATOS TRAVADOS (consistentes com tours.js @ commits ac7202cd/26d0d6a0):
 *   - Petrópolis: tour com Offer ("from"); água mineral incluída.
 *   - Ilha Grande: tour com Offer; visita ALGUMAS praias (NÃO dá a volta na
 *     ilha); almoço opcional pago à parte, sem valor fixo; churrasco a bordo
 *     opcional sob consulta, sem valor; sem Offer/preço fixo de tour;
 *     marinheiro e água mineral incluídos; sem superlativos, sem claims
 *     sobre concorrentes.
 *   - Búzios: SOB CONSULTA, sem preço, sem Offer; CTA = orçamento.
 *   - Custo de terceiros sempre "por conta própria / on your own / por tu
 *     cuenta"; nunca citar marketplace por nome.
 *   - Contato sempre email + WhatsApp JUNTOS.
 */

export const dayTripsContact = {
  email: "contact@befreetours.com.br",
  whatsapp: "+55 21 97927-1637",
};

// Camada de fatos (1×). tourKey deve existir em tours.js (chave canônica EN).
export const dayTripsDestinations = [
  { key: "petropolis",  tourKey: "petropolis-imperial",       hasOffer: true },
  { key: "ilha-grande", tourKey: "island-escape-ilha-grande", hasOffer: true },
  { key: "buzios",      tourKey: "buzios-riviera",            hasOffer: false, underInquiry: true },
];

// Catch-all "monte o seu" — referenciado pelo componente no finalCta/atalho custom.
export const dayTripsCustomTourKey = "custom-tour";

export const dayTripsProse = {
  en: {
    seo: {
      title: "Private Day Trips from Rio de Janeiro | Be Free Tours",
      description:
        "Compare private day trips from Rio — imperial Petrópolis, an Ilha Grande speedboat escape, or Búzios on request. A licensed guide handles the logistics; you enjoy the day.",
    },
    hero: {
      eyebrow: "PRIVATE · FROM RIO DE JANEIRO",
      title: "Private Day Trips from Rio de Janeiro",
      // Trecho a enfatizar em itálico no <h1> (substring exata de `title`). `title`
      // fica intacto — schema/breadcrumb lê essa string; o componente só o parte.
      titleEmphasis: "Day Trips",
      subtitle:
        "Trade the city for a mountain palace, a Costa Verde island, or the beaches of Búzios — private, guided, and planned around your group. A professional driver and a certified guide handle the day — the driving, the timing, the details — so you don't have to.",
      primaryCta: { label: "Plan your day trip", action: "quote" },
      secondaryCta: { label: "Compare destinations", action: "destinations" },
    },
    intro: {
      title: "A day trip from Rio is really a question of what kind of day you want.",
      kicker: "Where to next",
      paragraphs: [
        "A day trip from Rio is really a question of what kind of day you want. Cooler mountain air and imperial history point to Petrópolis; clear water and a private boat point to Ilha Grande; laid-back beach hopping points to Búzios.",
        "Every route runs privately for your group only, with a professional driver and a certified local guide handling everything — vehicle, timing and the details — so the day stays relaxed.",
      ],
    },
    moodMenu: {
      title: "Which one fits your trip?",
      items: [
        { destKey: "petropolis",  label: "For history & mountains", text: "Imperial palaces, the Serra dos Órgãos and a cooler, unhurried day just north of Rio." },
        { destKey: "ilha-grande", label: "For beaches & boat time", text: "A private speedboat day on the Costa Verde, stopping at a few of the island's calm-water beaches." },
        { destKey: "buzios",      label: "For beach hopping",       text: "The peninsula's string of beaches and its famous cobblestone streets — arranged on request." },
      ],
    },
    comparison: {
      title: "Which one fits your trip?",
      heads: [
        { destKey: "petropolis", name: "Petrópolis" },
        { destKey: "ilha-grande", name: "Ilha Grande" },
        { destKey: "buzios", name: "Búzios" },
      ],
      rows: [
        { key: "bestFor", label: "Best for", cells: {
          "petropolis": "History & mountains",
          "ilha-grande": "Beaches & boat time",
          "buzios": "Beach hopping",
        } },
        { key: "theDay", label: "The day", cells: {
          "petropolis": "History and a scenic drive up the Serra dos Órgãos",
          "ilha-grande": "A private speedboat to the island's calm-water beaches",
          "buzios": "The peninsula's beaches and the Rua das Pedras",
        } },
        { key: "season", label: "Season", cells: {
          "petropolis": "Year-round — the most weather-proof of the three",
          "ilha-grande": "Best in warm, clear-water months",
          "buzios": "Arranged around the season, on request",
        } },
      ],
    },
    destinations: {
      petropolis: {
        name: "Petrópolis — the Imperial City",
        blurb:
          "Climb the Serra dos Órgãos to Brazil's former imperial summer capital, where the Crystal Palace, the Imperial Museum and mountain-cool streets make for a calm, culture-rich day. It's the most weather-proof of the three — good year-round and easy on the pace. Private vehicle, licensed guide, attraction tickets and mineral water are included; lunch is on your own.",
        ctaLabel: "See the Petrópolis day trip",
      },
      "ilha-grande": {
        name: "Ilha Grande — Costa Verde by Private Speedboat",
        blurb:
          "A complete private day trip to Ilha Grande from Rio, with door-to-door transport, a licensed guide and a speedboat reserved for your group. The standard experience explores sheltered beaches with calm, shallow water for swimming and snorkeling; snorkeling equipment and water are included at no extra cost. A premium option adds Lopes Mendes, one of Brazil's most beautiful beaches, reached by boat to Praia do Pouso and a forest trail of about forty minutes with your guide. Lunch is optional and paid separately at a restaurant along the route; an on-board barbecue is available on request. The complete day runs about ten to twelve hours. Full details, inclusions and FAQs are on the tour page.",
        ctaLabel: "See the Ilha Grande day trip",
      },
      buzios: {
        name: "Búzios — Beaches & Cobblestones",
        blurb:
          "The Búzios peninsula packs dozens of beaches, a walkable old town and a relaxed seaside rhythm into one stretch of coast north of Rio. As a private day trip it's arranged on request, shaped around your group's pace and the season — tell us what you're after and we'll build the day and send a quote.",
        ctaLabel: "Request a Búzios quote",
      },
    },
    whyPrivate: {
      title: "Why go private",
      items: [
        "Just your group — no strangers, no fixed departure to share.",
        "A professional driver at the wheel and a certified guide with you throughout the day.",
        "Flexible pace: linger where you like, skip what you don't.",
        "Hotel, Airbnb or port pickup when it's part of the route; mineral water included.",
      ],
    },
    faqs: [
      {
        q: "Which day trip should I choose?",
        a: "For history and cooler mountain air, choose Petrópolis. For clear water and time on a private boat, choose Ilha Grande. For easygoing beach hopping, choose Búzios. If you're still unsure, tell us your dates and travel style and we'll recommend one.",
      },
      {
        q: "How long do the day trips take?",
        a: "Plan on a full day. For Petrópolis we suggest starting between 08:00 and 10:30 to allow time to see everything, and it runs about 8 hours; Ilha Grande starts very early (around 05:30–07:30) and runs roughly 10 hours because of the drive and boat time. Búzios is arranged on request.",
      },
      {
        q: "Is transport and pickup included?",
        a: "Yes. Each private day trip includes a vehicle and driver, and pickup from your hotel, Airbnb or port when it's part of the planned route.",
      },
      {
        q: "Is lunch included?",
        a: "Lunch is not included in our day trips. It is optional and paid separately at restaurants along the route, and your guide can recommend good options according to the day's itinerary.",
      },
      {
        q: "Are the day trips private?",
        a: "Yes — every trip runs privately for your group only, with your own guide. You never share the vehicle or boat with other travelers.",
      },
      {
        q: "Do I need to book in advance?",
        a: "Yes, we recommend booking ahead — Ilha Grande in particular has limited early-morning departures. To plan a trip or get a Búzios quote, email contact@befreetours.com.br or WhatsApp +55 21 97927-1637.",
      },
    ],
    faqTitle: "Day trip FAQs",
    finalCta: {
      title: "Ready to plan your escape from Rio?",
      text:
        "Tell us your dates, your group and the kind of day you're after — Petrópolis, Ilha Grande, Búzios or something custom. Reach us at contact@befreetours.com.br or on WhatsApp at +55 21 97927-1637 and we'll shape the day and send a quote.",
      ctaLabel: "Plan your day trip",
      action: "quote",
    },
  },

  es: {
    seo: {
      title: "Excursiones privadas desde Río de Janeiro | Be Free Tours",
      description:
        "Compara las excursiones privadas desde Río: Petrópolis imperial, Ilha Grande en lancha privada o Búzios bajo consulta. Un guía habilitado se ocupa de la logística; tú disfrutas el día.",
    },
    hero: {
      eyebrow: "PRIVADO · DESDE RÍO DE JANEIRO",
      title: "Excursiones privadas desde Río de Janeiro",
      titleEmphasis: "Excursiones",
      subtitle:
        "Cambia la ciudad por un palacio de montaña, una isla de la Costa Verde o las playas de Búzios: excursiones privadas, guiadas y pensadas para tu grupo. Un conductor profesional y un guía certificado se encargan del día —la conducción, los tiempos, los detalles— para que tú no tengas que hacerlo.",
      primaryCta: { label: "Planifica tu excursión", action: "quote" },
      secondaryCta: { label: "Comparar destinos", action: "destinations" },
    },
    intro: {
      title: "Una excursión desde Río es, en realidad, una cuestión de qué tipo de día quieres.",
      kicker: "¿Adónde vas?",
      paragraphs: [
        "Elegir una excursión desde Río es, sobre todo, decidir qué tipo de día quieres. El aire fresco de la sierra y la historia imperial llevan a Petrópolis; el agua clara y una lancha privada, a Ilha Grande; las playas tranquilas, a Búzios.",
        "Cada ruta es privada, solo para tu grupo, con un conductor profesional y un guía local certificado que se ocupan de todo —vehículo, horarios y detalles— para que el día fluya de principio a fin. Ten en cuenta el clima: la sierra es más templada y estable, mientras que las salidas en barco dependen más del estado del mar.",
      ],
    },
    moodMenu: {
      title: "¿Cuál encaja con tu viaje?",
      items: [
        { destKey: "petropolis",  label: "Para historia y montaña", text: "Palacios imperiales, la Serra dos Órgãos y un día más fresco y tranquilo al norte de Río." },
        { destKey: "ilha-grande", label: "Para playas y lancha",    text: "Un día en lancha privada por la Costa Verde, con paradas en algunas de las playas de aguas más claras de la isla." },
        { destKey: "buzios",      label: "Para recorrer playas",    text: "La sucesión de playas de la península y sus calles empedradas, organizado bajo consulta." },
      ],
    },
    comparison: {
      title: "¿Cuál encaja con tu viaje?",
      heads: [
        { destKey: "petropolis", name: "Petrópolis" },
        { destKey: "ilha-grande", name: "Ilha Grande" },
        { destKey: "buzios", name: "Búzios" },
      ],
      rows: [
        { key: "bestFor", label: "Ideal para", cells: {
          "petropolis": "Para historia y montaña",
          "ilha-grande": "Para playas y lancha",
          "buzios": "Para recorrer playas",
        } },
        { key: "theDay", label: "El día", cells: {
          "petropolis": "Historia y una subida escénica por la Serra dos Órgãos",
          "ilha-grande": "Una lancha privada a las playas de aguas tranquilas de la isla",
          "buzios": "Las playas de la península y la Rua das Pedras",
        } },
        { key: "season", label: "Temporada", cells: {
          "petropolis": "Todo el año — la más estable de las tres",
          "ilha-grande": "Mejor en los meses cálidos de aguas claras",
          "buzios": "Según la temporada, bajo consulta",
        } },
      ],
    },
    destinations: {
      petropolis: {
        name: "Petrópolis, la Ciudad Imperial",
        blurb:
          "Sube la Serra dos Órgãos hasta la antigua capital imperial de verano de Brasil, con el Palacio de Cristal, el Museo Imperial y calles de clima templado para un día tranquilo y con mucha cultura. Es la opción menos dependiente del clima: funciona todo el año y con un ritmo cómodo. Incluye vehículo privado, guía habilitado, las entradas a las atracciones y agua mineral; el almuerzo corre por tu cuenta.",
        ctaLabel: "Ver la excursión a Petrópolis",
      },
      "ilha-grande": {
        name: "Ilha Grande, la Costa Verde en lancha privada",
        blurb:
          "Una excursión privada completa a Ilha Grande desde Río, con transporte puerta a puerta, guía acreditado y una lancha reservada para tu grupo. La experiencia estándar recorre playas abrigadas de aguas tranquilas y poco profundas para nadar y hacer snorkel; el equipo de snorkel y el agua están incluidos sin coste adicional. Una opción premium añade Lopes Mendes, una de las playas más bonitas de Brasil, a la que se llega en lancha hasta Praia do Pouso y un sendero por el bosque de unos cuarenta minutos con tu guía. El almuerzo es opcional y se paga por separado en un restaurante de la ruta; hay una barbacoa a bordo bajo consulta. El día completo dura unas diez a doce horas. Todos los detalles, lo incluido y las preguntas frecuentes están en la página del tour.",
        ctaLabel: "Ver la excursión a Ilha Grande",
      },
      buzios: {
        name: "Búzios, playas y calles empedradas",
        blurb:
          "La península de Búzios reúne decenas de playas, un casco antiguo para recorrer a pie y un ritmo de mar relajado en un tramo de costa al norte de Río. Como excursión privada se organiza bajo consulta, según el ritmo de tu grupo y la temporada: cuéntanos qué buscas y armamos el día con un presupuesto.",
        ctaLabel: "Pedir presupuesto de Búzios",
      },
    },
    whyPrivate: {
      title: "Por qué elegir privado",
      items: [
        "Solo tu grupo: sin desconocidos ni salidas compartidas.",
        "Un conductor profesional al volante y un guía certificado contigo durante todo el día.",
        "Ritmo flexible: te detienes donde quieres y saltas lo que no.",
        "Recogida en hotel, Airbnb o puerto cuando forma parte de la ruta; agua mineral incluida.",
      ],
    },
    faqs: [
      {
        q: "¿Cuál excursión vale más la pena?",
        a: "Depende de lo que busques: Petrópolis para historia y clima de montaña, Ilha Grande para agua clara y lancha privada, y Búzios para un día de playas. Si dudas, cuéntanos tus fechas y tu estilo de viaje y te recomendamos una.",
      },
      {
        q: "¿Cuál es la mejor época para cada excursión?",
        a: "Petrópolis funciona todo el año porque depende poco del clima. Para Ilha Grande conviene un día de mar tranquilo y buen tiempo, más habitual en primavera y verano; en días de mar agitado la experiencia cambia. Búzios se adapta a la temporada al organizarse bajo consulta.",
      },
      {
        q: "¿Se puede visitar Búzios en el día desde Río?",
        a: "Sí. Búzios se puede hacer como excursión privada de un día; al organizarse bajo consulta, ajustamos la salida y el ritmo a tu grupo. Escríbenos para un presupuesto.",
      },
      {
        q: "¿Están incluidos el transporte y la recogida?",
        a: "Sí. Cada excursión privada incluye vehículo y conductor, y recogida en tu hotel, Airbnb o puerto cuando forma parte de la ruta planificada.",
      },
      {
        q: "¿Las excursiones son privadas?",
        a: "Sí, cada salida es privada y solo para tu grupo, con tu propio guía. Nunca compartes el vehículo ni la lancha con otros viajeros.",
      },
      {
        q: "¿Necesito reservar con antelación?",
        a: "Sí, lo recomendamos, sobre todo para Ilha Grande, que tiene salidas limitadas de madrugada. Para planificar o pedir un presupuesto de Búzios, escribe a contact@befreetours.com.br o por WhatsApp al +55 21 97927-1637.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    finalCta: {
      title: "¿Listo para tu escapada desde Río?",
      text:
        "Cuéntanos tus fechas, tu grupo y el tipo de día que buscas: Petrópolis, Ilha Grande, Búzios o algo a medida. Escríbenos a contact@befreetours.com.br o por WhatsApp al +55 21 97927-1637 y armamos el día con un presupuesto.",
      ctaLabel: "Planifica tu excursión",
      action: "quote",
    },
  },

  "pt-br": {
    seo: {
      title: "Bate e volta saindo do Rio de Janeiro | Be Free Tours",
      description:
        "Guia dos bate-voltas privativos saindo do Rio: Petrópolis imperial, Ilha Grande de lancha ou Búzios sob consulta. Quanto tempo leva, o que esperar e quando vale a pena.",
    },
    hero: {
      eyebrow: "PRIVATIVO · SAINDO DO RIO DE JANEIRO",
      title: "Bate e volta saindo do Rio de Janeiro",
      titleEmphasis: "Bate e volta",
      subtitle:
        "Serra imperial, ilha de águas claras ou as praias de Búzios: um dia fora do Rio, privativo e no ritmo do seu grupo. Aqui você vê quanto tempo leva cada opção, o que esperar e qual combina com a sua viagem.",
      primaryCta: { label: "Planejar seu passeio", action: "quote" },
      secondaryCta: { label: "Ver os destinos", action: "destinations" },
    },
    intro: {
      title: "Um bate-e-volta saindo do Rio é, na verdade, uma questão de que tipo de dia você quer.",
      kicker: "Por onde começar",
      paragraphs: [
        "Escolher um bate-volta saindo do Rio é, no fundo, escolher que tipo de dia você quer. Serra fresca e história imperial levam a Petrópolis; água clara e lancha privativa levam a Ilha Grande; praia com calma leva a Búzios.",
        "Antes de decidir, vale pensar em três coisas: quanto tempo de estrada você topa, o quanto o passeio depende do clima e se dá pra fazer em um dia só. Abaixo a gente detalha cada destino — todos privativos, com guia local que cuida da logística.",
      ],
    },
    moodMenu: {
      title: "Qual combina com a sua viagem?",
      items: [
        { destKey: "petropolis",  label: "Para história e serra", text: "Palácios imperiais, a Serra dos Órgãos e um dia mais fresco e tranquilo a poucas horas do Rio." },
        { destKey: "ilha-grande", label: "Para praia e lancha",   text: "Um dia de lancha privativa pela Costa Verde, passando por algumas das praias de água mais clara da ilha." },
        { destKey: "buzios",      label: "Para curtir praias",     text: "As praias da península e as ruas de pedra do centrinho, organizado sob consulta." },
      ],
    },
    comparison: {
      title: "Qual combina com a sua viagem?",
      heads: [
        { destKey: "petropolis", name: "Petrópolis" },
        { destKey: "ilha-grande", name: "Ilha Grande" },
        { destKey: "buzios", name: "Búzios" },
      ],
      rows: [
        { key: "bestFor", label: "Ideal para", cells: {
          "petropolis": "Para história e serra",
          "ilha-grande": "Para praia e lancha",
          "buzios": "Para curtir praias",
        } },
        { key: "theDay", label: "O dia", cells: {
          "petropolis": "História e uma subida cênica pela Serra dos Órgãos",
          "ilha-grande": "Uma lancha privativa às praias de águas calmas da ilha",
          "buzios": "As praias da península e a Rua das Pedras",
        } },
        { key: "season", label: "Temporada", cells: {
          "petropolis": "O ano todo — a mais estável das três",
          "ilha-grande": "Melhor nos meses quentes de águas calmas",
          "buzios": "Conforme a estação, sob consulta",
        } },
      ],
    },
    destinations: {
      petropolis: {
        name: "Petrópolis — a Cidade Imperial",
        blurb:
          "Subindo a Serra dos Órgãos você chega à antiga capital imperial de verão do Brasil, com o Palácio de Cristal, o Museu Imperial e um clima de montanha que deixa o dia mais leve. É a opção que menos depende do clima: funciona o ano todo e num ritmo tranquilo. Quanto tempo leva? Cerca de 8 horas, ida e volta no mesmo dia — não precisa dormir lá. Inclui veículo privativo, guia credenciado, os ingressos das atrações e água mineral; o almoço fica por conta própria.",
        ctaLabel: "Ver o passeio a Petrópolis",
      },
      "ilha-grande": {
        name: "Ilha Grande — Costa Verde de lancha privativa",
        blurb:
          "Um passeio privativo completo para Ilha Grande saindo do Rio, com transporte porta a porta, guia credenciado e uma lancha reservada para o seu grupo. A experiência padrão percorre praias abrigadas de águas calmas e rasas para banho e snorkeling; o equipamento de snorkeling e a água estão incluídos sem custo adicional. Uma opção premium acrescenta Lopes Mendes, uma das praias mais bonitas do Brasil, acessada de lancha até a Praia do Pouso e uma trilha pela mata de cerca de quarenta minutos com o seu guia. O almoço é opcional e pago à parte em um restaurante do roteiro; há churrasco a bordo sob consulta. O dia completo dura cerca de dez a doze horas. Todos os detalhes, o que está incluído e as perguntas frequentes estão na página do tour.",
        ctaLabel: "Ver o passeio a Ilha Grande",
      },
      buzios: {
        name: "Búzios — praias e ruas de pedra",
        blurb:
          "A península de Búzios reúne dezenas de praias, um centrinho pra caminhar e um ritmo de mar bem tranquilo num trecho de costa ao norte do Rio. Dá pra fazer em bate-volta, mas é mais puxado — muita gente prefere dormir uma noite. Como passeio privativo, é organizado sob consulta, no ritmo do seu grupo e conforme a temporada: conte o que você procura e a gente monta o dia com um orçamento.",
        ctaLabel: "Pedir orçamento de Búzios",
      },
    },
    whyPrivate: {
      title: "Por que ir privativo",
      items: [
        "Só o seu grupo — sem gente estranha nem saída compartilhada.",
        "Um motorista profissional ao volante e um guia credenciado com você o dia todo.",
        "Ritmo flexível: fica mais onde gosta e pula o que não interessa.",
        "Busca no hotel, Airbnb ou porto quando faz parte da rota; água mineral incluída.",
      ],
    },
    faqs: [
      {
        q: "Quanto tempo leva um bate-volta saindo do Rio?",
        a: "Conte com o dia inteiro. Para Petrópolis, sugerimos sair entre 08:00 e 10:30 para dar tempo de ver tudo, e leva cerca de 8 horas. Ilha Grande sai bem cedo (por volta de 05:30 às 07:30) e leva perto de 10 horas, por causa da estrada e do tempo de lancha. Búzios é organizado sob consulta.",
      },
      {
        q: "Vale a pena fazer Ilha Grande em um dia ou preciso dormir lá?",
        a: "Dá pra fazer em um dia como passeio privativo, com saída cedo, traslado e tempo de lancha. É um dia longo, mas evita hospedagem na ilha. Se você quer um ritmo mais devagar, dormir uma noite é uma opção — mas não é obrigatório.",
      },
      {
        q: "Petrópolis ou Ilha Grande: qual escolher?",
        a: "Petrópolis é mais tranquilo, cultural e independe do clima — bom o ano todo. Ilha Grande é mais aventureiro, focado em praia e lancha, e depende mais do mar e do tempo. Se é sua primeira vez e quer um dia sem sustos, Petrópolis; se quer água clara e barco, Ilha Grande.",
      },
      {
        q: "Dá pra fazer Búzios de bate-volta saindo do Rio?",
        a: "Dá, embora seja mais puxado num dia só. Como é organizado sob consulta, a gente ajusta a saída e o ritmo ao seu grupo. Chame pra montar o roteiro e receber um orçamento.",
      },
      {
        q: "O que está incluído no passeio?",
        a: "Cada bate-volta privativo inclui veículo e motorista, guia credenciado e água mineral, além da busca no hotel, Airbnb ou porto quando faz parte da rota. Em Petrópolis os ingressos das atrações também estão inclusos. O almoço fica por conta própria em todos.",
      },
      {
        q: "Precisa reservar com antecedência?",
        a: "Sim, recomendamos — Ilha Grande, em especial, tem poucas saídas de madrugada. Para planejar ou pedir um orçamento de Búzios, escreva para contact@befreetours.com.br ou pelo WhatsApp +55 21 97927-1637.",
      },
    ],
    faqTitle: "Perguntas frequentes",
    finalCta: {
      title: "Pronto pra sair do Rio por um dia?",
      text:
        "Conte suas datas, seu grupo e o tipo de dia que procura — Petrópolis, Ilha Grande, Búzios ou algo sob medida. Fale com a gente em contact@befreetours.com.br ou pelo WhatsApp +55 21 97927-1637 e a gente monta o dia com um orçamento.",
      ctaLabel: "Planejar seu passeio",
      action: "quote",
    },
  },
};

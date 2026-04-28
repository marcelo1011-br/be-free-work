

const HOMEPAGE_TESTIMONIAL_QUOTES = [
  {
    text: "Flavio's English is also excellent. Language was an unexpected challenge in Brazil where few speak English and everything — signs, maps, menus — are in Portuguese, even at the airport. Flavio's articulate English was a tremendous help in overcoming that barrier. A very heartfelt thank you to Flavio for our wonderful experience in Rio de Janeiro.",
    author: "Ellen N.",
    context: "Cruise passenger, February 2026",
    tour: "The Essential Rio",
    source: "Viator",
    rating: 5
  },
  {
    text: "We had already seen Sugarloaf the day before so Gabrielle changed the tour for us. Loved having this flexibility. Gabrielle spoke outstanding English and was very knowledgeable. She took us to sites that were very interesting that we knew nothing about in advance. Would highly recommend.",
    author: "Kayleen K.",
    context: "Group of friends, January 2026",
    tour: "The Essential Rio",
    source: "Viator",
    rating: 5
  },
  {
    text: "Izabelle was wonderful. By the end of our private tour, my husband and I felt like we had a new friend. She was kind, thorough, thoughtful, knowledgeable and patient. She took us to every place on our wish list and embellished it with some of her own ideas. By the end of a very rainy day, we felt amazingly satisfied and pampered. This is the tour for anyone wanting the complete tour of Rio in one day.",
    author: "Kathy W.",
    context: "Couple, January 2026",
    tour: "The Essential Rio",
    source: "Viator",
    rating: 5
  }
];

export const homeContent = {
  en: {
    hero: {
      title: "Private Tours & Local Experiences<span aria-hidden=\"true\"><br></span>in Rio de Janeiro",
      subtitle: "Rio de Janeiro's highest-rated private tour operator since 2013 — 800+ verified reviews, licensed local guides, and fully customizable itineraries for every travel style.",
      ctaPrimary: {
        text: "Explore Private Tours",
        link: "/en/private-tours/"
      },
      ctaSecondary: {
        text: "Discover Local Experiences",
        link: "/en/experiences/"
      },
      badges: [
        { icon: "star",    value: "4.9/5 on TripAdvisor, Viator & Civitatis", label: "800+ Verified Reviews" },
        { icon: "guide",   value: "Licensed Local Guides",  label: "English, Spanish, Portuguese & more" },
        { icon: "vehicle", value: "Private Vehicle",        label: "Door-to-Door Pickup Included" }
      ]
    },
    trustBar: {
      items: [
        { icon: "star",      text: "4.9 / 5" },
        { icon: "reviews",   text: "800+ Verified Reviews" },
        { icon: "platforms", text: "TripAdvisor · Viator · Civitatis" },
        { icon: "calendar",  text: "Operating Since 2013" }
      ]
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { title: "Choose Your Tour, Experience or Tell Us Your Vision", description: "Browse our private tours and local experiences — or contact us with your interests and we'll design a custom itinerary from scratch. Either way, every tour is private and fully adjustable." },
        { title: "We Handle Every Detail", description: "Tickets, transportation, guide assignment, pickup logistics — all confirmed before your tour day. Our team coordinates everything so you arrive ready to enjoy, not to organize." },
        { title: "Experience Rio, Privately", description: "Your certified local guide picks you up at your hotel, Airbnb, airport, or cruise port and takes you through Rio at your own pace. No crowds, no compromises." }
      ]
    },
    whyUs: {
      title: "Why Choose Be Free Tours",
      subtitle: "Experience the difference with Rio's most trusted private tour operator",
      reasons: [
        {
          icon: "calendar",
          title: "12+ Years of Expertise",
          description: "Be Free Tours has operated private tours in Rio de Janeiro since 2013 — over 12 years guiding more than 15,000 travelers. Founded by Marcelo Elias, our licensed Carioca guides speak English, Spanish, and Portuguese."
        },
        {
          icon: "customize",
          title: "Fully Customizable Experiences",
          description: "Every private tour and local experience is designed as a flexible starting point. Adjust stops, timing, pace, or language — or contact us to build a fully custom itinerary from scratch."
        },
        {
          icon: "guide",
          title: "Expert Local Guides",
          description: "Our guides are certified Rio-born locals who know this city as home — not as a tourist destination. They share the stories, shortcuts, and hidden spots that no guidebook covers, in English, Spanish, or Portuguese."
        },
        {
          icon: "travelers",
          title: "All-Inclusive Pricing",
          description: "Tour prices include private transportation, your certified guide, and all entrance tickets listed. Hotel pickup and drop-off anywhere in Rio — hotels, Airbnbs, airports, and the cruise port — is always included. No hidden fees. What you see is what you pay."
        },
        {
          icon: "star",
          title: "Top-Rated on TripAdvisor, Viator & Civitatis",
          description: "4.9 out of 5 average rating from more than 800 verified reviews across TripAdvisor, Viator, and Civitatis. Consistently ranked among Rio's top private tour operators — not by us, but by the travelers who've been there."
        },
        {
          icon: "payment",
          title: "Book Now, Pay 72h Before",
          description: "Reserve your tour today with no payment required. You only pay 72 hours before your tour date. Need to cancel? Free cancellation up to 72 hours before your tour — no questions asked, full refund guaranteed."
        }
      ]
    },
    testimonialsSection: {
      title: "What Travelers Say",
      subtitle: "Verified reviews from recent private tours across Viator, TripAdvisor, and Civitatis",
      originalLanguageNote: null,
      quotes: HOMEPAGE_TESTIMONIAL_QUOTES,
      aggregateLine: "4.9 out of 5 from 800+ verified reviews across TripAdvisor, Viator, and Civitatis"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our private tours in Rio de Janeiro",
      ctaText: "Still have questions? We're happy to help!",
      ctaButton: "Contact Us",
      questions: [
        {
          id: 1,
          question: "How much does a private tour in Rio cost?",
          answer: "Private city tours in Rio start at USD 365 for a group of 1, with most full-day tours ranging from USD 440 to USD 610 depending on the itinerary and group size. Day trips to destinations like Petrópolis, Búzios, and Ilha Grande start from USD 390. All private-tour prices include transportation, a certified local guide, and entrance fees to the listed attractions. Walking-based local experiences are priced separately under our Experiences line."
        },
        {
          id: 2,
          question: "What's included in the tour price?",
          answer: "All our tours include private transportation with a professional driver, a certified local guide fluent in English, Spanish, and Portuguese, entrance fees to attractions, pickup and drop-off anywhere in Rio de Janeiro (including hotels, Airbnbs, airports, and the cruise port), and complimentary bottled water. Meals and gratuities are not included unless specified in the tour description."
        },
        {
          id: 3,
          question: "Can I customize my tour itinerary?",
          answer: "Absolutely! That's what makes our private tours special. We can adjust the itinerary, change the pace, add or remove stops, and tailor the experience to your specific interests. Just let us know your preferences when booking, and we'll create the perfect Rio experience for you."
        },
        {
          id: 4,
          question: "When do I need to pay for my tour?",
          answer: "You can reserve your tour with zero payment upfront. Payment is only required 72 hours before your scheduled tour date. This gives you flexibility to plan your trip without immediate financial commitment. We accept all major credit cards — Visa, Mastercard, and others — through our secure payment link, as well as PayPal. American Express is not accepted."
        },
        {
          id: 5,
          question: "What's your cancellation policy?",
          answer: "We offer free cancellation up to 72 hours before your tour start time for a full refund. Cancellations made within 72 hours are non-refundable. Weather-related cancellations decided by our team are fully refundable or can be rescheduled at no extra cost. Exception: tours that include the Roxy Dinner Show have non-refundable show tickets regardless of notice given — this is stated clearly at booking."
        },
        {
          id: 6,
          question: "In what languages are the tours conducted?",
          answer: "Our tours are conducted in English, Portuguese, and Spanish. For other languages, please contact us when booking and we'll do our best to match you with the right guide based on availability."
        },
        {
          id: 7,
          question: "Do you offer hotel pickup?",
          answer: "Yes — complimentary pickup and drop-off is included in all our private tours anywhere in Rio de Janeiro, including all neighborhoods, all three airports (GIG, SDU, and RRJ), and the cruise port at Pier Mauá. When booking, provide your exact address and we'll confirm your pickup time, typically 15 to 30 minutes before the tour start depending on your location."
        },
        {
          id: 8,
          question: "What should I wear for tours in Rio?",
          answer: "Rio has a tropical climate, so wear light, comfortable clothing and walking shoes on hot days. Bring sunscreen, sunglasses, and a hat for sun protection. If visiting in winter (June-August), bring a light jacket as temperatures can be cooler, especially in Petrópolis."
        },
        {
          id: 9,
          question: "Is Rio safe for solo female travelers?",
          answer: "Rio welcomes thousands of solo female travelers every year. Well-known neighborhoods such as Copacabana, Ipanema, and Leblon are generally safe during the day when basic, common-sense precautions are followed — staying aware of your surroundings, avoiding visible valuables, and favoring well-lit, lively areas in the evening. Choosing a private tour adds an extra layer of comfort and peace of mind: door-to-door transportation and an experienced local guide who understands the city’s rhythms and nuances. Many solo female travelers tell us they felt relaxed and confident exploring Rio with our team."
        },
        {
          id: 10,
          question: "Is Rio de Janeiro LGBTQ+ friendly?",
          answer: "Rio de Janeiro is widely considered an LGBTQ+ friendly city, particularly in the South Zone neighborhoods of Ipanema, Leblon, and Copacabana. Same-sex marriage is legal in Brazil, and diversity is generally well accepted in everyday life and in tourist settings. As in any large city, awareness and common-sense precautions are always important, but most LGBTQ+ travelers feel comfortable exploring Rio openly. Our private tours offer a discreet, respectful, and welcoming environment, guided by locals who understand the city and adapt each experience to the traveler — without assumptions or labels."
        },
        {
          id: 11,
          question: "Are your private tours suitable for families with children?",
          answer: "Absolutely. Our private tours are well-suited for families traveling with children of any age. The pace, stops, and activities adapt to your group — more time at open spaces, interactive explanations for younger travelers, and flexibility to adjust on the fly. Children under 5 typically do not require paid attraction tickets; your guide will advise based on your specific itinerary."
        },
        {
          id: 12,
          question: "Do you offer accessible tours for travelers with reduced mobility?",
          answer: "Yes. We can design tours around reduced mobility, wheelchair users, and travelers who prefer a slower pace. Rio presents genuine accessibility challenges at some landmarks — cobblestone streets in Santa Teresa, steep terrain at certain viewpoints — but with advance notice we select appropriate sites, arrange suitable vehicles, and adapt the itinerary to ensure comfort and enjoyment throughout the day."
        },
        {
          id: 13,
          question: "How many people can join a private tour?",
          answer: "Our private tours accommodate groups of 1 to 12 travelers. Vehicle size scales with your group: sedans and SUVs for smaller parties, executive vans for larger ones. For groups above 12 or corporate events, contact us directly — we can arrange multiple guides and vehicles while keeping the experience coordinated and personal."
        },
        {
          id: 14,
          question: "What payment methods do you accept?",
          answer: "We accept all major credit and debit cards. Payment is only required 72 hours before your tour — you can reserve your date today with no upfront charge. For last-minute bookings made within 72 hours, full payment is required at the time of reservation."
        },
        {
          id: 15,
          question: "Can I book a private tour for the same day or the next day?",
          answer: "Yes, subject to guide and vehicle availability. We do our best to accommodate last-minute requests — contact us via WhatsApp for the fastest response. For peak season (December through March) and specialty tours such as Ilha Grande by speedboat, we recommend booking at least 1 to 2 weeks in advance to secure your preferred date."
        },
        {
          id: 16,
          question: "Is Be Free Tours a licensed tour operator in Rio de Janeiro?",
          answer: "Yes. Be Free Tours has operated as a licensed private tour company in Rio de Janeiro since 2013. All our guides hold official Brazilian tourism certification (Cadastur) and are native Rio locals fluent in English, Spanish, and Portuguese."
        },
        {
          id: 17,
          question: "What is the difference between a private tour and a group tour in Rio de Janeiro?",
          answer: "A private tour is exclusively for you and your travel companions — no strangers join your group. You get a dedicated licensed guide, a private vehicle with door-to-door hotel pickup, and a fully flexible itinerary. Group tours share a bus with up to 40 strangers and follow a fixed schedule."
        },
        {
          id: 18,
          question: "Which private tour company in Rio de Janeiro has the best reviews?",
          answer: "Be Free Tours holds a 4.9 out of 5 rating from over 800 verified reviews across TripAdvisor, Viator, and Civitatis — consistently ranked among the top-rated private tour operators in Rio de Janeiro since 2013."
        }
      ]
    },
    paymentPolicy: {
      title: "Payment Policy",
      items: [
        { label: "How it works:", text: "After you click Book Now and submit your booking request, we'll review the details and send a secure payment link by email." },
        { label: "Payment deadline:", text: "Full payment must be completed at least 72 hours (3 days) before the tour date." },
        { label: "Last-minute bookings:", text: "Reservations made within 72 hours of the tour require immediate payment to secure availability. The payment link will be sent as soon as possible." },
        { label: "Accepted methods:", text: "Credit and debit cards, processed securely via Stripe." },
        { label: "Important:", text: "Bookings that remain unpaid will be automatically released 72 hours before the tour. Reminder notifications are sent by email and WhatsApp." }
      ]
    },
    cancellationPolicy: {
      title: "Cancellation Policy",
      items: [
        { label: "Free cancellation:", text: "Cancel free of charge up to 72 hours (3 days) before your tour start time." },
        { label: "Changes or rescheduling:", text: "To cancel, modify, or reschedule your tour, please contact us by email or WhatsApp as soon as possible. We'll do our best to accommodate adjustments whenever feasible." },
        { label: "Late cancellations:", text: "Tours canceled less than 72 hours before the start date are non-refundable." },
        { label: "Weather Conditions:", text: "If severe weather conditions make the tour unsafe or unviable, we'll offer a full refund or the option to reschedule at no additional cost." }
      ]
    },
    ctaFinal: {
      title: "Ready to Discover Rio?",
      subtitle: "Free cancellation up to 72 hours before your tour. No upfront payment. 4.9/5 from 800+ verified reviews.",
      ctaPrimary: {
        text: "Reserve Now — Pay Nothing Until 72h Before",
        link: "/en/private-tours/"
      },
      ctaSecondary: {
        text: "Talk to Us on WhatsApp",
        link: "https://wa.me/5521979271637?text=Hi%20Be%20Free%20Tours%2C%20I%27d%20like%20to%20know%20more%20about%20your%20private%20tours%20in%20Rio.",
        newTab: true
      },
      trustBadges: [
        { icon: "calendar", text: "12+ Years Since 2013" },
        { icon: "travelers", text: "15,000+ Travelers Guided" },
        { icon: "star", text: "Top-Rated" }
      ]
    }
  },

  es: {
    hero: {
      title: "Tours Privados y Experiencias Locales<span aria-hidden=\"true\"><br></span>en Río de Janeiro",
      subtitle: "Operadora de tours privados en Río de Janeiro desde 2013 — guías certificados, traslado al hotel y rutas completamente personalizables para cada estilo de viaje.",
      ctaPrimary: {
        text: "Explorar Tours Privados",
        link: "/es/tours-privados/"
      },
      ctaSecondary: {
        text: "Descubrir Experiencias Locales",
        link: "/es/experiencias/"
      },
      badges: [
        { icon: "star",    value: "4,9/5 en TripAdvisor, Viator y Civitatis", label: "Más de 800 reseñas verificadas" },
        { icon: "guide",   value: "Guías Locales Certificados",  label: "Inglés, español, portugués y más" },
        { icon: "vehicle", value: "Vehículo Privado",            label: "Recogida puerta a puerta incluida" }
      ]
    },
    trustBar: {
      items: [
        { icon: "star",      text: "4,9 / 5" },
        { icon: "reviews",   text: "Más de 800 reseñas verificadas" },
        { icon: "platforms", text: "TripAdvisor · Viator · Civitatis" },
        { icon: "calendar",  text: "Operando desde 2013" }
      ]
    },
    howItWorks: {
      title: "Cómo Funciona",
      steps: [
        { title: "Elige Tu Tour, Experiencia o Comparte Tu Visión", description: "Explora nuestros tours privados y experiencias locales — o contáctanos con tus intereses y diseñaremos un itinerario personalizado desde cero. De cualquier manera, cada tour es privado y totalmente flexible." },
        { title: "Nos Encargamos de Todo", description: "Entradas, transporte, asignación de guía, logística de recogida — todo confirmado antes del día del tour. Nuestro equipo coordina cada detalle para que llegues listo para disfrutar, no para organizar." },
        { title: "Vive Río en Privado", description: "Tu guía local certificado te recoge en tu hotel, Airbnb, aeropuerto o terminal de cruceros y te lleva por Río a tu propio ritmo. Sin grupos, sin compromisos." }
      ]
    },
    whyUs: {
      title: "Por Qué Elegir Be Free Tours",
      subtitle: "Experimenta la diferencia con el operador de tours privados más confiable de Río",
      reasons: [
        {
          icon: "calendar",
          title: "Más de 12 Años de Experiencia",
          description: "Be Free Tours opera tours privados en Río de Janeiro desde 2013 — más de 12 años guiando a más de 15.000 viajeros. Fundada por Marcelo Elias, nuestros guías cariocas certificados hablan inglés, español y portugués."
        },
        {
          icon: "customize",
          title: "Experiencias Totalmente Personalizables",
          description: "Cada tour privado y experiencia local es un punto de partida flexible. Ajusta paradas, tiempos, ritmo o idioma — o contáctanos para diseñar un itinerario completamente personalizado."
        },
        {
          icon: "guide",
          title: "Guías Locales Expertos",
          description: "Nuestros guías son locales certificados nacidos en Río que conocen esta ciudad como su hogar — no como destino turístico. Comparten historias, atajos y rincones escondidos que ninguna guía cubre, en inglés, español o portugués."
        },
        {
          icon: "travelers",
          title: "Precios Todo Incluido",
          description: "Los precios incluyen transporte privado, tu guía certificado y todas las entradas indicadas. La recogida y regreso en cualquier lugar de Río — hoteles, Airbnbs, aeropuertos y terminal de cruceros — siempre está incluida. Sin costos ocultos. Lo que ves es lo que pagas."
        },
        {
          icon: "star",
          title: "Mejor Calificado en TripAdvisor, Viator y Civitatis",
          description: "Calificación promedio de 4,9 sobre 5 con más de 800 reseñas verificadas en TripAdvisor, Viator y Civitatis. Reconocidos como uno de los mejores operadores privados de Río — no por nosotros, sino por los viajeros que estuvieron allí."
        },
        {
          icon: "payment",
          title: "Reserva Ahora, Paga 72h Antes",
          description: "Reserva tu tour hoy sin ningún pago inicial. Solo pagas 72 horas antes de la fecha del tour. ¿Necesitas cancelar? Cancelación gratuita hasta 72 horas antes — sin preguntas, reembolso completo garantizado."
        }
      ]
    },
    testimonialsSection: {
      title: "Lo que dicen los viajeros",
      subtitle: "Reseñas verificadas de tours privados recientes en Viator, TripAdvisor y Civitatis",
      originalLanguageNote: "Reseña original en inglés",
      quotes: HOMEPAGE_TESTIMONIAL_QUOTES,
      aggregateLine: "4,9 de 5 con más de 800 reseñas verificadas en TripAdvisor, Viator y Civitatis"
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre nuestros tours privados en Río de Janeiro",
      ctaText: "¿Tienes más preguntas? ¡Estaremos encantados de ayudarte!",
      ctaButton: "Contáctanos",
      questions: [
        {
          id: 1,
          question: "¿Cuánto cuesta un tour privado en Río de Janeiro?",
          answer: "Los tours privados por la ciudad de Río comienzan desde USD 365 para un grupo de 1 persona, con la mayoría de los tours de día completo entre USD 440 y USD 610 según el itinerario y el tamaño del grupo. Las excursiones de día a Petrópolis, Búzios e Ilha Grande comienzan desde USD 390. Todos los precios de tours privados incluyen transporte, guía local certificado y entradas a las atracciones indicadas. Las experiencias locales a pie se cotizan por separado dentro de nuestra línea de Experiencias."
        },
        {
          id: 2,
          question: "¿Qué incluye el precio del tour?",
          answer: "Todos nuestros tours incluyen transporte privado con conductor profesional, guía local certificado con fluidez en inglés, español y portugués, entradas a las atracciones, recogida y regreso en cualquier lugar de Río (hoteles, Airbnbs, aeropuertos y terminal de cruceros) y agua embotellada de cortesía. Las comidas y propinas no están incluidas a menos que se especifique en la descripción del tour."
        },
        {
          id: 3,
          question: "¿Puedo personalizar mi itinerario?",
          answer: "¡Por supuesto! Eso es lo que hace especiales nuestros tours privados. Podemos ajustar el itinerario, cambiar el ritmo, añadir o quitar paradas, y adaptar la experiencia a tus intereses específicos. Solo déjanos saber tus preferencias al reservar, y crearemos la experiencia perfecta en Río para ti."
        },
        {
          id: 4,
          question: "¿Cuándo necesito pagar por mi tour?",
          answer: "Puedes reservar tu tour sin pago inicial. El pago solo se requiere 72 horas antes de la fecha programada. Esto te da flexibilidad para planificar tu viaje sin compromiso financiero inmediato. Aceptamos las principales tarjetas de crédito — Visa, Mastercard y otras — a través de nuestro enlace de pago seguro, así como PayPal. No aceptamos American Express."
        },
        {
          id: 5,
          question: "¿Cuál es su política de cancelación?",
          answer: "Ofrecemos cancelación gratuita hasta 72 horas antes del inicio del tour para reembolso completo. Las cancelaciones dentro de las 72 horas no son reembolsables. Las cancelaciones por clima decididas por nuestro equipo son totalmente reembolsables o pueden reprogramarse sin costo adicional. Excepción: los tours que incluyen el Show Cena Roxy tienen entradas no reembolsables independientemente del aviso dado — esto se indica claramente al reservar."
        },
        {
          id: 6,
          question: "¿En qué idiomas se realizan los tours?",
          answer: "Nuestros tours se realizan en inglés, portugués y español. Para otros idiomas, contáctanos al reservar y haremos lo posible por asignarte el guía más adecuado según disponibilidad."
        },
        {
          id: 7,
          question: "¿Ofrecen recogida en el hotel?",
          answer: "Sí — la recogida y regreso de cortesía está incluida en todos nuestros tours privados en cualquier lugar de Río, incluyendo todos los barrios, los tres aeropuertos (GIG, SDU y RRJ) y la terminal de cruceros Pier Mauá. Al reservar, indica tu dirección exacta y confirmaremos tu horario de recogida, generalmente entre 15 y 30 minutos antes del inicio del tour según tu ubicación."
        },
        {
          id: 8,
          question: "¿Qué debo usar para los tours en Río?",
          answer: "Río tiene un clima tropical, así que usa ropa ligera y cómoda y zapatos para caminar en días calurosos. Trae protector solar, gafas de sol y sombrero para protección del sol. Si visitas en invierno (junio-agosto), trae una chaqueta ligera ya que las temperaturas pueden ser más frescas, especialmente en Petrópolis."
        },
        {
          id: 9,
          question: "¿Río es un destino seguro para mujeres que viajan solas?",
          answer: "Río recibe a miles de mujeres que viajan solas cada año. Zonas turísticas como Copacabana, Ipanema, Leblon y Santa Teresa suelen ser seguras durante el día, especialmente cuando se siguen precauciones básicas: estar atenta al entorno, evitar mostrar objetos de valor y moverse por áreas bien iluminadas y concurridas por la noche. Nuestros tours privados ofrecen un nivel adicional de comodidad y tranquilidad, con transporte puerta a puerta y el acompañamiento de un guía local con amplio conocimiento de la ciudad. Muchas viajeras que han recorrido Río con nuestro equipo destacan haberse sentido seguras y cómodas a lo largo de toda la experiencia."
        },
        {
          id: 10,
          question: "¿Río de Janeiro es un destino LGBTQ+ friendly?",
          answer: "Río de Janeiro es ampliamente considerada una ciudad LGBTQ+ friendly, especialmente en los barrios de la Zona Sur como Ipanema, Leblon y Copacabana. El matrimonio entre personas del mismo sexo es legal en Brasil, y la diversidad suele ser bien aceptada en la vida cotidiana y en entornos turísticos. Como en cualquier gran ciudad, la atención y el sentido común siempre son importantes, pero la mayoría de los viajeros LGBTQ+ se sienten cómodos explorando Río con naturalidad. Nuestros tours privados ofrecen un entorno discreto, respetuoso y acogedor, guiado por profesionales locales que conocen la ciudad y adaptan cada experiencia al viajero — sin etiquetas ni suposiciones."
        },
        {
          id: 11,
          question: "¿Sus tours privados son aptos para familias con niños?",
          answer: "Por supuesto. Nuestros tours privados son ideales para familias con niños de cualquier edad. El ritmo, las paradas y las actividades se adaptan a tu grupo — más tiempo en espacios abiertos, explicaciones interactivas para los más jóvenes y flexibilidad para ajustar sobre la marcha. Los niños menores de 5 años generalmente no requieren entradas pagadas; tu guía te asesorará según tu itinerario específico."
        },
        {
          id: 12,
          question: "¿Ofrecen tours accesibles para viajeros con movilidad reducida?",
          answer: "Sí. Podemos diseñar tours para personas con movilidad reducida, usuarios de silla de ruedas y viajeros que prefieren un ritmo más tranquilo. Río presenta desafíos de accesibilidad reales en algunos puntos — calles adoquinadas en Santa Teresa, terreno empinado en ciertos miradores — pero con aviso previo seleccionamos sitios adecuados, organizamos vehículos apropiados y adaptamos el itinerario para garantizar comodidad y disfrute durante todo el día."
        },
        {
          id: 13,
          question: "¿Cuántas personas pueden unirse a un tour privado?",
          answer: "Nuestros tours privados admiten grupos de 1 a 12 viajeros. El tamaño del vehículo se adapta a tu grupo: sedanes y SUVs para grupos pequeños, furgonetas ejecutivas para grupos más grandes. Para grupos de más de 12 personas o eventos corporativos, contáctanos directamente — podemos organizar varios guías y vehículos manteniendo la experiencia coordinada y personalizada."
        },
        {
          id: 14,
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos todas las tarjetas de crédito y débito principales. El pago solo se requiere 72 horas antes de tu tour — puedes reservar tu fecha hoy sin cargo inicial. Para reservas de último momento realizadas dentro de las 72 horas, se requiere el pago completo al momento de la reserva."
        },
        {
          id: 15,
          question: "¿Puedo reservar un tour privado para el mismo día o el día siguiente?",
          answer: "Sí, sujeto a disponibilidad de guía y vehículo. Hacemos todo lo posible para atender solicitudes de último momento — contáctanos por WhatsApp para una respuesta más rápida. Para la temporada alta (diciembre a marzo) y tours especiales como Ilha Grande en lancha privada, recomendamos reservar con al menos 1 a 2 semanas de anticipación para asegurar tu fecha preferida."
        },
        {
          id: 16,
          question: "¿Be Free Tours es una operadora de tours privados certificada en Río de Janeiro?",
          answer: "Sí. Be Free Tours opera como empresa de tours privados certificada en Río de Janeiro desde 2013. Todos nuestros guías tienen certificación oficial de turismo brasileño (Cadastur) y son locales cariocas con fluidez en inglés, español y portugués."
        },
        {
          id: 17,
          question: "¿Cuál es la diferencia entre un tour privado y un tour en grupo en Río de Janeiro?",
          answer: "Un tour privado es exclusivo para ti y tus acompañantes — ningún desconocido se une al grupo. Tendrás un guía certificado dedicado, vehículo privado con traslado puerta a puerta y un itinerario completamente flexible. Los tours en grupo comparten un autobús con hasta 40 personas y siguen un horario fijo."
        },
        {
          id: 18,
          question: "¿Qué empresa de tours privados en Río de Janeiro tiene las mejores reseñas?",
          answer: "Be Free Tours tiene una calificación de 4,9 sobre 5 basada en más de 800 reseñas verificadas en TripAdvisor, Viator y Civitatis — constantemente ubicada entre las operadoras de tours privados mejor valoradas de Río de Janeiro desde 2013."
        }
      ]
    },
    paymentPolicy: {
      title: "Política de pago",
      items: [
        { label: "Cómo funciona:", text: "Después de hacer clic en Reservar ahora y enviar tu solicitud de reserva, revisaremos los detalles y te enviaremos un enlace de pago seguro por correo electrónico." },
        { label: "Plazo de pago:", text: "El pago total debe completarse al menos 72 horas (3 días) antes de la fecha del tour." },
        { label: "Reservas de último minuto:", text: "Las reservas realizadas dentro de las 72 horas previas al tour requieren pago inmediato para asegurar disponibilidad. El enlace de pago se enviará lo antes posible." },
        { label: "Métodos aceptados:", text: "Tarjetas de crédito y débito, procesadas de forma segura a través de Stripe." },
        { label: "Importante:", text: "Las reservas que permanezcan sin pagar se liberarán automáticamente 72 horas antes del tour. Las notificaciones de recordatorio se envían por correo electrónico y WhatsApp." }
      ]
    },
    cancellationPolicy: {
      title: "Política de cancelación",
      items: [
        { label: "Cancelación gratuita:", text: "Cancela sin costo hasta 72 horas (3 días) antes de la hora de inicio de tu tour." },
        { label: "Cambios o reprogramación:", text: "Para cancelar, modificar o reprogramar tu tour, contáctanos por correo electrónico o WhatsApp lo antes posible. Haremos todo lo posible por adaptarnos a los cambios siempre que sea viable." },
        { label: "Cancelaciones tardías:", text: "Los tours cancelados con menos de 72 horas antes de la fecha de inicio no son reembolsables." },
        { label: "Condiciones climáticas:", text: "Si las condiciones climáticas severas hacen que el tour sea inseguro o inviable, ofreceremos un reembolso total o la opción de reprogramar sin costo adicional." }
      ]
    },
    ctaFinal: {
      title: "¿Listo para Descubrir Río?",
      subtitle: "Cancelación gratuita hasta 72 horas antes de tu tour. Sin pago por adelantado. 4,9/5 con más de 800 reseñas verificadas.",
      ctaPrimary: {
        text: "Reservar Ahora — Sin Pagar Hasta 72h Antes",
        link: "/es/tours-privados/"
      },
      ctaSecondary: {
        text: "Habla con Nosotros por WhatsApp",
        link: "https://wa.me/5521979271637?text=Hola%20Be%20Free%20Tours%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20tours%20privados%20en%20R%C3%ADo.",
        newTab: true
      },
      trustBadges: [
        { icon: "calendar", text: "Más de 12 Años Desde 2013" },
        { icon: "travelers", text: "Más de 15.000 Viajeros Guiados" },
        { icon: "star", text: "Mejor Calificado" }
      ]
    }
  },
  
  'pt-br': {
    hero: {
      title: "Passeios Privados e Experiências Locais<span aria-hidden=\"true\"><br></span>no Rio de Janeiro",
      subtitle: "Operadora de passeios privados no Rio de Janeiro desde 2013 — guias certificados, busca no hotel e roteiros completamente personalizáveis para cada estilo de viagem.",
      ctaPrimary: {
        text: "Explorar Passeios Privados",
        link: "/pt-br/passeios-privados/"
      },
      ctaSecondary: {
        text: "Descobrir Experiências Locais",
        link: "/pt-br/experiencias/"
      },
      badges: [
        { icon: "star",    value: "4,9/5 no TripAdvisor, Viator e Civitatis", label: "800+ avaliações verificadas" },
        { icon: "guide",   value: "Guias Locais Certificados",    label: "Inglês, espanhol, português e mais" },
        { icon: "vehicle", value: "Veículo Privado",              label: "Busca porta a porta incluída" }
      ]
    },
    trustBar: {
      items: [
        { icon: "star",      text: "4,9 / 5" },
        { icon: "reviews",   text: "Mais de 800 avaliações verificadas" },
        { icon: "platforms", text: "TripAdvisor · Viator · Civitatis" },
        { icon: "calendar",  text: "Operando desde 2013" }
      ]
    },
    howItWorks: {
      title: "Como Funciona",
      steps: [
        { title: "Escolha Seu Passeio, Experiência ou Nos Conte Sua Visão", description: "Explore nossos passeios privados e experiências locais — ou entre em contato com seus interesses e criamos um itinerário personalizado do zero. De qualquer forma, todos os passeios são privativos e totalmente flexíveis." },
        { title: "Cuidamos de Tudo", description: "Ingressos, transporte, guia, logística de busca — tudo confirmado antes do dia do passeio. Nossa equipe coordena cada detalhe para você chegar pronto para aproveitar, não para organizar." },
        { title: "Viva o Rio em Privado", description: "Seu guia local certificado te busca no hotel, Airbnb, aeroporto ou terminal de cruzeiros e te leva pelo Rio no seu ritmo. Sem grupos, sem compromissos." }
      ]
    },
    whyUs: {
      title: "Por Que Escolher a Be Free Tours",
      subtitle: "Experimente a diferença com a operadora de passeios privados mais confiável do Rio",
      reasons: [
        {
          icon: "calendar",
          title: "Mais de 12 Anos de Experiência",
          description: "A Be Free Tours opera passeios privados no Rio de Janeiro desde 2013 — mais de 12 anos guiando mais de 15.000 viajantes. Fundada por Marcelo Elias, nossos guias cariocas certificados falam inglês, espanhol e português."
        },
        {
          icon: "customize",
          title: "Experiências Totalmente Personalizáveis",
          description: "Cada passeio privado e experiência local é um ponto de partida flexível. Ajuste paradas, horários, ritmo ou idioma — ou fale conosco para criar um roteiro totalmente personalizado."
        },
        {
          icon: "guide",
          title: "Guias Locais Especializados",
          description: "Nossos guias são cariocas certificados que conhecem esta cidade como lar — não como destino turístico. Compartilham histórias, atalhos e lugares escondidos que nenhum guia de viagem cobre, em inglês, espanhol ou português."
        },
        {
          icon: "travelers",
          title: "Preços Tudo Incluído",
          description: "Os preços incluem transporte privado, seu guia certificado e todos os ingressos listados. A busca e retorno em qualquer lugar do Rio — hotéis, Airbnbs, aeroportos e terminal de cruzeiros — está sempre incluída. Sem taxas ocultas. O que você vê é o que você paga."
        },
        {
          icon: "star",
          title: "Melhor Avaliado no TripAdvisor, Viator e Civitatis",
          description: "Média de 4,9 de 5 com mais de 800 avaliações verificadas no TripAdvisor, Viator e Civitatis. Consistentemente entre os melhores operadores privativos do Rio — não por nós, mas pelos viajantes que estiveram lá."
        },
        {
          icon: "payment",
          title: "Reserve Agora, Pague 72h Antes",
          description: "Reserve seu passeio hoje sem nenhum pagamento inicial. Você só paga 72 horas antes da data do passeio. Precisa cancelar? Cancelamento gratuito até 72 horas antes — sem perguntas, reembolso total garantido."
        }
      ]
    },
    testimonialsSection: {
      title: "O que dizem os viajantes",
      subtitle: "Avaliações verificadas de tours privados recentes no Viator, TripAdvisor e Civitatis",
      originalLanguageNote: "Avaliação original em inglês",
      quotes: HOMEPAGE_TESTIMONIAL_QUOTES,
      aggregateLine: "4,9 de 5 com mais de 800 avaliações verificadas no TripAdvisor, Viator e Civitatis"
    },
    faq: {
      title: "Perguntas Frequentes",
      subtitle: "Tudo o que você precisa saber sobre nossos passeios privados no Rio de Janeiro",
      ctaText: "Ainda tem dúvidas? Ficaremos felizes em ajudar!",
      ctaButton: "Fale Conosco",
      questions: [
        {
          id: 1,
          question: "Quanto custa um passeio privado no Rio de Janeiro?",
          answer: "Os passeios privativos pela cidade começam a partir de USD 365 para um grupo de 1 pessoa, com a maioria dos passeios de dia inteiro entre USD 440 e USD 610 dependendo do roteiro e do tamanho do grupo. Os bate-voltas para Petrópolis, Búzios e Ilha Grande começam a partir de USD 390. Todos os preços dos passeios privativos incluem transporte, guia local certificado e ingressos para as atrações listadas. As experiências locais a pé são cobradas separadamente dentro da linha de Experiências."
        },
        {
          id: 2,
          question: "O que está incluído no preço do passeio?",
          answer: "Todos os nossos passeios incluem transporte privado com motorista profissional, guia local certificado fluente em inglês, espanhol e português, ingressos para as atrações, busca e retorno em qualquer lugar do Rio de Janeiro (hotéis, Airbnbs, aeroportos e terminal de cruzeiros), e água mineral de cortesia. Refeições e gorjetas não estão incluídas a menos que especificado na descrição do passeio."
        },
        {
          id: 3,
          question: "Posso personalizar meu itinerário?",
          answer: "Com certeza! É isso que torna nossos passeios privados especiais. Podemos ajustar o itinerário, mudar o ritmo, adicionar ou remover paradas, e adaptar a experiência aos seus interesses específicos. Basta nos informar suas preferências ao reservar, e criaremos a experiência perfeita no Rio para você."
        },
        {
          id: 4,
          question: "Quando preciso pagar pelo meu passeio?",
          answer: "Você pode reservar seu passeio sem pagamento inicial. O pagamento é exigido apenas 72 horas antes da data programada do passeio. Isso oferece flexibilidade para planejar sua viagem sem compromisso financeiro imediato. Aceitamos as principais bandeiras de cartão de crédito — Visa, Mastercard e outras — através do nosso link de pagamento seguro, além de PayPal. American Express não é aceito."
        },
        {
          id: 5,
          question: "Qual é a política de cancelamento?",
          answer: "Oferecemos cancelamento gratuito até 72 horas antes do início do passeio para reembolso total. Cancelamentos feitos dentro de 72 horas não são reembolsáveis. Cancelamentos por motivo climático decididos pela nossa equipe são totalmente reembolsáveis ou podem ser reagendados sem custo adicional. Exceção: passeios que incluem o Show Jantar Roxy possuem ingressos não reembolsáveis independentemente do aviso — isso é informado claramente no momento da reserva."
        },
        {
          id: 6,
          question: "Em quais idiomas os passeios são realizados?",
          answer: "Nossos passeios são realizados em inglês, português e espanhol. Para outros idiomas, entre em contato ao reservar e faremos o possível para combinar você com o guia mais adequado conforme disponibilidade."
        },
        {
          id: 7,
          question: "Vocês oferecem busca no hotel?",
          answer: "Sim — busca e retorno gratuitos estão incluídos em todos os nossos passeios privativos em qualquer lugar do Rio de Janeiro, incluindo todos os bairros, os três aeroportos (GIG, SDU e RRJ) e o terminal de cruzeiros Pier Mauá. Ao reservar, informe seu endereço exato e confirmaremos seu horário de busca, normalmente entre 15 e 30 minutos antes do início do passeio conforme sua localização."
        },
        {
          id: 8,
          question: "O que devo vestir para os passeios no Rio?",
          answer: "O Rio tem clima tropical, então use roupas leves e confortáveis e sapatos para caminhada nos dias quentes. Traga protetor solar, óculos de sol e chapéu para proteção solar. Se visitar no inverno (junho-agosto), traga um casaco leve pois as temperaturas podem ser mais frescas, especialmente em Petrópolis."
        },
        {
          id: 9,
          question: "O Rio é seguro para mulheres que viajam sozinhas?",
          answer: "O Rio recebe milhares de mulheres viajando sozinhas todos os anos. Áreas turísticas como Copacabana, Ipanema, Leblon e Santa Teresa costumam ser seguras durante o dia, especialmente quando se adotam cuidados básicos: atenção ao entorno, evitar expor objetos de valor e priorizar locais movimentados e bem iluminados à noite. Nossos tours privados acrescentam uma camada extra de conforto e tranquilidade, com transporte porta a porta e o acompanhamento de um guia local experiente, que conhece a cidade em profundidade. Muitas viajantes que exploraram o Rio conosco relatam ter se sentido seguras e à vontade durante toda a experiência."
        },
        {
          id: 10,
          question: "O Rio de Janeiro é um destino LGBTQ+ friendly?",
          answer: "O Rio de Janeiro é amplamente considerado uma cidade LGBTQ+ friendly, especialmente nos bairros da Zona Sul, como Ipanema, Leblon e Copacabana. O casamento entre pessoas do mesmo sexo é legal no Brasil, e a diversidade costuma ser bem aceita no dia a dia e em contextos turísticos. Como em qualquer grande cidade, atenção e bom senso são sempre importantes, mas a maioria dos viajantes LGBTQ+ se sente confortável explorando o Rio de forma aberta. Nossos tours privados oferecem um ambiente discreto, respeitoso e acolhedor, conduzido por profissionais locais que entendem a cidade e adaptam cada experiência ao perfil do viajante — sem rótulos ou pressupostos."
        },
        {
          id: 11,
          question: "Os passeios privativos são adequados para famílias com crianças?",
          answer: "Com certeza. Nossos passeios privativos são ideais para famílias viajando com crianças de qualquer idade. O ritmo, as paradas e as atividades se adaptam ao seu grupo — mais tempo em espaços abertos, explicações interativas para os mais jovens e flexibilidade para ajustar durante o passeio. Crianças menores de 5 anos geralmente não precisam de ingressos pagos; seu guia orientará conforme o itinerário específico."
        },
        {
          id: 12,
          question: "Vocês oferecem passeios acessíveis para viajantes com mobilidade reduzida?",
          answer: "Sim. Podemos criar passeios para pessoas com mobilidade reduzida, cadeirantes e viajantes que preferem um ritmo mais tranquilo. O Rio apresenta desafios reais de acessibilidade em alguns pontos — ruas de paralelepípedos em Santa Teresa, terreno íngreme em certos miradores — mas com aviso prévio selecionamos locais adequados, organizamos veículos apropriados e adaptamos o roteiro para garantir conforto e prazer durante todo o dia."
        },
        {
          id: 13,
          question: "Quantas pessoas podem participar de um passeio privativo?",
          answer: "Nossos passeios privativos acomodam grupos de 1 a 12 viajantes. O tamanho do veículo se adapta ao seu grupo: sedans e SUVs para grupos menores, vans executivas para grupos maiores. Para grupos acima de 12 pessoas ou eventos corporativos, entre em contato diretamente — podemos organizar vários guias e veículos mantendo a experiência coordenada e personalizada."
        },
        {
          id: 14,
          question: "Quais formas de pagamento vocês aceitam?",
          answer: "Aceitamos todos os principais cartões de crédito e débito. O pagamento só é necessário 72 horas antes do seu passeio — você pode reservar sua data hoje sem cobrança antecipada. Para reservas de última hora feitas dentro de 72 horas, o pagamento completo é exigido no momento da reserva."
        },
        {
          id: 15,
          question: "Posso reservar um passeio privativo para o mesmo dia ou para o dia seguinte?",
          answer: "Sim, sujeito à disponibilidade de guia e veículo. Fazemos o possível para atender pedidos de última hora — entre em contato via WhatsApp para uma resposta mais rápida. Para a alta temporada (dezembro a março) e passeios especiais como Ilha Grande de lancha privativa, recomendamos reservar com pelo menos 1 a 2 semanas de antecedência para garantir sua data preferida."
        },
        {
          id: 16,
          question: "A Be Free Tours é uma operadora de passeios privados licenciada no Rio de Janeiro?",
          answer: "Sim. A Be Free Tours opera como empresa de passeios privados licenciada no Rio de Janeiro desde 2013. Todos os nossos guias possuem certificação oficial de turismo brasileiro (Cadastur) e são cariocas nativos fluentes em inglês, espanhol e português."
        },
        {
          id: 17,
          question: "Qual é a diferença entre um passeio privado e um passeio em grupo no Rio de Janeiro?",
          answer: "Um passeio privado é exclusivo para você e seus acompanhantes — nenhum desconhecido entra no grupo. Você terá um guia certificado dedicado, veículo privado com busca porta a porta e roteiro completamente flexível. Passeios em grupo compartilham um ônibus com até 40 pessoas e seguem horário fixo."
        },
        {
          id: 18,
          question: "Qual operadora de passeios privados no Rio de Janeiro tem as melhores avaliações?",
          answer: "A Be Free Tours possui nota 4,9 de 5 com base em mais de 800 avaliações verificadas no TripAdvisor, Viator e Civitatis — consistentemente entre as operadoras de passeios privados mais bem avaliadas do Rio de Janeiro desde 2013."
        }
      ]
    },
    paymentPolicy: {
      title: "Política de pagamento",
      items: [
        { label: "Como funciona:", text: "Após clicar em Reservar agora e enviar sua solicitação de reserva, revisaremos os detalhes e enviaremos um link de pagamento seguro por e-mail." },
        { label: "Prazo de pagamento:", text: "O pagamento total deve ser concluído pelo menos 72 horas (3 dias) antes da data do passeio." },
        { label: "Reservas de última hora:", text: "Reservas feitas dentro de 72 horas do passeio exigem pagamento imediato para garantir disponibilidade. O link de pagamento será enviado o mais rápido possível." },
        { label: "Métodos aceitos:", text: "Cartões de crédito e débito, processados com segurança via Stripe." },
        { label: "Importante:", text: "Reservas que permanecerem sem pagamento serão liberadas automaticamente 72 horas antes do passeio. Notificações de lembrete são enviadas por e-mail e WhatsApp." }
      ]
    },
    cancellationPolicy: {
      title: "Política de cancelamento",
      items: [
        { label: "Cancelamento gratuito:", text: "Cancele sem custo até 72 horas (3 dias) antes do horário de início do seu passeio." },
        { label: "Alterações ou reagendamento:", text: "Para cancelar, alterar ou reagendar seu passeio, entre em contato por e-mail ou WhatsApp o quanto antes. Faremos o possível para acomodar os ajustes sempre que viável." },
        { label: "Cancelamentos tardios:", text: "Passeios cancelados com menos de 72 horas antes da data de início não são reembolsáveis." },
        { label: "Condições climáticas:", text: "Se condições climáticas severas tornarem o passeio inseguro ou inviável, ofereceremos reembolso total ou a opção de reagendamento sem custo adicional." }
      ]
    },
    ctaFinal: {
      title: "Pronto Para Descobrir o Rio?",
      subtitle: "Cancelamento grátis até 72 horas antes do passeio. Sem pagamento antecipado. 4,9/5 com mais de 800 avaliações verificadas.",
      ctaPrimary: {
        text: "Reserve Agora — Pague Só 72h Antes",
        link: "/pt-br/passeios-privados/"
      },
      ctaSecondary: {
        text: "Fale Conosco pelo WhatsApp",
        link: "https://wa.me/5521979271637?text=Ol%C3%A1%20Be%20Free%20Tours%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20passeios%20privados%20no%20Rio.",
        newTab: true
      },
      trustBadges: [
        { icon: "calendar", text: "Mais de 12 Anos Desde 2013" },
        { icon: "travelers", text: "Mais de 15.000 Viajantes Guiados" },
        { icon: "star", text: "Melhor Avaliado" }
      ]
    }
  }
};

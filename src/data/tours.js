/**
 * tours — fatos invariantes (single-source, 1x por item) + prose nativa por locale.
 * Gerado do dado triplicado preservando a SAÍDA byte-a-byte (verificado deep-equal).
 *
 * - facts[<chave EN>]   = invariantes idênticos nos 3 locales (pricing estrutural, duração-número,
 *   slots, datas bloqueadas, cutoff, startTime, categoria, isFeatured). Editar UMA vez.
 * - durationUnit        = palavra da unidade, por locale.
 * - pricingDisplayText  = texto livre do preço custom (prose), por locale.
 * - prose[locale][chave]= conteúdo nativo (título, descrições, inclusões, itinerário, FAQ, slug…).
 */

const order = [
  "essential-rio",
  "rio-express",
  "first-light-sunrise",
  "golden-hour-rio",
  "sunset-culture-roxy",
  "island-escape-ilha-grande",
  "petropolis-imperial",
  "buzios-riviera",
  "tijuca-rainforest",
  "niteroi-mac-museum",
  "modern-rio-museum-tomorrow",
  "custom-tour"
];

const durationUnit = { en: "hours", es: "horas", "pt-br": "horas" };

const facts = {
  "essential-rio": {
    "category": "city-tours",
    "isFeatured": true,
    "pricing": {
      "from": 455,
      "priceTable": {
        "1": 455,
        "2": 670,
        "3": 840,
        "4": 1020,
        "5": 1275,
        "6": 1470,
        "7": 1645,
        "8": 1840,
        "9": 2070,
        "10": 2250,
        "11": 2420,
        "12": 2640
      }
    },
    "bookingTimeSlots": [
      "06:30",
      "06:45",
      "07:00",
      "07:15",
      "07:30",
      "07:45",
      "08:00",
      "08:15",
      "08:30",
      "08:45",
      "09:00",
      "09:15",
      "09:30",
      "09:45",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45",
      "12:00",
      "12:15",
      "12:30",
      "12:45",
      "13:00"
    ],
    "bookingBlockedDates": [
      "2026-02-14",
      "2026-02-16",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "06:30 - 13:00",
    "durationValue": 8
  },
  "rio-express": {
    "category": "city-tours",
    "isFeatured": true,
    "pricing": {
      "from": 435,
      "priceTable": {
        "1": 435,
        "2": 590,
        "3": 765,
        "4": 920,
        "5": 1175,
        "6": 1350,
        "7": 1540,
        "8": 1720,
        "9": 1890,
        "10": 2100,
        "11": 2255,
        "12": 2460
      }
    },
    "bookingTimeSlots": [
      "06:30",
      "06:45",
      "07:00",
      "07:15",
      "07:30",
      "07:45",
      "08:00",
      "08:15",
      "08:30",
      "08:45",
      "09:00",
      "09:15",
      "09:30",
      "09:45",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45",
      "12:00",
      "12:15",
      "12:30",
      "12:45",
      "13:00"
    ],
    "bookingBlockedDates": [
      "2026-02-14",
      "2026-02-16",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "06:30 - 13:00",
    "durationValue": 5
  },
  "first-light-sunrise": {
    "category": "city-tours",
    "isFeatured": false,
    "pricing": {
      "from": 615,
      "priceTable": {
        "1": 615,
        "2": 820,
        "3": 1005,
        "4": 1340,
        "5": 1675,
        "6": 2010
      }
    },
    "bookingTimeSlots": [
      "04:00"
    ],
    "bookingBlockedDates": [
      "2026-02-13",
      "2026-02-14",
      "2026-02-15",
      "2026-02-16",
      "2026-02-17",
      "2026-02-18",
      "2026-02-19",
      "2026-02-20",
      "2026-02-21",
      "2026-02-22",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 4,
    "startTime": "04:00",
    "durationValue": 6
  },
  "golden-hour-rio": {
    "category": "city-tours",
    "isFeatured": false,
    "pricing": {
      "from": 445,
      "priceTable": {
        "1": 445,
        "2": 610,
        "3": 795,
        "4": 960,
        "5": 1225,
        "6": 1410,
        "7": 1610,
        "8": 1800,
        "9": 1980,
        "10": 2200,
        "11": 2365,
        "12": 2580
      }
    },
    "bookingTimeSlots": [
      "12:00",
      "13:00"
    ],
    "bookingBlockedDates": [
      "2026-02-13",
      "2026-02-14",
      "2026-02-15",
      "2026-02-16",
      "2026-02-17",
      "2026-02-18",
      "2026-02-19",
      "2026-02-20",
      "2026-02-21",
      "2026-02-22",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "12:00, 13:00",
    "durationValue": 6
  },
  "sunset-culture-roxy": {
    "category": "city-tours",
    "isFeatured": false,
    "pricing": {
      "from": 680,
      "priceTable": {
        "1": 680,
        "2": 1030,
        "3": 1395,
        "4": 1740,
        "5": 2200,
        "6": 2580,
        "7": 2975,
        "8": 3320,
        "9": 3735,
        "10": 4100,
        "11": 4455,
        "12": 4860
      }
    },
    "bookingTimeSlots": [
      "12:00",
      "13:00"
    ],
    "bookingBlockedDates": [
      "2026-02-13",
      "2026-02-14",
      "2026-02-15",
      "2026-02-16",
      "2026-02-17",
      "2026-02-18",
      "2026-02-19",
      "2026-02-20",
      "2026-02-21",
      "2026-02-22",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 2,
    "startTime": "12:00, 13:00",
    "durationValue": 9
  },
  "island-escape-ilha-grande": {
    "category": "day-trips",
    "isFeatured": true,
    "pricing": {
      "standard": {
        "1-4": 955,
        "5-10": 1155
      },
      "lopesMendes": {
        "1-4": 1055,
        "5-10": 1280
      }
    },
    "bookingTimeSlots": [
      "05:30",
      "05:45",
      "06:00",
      "06:15",
      "06:30",
      "06:45",
      "07:00",
      "07:15",
      "07:30"
    ],
    "bookingBlockedDates": [
      "2026-02-13",
      "2026-02-14",
      "2026-02-15",
      "2026-02-16",
      "2026-02-17",
      "2026-02-18",
      "2026-02-19",
      "2026-02-20",
      "2026-02-21",
      "2026-02-22",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 3,
    "startTime": "05:30 - 07:30",
    "durationValue": 10
  },
  "petropolis-imperial": {
    "category": "day-trips",
    "isFeatured": false,
    "pricing": {
      "from": 390,
      "priceTable": {
        "1": 390,
        "2": 400,
        "3": 420,
        "4": 440,
        "5": 600,
        "6": 630,
        "7": 720,
        "8": 790,
        "9": 870,
        "10": 1020,
        "11": 1080,
        "12": 1150
      }
    },
    "bookingTimeSlots": [
      "08:00",
      "08:15",
      "08:30",
      "08:45",
      "09:00",
      "09:15",
      "09:30",
      "09:45",
      "10:00",
      "10:15",
      "10:30"
    ],
    "bookingBlockedDates": [
      "2026-02-14",
      "2026-02-16",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "08:00 - 10:30",
    "durationValue": 8
  },
  "tijuca-rainforest": {
    "category": "city-tours",
    "isFeatured": false,
    "pricing": {
      "from": 415,
      "priceTable": {
        "1": 415,
        "2": 590,
        "3": 735,
        "4": 880,
        "5": 1100,
        "6": 1260,
        "7": 1435,
        "8": 1600,
        "9": 1755,
        "10": 1950,
        "11": 2035,
        "12": 2220
      }
    },
    "bookingTimeSlots": [
      "06:30",
      "06:45",
      "07:00",
      "07:15",
      "07:30",
      "07:45",
      "08:00",
      "08:15",
      "08:30",
      "08:45",
      "09:00",
      "09:15",
      "09:30",
      "09:45",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45",
      "12:00",
      "12:15",
      "12:30",
      "12:45",
      "13:00"
    ],
    "bookingBlockedDates": [
      "2026-02-13",
      "2026-02-14",
      "2026-02-15",
      "2026-02-16",
      "2026-02-17",
      "2026-02-18",
      "2026-02-19",
      "2026-02-20",
      "2026-02-21",
      "2026-02-22",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "06:30 - 13:00",
    "durationValue": 8
  },
  "niteroi-mac-museum": {
    "category": "city-tours",
    "isFeatured": false,
    "pricing": {
      "from": 325,
      "priceTable": {
        "1": 325,
        "2": 410,
        "3": 465,
        "4": 520,
        "5": 675,
        "6": 720,
        "7": 805,
        "8": 880,
        "9": 945,
        "10": 1050,
        "11": 1100,
        "12": 1140
      }
    },
    "bookingTimeSlots": [
      "08:30",
      "08:45",
      "09:00",
      "09:15",
      "09:30",
      "09:45",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30"
    ],
    "bookingBlockedDates": [
      "2026-02-13",
      "2026-02-14",
      "2026-02-15",
      "2026-02-16",
      "2026-02-17",
      "2026-02-18",
      "2026-02-19",
      "2026-02-20",
      "2026-02-21",
      "2026-02-22",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 4,
    "startTime": "08:30 - 11:30",
    "durationValue": 8
  },
  "modern-rio-museum-tomorrow": {
    "category": "city-tours",
    "isFeatured": false,
    "pricing": {
      "from": 400,
      "priceTable": {
        "1": 400,
        "2": 570,
        "3": 705,
        "4": 820,
        "5": 1050,
        "6": 1200,
        "7": 1330,
        "8": 1480,
        "9": 1665,
        "10": 1800,
        "11": 1925,
        "12": 2100
      }
    },
    "bookingTimeSlots": [
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45",
      "12:00"
    ],
    "bookingBlockedDates": [
      "2026-02-13",
      "2026-02-14",
      "2026-02-15",
      "2026-02-16",
      "2026-02-17",
      "2026-02-18",
      "2026-02-19",
      "2026-02-20",
      "2026-02-21",
      "2026-02-22",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "10:00 - 12:00",
    "durationValue": 7
  },
  "buzios-riviera": {
    "category": "day-trips",
    "isFeatured": false,
    "pricing": {
      "custom": true
    },
    "bookingTimeSlots": [
      "Flexible"
    ],
    "bookingBlockedDates": [
      "2026-02-13",
      "2026-02-14",
      "2026-02-15",
      "2026-02-16",
      "2026-02-17",
      "2026-02-18",
      "2026-02-19",
      "2026-02-20",
      "2026-02-21",
      "2026-02-22",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "Flexible"
  },
  "custom-tour": {
    "category": "city-tours",
    "isFeatured": true,
    "pricing": {
      "custom": true
    },
    "bookingTimeSlots": [
      "Flexible"
    ],
    "bookingBlockedDates": [
      "2026-02-13",
      "2026-02-14",
      "2026-02-15",
      "2026-02-16",
      "2026-02-17",
      "2026-02-18",
      "2026-02-19",
      "2026-02-20",
      "2026-02-21",
      "2026-02-22",
      "2026-12-31",
      "2027-01-01"
    ],
    "bookingCutoffDays": 1,
    "startTime": "Flexible"
  }
};

const pricingDisplayText = {
  "en": {
    "buzios-riviera": "On request",
    "custom-tour": "Varies by itinerary"
  },
  "es": {
    "buzios-riviera": "Bajo consulta",
    "custom-tour": "Varía según itinerario"
  },
  "pt-br": {
    "buzios-riviera": "Sob consulta",
    "custom-tour": "Varia conforme roteiro"
  }
};

const prose = {
  "en": {
    "essential-rio": {
      "badge": "Best-Seller",
      "id": "The Essential Rio: Icons, Culture & Hidden Gems",
      "slug": "essential-rio",
      "imageSlug": "essential-rio",
      "title": "The Essential Rio: Icons, Culture & Hidden Gems",
      "shortDescription": "A full-day private tour of Rio de Janeiro covering Christ the Redeemer, Sugarloaf Mountain and the city's historic neighborhoods, with a licensed guide, a separate driver and tickets arranged in advance.",
      "fullDescription": "Every Be Free private tour is fully customizable. The itinerary below is our recommended version of the day, but the attractions, order of visits and pace can all be changed before or during the tour.\n\nThe Essential Rio Private Tour is our most complete introduction to Rio de Janeiro. Designed primarily for first-time visitors, it brings together Christ the Redeemer, Sugarloaf Mountain and some of the city's most distinctive neighborhoods, with private transportation and the freedom to experience Rio at your own pace.\n\nYour tour includes two dedicated professionals: a licensed tour guide who accompanies your group and a separate professional driver responsible for the vehicle. Your guide remains with you throughout the experience, rather than leaving to find parking or manage transportation, while your driver takes care of traffic and the next pickup point.\n\nThe suggested day usually begins with Rio's two defining landmarks. From Christ the Redeemer, surrounded by the Tijuca Forest, you see how mountains, beaches and city neighborhoods fit together. Sugarloaf Mountain offers a different perspective, looking across Guanabara Bay and the coastline. Tickets are arranged in advance, including skip-the-line cable car access at Sugarloaf Mountain.\n\nAfter the main viewpoints, many guests choose to explore Santa Teresa and the Selarón Steps. Santa Teresa has a slower rhythm, with hillside streets, historic houses, studios, cafés and local restaurants. Nearby, the Selarón Steps connect Santa Teresa and Lapa through one of Rio's most recognizable works of public art.\n\nDepending on opening hours and your interests, the itinerary may also include the Royal Portuguese Reading Room and the Metropolitan Cathedral. Their very different interiors reveal two sides of downtown Rio: the elaborate nineteenth-century Reading Room and the striking modern architecture of the Cathedral.\n\nThese stops are suggestions, not obligations. You may stay longer at an attraction, stop for lunch, remove a location or replace part of the route with another neighborhood or experience. The order may also change according to weather, traffic and local conditions. In a private tour, knowing Rio means not only knowing where to go, but also knowing when a different plan will create a better day.\n\nThe experience is exclusively for your group, with no shared transportation, no other guests and no need to follow someone else's pace. Essential Rio offers a complete first look at the city while leaving enough freedom for the day to feel entirely your own.",
      "highlights": [
        "Christ the Redeemer",
        "Sugarloaf Mountain and its cable cars",
        "Santa Teresa, Rio's hillside bohemian neighborhood",
        "Selarón Steps",
        "Metropolitan Cathedral",
        "Royal Portuguese Reading Room (weekdays only)"
      ],
      "included": [
        "Private transportation with a professional driver, exclusively for your group",
        "Licensed tour guide (English) accompanying your group throughout the day",
        "Christ the Redeemer entrance tickets, booked in advance for your preferred boarding time, subject to availability",
        "Skip-the-line cable car tickets at Sugarloaf Mountain",
        "Pickup and drop-off anywhere in Rio (hotels, Airbnbs, airports and the cruise port)",
        "Complimentary bottled water"
      ],
      "notIncluded": [
        "Meals and drinks",
        "Gratuities (optional)"
      ],
      "faqs": [
        {
          "q": "Is the itinerary fixed?",
          "a": "No. The itinerary shown on this page is our recommended version of the Essential Rio tour, but the tour is fully customizable. You can change the order of visits, spend longer at certain locations, remove attractions or replace part of the route with other neighborhoods and experiences. Changes can be arranged in advance or made with your guide during the day."
        },
        {
          "q": "Are the guide and the driver the same person?",
          "a": "No. The tour includes two separate professionals: a licensed tour guide who accompanies your group during the visits, and a professional driver responsible for the vehicle and transportation. This way your guide stays with you throughout the experience, while your driver handles traffic, parking and the next pickup point."
        },
        {
          "q": "Are tickets included?",
          "a": "Yes. Tickets for Christ the Redeemer and Sugarloaf Mountain are included and arranged in advance. At Sugarloaf Mountain, tickets include skip-the-line cable car access. At Christ the Redeemer, your entry is booked ahead for the boarding time you prefer, subject to availability, and your guide manages the process on the day."
        },
        {
          "q": "Will we have to wait in line?",
          "a": "At Sugarloaf Mountain, the tour includes skip-the-line access to the cable cars. At Christ the Redeemer, tickets are booked in advance for a boarding time on the train or van, chosen according to your preference and availability, and your guide handles the voucher exchange and boarding so you don't have to manage any of it. Access follows the same official procedure for every visitor, and having it arranged beforehand is what keeps the day moving."
        },
        {
          "q": "Is the tour shared with other travelers?",
          "a": "No. This is a fully private tour, exclusively for your group. The guide, the driver, the vehicle and the itinerary are not shared with anyone else."
        },
        {
          "q": "Can the tour be adapted for seniors, children or visitors with limited mobility?",
          "a": "Yes, whenever possible. Because this is a private tour, the pace, the amount of walking and the itinerary can be adapted to your group. We recommend telling us about any mobility needs before booking, so we can suggest the most suitable route and explain the accessibility conditions at each attraction."
        },
        {
          "q": "Is the Royal Portuguese Reading Room always open?",
          "a": "The Royal Portuguese Reading Room is open Monday to Friday only. If your tour falls on a weekend, your guide will suggest an alternative cultural stop for that day."
        }
      ],
      "tips": [
        "This is an eight-hour tour combining private transportation with periods of walking at the attractions. The amount of walking and the pace of the day can be adapted to your group whenever possible.",
        "The places shown in the suggested itinerary are not compulsory. Stops, order of visits and time spent at each location can be adjusted before or during the tour.",
        "We usually recommend starting early, especially during busier periods. The best starting time varies with the date, the availability of each attraction and the itinerary chosen for your group.",
        "The Royal Portuguese Reading Room is open Monday to Friday only. If your tour falls on a weekend, your guide will suggest an alternative.",
        "The Selarón Steps photograph best in morning light. Ask your guide to plan that stop accordingly.",
        "Wear light clothing on hot days and comfortable shoes — the cobblestones in Santa Teresa and the Selarón Steps are uneven underfoot."
      ]
    },
    "rio-express": {
      "badge": "Half-day",
      "id": "Rio Express: Christ & Sugarloaf in 5 Hours",
      "slug": "rio-express",
      "imageSlug": "rio-flash-5h",
      "title": "Rio Express: Christ & Sugarloaf in 5 Hours",
      "shortDescription": "A five-hour private tour of Christ the Redeemer and Sugarloaf Mountain, with a licensed guide, a separate driver and tickets arranged in advance. Built for cruise passengers and travelers with limited time.",
      "fullDescription": "The Rio Express is a five-hour private tour of Christ the Redeemer and Sugarloaf Mountain, created for travelers who want to experience Rio's two defining landmarks within a shorter schedule. It is particularly well suited to cruise passengers, business travelers and visitors with only a morning or afternoon available.\n\nYour tour includes two dedicated professionals: a licensed tour guide who accompanies your group throughout the visits and a separate professional driver responsible for transportation. While your guide stays with you, the driver manages the vehicle, traffic, parking and the next pickup point — an important advantage when every hour matters.\n\nFive hours is enough to visit both landmarks when the day is carefully planned. The Rio Express keeps the itinerary focused on Christ the Redeemer and Sugarloaf Mountain, without trying to compress a full-day sightseeing tour into a shorter experience. The order and timing may be adjusted according to your pickup location, traffic, weather and conditions at the attractions.\n\nAt Christ the Redeemer, surrounded by the Tijuca Forest, you will see how Rio's mountains, beaches, bay and neighborhoods come together. Tickets are included and booked in advance for a boarding time on the train or van, chosen according to your preference and availability, and your guide handles the voucher exchange and the boarding procedure.\n\nSugarloaf Mountain offers a different perspective of Rio, looking across Guanabara Bay, the coastline and the mountains surrounding the city. The visit includes skip-the-line access to the cable cars, with stops at Morro da Urca and the Sugarloaf summit.\n\nFor cruise passengers, pickup is available directly from Pier Mauá. When booking, provide your ship's official all-aboard time so we can recommend the appropriate starting time and plan a suitable return buffer. Pickup is also available from hotels and other accommodations in the covered area.\n\nThis is a focused itinerary rather than a shortened version of a full-day tour. The pace can be adapted to your group, and the order of the attractions may change when this creates a more efficient visit, but additional stops are subject to available time and operating conditions.\n\nThe Rio Express is ideal for travelers who want private transportation, personal attention and a well-organized visit to Rio's two essential landmarks without committing to a full day.",
      "highlights": [
        "Christ the Redeemer",
        "Sugarloaf Mountain and its cable cars"
      ],
      "included": [
        "Private air-conditioned transportation with a professional driver, exclusively for your group",
        "Licensed tour guide (English) accompanying your group throughout the visits",
        "Christ the Redeemer entrance tickets, booked in advance for your preferred boarding time, subject to availability",
        "Skip-the-line cable car tickets at Sugarloaf Mountain",
        "Pickup and drop-off at Pier Mauá cruise terminal, hotels, Airbnbs and airports in Rio",
        "Complimentary bottled water"
      ],
      "notIncluded": [
        "Meals and drinks",
        "Gratuities"
      ],
      "faqs": [
        {
          "q": "Is five hours enough to visit Christ the Redeemer and Sugarloaf Mountain?",
          "a": "Yes, provided the itinerary remains focused on the two attractions. Private transportation, advance planning and a separate guide and driver help make efficient use of the available time. Traffic, weather and attraction conditions may affect the order and pace of the visit."
        },
        {
          "q": "Is this tour only for cruise passengers?",
          "a": "No. The Rio Express is also suitable for travelers with a free morning or afternoon, short stays, business trips or anyone who wants to visit Rio's two main landmarks without taking a full-day tour."
        },
        {
          "q": "Will you pick us up at the cruise terminal?",
          "a": "Yes. Pickup is available at Pier Mauá cruise terminal. Please provide your ship's name, docking time and official all-aboard time when booking."
        },
        {
          "q": "Will we return to the ship on time?",
          "a": "We plan the starting time, itinerary and return around your ship's official all-aboard time, including a suitable safety buffer based on port requirements and expected traffic. Exceptional events outside our control may still affect road conditions, so accurate ship information is essential."
        },
        {
          "q": "Are the guide and driver the same person?",
          "a": "No. The tour includes two separate professionals: a licensed tour guide who accompanies your group and a professional driver responsible for transportation. This allows the guide to remain with you while the driver manages the vehicle, parking and the next pickup point."
        },
        {
          "q": "Are tickets included?",
          "a": "Yes. Tickets for Christ the Redeemer and Sugarloaf Mountain are included and arranged in advance. At Sugarloaf Mountain, tickets include skip-the-line cable car access. At Christ the Redeemer, your entry is booked ahead for the boarding time you prefer, subject to availability, and your guide manages the process on the day."
        },
        {
          "q": "Will we have to wait in line?",
          "a": "At Sugarloaf Mountain, the tour includes skip-the-line access to the cable cars. At Christ the Redeemer, tickets are booked in advance for a boarding time on the train or van, chosen according to your preference and availability, and your guide handles the voucher exchange and boarding so you don't have to manage any of it. Access follows the same official procedure for every visitor, and having it arranged beforehand is what keeps a five-hour tour on schedule."
        },
        {
          "q": "Is the itinerary customizable?",
          "a": "The order and pace can be adjusted according to your schedule and conditions on the day. Because this is a focused five-hour tour, adding other attractions is subject to available time and cannot always be guaranteed."
        },
        {
          "q": "Is the tour shared with other travelers?",
          "a": "No. The guide, driver, vehicle and itinerary are exclusively for your group."
        },
        {
          "q": "Can the tour be adapted for children, seniors or limited mobility?",
          "a": "Yes, whenever possible. Please inform us of any mobility requirements before booking so we can explain the conditions at each attraction and plan the most suitable pace."
        }
      ],
      "tips": [
        "This is a focused five-hour tour covering Christ the Redeemer and Sugarloaf Mountain. It does not include the additional neighborhoods and cultural attractions found in our full-day itineraries.",
        "The order of the attractions may change according to traffic, weather, opening conditions and your pickup location.",
        "Tickets for both attractions are arranged in advance. At Christ the Redeemer, your boarding time on the train or van is booked ahead according to your preference and availability, and your guide handles the voucher exchange.",
        "For cruise pickup, please provide the ship's name, docking time and official all-aboard time. We will recommend a starting time and plan the return based on the ship's schedule, port requirements and expected traffic conditions.",
        "The experience combines private transportation with walking and standing at the attractions. The pace can be adapted to your group whenever possible.",
        "Additional stops are not guaranteed and depend on traffic, attraction conditions and the time available."
      ]
    },
    "first-light-sunrise": {
      "badge": "Sunrise",
      "id": "Rio at First Light: Sunrise Sugarloaf & Christ",
      "slug": "first-light-sunrise",
      "imageSlug": "first-light-sunrise",
      "title": "Rio at First Light: Sunrise Sugarloaf & Christ",
      "shortDescription": "Experience Rio's most breathtaking sunrise from Sugarloaf Mountain, followed by early access to Christ the Redeemer.",
      "fullDescription": "There is one moment in Rio that photographers and early risers describe as transformative: standing on the summit of Sugarloaf Mountain in the dark, watching the sky over Guanabara Bay begin to shift from black to deep blue to amber as the sun rises behind the Serra do Mar mountains. The Rio at First Light private tour was built around this single moment — and around the logistical precision required to reach it.\n\nYour pickup is at 4:00 AM. Your private vehicle arrives at your hotel, Airbnb, or cruise ship accommodation exactly on time. The drive to Sugarloaf takes approximately 20 minutes at that hour, with the city entirely empty and the bay visible below the highway in the darkness. The first cable car of the day carries you to the 220-meter intermediate station at Morro da Urca, and the second to the 396-meter summit, arriving before dawn breaks.\n\nWhat happens next depends on the morning. On clear days, the bay below turns progressively lighter as the sun approaches the horizon — first a deep indigo, then violet, then the first orange edges appear above the mountains across the bay. The moment of sunrise itself, when the first direct light strikes the summit and the bay becomes copper and gold, lasts approximately 15 minutes. On partly cloudy days, the clouds themselves become the spectacle — layers of color at different altitudes, the city emerging gradually from darkness below.\n\nAt this hour, the summit has a quality it never has later in the day: silence. No crowds, no groups, no queues. Just the bay, the sky, and Rio spread out in every direction as the city wakes up beneath you.\n\nAfter sunrise at Sugarloaf, your private tour continues to Christ the Redeemer on Corcovado Mountain. The early morning access is one of the most significant advantages of this tour. By the time the standard day-trip groups begin arriving — typically between 9:00 and 10:00 AM — you will have already been there and left. The 38-meter statue in the early morning light, with the city still relatively quiet below and a light mist sometimes drifting through the Tijuca Forest on the slopes, is a different experience from the midday visit.\n\nSkip-the-line tickets are included for the Sugarloaf cable car, and entrance tickets for Christ the Redeemer. The tour is available on Saturdays only, when the first cable car schedule accommodates the 4:00 AM start. Saturday slots fill weeks in advance — book early.\n\nIncluded: private door-to-door transportation, certified local guide, skip-the-line entrance to Sugarloaf Mountain, entrance tickets to Christ the Redeemer, and complimentary bottled water. Breakfast is not included but your guide can recommend excellent options near Christ the Redeemer after the sunrise.\n\nThis tour is not for everyone — the 4:00 AM start requires commitment. For those willing to set two alarms and sacrifice one morning's sleep, the reward is Rio at its most extraordinary.",
      "highlights": [
        "Sunrise from the Sugarloaf summit, before the crowds",
        "Early morning Christ the Redeemer visit",
        "Professional photography opportunities"
      ],
      "included": [
        "Private transportation",
        "Certified local guide (English)",
        "Christ the Redeemer entrance tickets",
        "Skip-the-line Sugarloaf cable car tickets",
        "Pickup and drop-off anywhere in Rio (hotels, Airbnbs, airports, and the cruise port)",
        "Complimentary bottled water"
      ],
      "notIncluded": [
        "Meals and drinks",
        "Gratuities"
      ],
      "bookingBlockedWeekdays": [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday"
      ],
      "faqs": [
        {
          "q": "What time does this sunrise tour start and is it worth waking up that early?",
          "a": "The tour starts at 4:00 AM to reach Sugarloaf's summit before dawn. Watching the sun rise over Guanabara Bay from the top of Sugarloaf -- with no crowds -- is one of Rio's most extraordinary experiences. Guests consistently rate this as their highlight of the entire trip."
        },
        {
          "q": "Which days is the sunrise tour available?",
          "a": "The First Light tour is available on Saturdays only. This is intentional -- the exclusive early-morning access arrangement with Sugarloaf operates on a limited schedule. Book well in advance as Saturday slots fill up quickly."
        },
        {
          "q": "Is it safe to travel in Rio at 4:00 AM?",
          "a": "Yes. Your private driver and guide will collect you directly from your hotel or accommodation, so you travel in a private vehicle the entire time. You won't be waiting on streets or using public transport at any point."
        },
        {
          "q": "What should I wear for a 4 AM tour?",
          "a": "Bring a light jacket -- the summit can be cool and breezy before sunrise even in Rio's summer. Comfortable walking shoes are essential. As the day warms up after Christ the Redeemer, lighter layers work well."
        },
        {
          "q": "Are all tickets included including the early-morning Sugarloaf access?",
          "a": "Yes, all tickets including the special early-morning Sugarloaf access and Christ the Redeemer entrance are included in the tour price."
        }
      ],
      "tips": [
        "Your pickup is at 4:00 AM — set two alarms. Your guide will be waiting at your hotel lobby precisely on time.",
        "The summit of Sugarloaf can be windy and noticeably cooler before sunrise even in summer. Bring a light jacket you can remove as the day warms up.",
        "Bring a camera or smartphone with a good low-light mode. The sunrise colors over Guanabara Bay are extraordinary — this is the moment the tour is built around.",
        "Have a light snack before or during the drive. The 4 AM start means breakfast comes later — ask your guide about good options near Christ the Redeemer afterward.",
        "This tour is available Saturdays only. If you need to reschedule, contact us as early as possible — Saturday slots fill up weeks in advance."
      ]
    },
    "golden-hour-rio": {
      "badge": "Sunset",
      "id": "Golden Hour Rio: Christ & Sugarloaf at Sunset",
      "slug": "golden-hour-rio",
      "imageSlug": "golden-hour-rio",
      "title": "Golden Hour Rio: Christ & Sugarloaf at Sunset",
      "shortDescription": "Experience Rio's golden hour beauty with afternoon visits to Christ the Redeemer and a perfectly timed sunset from Sugarloaf Mountain.",
      "fullDescription": "The best light in Rio arrives in the two hours before sunset. The city's granite peaks catch the warm afternoon sun at an angle that transforms every view — the shadows deepen on Sugarloaf's face, the bay turns copper, and Christ the Redeemer glows against a sky that shifts from blue to gold to orange to purple as night falls. The Golden Hour Rio private tour was built around this specific window of light, timed precisely to put you at both summits when the conditions are at their peak.\n\nThis is not a shortened version of the full-day tour. It is a different itinerary, designed for the afternoon hours, optimized for photography, and timed to the minute. Start time varies by season — generally between 1:00 PM and 2:00 PM — and your exact pickup time is confirmed when booking, based on that day's sunset data.\n\nYou choose where you watch the sun go down, and that choice sets the order of the day. Most travelers take Christ the Redeemer first and the sunset from Sugarloaf: the view along the coast is wider from the summit, it is the sunset most people come for, and there are shops and places to eat while you wait for the light. The reverse is the quieter option — Corcovado stands higher, the sun takes longer to set from up there, and there are fewer people at that hour. Tell us which you prefer when you book. If the weather turns on the day, your guide can flip the order to put you where the sky is clearer — that flexibility is what a private tour is for.\n\nChrist the Redeemer in the late afternoon is a different experience from the morning visit. The angle of light casts dramatic shadows across the statue's features, the plateau around it is less crowded than the peak morning hours, and the colors over Guanabara Bay during the approach to sunset are extraordinary. Skip-the-line access to the Sugarloaf cable car is included — the same fast-track that applies on the Essential Rio tour, because golden-hour timing is too precise to risk a long cable-car queue.\n\nIn the usual order, from Corcovado your private vehicle takes you to Sugarloaf Mountain, where the cable car ascent is timed to reach the 396-meter summit as the sun approaches the horizon. The view from the top at this moment — the city below beginning to light up, the bay reflecting the last colors of the sky, the silhouette of Christ the Redeemer visible across the urban landscape — is among the most photographed sights in South America. Your guide will position you for the best angles and give you the time you need.\n\nAfter sunset, the Sugarloaf summit at night has its own character: the city lights below, the stars above when skies are clear, and the illuminated Christ the Redeemer across the valley. There is no rush to descend. Your private guide and driver will return you to your hotel whenever you are ready.\n\nIf you want to extend the evening with dinner after the tour, your guide can recommend excellent restaurants in the Sugarloaf area, Botafogo, or Flamengo, and your driver can take you directly.\n\nIncluded: private air-conditioned vehicle, professional driver, certified local guide, skip-the-line cable car tickets for Sugarloaf Mountain plus entrance tickets for Christ the Redeemer, and complimentary bottled water. Meals are not included.\n\nThe Golden Hour Rio tour is for travelers who understand that timing changes everything. The same two monuments seen in different light tell a different story — and the story told at sunset is the one that produces the photographs that last a lifetime.",
      "highlights": [
        "Christ the Redeemer in golden light",
        "Sunset from Sugarloaf summit",
        "Panoramic beach views",
        "Professional photography guidance"
      ],
      "included": [
        "Private transportation",
        "Certified local guide (English)",
        "Christ the Redeemer entrance tickets",
        "Skip-the-line Sugarloaf cable car tickets",
        "Pickup and drop-off anywhere in Rio (hotels, Airbnbs, airports, and the cruise port)",
        "Complimentary bottled water"
      ],
      "notIncluded": [
        "Dinner (optional stops available)",
        "Gratuities"
      ],
      "faqs": [
        {
          "q": "What makes the Golden Hour tour different from a standard daytime tour?",
          "a": "The timing is everything. Christ the Redeemer bathed in warm afternoon light, followed by watching the sun set over Rio's coastline from Sugarloaf -- the city lights beginning to appear below -- is a completely different experience from midday visits. The 6-hour format is designed specifically around the position of the sun."
        },
        {
          "q": "What time does the Golden Hour tour typically start?",
          "a": "Start times vary seasonally to align with sunset. Generally between 1:00 PM and 2:00 PM, depending on the time of year. When you book, we'll confirm the exact time based on your tour date to ensure perfect golden hour timing."
        },
        {
          "q": "Is it possible to have dinner after the tour?",
          "a": "Yes -- the tour ends at Sugarloaf as sunset concludes. Your driver can take you directly to a restaurant afterward. We're happy to recommend excellent options near the Sugarloaf area or anywhere in Rio for a post-tour dinner."
        },
        {
          "q": "Are skip-the-line tickets for Sugarloaf included?",
          "a": "Yes — skip-the-line tickets for the Sugarloaf cable car are included, along with Christ the Redeemer entrance tickets. Skipping the Sugarloaf line matters here because the sunset window is tight."
        }
      ],
      "tips": [
        "Start time varies by season to align with sunset — confirm your exact pickup time when booking. Generally between 1:00 PM and 2:00 PM.",
        "Bring a camera or smartphone — the golden hour light on Christ the Redeemer and the sunset from Sugarloaf summit are among the most photographed moments in Rio. A tripod mini-stand is worth it.",
        "The cable car ascent to Sugarloaf is timed to reach the summit as the sun begins to set. Trust the timing — your guide knows exactly when to go up.",
        "If you'd like to have dinner after the tour, let your guide know. The Sugarloaf area has excellent restaurants and your driver can take you directly.",
        "Sunset timing is precise — skip-the-line tickets for Sugarloaf are included specifically so you reach the top before the light changes."
      ]
    },
    "sunset-culture-roxy": {
      "id": "Sunset & Culture: Rio Icons + Roxy Brazilian Dance Show",
      "slug": "sunset-culture-roxy",
      "imageSlug": "sunset-culture-roxy",
      "title": "Sunset & Culture: Rio Icons + Roxy Brazilian Dance Show",
      "shortDescription": "A private afternoon-to-evening tour of Christ the Redeemer and Sugarloaf Mountain at sunset, followed by dinner and a Brazilian cultural show at the Roxy.",
      "fullDescription": "Rio Sunset & Roxy combines a private afternoon visit to Christ the Redeemer and Sugarloaf Mountain with dinner and a Brazilian cultural show at the Roxy. It is designed for travelers who want to experience Rio's landmarks, the changing evening light and live performance as one continuous, carefully organized experience.\n\nThe starting time varies according to the date, seasonal sunset conditions and the Roxy schedule. During the sightseeing portion your experience includes two dedicated professionals: a licensed tour guide who accompanies your group and a separate professional driver responsible for transportation. While your guide remains with you at the attractions, the driver takes care of traffic, parking and the next pickup point.\n\nThe suggested itinerary begins at Christ the Redeemer, surrounded by the Tijuca Forest. From Corcovado, you can see how Rio's mountains, beaches, bay and neighborhoods come together. Tickets are included and booked in advance for a boarding time on the train or van, chosen according to your preference and availability, and your guide handles the voucher exchange and the boarding procedure.\n\nFrom Christ the Redeemer, the tour continues to Sugarloaf Mountain. Skip-the-line cable car tickets are included, with access through Morro da Urca and on to the Sugarloaf summit. The schedule is planned around the season's sunset time whenever possible, though visibility, weather and the exact quality of the light cannot be guaranteed.\n\nAfter Sugarloaf Mountain, your private vehicle takes you directly to the Roxy. The transition is planned around the show schedule, so you do not need to arrange separate transportation or manage the timing between the attractions and the venue.\n\nThe Roxy experience includes a three-course dinner served at your table and a professional stage production of Brazilian music and dance. The performance brings together rhythms and traditions from different regions of Brazil, presented by professional dancers and musicians in a theater setting.\n\nDuring the sightseeing portion, your guide can introduce some of the cultural context behind the music, dance and traditions shown in the evening performance. The show itself is a professional dinner-theater production rather than a guided cultural visit.\n\nThis is a private afternoon-to-evening experience for your group only. It combines two of Rio's best-known viewpoints with dinner, performance and private transportation, so you can move through the entire program without organizing separate tickets or transfers.",
      "highlights": [
        "Christ the Redeemer",
        "Sugarloaf Mountain at sunset",
        "Roxy Brazilian dinner show",
        "Three-course dinner at the Roxy"
      ],
      "included": [
        "Private air-conditioned transportation throughout the experience",
        "Licensed tour guide (English) during the sightseeing portion",
        "Separate professional driver",
        "Christ the Redeemer entrance tickets, booked in advance for your preferred boarding time, subject to availability",
        "Skip-the-line cable car tickets at Sugarloaf Mountain",
        "Roxy dinner show admission",
        "Three-course dinner at the Roxy",
        "Complimentary bottled water during the sightseeing portion",
        "Pickup and drop-off anywhere in Rio (hotels, Airbnbs, airports and the cruise port)"
      ],
      "notIncluded": [
        "Drinks at Roxy",
        "Gratuities"
      ],
      "bookingBlockedWeekdays": [
        "monday",
        "tuesday"
      ],
      "restrictions": "Wednesday to Sunday only. Roxy show tickets are non-refundable.",
      "faqs": [
        {
          "q": "What is the Roxy dinner show?",
          "a": "The Roxy is a professional Brazilian dinner-theater production of music and dance, staged in a purpose-built venue. The performance brings together rhythms and traditions from different regions of Brazil, presented by professional dancers and musicians, alongside a three-course dinner served at your table."
        },
        {
          "q": "Which days is this tour available?",
          "a": "Wednesday to Sunday only. The Roxy does not operate on Mondays and Tuesdays, so the tour is not available on those days."
        },
        {
          "q": "Is the Roxy show ticket refundable?",
          "a": "No. Once purchased, the Roxy show ticket cannot be canceled or refunded by the venue, regardless of notice given. Please only book if your evening plans are confirmed. The rest of the tour follows our standard cancellation policy."
        },
        {
          "q": "Is sunset guaranteed?",
          "a": "No. The schedule is planned around the season's sunset time whenever possible, but clouds, rain, visibility, traffic and attraction operations are outside our control."
        },
        {
          "q": "Are the guide and driver the same person?",
          "a": "No. During the sightseeing portion the tour includes a licensed tour guide who accompanies your group and a separate professional driver responsible for transportation."
        },
        {
          "q": "Are the Christ the Redeemer and Sugarloaf tickets included?",
          "a": "Yes. Both are included and arranged in advance. At Sugarloaf Mountain, tickets include skip-the-line cable car access. At Christ the Redeemer, your entry is booked ahead for the boarding time you prefer, subject to availability, and your guide manages the process on the day."
        },
        {
          "q": "Is the tour private?",
          "a": "The sightseeing portion and the transportation are exclusively for your group. The Roxy is a public theater venue attended by other guests."
        },
        {
          "q": "What should I wear?",
          "a": "Smart casual is appropriate — the Roxy is an upscale venue. Formal attire is not required, but beachwear is not recommended. Please also carry a valid photo ID, as the venue may request it at the entrance."
        },
        {
          "q": "Are drinks included at the Roxy?",
          "a": "The three-course dinner is included, but drinks at the Roxy are not, and are paid directly at the venue."
        }
      ],
      "tips": [
        "This tour is available Wednesday to Sunday only. The Roxy does not operate on Mondays and Tuesdays.",
        "The Roxy show ticket is non-refundable once purchased, regardless of notice given. Please only book if your evening plans are confirmed.",
        "The starting time varies with the date, the season's sunset and the Roxy schedule. Your confirmed pickup time is provided after booking.",
        "Tickets for both attractions are arranged in advance. At Christ the Redeemer, your boarding time on the train or van is booked ahead according to your preference and availability, and your guide handles the voucher exchange.",
        "Dress smart casual for the Roxy — it is an upscale venue and beachwear is not appropriate. Bring a valid photo ID, as the venue may request it at the entrance.",
        "Drinks at the Roxy are not included in the tour price and are paid directly at the venue."
      ]
    },
    "island-escape-ilha-grande": {
      "badge": "Speedboat included",
      "id": "Island Escape: Ilha Grande by Private Speedboat",
      "slug": "island-escape-ilha-grande",
      "imageSlug": "island-escape-ilha-grande",
      "title": "Island Escape: Ilha Grande by Private Speedboat",
      "shortDescription": "A private day trip from Rio to Ilha Grande by speedboat, exploring sheltered beaches and snorkeling spots, with a licensed guide, a driver and a boat reserved for your group. A premium Lopes Mendes option is available.",
      "fullDescription": "This is a complete private day trip to Ilha Grande from Rio de Janeiro, with door-to-door transportation, a licensed tour guide and a speedboat reserved exclusively for your group. From pickup at your accommodation in Rio to the final beach stop, the whole experience is organized as one continuous private tour.\n\nThe day begins early, with pickup from your hotel, Airbnb or other accommodation in Rio. Your private vehicle takes you to Mangaratiba, a coastal town near Ilha Grande, where your speedboat and sailor are waiting. The boat is exclusively yours for the day, with no other passengers, no fixed group schedule and no waiting for strangers to finish their swim.\n\nIlha Grande is a preserved Atlantic Forest reserve — an island with no roads between villages and water clear enough to see the seafloor. The speedboat portion lasts about five hours and explores beaches, sheltered coves and snorkeling spots around the island. The usual stops are at beaches with shallow, calm water, and complimentary snorkeling equipment and bottled water are provided at no extra cost.\n\nThere is no fixed list of beaches. The route is chosen according to maritime conditions, safety, the time available and your group's interests, so stops may vary from one day to the next. Because the boat is private, the pace is yours: you can spend longer swimming, resting on a beach or snorkeling instead of following a shared excursion's timetable.\n\nYour experience includes three professionals with separate roles: a licensed tour guide who accompanies the group throughout the entire day, from departure in Rio through the boat tour and the return; a professional driver for the road transport; and a sailor responsible for the boat and safety on the water.\n\nLunch is optional and paid separately at a restaurant located at one of the boat stops. The tour does not go to Vila do Abraão for lunch. Your guide can recommend a good restaurant along the route. You are also welcome to bring your own food, snacks and drinks aboard the boat, whether or not you add the optional barbecue.\n\nAn on-board barbecue can be arranged in advance as an optional extra, priced on request. Drinks are not included with the barbecue and are brought by the guests.\n\nThe standard experience focuses on sheltered beaches, calm shallow water, swimming and snorkeling. A premium option adds a visit to Lopes Mendes, consistently ranked among the most beautiful beaches in Brazil, with its long stretch of pale sand, preserved Atlantic Forest surroundings and open-ocean setting.\n\nThe speedboat does not stop directly at Lopes Mendes. Access is through Praia do Pouso, followed by a forest trail of about forty minutes, of light to moderate difficulty, with your guide accompanying you the whole way. Lopes Mendes faces the open ocean, so the surf can be stronger than at the sheltered stops and some care in the water is recommended. There are only a few snacks there, so we strongly recommend bringing water and food for the visit.\n\nAfter the boat portion, your private vehicle takes you from Mangaratiba back to Rio. The complete experience usually lasts between ten and twelve hours door to door, including the road transport, boarding, the boat tour and the return. For travelers who want to see Ilha Grande from Rio in a single day, this is a fully private experience from beginning to end.",
      "highlights": [
        "Ilha Grande's sheltered beaches and clear water",
        "Coves and snorkeling spots",
        "Private speedboat exclusively for your group",
        "Lopes Mendes, as a premium option",
        "Costa Verde coastal drive from Rio"
      ],
      "included": [
        "Private round-trip transportation between Rio and Mangaratiba",
        "Pickup and drop-off at your accommodation in Rio, within the covered area",
        "Licensed tour guide (English) accompanying the group throughout the day",
        "Professional driver and sailor responsible for the boat",
        "Private speedboat for approximately five hours",
        "Snorkeling equipment at no extra cost",
        "Bottled water at no extra cost"
      ],
      "notIncluded": [
        "Lunch and drinks during the tour",
        "Optional on-board barbecue (priced on request)",
        "Sunscreen and towel",
        "Gratuities"
      ],
      "faqs": [
        {
          "q": "Does this tour leave from Rio de Janeiro?",
          "a": "Yes. Pickup in Rio, private transportation to Mangaratiba, the private speedboat and the return journey are all included."
        },
        {
          "q": "Is the speedboat private?",
          "a": "Yes. The speedboat is reserved exclusively for your group and is not shared with other travelers."
        },
        {
          "q": "How long is the complete experience?",
          "a": "The boat portion lasts about five hours. The complete tour usually lasts between ten and twelve hours door to door, including the transport to Mangaratiba, boarding, the boat tour and the return to Rio."
        },
        {
          "q": "Does the guide stay with us throughout the tour?",
          "a": "Yes. The licensed guide accompanies your group throughout the entire experience, including the road transport and the boat tour. A separate sailor is responsible for the boat and safety on the water."
        },
        {
          "q": "Are the guide, driver and sailor the same person?",
          "a": "No. The tour includes a licensed tour guide, a professional driver for the road transport, and a sailor responsible for the boat — three separate roles."
        },
        {
          "q": "Which beaches will we visit?",
          "a": "There is no fixed list of beaches. The route is chosen according to maritime conditions, safety, the time available and your group's interests, so stops may vary from one day to the next."
        },
        {
          "q": "Are the waters calm?",
          "a": "The usual stops are at beaches with shallow, calm water. Lopes Mendes is the exception, as it faces the open ocean and can have stronger waves."
        },
        {
          "q": "Is snorkeling equipment included?",
          "a": "Yes. Snorkeling equipment and bottled water are provided at no extra cost."
        },
        {
          "q": "Is lunch included?",
          "a": "No. Lunch is optional and paid directly at a restaurant located at one of the boat stops. The tour does not go to Vila do Abraão for lunch — the restaurant is chosen along the boat route."
        },
        {
          "q": "Can we bring our own food and drinks?",
          "a": "Yes. You are welcome to bring your own food, snacks and drinks aboard the boat, whether or not you add the barbecue."
        },
        {
          "q": "Is the barbecue included?",
          "a": "No. The on-board barbecue is optional, arranged in advance and priced on request. Drinks are not included and are brought by the guests."
        },
        {
          "q": "What is the premium Lopes Mendes option?",
          "a": "The premium option adds a visit to Lopes Mendes, consistently ranked among the most beautiful beaches in Brazil. The speedboat stops at Praia do Pouso, and from there a forest trail of about forty minutes — light to moderate — leads to the beach, with your guide accompanying you. The visit depends on maritime and operating conditions."
        },
        {
          "q": "Does the speedboat stop directly at Lopes Mendes? What is the beach like?",
          "a": "No. The boat stops at Praia do Pouso, followed by an approximately forty-minute forest trail to Lopes Mendes with the guide. The trail is light to moderate over natural terrain that can be uneven or slippery after rain, so comfortable walking shoes or secure sandals are recommended. Lopes Mendes faces the open ocean, so the surf can be stronger than at the sheltered stops — enter the water with some care and follow the guide's advice. Food there is limited to a few snacks, so bring water and food."
        },
        {
          "q": "What happens if the weather is bad?",
          "a": "Light rain does not cancel the tour. It is only canceled when the sea conditions are not safe for navigation. We follow the forecast closely, including with the local operator on Ilha Grande, and if a cancellation is necessary for the sea, you are notified in advance and refunded the amount paid for the tour. A change of beaches or stops for sea conditions is part of normal operation and is not a cancellation."
        },
        {
          "q": "Is the tour shared with other travelers?",
          "a": "No. The road transport, the guide and the speedboat are private and exclusive to your group."
        }
      ],
      "tips": [
        "The tour departs Rio early in the morning. The exact time depends on your pickup location, expected traffic and the boat departure arrangements. Prepare everything the night before.",
        "The complete day usually runs between ten and twelve hours door to door, including the drive to Mangaratiba, about five hours on the boat, and the return.",
        "Light rain does not cancel the tour — only unsafe sea conditions do. We follow the forecast closely with the local operator, and if a cancellation is necessary for the sea, you are notified in advance and refunded the amount paid.",
        "Bring sunscreen and a towel — these are not provided. Swimwear, sunglasses, a hat, a light change of clothing and a waterproof bag for your phone and valuables are also a good idea.",
        "Lunch is not included. You can eat at a restaurant along the boat route, paid separately, or bring your own food and drinks aboard.",
        "Snorkeling equipment and bottled water are provided at no extra cost. The usual beach stops have shallow, calm water.",
        "If you choose the premium Lopes Mendes option, it is a forty-minute forest trail from Praia do Pouso, light to moderate, with the guide accompanying you. Wear comfortable walking shoes or secure sandals, and bring water and food, as there are only a few snacks on the beach.",
        "Lopes Mendes is an open-ocean beach where the surf can be stronger — enter the water with some care, especially with children."
      ]
    },
    "petropolis-imperial": {
      "badge": "Imperial city",
      "id": "Petrópolis: Imperial Palaces & Mountain Escape",
      "slug": "petropolis-imperial",
      "imageSlug": "petropolis-imperial",
      "title": "Petrópolis: Imperial Palaces & Mountain Escape",
      "shortDescription": "A private day in Brazil's Imperial City — the Imperial Museum, the cathedral mausoleum and Quitandinha Palace — with pickup in Rio de Janeiro or in Petrópolis itself.",
      "fullDescription": "Petrópolis is where the Brazilian imperial family spent its summers, and the city that grew around the court kept the shape it was given: palaces, churches, gardens and 19th-century residences along tree-lined avenues, 840 metres up in the Serra dos Órgãos. This is a private day there — your own guide, your own driver, your own vehicle, and an itinerary built around what you actually want to see.\n\nThe tour can begin at your accommodation in Rio de Janeiro or at your hotel, guesthouse or Airbnb in Petrópolis itself. The price is the same either way, and the vehicle stays with you for the whole day in both cases. Starting locally simply gives you more hours in the city — room for an extra stop, a longer lunch, or a slower pace through the historic centre.\n\nFrom Rio the drive takes roughly 70 to 90 minutes each way depending on traffic, climbing through the Serra dos Órgãos past stretches of Atlantic Forest. Petrópolis sits high enough that the air is noticeably milder than the coast year-round, which is precisely why the emperor went there — and why a light jacket is worth packing, particularly in autumn and winter.\n\nThe Imperial Museum is the centrepiece of the regular itinerary. It occupies the former summer palace itself, and the collection includes the crown of Dom Pedro II, imperial insignia, furniture, portraits, personal belongings of the imperial family, and the pen Princess Isabel used to sign the Lei Áurea — the 1888 law that abolished slavery in Brazil — alongside a copy of the document. Your guide sets the pace inside according to what holds your interest.\n\nThe Cathedral of São Pedro de Alcântara is the second anchor of the day. The neo-Gothic church, with its single tower, holds the Imperial Mausoleum: Emperor Dom Pedro II, Empress Teresa Cristina, Princess Isabel and the Count of Eu. Entry is free and the interior is normally open during regular hours, though access can be restricted during mass, weddings, funerals or other ceremonies.\n\nThe Casa de Petrópolis is known locally as the House of 7 Errors, and the name is a misunderstanding worth explaining. Built between 1879 and 1884, it blended European architectural styles with the technology arriving at the end of the century — it was the first house in the city wired for electric light. It was also deliberately asymmetrical: the two halves of the façade were never meant to match. Passers-by who assumed a symmetrical design read the differences as construction mistakes, counted seven of them, and the nickname stuck. Interior visits are currently closed, but the grounds are open — the tour stops there, and your guide takes you through the gardens, the façade and the story.\n\nQuitandinha Palace belongs to an entirely different chapter. Built in the 1940s as a luxury hotel and casino — an imposing building, with monumental interiors and an artificial lake at its feet — it dates from the years when Petrópolis was the mountain address of Brazilian high society. Which areas are open varies with events and operating conditions on the day.\n\nDepending on time, opening hours and what interests you, the day can also take in the Crystal Palace, the historic centre and Avenida Koeler, exterior views of other significant residences, and the Rio Negro Palace when it is open to visitors. The Lutheran Church, one of the landmarks of German immigration in the city, can sometimes be visited inside — access is limited and generally restricted to Saturday mornings, so it is never guaranteed.\n\nMondays work differently. Petrópolis' main museums and historic interiors are closed, so a Monday tour is a genuinely different day: the historic centre on foot, architecture and exteriors, public spaces, the scenery of the serra, and an unhurried lunch. It is a good day in the city, but it is not the imperial itinerary with the interiors removed — the Imperial Museum in particular cannot be appreciated from the outside, and we would rather say so before you book than after.\n\nAdmissions to the attractions on the itinerary are included in the price. The Bohemia Brewery Tour can be added on request, subject to availability and opening hours, and is the one ticket paid separately; the brewery's own restaurant and bar are currently closed. Lunch is not included and is paid directly at the restaurant you choose, and your guide will suggest options to match your taste and budget.",
      "highlights": [
        "Imperial Museum",
        "Cathedral of São Pedro de Alcântara and the Imperial Mausoleum",
        "Quitandinha Palace",
        "Crystal Palace",
        "Casa de Petrópolis and its gardens",
        "Historic centre and Avenida Koeler"
      ],
      "included": [
        "Private air-conditioned vehicle for the whole day",
        "Licensed tour guide with your group throughout",
        "Professional driver, separate from the guide",
        "Admission to the attractions on the itinerary",
        "Pickup and drop-off at your accommodation in Rio de Janeiro or in Petrópolis",
        "Bottled water"
      ],
      "notIncluded": [
        "Lunch, food and drinks",
        "Bohemia Brewery Tour admission (optional add-on)",
        "Gratuities",
        "Additional fee for guides in languages other than English, Spanish and Portuguese, where applicable"
      ],
      "restrictions": "Mondays follow a different itinerary — Petrópolis' main museums and historic interiors are closed that day.",
      "faqs": [
        {
          "q": "Can the tour start in Petrópolis instead of Rio?",
          "a": "Yes. We pick you up directly at your hotel, guesthouse, Airbnb or other accommodation in Petrópolis, and the price is exactly the same as starting from Rio. The private vehicle and driver stay with you throughout the day either way."
        },
        {
          "q": "How long is the drive from Rio?",
          "a": "Roughly 70 to 90 minutes each way, depending on traffic and where you are staying. The road climbs through the Serra dos Órgãos and the scenery is part of the day."
        },
        {
          "q": "How long is the whole tour?",
          "a": "Around eight hours. The exact figure shifts with your starting point, traffic, opening hours and the itinerary you settle on with your guide."
        },
        {
          "q": "Are the guide and the driver the same person?",
          "a": "No. You have a licensed tour guide who stays with your group and a separate professional driver responsible for the vehicle."
        },
        {
          "q": "Are admission tickets included?",
          "a": "Yes. Admissions to the attractions on your itinerary are included in the tour price. The only exception is the optional Bohemia Brewery Tour, which is always paid separately."
        },
        {
          "q": "Can we visit Petrópolis on a Monday?",
          "a": "Yes, but it is a different tour. The main museums and historic interiors are closed on Mondays, so a Monday itinerary focuses on the historic centre on foot, architecture and exteriors, public spaces, the mountain scenery and lunch. We will make that clear when you book rather than let you discover it on arrival."
        },
        {
          "q": "Is the Imperial Museum open on Mondays?",
          "a": "No. The Imperial Museum, like most of the city's principal museums and historic interiors, is closed on Mondays. It cannot be appreciated from the outside, so a Monday visit is not a substitute for going inside."
        },
        {
          "q": "What is in the Imperial Museum?",
          "a": "The collection is held in the former summer palace and includes the crown of Dom Pedro II, imperial insignia, furniture, portraits, personal belongings of the imperial family, and the pen Princess Isabel used to sign the Lei Áurea, with a copy of the document itself."
        },
        {
          "q": "Is there an admission fee for the cathedral?",
          "a": "No, entry to the Cathedral of São Pedro de Alcântara is free. The interior is normally open during regular hours, though access can be restricted during mass, weddings, funerals or other ceremonies."
        },
        {
          "q": "Can we go inside the Casa de Petrópolis?",
          "a": "Not the house itself, at present — interior visits are closed, with no reopening date announced. The gardens are open, though, and that is where the tour stops: your guide takes you through the grounds, the façade and the story behind the nickname."
        },
        {
          "q": "What are the \"7 Errors\" of the Casa de Petrópolis?",
          "a": "There are no errors. The house, completed in 1884, was deliberately built asymmetrical, so the two halves of the façade were never meant to match. People who assumed the design was symmetrical read the differences as construction mistakes, counted seven, and the name stuck."
        },
        {
          "q": "Can we add the Bohemia Brewery Tour?",
          "a": "Yes, on request and subject to availability and opening hours. The ticket is paid separately from the tour price. Note that the brewery's restaurant and bar are currently closed, so lunch happens elsewhere."
        },
        {
          "q": "Is lunch included?",
          "a": "No. Lunch is paid directly at the restaurant you choose, and your guide will recommend options in the historic centre according to your preferences and budget."
        },
        {
          "q": "Can the itinerary be adjusted?",
          "a": "Yes. The order and the selection of stops can be built around your interests, the time available and what is open on the day. Some attractions may replace others."
        },
        {
          "q": "Is Petrópolis colder than Rio, and what should we wear?",
          "a": "Noticeably milder, given the altitude, throughout the year. Bring a light jacket or an extra layer regardless of the weather in Rio when you leave, especially in autumn and winter, and wear comfortable shoes — parts of the historic centre are best seen on foot."
        },
        {
          "q": "Are guides available in other languages?",
          "a": "We work in English, Spanish and Portuguese. Guides in other languages can sometimes be arranged on request, subject to availability, and an additional fee may apply."
        }
      ],
      "tips": [
        "Petrópolis sits at 840 metres and runs consistently milder than the coast. Bring a light jacket whatever the weather in Rio when you set off, particularly between April and September.",
        "Parts of the historic centre are best covered on foot, along Avenida Koeler and around the cathedral. Comfortable shoes make a real difference to the day.",
        "The mountain road is winding on the way up. If anyone in the group is prone to motion sickness, take something before departure rather than en route.",
        "If your only possible date is a Monday, plan for the alternative itinerary: exteriors, the historic centre and the scenery, without the museum interiors. Worth knowing before you choose the date rather than after.",
        "At the Casa de Petrópolis the house itself is closed, but the gardens are open and the stop is worth making. The story is the reason to go, and your guide tells it on the grounds.",
        "The Bohemia Brewery Tour has to be requested in advance so we can check availability and opening hours. Its restaurant and bar are closed, so plan lunch elsewhere.",
        "The cathedral is an active church. Mass, weddings and funerals can close the interior at short notice, and no tour can work around that."
      ]
    },
    "tijuca-rainforest": {
      "id": "Tijuca Rainforest: Where Nature Meets Culture",
      "slug": "tijuca-rainforest",
      "imageSlug": "tijuca-rainforest",
      "title": "Tijuca Rainforest: Where Nature Meets Culture",
      "shortDescription": "Combine Sugarloaf Mountain's stunning vistas with the lush beauty of Tijuca Forest and Botanical Garden.",
      "fullDescription": "Rio de Janeiro is one of the few cities on earth where you can stand in a genuine tropical rainforest within 20 minutes of downtown. Tijuca National Park — a vast urban forest, covering 32 square kilometers within the city limits — was almost entirely destroyed for coffee and sugar plantations in the 18th and 19th centuries, and then almost entirely replanted by hand between 1861 and 1888 in one of the world's first large-scale reforestation projects. The forest you walk through today is a human creation — which makes it, paradoxically, one of the most extraordinary conservation stories of the 19th century.\n\nThe Tijuca Rainforest tour combines four of Rio's most significant natural and cultural sites into a single full-day private experience: Sugarloaf Mountain, Tijuca National Park, the Rio Botanical Garden, and Parque Lage.\n\nThe day begins at Sugarloaf — the 396-meter granite peak at the entrance to Guanabara Bay that defines Rio's most recognizable silhouette. Two cable car stages take you to the summit, where the panoramic view encompasses the full sweep of the city: Corcovado and Christ the Redeemer to the west, the beaches of Copacabana and Ipanema to the south, the bay opening to the Atlantic to the east. Skip-the-line entry to the Sugarloaf cable car is included.\n\nTijuca National Park offers a different Rio entirely. Within the park, paved roads become forest trails, the city noise drops away, and the Atlantic Forest — one of the world's most biodiverse and threatened ecosystems — surrounds you. Wildlife sightings depend on time of day and season but commonly include toucans, marmosets (small primates native to the Atlantic Forest), butterflies in extraordinary variety, and occasionally the agouti and coati visible from the road. Your guide knows the park's rhythms and will position you for the best chances.\n\nThe Botanical Garden of Rio de Janeiro covers 137 hectares and contains over 6,500 plant species from Brazil and around the world, including the famous Imperial Palm Avenue — 134 royal palms planted in 1808 on the orders of the Prince Regent Dom João VI — the extraordinary Victoria amazonica lily pads that reach two meters in diameter, the Atlantic Forest section with native species, and the cactus garden and orchid greenhouse. The garden was founded in 1808 and is one of the oldest scientific botanical institutions in the Americas.\n\nParque Lage is the final stop — and one of Rio's best-kept secrets. A neo-classical mansion built in the 1920s for Italian businessman Enrique Lage sits at the foot of Corcovado, surrounded by Atlantic Forest with Christ the Redeemer visible above the tree line. The mansion now houses the Rio School of Visual Arts and a famous café — one of the most atmospheric in the city — where you can have coffee in the mansion's central courtyard with the forest and the statue above you. The park trails behind the mansion lead into Tijuca National Park territory.\n\nNot available on Mondays. The tour runs Tuesday to Sunday.\n\nIncluded: private door-to-door transportation, certified local guide, skip-the-line entrance to Sugarloaf Mountain, Botanical Garden entrance, Tijuca National Park access, and complimentary bottled water. Meals are not included.",
      "highlights": [
        "Sugarloaf Mountain",
        "Tijuca Forest - vast urban rainforest",
        "Botanical Garden",
        "Parque Lage"
      ],
      "included": [
        "Private transportation",
        "Certified local guide (English)",
        "All entrance fees",
        "Pickup and drop-off anywhere in Rio (hotels, Airbnbs, airports, and the cruise port)",
        "Complimentary bottled water"
      ],
      "notIncluded": [
        "Meals and drinks",
        "Gratuities"
      ],
      "bookingBlockedWeekdays": [
        "monday"
      ],
      "faqs": [
        {
          "q": "Is Tijuca Forest safe to visit and will we actually see wildlife?",
          "a": "Yes, Tijuca National Park is safe for visitors. As a vast urban rainforest, it's home to over 200 bird species, monkeys, and diverse flora. Wildlife sightings depend on the time of day and season, but toucans, marmosets, and butterflies are commonly seen. Your guide knows the best spots."
        },
        {
          "q": "Is this tour available every day?",
          "a": "Not available on Mondays -- Parque Lage and some sections of Tijuca Forest have reduced access on Mondays. The tour runs Tuesday to Sunday."
        },
        {
          "q": "How much walking is involved in the Tijuca Forest portion?",
          "a": "The Tijuca visit involves light to moderate walking on maintained forest paths -- nothing that requires hiking experience or special footwear beyond comfortable walking shoes. The Botanical Garden also involves walking but all paths are flat and accessible."
        },
        {
          "q": "Does this tour include Sugarloaf Mountain?",
          "a": "Yes -- Sugarloaf Mountain is included as part of this tour combining natural and cultural highlights. The 8-hour day covers Sugarloaf, Tijuca National Park, Botanical Garden, and Parque Lage."
        },
        {
          "q": "What is Parque Lage and why is it included?",
          "a": "Parque Lage is a beautiful historic park at the foot of Corcovado Mountain, featuring a neo-classical mansion (now an art school) surrounded by Atlantic Forest. Its famous café is a Rio institution and the park offers stunning views of Christ the Redeemer above the forest."
        }
      ],
      "tips": [
        "Tijuca National Park is a vast urban rainforest — wildlife sightings depend on time of day and season. Toucans, marmosets, and butterflies are commonly seen. Your guide knows the best spots.",
        "Bring insect repellent for the forest section — it's a genuine rainforest and mosquitoes are present, especially after rain.",
        "The Botanical Garden has over 6,500 plant species across 137 hectares — you won't see everything, but your guide will focus on the most extraordinary sections including the giant Victoria amazonica lily pads.",
        "Parque Lage's café is one of Rio's most atmospheric spots — a century-old Art Nouveau café inside a neo-classical mansion with Christ the Redeemer visible above the forest canopy.",
        "Not available on Mondays — Parque Lage has reduced access. The tour runs Tuesday to Sunday."
      ]
    },
    "niteroi-mac-museum": {
      "id": "Niterói: Niemeyer's MAC Museum & Colonial Forts",
      "slug": "niteroi-mac-museum",
      "imageSlug": "niteroi-mac-museum",
      "title": "Niterói: Niemeyer's MAC Museum & Colonial Forts",
      "shortDescription": "Cross Guanabara Bay to discover Niterói's architectural masterpiece MAC Museum and historic military forts.",
      "fullDescription": "Across Guanabara Bay from Rio, a 13.3-kilometer bridge and 20-minute drive lead to Niterói — a city of 500,000 people that most visitors to Rio never see, and that contains one of the most extraordinary works of architecture in the Americas. The Niterói private tour crosses the bay to show you three things: the MAC museum, the colonial forts, and the view of Rio that only exists from the other side of the water.\n\nThe Rio–Niterói Bridge crossing is part of the experience. At 13.3 kilometers, it was the longest pre-stressed concrete bridge in the world when it opened in 1974, and it remains one of the most dramatic approaches to any city view on the continent. Have your camera ready for the midpoint: the simultaneous view of Rio's skyline to one side and Niterói ahead is unlike anything seen from within Rio itself.\n\nThe MAC Niterói — Museu de Arte Contemporânea — is Oscar Niemeyer's most celebrated building outside of Brasília. Completed in 1996 when Niemeyer was 88 years old, it sits on a clifftop above the bay on a circular concrete disc that appears to float above its surroundings, supported by a single central column. The building has been described as a flying saucer, a flower, and a chalice — what it actually is, is a demonstration that architecture can be sculpture at urban scale. The external ramp spiralling around the structure offers one of the finest views of Rio's skyline from any point in the metropolitan area — across the bay, with the Sugarloaf and Corcovado framed together in a single panorama that is impossible from within Rio.\n\nThe interior houses the collection of the João Sattamini Foundation — Brazilian contemporary art from the 1950s to the present — but the building itself is the main event. Even if you have no particular interest in contemporary art, the spatial experience of moving through Niemeyer's structure is worth the crossing alone.\n\nThe Fortaleza de Santa Cruz da Barra is one of the oldest military fortifications in Brazil, begun in the 1550s to defend the entrance to Guanabara Bay against French and later Dutch and British incursions. The fort remained in active military use into the 20th century. Your guide's historical context — the colonial wars, the strategic importance of the bay, the specific events that unfolded at this location — transforms what might appear to be old walls into a vivid and concrete piece of South American colonial history.\n\nLunch is in the Icaraí beachfront district — Niterói's answer to Ipanema, with a long curve of beach and a line of restaurants and cafés facing the water. Budget USD 20–40 per person for a good meal. Your guide will recommend options based on your preferences.\n\nNot available on Mondays. The tour runs Tuesday to Sunday.\n\nIncluded: private round-trip transportation including the bridge crossing, certified local guide, MAC Niterói entrance, Fortaleza de Santa Cruz entrance, and complimentary bottled water. Lunch is not included.",
      "highlights": [
        "MAC Niterói by Oscar Niemeyer",
        "Historic military forts",
        "Spectacular Rio skyline views",
        "Oceanfront lunch location"
      ],
      "included": [
        "Private transportation",
        "Certified guide from Rio (English)",
        "Museum and fort entrance",
        "Pickup and drop-off anywhere in Rio (hotels, Airbnbs, airports, and the cruise port)",
        "Complimentary bottled water"
      ],
      "notIncluded": [
        "Lunch and drinks",
        "Optional helicopter or boat tours",
        "Gratuities"
      ],
      "bookingBlockedWeekdays": [
        "monday"
      ],
      "restrictions": "Not available Mondays",
      "faqs": [
        {
          "q": "How do we cross to Niterói -- is the ferry included or do we go by car?",
          "a": "Your private vehicle takes you across via the Rio-Niterói Bridge, the longest bridge in South America at 13.3km. The bridge crossing over Guanabara Bay offers spectacular views of Rio's skyline and is itself a highlight. The return can optionally be made by ferry for those who prefer the bay crossing by water -- ask your guide."
        },
        {
          "q": "Is this tour available every day?",
          "a": "Not available on Mondays -- the MAC Niterói museum is closed on Mondays. The tour runs Tuesday to Sunday."
        },
        {
          "q": "What is the MAC Niterói museum and why is it architecturally significant?",
          "a": "The MAC (Museum of Contemporary Art) Niterói was designed by Oscar Niemeyer in 1996 and resembles a flying saucer hovering over the cliffside above Guanabara Bay. It's considered one of the world's most distinctive museum buildings. The view of Rio's skyline from the museum's ramp alone is worth the trip."
        },
        {
          "q": "Are the historic military forts interesting even for non-history enthusiasts?",
          "a": "Absolutely. The Fortaleza de Santa Cruz and Fortaleza de São Luís offer some of the most dramatic views available anywhere in the Rio metropolitan area -- looking directly back at the city from across the bay. The historical context your guide provides brings the strategic importance of these 16th-17th century forts to life."
        },
        {
          "q": "Is lunch near Niterói included?",
          "a": "Lunch is not included but an oceanfront lunch stop is built into the itinerary. Your guide will take you to the Icaraí beachfront area where excellent seafood restaurants overlook the bay with direct views of Rio. Budget USD 20-40 per person for a good lunch with drinks."
        }
      ],
      "tips": [
        "The MAC Niterói sits on a clifftop above Guanabara Bay — the view of Rio's skyline from the museum's external ramp is one of the best in the entire metropolitan area, worth lingering over.",
        "The Rio–Niterói Bridge crossing (13.3 km) offers spectacular bay views from the car. Have your camera ready for the approach.",
        "The Fortaleza de Santa Cruz dates from the 16th century — your guide's historical context transforms what could be just old walls into a vivid story of Rio's colonial past and strategic importance.",
        "An oceanfront lunch stop in Icaraí is built into the itinerary. Bring USD 20–40 per person for a good meal with drinks.",
        "Not available on Mondays — MAC Niterói is closed. The tour runs Tuesday to Sunday."
      ]
    },
    "modern-rio-museum-tomorrow": {
      "id": "Modern Rio: Museum of Tomorrow & Samba School Behind the Scenes",
      "slug": "modern-rio-museum-tomorrow",
      "imageSlug": "modern-rio-museum-tomorrow",
      "title": "Modern Rio: Museum of Tomorrow & Samba School Behind the Scenes",
      "shortDescription": "Explore Rio's innovative Museum of Tomorrow, South America's largest aquarium, and go behind the scenes of Carnival.",
      "fullDescription": "The port district of Rio de Janeiro — the area around Praça Mauá and the old harbor — sat largely derelict for decades, a relic of an industrial past that the city had moved beyond. For the 2016 Olympic Games, Rio invested heavily in its revitalization: a new boulevard, new tram line, new museums, and a new aquarium transformed the area into one of the most interesting cultural districts in South America. The Modern Rio tour explores the best of it.\n\nThe Museum of Tomorrow (Museu do Amanhã) is the centerpiece — a Santiago Calatrava building completed in 2015 that has become one of Rio's most photographed structures. The Spanish architect's cantilevered steel and concrete design, with moving solar panels that track the sun, extends over the bay like a creature in motion. Inside, the museum is an immersive exploration of sustainability, climate science, and humanity's relationship with the planet — not a static collection of objects, but a sequence of interactive environments that require at least 90 minutes to experience properly. It is one of the few museums in Rio built around ideas rather than objects.\n\nAquaRio is South America's largest aquarium, opened in 2016 in a converted industrial building adjacent to the Museum of Tomorrow. The 8,000 animals across 350 species include the signature submarine tunnel — a 20-meter walk-through tube with sharks, rays, and large pelagic fish swimming overhead and on either side. Budget at least 60 minutes.\n\nThe behind-the-scenes visit to a Rio Carnival samba school is the most unusual element of the tour — and for many visitors, the most memorable. Carnival is not a spontaneous event. It is the result of year-round preparation by Rio's samba schools (escolas de samba), each of which has thousands of members working through the year on floats, costumes, music, and choreography for a 70-minute performance that will be judged by a panel of experts. The visit takes you into the galpão — the warehouse where the floats are constructed — and gives you access to the people, the process, and the scale of what Carnival actually involves. Available Tuesday to Saturday; if your tour falls on a Sunday or Monday this portion is adjusted.\n\nThe National Historical Museum, housed in a colonial fortress complex at the edge of the port district, covers 500 years of Brazilian history through one of South America's largest collections of historical artifacts, weapons, carriages, and documents.\n\nNot available on Mondays. The tour runs Tuesday to Sunday.\n\nIncluded: private door-to-door transportation, certified local guide, Museum of Tomorrow entrance, AquaRio entrance, samba school visit, National Historical Museum entrance, and complimentary bottled water. Meals are not included.",
      "highlights": [
        "Museum of Tomorrow",
        "AquaRio aquarium",
        "National Historical Museum",
        "Carnival samba school behind-the-scenes"
      ],
      "included": [
        "Private transportation",
        "Certified local guide (English)",
        "All museum entrance fees",
        "Pickup and drop-off anywhere in Rio (hotels, Airbnbs, airports, and the cruise port)",
        "Complimentary bottled water"
      ],
      "notIncluded": [
        "Meals and drinks",
        "Gratuities"
      ],
      "bookingBlockedWeekdays": [
        "monday"
      ],
      "restrictions": "Not available Mondays. Carnival experience Tuesday-Saturday only.",
      "faqs": [
        {
          "q": "What is the Museum of Tomorrow and is it worth visiting?",
          "a": "The Museum of Tomorrow (Museu do Amanhã) was designed by Santiago Calatrava and opened in 2015. It explores humanity's possible futures through stunning interactive exhibits covering science, environment, and technology. The building itself -- a white futuristic structure extending over Guanabara Bay -- is an architectural landmark. Highly recommended for all ages."
        },
        {
          "q": "Is the Carnival samba school visit available year-round?",
          "a": "The behind-the-scenes Carnival samba school experience is available Tuesday to Saturday. It's not available on Sundays or Mondays. During the month of February (Carnival season), schedules may vary -- contact us to confirm availability for your specific date."
        },
        {
          "q": "Is this tour available every day?",
          "a": "Not available on Mondays -- the Museum of Tomorrow and National Historical Museum are closed on Mondays. The Carnival experience is additionally only available Tuesday to Saturday."
        },
        {
          "q": "What is AquaRio and is it suitable for adults without children?",
          "a": "AquaRio is South America's largest aquarium with over 8,000 marine animals including sharks, rays, and sea turtles. It's an excellent experience for adults -- the submarine tunnel and deep-sea exhibits are genuinely impressive. You don't need children in the group to enjoy it."
        },
        {
          "q": "What's the best way to experience the samba school visit?",
          "a": "The samba school visit works best when you engage with the artisans and ask questions through your guide. These are the people who spend months crafting the elaborate floats and costumes for Carnival. The energy in the workshop is electric even off-season."
        }
      ],
      "tips": [
        "The Museum of Tomorrow is interactive and genuinely immersive — allow at least 90 minutes inside. Don't rush it for the sake of the other attractions.",
        "The Carnival samba school visit is available Tuesday to Saturday only. If your tour falls on a Sunday or Monday, this portion of the experience is replaced — confirm when booking.",
        "AquaRio is South America's largest aquarium — the submarine tunnel walk-through with sharks and rays overhead is the highlight. Budget at least 60 minutes.",
        "The port district (Porto Maravilha) where these attractions are clustered was completely revitalized for the 2016 Olympics — your guide's urban history context adds a fascinating layer to the visit.",
        "Not available on Mondays — Museum of Tomorrow is closed. The tour runs Tuesday to Sunday."
      ]
    },
    "buzios-riviera": {
      "id": "Búzios Day Trip from Rio",
      "isCustom": true,
      "slug": "buzios-riviera",
      "imageSlug": "buzios-riviera",
      "title": "Búzios Day Trip from Rio",
      "shortDescription": "A private day trip to Búzios, the chic beach town on the coast east of Rio — arranged on request, tailored to your dates and quoted directly.",
      "fullDescription": "Búzios is a former fishing village turned chic beach town on the coast east of Rio, known for its string of beaches and the cobblestoned Rua das Pedras waterfront. We arrange this as a private day trip from Rio on request — dates, timing and inclusions are tailored and quoted directly, as we currently run Búzios by request rather than on a fixed schedule. An optional boat trip to see the beaches from the water can be added on request.",
      "highlights": [
        "Private day trip to Búzios, tailored to your dates",
        "Chic beach town with dozens of beaches and the Rua das Pedras waterfront",
        "Certified guide and private transport from Rio",
        "Arranged on request — timing and inclusions built around your group"
      ],
      "included": [
        "Private transportation from Rio with professional driver",
        "Certified guide from Rio (English)",
        "Pickup and drop-off in Rio (hotels, Airbnbs, and the cruise port)",
        "Complimentary bottled water"
      ],
      "notIncluded": [
        "Meals and drinks",
        "Beach club or boat-tour tickets (quoted with your itinerary)",
        "Gratuities (optional)"
      ],
      "duration": "Full day (on request)",
      "recommendations": "Búzios is roughly a 2.5-hour drive from Rio each way, so it works best as a full day. Contact us with your dates and group size for a tailored quote.",
      "ctaText": "Request a Quote",
      "faqs": [
        {
          "q": "Is Búzios available as a fixed tour?",
          "a": "We currently offer Búzios on request. Tell us your dates and group size and we'll build a private day trip and send a quote."
        },
        {
          "q": "How far is Búzios from Rio?",
          "a": "Roughly a 2.5-hour drive each way along the coast, so it works best as a full-day private trip."
        }
      ],
      "tips": [
        "Búzios works best as a full-day private trip — roughly 2.5 hours each way along the coast.",
        "Tell us your dates, group size and interests and we'll build the itinerary and send a transparent quote."
      ]
    },
    "custom-tour": {
      "badge": "Fully customizable",
      "id": "Your Rio, Your Way: Custom Private Tour",
      "isCustom": true,
      "slug": "custom-tour",
      "imageSlug": "custom-tour",
      "title": "Your Rio, Your Way: Custom Private Tour",
      "shortDescription": "Can't find exactly what you're looking for? Design your own Rio experience. Tell us your interests, and we'll craft a personalized itinerary just for you.",
      "fullDescription": "Every traveler is unique, and sometimes the perfect tour doesn't exist on any list – until you create it. With our Custom Private Tour, you're in the driver's seat. Want to combine a sunrise hike with a local food market and end at a hidden beach? Done. Interested in architecture, street art, and live music venues? We'll make it happen. Share your interests, time constraints, and must-sees, and our expert local guides will design a tailor-made experience that fits you perfectly. From off-the-beaten-path discoveries to bucket-list landmarks, your Rio adventure starts with a conversation. Whether you're celebrating a special occasion, traveling with specific needs, or simply want something different – we've got you covered.",
      "highlights": [
        "100% customizable itinerary based on your interests",
        "Expert local guide who adapts to your pace and style",
        "Combine any attractions, neighborhoods, or experiences",
        "Flexible duration from half-day to multi-day adventures",
        "Perfect for special occasions, unique interests, or accessibility needs",
        "We handle all logistics, tickets, and reservations"
      ],
      "included": [
        "Private transportation with professional driver",
        "Certified local guide in your language",
        "Personalized itinerary planning consultation",
        "Pickup and drop-off anywhere in Rio (hotels, Airbnbs, airports, and the cruise port)",
        "Local tips, recommendations, and insider access",
        "Flexible scheduling and real-time adjustments",
        "Complimentary bottled water"
      ],
      "notIncluded": [
        "Attraction tickets (quoted separately based on your itinerary)",
        "Meals and drinks (can be arranged upon request)",
        "Gratuities (optional)"
      ],
      "duration": "Flexible (4-10+ hours)",
      "recommendations": "Contact us at least 48 hours in advance so we can craft the perfect experience for you. The more you share about your interests, the better we can tailor your day.",
      "ctaText": "Start Planning",
      "faqs": [
        {
          "q": "How does the Custom Tour work -- what's the process?",
          "a": "It starts with a conversation. Contact us via WhatsApp or email with your interests, group size, available dates, and any must-see items. Our team will design a personalized itinerary for your review, adjust based on your feedback, and confirm once you're satisfied. There's no charge for the planning process."
        },
        {
          "q": "What's the minimum and maximum duration for a Custom Tour?",
          "a": "Custom Tours range from 4 hours (half-day) to multi-day adventures. Most groups opt for a full day (8-10 hours). For multi-day tours exploring Rio state beyond the city -- Petrópolis, Búzios, Ilha Grande, Paraty -- we can design a complete itinerary spanning several days."
        },
        {
          "q": "How is the pricing determined for a Custom Tour?",
          "a": "Pricing varies based on itinerary, duration, group size, and specific attractions selected (some have additional entrance fees). We'll provide a complete transparent quote before you confirm. There are no surprise costs on the day of the tour."
        },
        {
          "q": "Can the Custom Tour accommodate people with mobility limitations?",
          "a": "Yes -- this is one of the key reasons guests choose the Custom Tour. We can design an itinerary that avoids stairs, steep terrain, or long walks, while still delivering an exceptional Rio experience. Please mention any mobility considerations when you contact us."
        },
        {
          "q": "Can we combine multiple tours or attractions not on your standard menu?",
          "a": "Absolutely -- that's the point of the Custom Tour. Whether it's a specific restaurant, neighborhood, event, architectural landmark, or activity not covered in our standard tours, we can incorporate it. Rio has far more to offer than any fixed tour can cover, and our guides' local knowledge is extensive."
        }
      ],
      "tips": [
        "The more detail you share with us before the tour, the better we can design it. Tell us your interests, must-sees, dietary needs, mobility considerations, and anything you've already seen in Rio.",
        "Custom tours range from 4 hours (half-day) to multi-day itineraries covering Rio state — Petrópolis, Búzios, Ilha Grande, Paraty. Let us know your available time when you reach out.",
        "If you have mobility limitations, mention this upfront — we can design a fully accessible itinerary that avoids stairs, steep terrain, and long walks while still delivering an exceptional experience.",
        "There is no charge for the planning process. Contact us via WhatsApp or email, we'll design the itinerary, adjust based on your feedback, and confirm once you're satisfied.",
        "Pricing varies by itinerary, duration, group size, and specific attractions. We'll provide a complete transparent quote before you confirm — no surprise costs on the day."
      ]
    }
  },
  "es": {
    "essential-rio": {
      "badge": "Más vendido",
      "id": "El Río Esencial: Íconos, Cultura y Joyas Ocultas",
      "slug": "essential-rio",
      "imageSlug": "essential-rio",
      "title": "El Río Esencial: Íconos, Cultura y Joyas Ocultas",
      "shortDescription": "Tour privado de día completo por Río de Janeiro con el Cristo Redentor, el Pan de Azúcar y los barrios históricos de la ciudad, con guía acreditado, conductor profesional y entradas organizadas con antelación.",
      "fullDescription": "Todos los tours privados de Be Free se pueden personalizar. El itinerario que aparece a continuación es nuestra propuesta para el día, pero las atracciones, el orden de las visitas y el ritmo del recorrido pueden modificarse antes o durante el tour.\n\nEssential Rio es nuestro tour privado más completo para conocer Río de Janeiro, especialmente pensado para quienes visitan la ciudad por primera vez. El recorrido combina el Cristo Redentor (Christ the Redeemer), el Pan de Azúcar (Sugarloaf Mountain) y algunos de los barrios y lugares culturales más representativos de Río, con transporte privado y la libertad de descubrir la ciudad al ritmo de tu grupo.\n\nEl tour cuenta con dos profesionales dedicados: un guía de turismo acreditado, que acompaña al grupo durante las visitas, y un conductor profesional responsable del vehículo. De este modo, el guía permanece contigo durante toda la experiencia, sin tener que alejarse para estacionar o atender el transporte, mientras el conductor organiza los desplazamientos y los siguientes puntos de encuentro.\n\nEl itinerario recomendado suele comenzar por los dos grandes símbolos de Río. Desde el Cristo Redentor, rodeado por la Floresta de Tijuca (Tijuca Forest), se entiende mejor cómo las montañas, las playas y los distintos barrios forman parte de una misma ciudad. El Pan de Azúcar ofrece una perspectiva diferente, con vistas a la bahía de Guanabara (Guanabara Bay), la costa y las montañas que rodean Río. Las entradas se organizan con antelación e incluyen acceso sin fila a los teleféricos del Pan de Azúcar.\n\nDespués de los principales miradores, muchos visitantes eligen continuar hacia Santa Teresa y la Escalera de Selarón (Selarón Steps). Santa Teresa tiene un ambiente más tranquilo, con calles en las laderas, antiguas casas, talleres de artistas, cafés y restaurantes. Muy cerca, la Escalera de Selarón conecta Santa Teresa con Lapa y se ha convertido en una de las obras de arte público más reconocibles de Río de Janeiro.\n\nSegún el día, los horarios de apertura y los intereses del grupo, el recorrido también puede incluir el Real Gabinete Portugués de Lectura (Royal Portuguese Reading Room) y la Catedral Metropolitana de Río de Janeiro (Metropolitan Cathedral). Ambos lugares muestran dos caras muy distintas del centro de Río: la decoración histórica del Real Gabinete y la arquitectura moderna, marcada por sus grandes vitrales, de la Catedral.\n\nEstas paradas son sugerencias, no obligaciones. Puedes dedicar más tiempo a una atracción, hacer una pausa para almorzar, eliminar una visita o sustituir parte del itinerario por otro barrio o experiencia. El orden también puede cambiar según el clima, el tráfico y las condiciones del día. En un tour privado, conocer bien Río no significa solamente saber adónde ir, sino también reconocer cuándo un cambio de plan puede mejorar el recorrido.\n\nEl tour es exclusivo para tu grupo, sin transporte compartido, sin otros participantes y sin necesidad de seguir el ritmo de desconocidos. Essential Rio ofrece una introducción completa a la ciudad, manteniendo la flexibilidad necesaria para que el día se adapte realmente a ti.",
      "highlights": [
        "Cristo Redentor",
        "Pan de Azúcar y sus teleféricos",
        "Santa Teresa, el barrio bohemio en las laderas de Río",
        "Escalera de Selarón",
        "Catedral Metropolitana",
        "Real Gabinete Portugués de Lectura (solo días de semana)"
      ],
      "included": [
        "Transporte privado con conductor profesional, exclusivo para tu grupo",
        "Guía de turismo acreditado (español) que acompaña a tu grupo durante todo el día",
        "Entradas al Cristo Redentor, reservadas con antelación para el horario de subida que prefieras, según disponibilidad",
        "Entradas sin fila a los teleféricos del Pan de Azúcar",
        "Recogida y regreso en cualquier lugar de Río (hoteles, Airbnbs, aeropuertos y terminal de cruceros)",
        "Agua mineral de cortesía"
      ],
      "notIncluded": [
        "Comidas y bebidas",
        "Propinas"
      ],
      "faqs": [
        {
          "q": "¿El itinerario es fijo?",
          "a": "No. El itinerario que aparece en esta página es nuestra versión recomendada del tour Essential Rio, pero el recorrido se puede personalizar por completo. Es posible cambiar el orden de las visitas, dedicar más tiempo a determinados lugares, eliminar atracciones o sustituir parte del itinerario por otros barrios y experiencias. Los cambios pueden acordarse con antelación o realizarse con el guía durante el tour."
        },
        {
          "q": "¿El guía y el conductor son la misma persona?",
          "a": "No. El tour incluye dos profesionales diferentes: un guía de turismo acreditado, que acompaña al grupo durante las visitas, y un conductor profesional responsable del vehículo y de los desplazamientos. Así, el guía puede permanecer contigo durante toda la experiencia, mientras el conductor se ocupa del tráfico, el estacionamiento y los siguientes puntos de encuentro."
        },
        {
          "q": "¿Las entradas están incluidas?",
          "a": "Sí. Las entradas para el Cristo Redentor y el Pan de Azúcar están incluidas y se organizan con antelación. En el Pan de Azúcar, las entradas incluyen acceso sin fila a los teleféricos. En el Cristo Redentor, tu entrada se reserva por adelantado para el horario de subida que prefieras, según disponibilidad, y tu guía se encarga del proceso el día del tour."
        },
        {
          "q": "¿Tendremos que hacer fila?",
          "a": "En el Pan de Azúcar, el tour incluye acceso sin fila a los teleféricos. En el Cristo Redentor, las entradas se reservan con antelación para un horario de subida en tren o van, elegido según tu preferencia y la disponibilidad, y tu guía se ocupa del canje del voucher y del embarque para que no tengas que gestionar nada. El acceso sigue el mismo procedimiento oficial para todos los visitantes, y tenerlo organizado de antemano es lo que mantiene el ritmo del día."
        },
        {
          "q": "¿El tour se comparte con otros viajeros?",
          "a": "No. Este es un tour completamente privado y exclusivo para tu grupo. El guía, el conductor, el vehículo y el itinerario no se comparten con otros viajeros."
        },
        {
          "q": "¿El recorrido puede adaptarse para personas mayores, niños o visitantes con movilidad reducida?",
          "a": "Sí, siempre que sea posible. Al tratarse de un tour privado, el ritmo, el tiempo de caminata y el itinerario pueden adaptarse a las necesidades del grupo. Recomendamos informar cualquier necesidad de movilidad antes de reservar para que podamos sugerir el recorrido más adecuado y explicar las condiciones de accesibilidad de cada atracción."
        },
        {
          "q": "¿El Real Gabinete Portugués de Lectura siempre está abierto?",
          "a": "El Real Gabinete Portugués de Lectura abre solo de lunes a viernes. Si tu tour cae en fin de semana, tu guía sugerirá una alternativa cultural para ese día."
        }
      ],
      "tips": [
        "Este es un tour de ocho horas que combina desplazamientos en vehículo privado con períodos de caminata en las atracciones. Siempre que sea posible, el ritmo del recorrido y la cantidad de caminata pueden adaptarse a las necesidades del grupo.",
        "Los lugares que aparecen en el itinerario son sugerencias y no es obligatorio visitarlos todos. Las paradas, el orden de las visitas y el tiempo dedicado a cada atracción pueden modificarse antes o durante el tour.",
        "Normalmente recomendamos comenzar temprano, especialmente durante los períodos de mayor afluencia. La mejor hora de inicio puede variar según la fecha, la disponibilidad de las atracciones y el itinerario elegido para tu grupo.",
        "El Real Gabinete Portugués de Lectura abre solo de lunes a viernes. Si tu tour cae en fin de semana, tu guía sugerirá una alternativa igualmente interesante.",
        "La Escalera de Selarón luce mejor con la luz de la mañana. Pídele a tu guía que planifique esa parada teniendo eso en cuenta.",
        "Usa ropa ligera en días calurosos y calzado cómodo — los adoquines de Santa Teresa y la Escalera de Selarón son irregulares."
      ]
    },
    "rio-express": {
      "badge": "Medio día",
      "id": "Río Express: Cristo y Pan de Azúcar en 5 Horas",
      "slug": "rio-express",
      "imageSlug": "rio-flash-5h",
      "title": "Río Express: Cristo y Pan de Azúcar en 5 Horas",
      "shortDescription": "Tour privado de cinco horas por el Cristo Redentor y el Pan de Azúcar, con guía acreditado, conductor profesional y entradas organizadas con antelación. Pensado para pasajeros de cruceros y viajeros con poco tiempo.",
      "fullDescription": "Rio Express es un tour privado de cinco horas por el Cristo Redentor (Christ the Redeemer) y el Pan de Azúcar (Sugarloaf Mountain), creado para quienes desean conocer los dos grandes símbolos de Río de Janeiro en menos tiempo. Es especialmente adecuado para pasajeros de cruceros, viajeros de negocios y visitantes que solo dispongan de una mañana o una tarde.\n\nEl tour cuenta con dos profesionales dedicados: un guía de turismo acreditado, que acompaña al grupo durante todas las visitas, y un conductor profesional responsable del transporte. Mientras el guía permanece contigo, el conductor se ocupa del vehículo, el tráfico, el estacionamiento y los siguientes puntos de encuentro, una ventaja importante cuando cada hora cuenta.\n\nCinco horas son suficientes para visitar ambos lugares cuando el día se planifica cuidadosamente. Rio Express mantiene el itinerario centrado en el Cristo Redentor y el Pan de Azúcar, sin intentar comprimir un recorrido completo de día entero en una experiencia más corta. El orden y los horarios pueden adaptarse según el lugar de recogida, el tráfico, el clima y las condiciones de las atracciones.\n\nDesde el Cristo Redentor, rodeado por la Floresta de Tijuca (Tijuca Forest), se puede observar cómo las montañas, las playas, los barrios y la bahía forman el paisaje de Río. Las entradas están incluidas y se reservan con antelación para un horario de subida en tren o van, elegido según tu preferencia y la disponibilidad, y tu guía se ocupa del canje del voucher y del embarque.\n\nEl Pan de Azúcar ofrece una perspectiva diferente de la ciudad, con vistas a la bahía de Guanabara (Guanabara Bay), la costa y las montañas que rodean Río. La visita incluye acceso sin fila a los teleféricos, con parada en el Morro da Urca antes de continuar hasta la cima del Pan de Azúcar.\n\nPara pasajeros de cruceros, la recogida puede realizarse directamente en la terminal de Pier Mauá. Al reservar, indica la hora oficial de regreso a bordo para que podamos recomendar la hora de inicio adecuada y planificar un margen prudente para el regreso. También ofrecemos recogida en hoteles y otros alojamientos dentro de la zona atendida.\n\nEste es un itinerario concentrado, no una versión acelerada de un tour de día completo. El ritmo puede adaptarse al grupo y el orden de las atracciones puede cambiar cuando esto permita una visita más eficiente. Las paradas adicionales, sin embargo, dependen del tiempo disponible y de las condiciones operativas del día.\n\nRio Express es ideal para quienes buscan transporte privado, atención personalizada y una visita bien organizada a los dos lugares más emblemáticos de Río sin dedicar un día entero al recorrido.",
      "highlights": [
        "Cristo Redentor",
        "Pan de Azúcar y sus teleféricos"
      ],
      "included": [
        "Transporte privado con aire acondicionado y conductor profesional, exclusivo para tu grupo",
        "Guía de turismo acreditado (español) que acompaña a tu grupo durante todas las visitas",
        "Entradas al Cristo Redentor, reservadas con antelación para el horario de subida que prefieras, según disponibilidad",
        "Entradas sin fila a los teleféricos del Pan de Azúcar",
        "Recogida y regreso en la terminal de cruceros Pier Mauá, hoteles, Airbnbs y aeropuertos de Río",
        "Agua mineral de cortesía"
      ],
      "notIncluded": [
        "Comidas y bebidas",
        "Propinas"
      ],
      "faqs": [
        {
          "q": "¿Cinco horas son suficientes para visitar el Cristo Redentor y el Pan de Azúcar?",
          "a": "Sí, siempre que el itinerario se mantenga centrado en las dos atracciones. El transporte privado, la planificación previa y la presencia de un guía y un conductor separados permiten aprovechar mejor el tiempo disponible. El tráfico, el clima y las condiciones de las atracciones pueden afectar el orden y el ritmo de las visitas."
        },
        {
          "q": "¿Este tour es solo para pasajeros de cruceros?",
          "a": "No. Rio Express también es adecuado para quienes solo tienen una mañana o una tarde libre, realizan una estancia corta o un viaje de negocios, o desean conocer los dos principales símbolos de Río sin hacer un tour de día completo."
        },
        {
          "q": "¿Ofrecen recogida en la terminal de cruceros?",
          "a": "Sí. La recogida puede realizarse en la terminal de Pier Mauá. Al reservar, indica el nombre del barco, la hora de llegada y la hora oficial de regreso a bordo."
        },
        {
          "q": "¿Regresaremos al barco a tiempo?",
          "a": "La hora de inicio, el itinerario y el regreso se planifican según la hora oficial de regreso a bordo, incluyendo un margen de seguridad adecuado a los requisitos del puerto y a las condiciones previstas del tráfico. Los acontecimientos excepcionales fuera de nuestro control aún pueden afectar las vías, por lo que es esencial facilitar los datos correctos del barco."
        },
        {
          "q": "¿El guía y el conductor son la misma persona?",
          "a": "No. El tour incluye dos profesionales diferentes: un guía de turismo acreditado, que acompaña al grupo, y un conductor profesional responsable del transporte. De esta manera, el guía permanece contigo mientras el conductor se ocupa del vehículo, el estacionamiento y los siguientes puntos de encuentro."
        },
        {
          "q": "¿Las entradas están incluidas?",
          "a": "Sí. Las entradas para el Cristo Redentor y el Pan de Azúcar están incluidas y se organizan con antelación. En el Pan de Azúcar, las entradas incluyen acceso sin fila a los teleféricos. En el Cristo Redentor, tu entrada se reserva por adelantado para el horario de subida que prefieras, según disponibilidad, y tu guía se encarga del proceso el día del tour."
        },
        {
          "q": "¿Tendremos que hacer fila?",
          "a": "En el Pan de Azúcar, el tour incluye acceso sin fila a los teleféricos. En el Cristo Redentor, las entradas se reservan con antelación para un horario de subida en tren o van, elegido según tu preferencia y la disponibilidad, y tu guía se ocupa del canje del voucher y del embarque para que no tengas que gestionar nada. El acceso sigue el mismo procedimiento oficial para todos los visitantes, y tenerlo organizado de antemano es lo que mantiene el ritmo de un tour de cinco horas."
        },
        {
          "q": "¿El itinerario se puede personalizar?",
          "a": "El orden y el ritmo de las visitas pueden adaptarse según tu horario y las condiciones del día. Como este es un tour concentrado de cinco horas, añadir otras atracciones depende del tiempo disponible y no siempre puede garantizarse."
        },
        {
          "q": "¿El tour se comparte con otros viajeros?",
          "a": "No. El guía, el conductor, el vehículo y el itinerario son exclusivos para tu grupo."
        },
        {
          "q": "¿El tour puede adaptarse para niños, personas mayores o visitantes con movilidad reducida?",
          "a": "Sí, siempre que sea posible. Informa cualquier necesidad de movilidad antes de reservar para que podamos explicar las condiciones de cada atracción y planificar el ritmo más adecuado."
        }
      ],
      "tips": [
        "Este es un tour concentrado de cinco horas por el Cristo Redentor y el Pan de Azúcar. No incluye los barrios y lugares culturales adicionales presentes en nuestros itinerarios de día completo.",
        "El orden de las atracciones puede cambiar según el tráfico, el clima, las condiciones de funcionamiento y el lugar de recogida.",
        "Las entradas de ambas atracciones se organizan con antelación. En el Cristo Redentor, tu horario de subida en tren o van se reserva por adelantado según tu preferencia y la disponibilidad, y tu guía se ocupa del canje del voucher.",
        "Para recogidas en el puerto, indica el nombre del barco, la hora prevista de llegada y la hora oficial de regreso a bordo. Recomendaremos la hora de inicio y planificaremos el regreso según el horario del barco, los requisitos del puerto y las condiciones previstas del tráfico.",
        "La experiencia combina desplazamientos en vehículo privado con períodos de caminata y tiempo de pie en las atracciones. Siempre que sea posible, el ritmo puede adaptarse al grupo.",
        "Las paradas adicionales no están garantizadas y dependen del tráfico, las condiciones de las atracciones y el tiempo disponible."
      ]
    },
    "first-light-sunrise": {
      "badge": "Amanecer",
      "id": "Río al Amanecer: Pan de Azúcar y Cristo al Alba",
      "slug": "amanecer-rio",
      "imageSlug": "first-light-sunrise",
      "title": "Río al Amanecer: Pan de Azúcar y Cristo al Alba",
      "shortDescription": "Experimenta el amanecer más impresionante de Río desde el Pan de Azúcar, seguido de acceso temprano al Cristo Redentor.",
      "fullDescription": "Hay un momento en Río que fotógrafos y madrugadores describen como transformador: estar en la cima del Pan de Azúcar en la oscuridad, viendo el cielo sobre la Bahía de Guanabara comenzar a transformarse de negro a azul profundo y luego ámbar mientras el sol sale detrás de la Serra do Mar. El tour privado Rio at First Light fue diseñado alrededor de este único momento — y de la precisión logística necesaria para alcanzarlo.\n\nTu recogida es a las 4:00 AM. Tu vehículo privado llega a tu hotel, Airbnb o alojamiento del barco de cruceros exactamente a tiempo. El trayecto al Pan de Azúcar dura aproximadamente 20 minutos a esa hora, con la ciudad completamente vacía y la bahía visible bajo la autopista en la oscuridad. El primer teleférico del día te lleva a la estación intermedia de 220 metros en el Morro da Urca, y el segundo a la cima de 396 metros, llegando antes del amanecer.\n\nLo que sucede después depende de la mañana. En días despejados, la bahía abajo se aclara progresivamente a medida que el sol se acerca al horizonte — primero un índigo profundo, luego violeta, luego los primeros bordes naranjas aparecen sobre las montañas del otro lado de la bahía. El momento del amanecer en sí, cuando la primera luz directa golpea la cima y la bahía se vuelve cobriza y dorada, dura aproximadamente 15 minutos. En días parcialmente nublados, las nubes se convierten en el espectáculo — capas de color a diferentes alturas, la ciudad emergiendo gradualmente de la oscuridad abajo.\n\nA esta hora, la cima tiene una calidad que nunca tiene más tarde en el día: silencio. Sin multitudes, sin grupos, sin colas. Solo la bahía, el cielo y Río extendida en todas direcciones mientras la ciudad despierta bajo tus pies.\n\nDespués del amanecer en el Pan de Azúcar, el tour privado continúa al Cristo Redentor en el Corcovado. El acceso temprano por la mañana es una de las ventajas más significativas de este tour. Para cuando los grupos estándar de excursión diurna comienzan a llegar — generalmente entre las 9:00 y las 10:00 AM — ya habrás estado allí y te habrás ido. La estatua de 38 metros a la luz de la mañana temprana, con la ciudad relativamente tranquila abajo y algo de niebla a veces derivando por la Floresta de Tijuca en las laderas, es una experiencia diferente a la visita del mediodía.\n\nLas entradas sin fila están incluidas para el teleférico del Pan de Azúcar, y las entradas al Cristo Redentor. El tour está disponible solo los sábados, cuando el horario del primer teleférico acomoda el inicio a las 4:00 AM. Los cupos del sábado se agotan semanas antes — reserva con anticipación.\n\nIncluido: transporte privado puerta a puerta, guía local certificado, entrada sin fila al Pan de Azúcar, entrada al Cristo Redentor, y agua embotellada de cortesía. El desayuno no está incluido pero tu guía puede recomendarte excelentes opciones cerca del Cristo después del amanecer.\n\nEste tour no es para todos — el inicio a las 4:00 AM requiere compromiso. Para quienes estén dispuestos a poner dos alarmas y sacrificar una mañana de sueño, la recompensa es Río en su estado más extraordinario.",
      "highlights": [
        "Amanecer exclusivo desde el Pan de Azúcar",
        "Visita matutina temprana al Cristo Redentor",
        "Oportunidades de fotografía profesional"
      ],
      "included": [
        "Transporte privado",
        "Guía local certificado (español)",
        "Entradas al Cristo Redentor",
        "Entradas sin fila al teleférico del Pan de Azúcar",
        "Recogida y regreso en cualquier lugar de Río (hoteles, Airbnbs, aeropuertos y terminal de cruceros)",
        "Agua mineral"
      ],
      "notIncluded": [
        "Comidas y bebidas",
        "Propinas"
      ],
      "bookingBlockedWeekdays": [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday"
      ],
      "faqs": [
        {
          "q": "¿A qué hora comienza este tour de amanecer y vale la pena levantarse tan temprano?",
          "a": "El tour comienza a las 4:00 AM para llegar a la cima del Pan de Azúcar antes del alba. Ver salir el sol sobre la Bahía de Guanabara desde la cumbre -- sin multitudes -- es una de las experiencias más extraordinarias de Río. Los viajeros lo califican constantemente como el punto culminante de todo su viaje."
        },
        {
          "q": "¿Qué días está disponible el tour de amanecer?",
          "a": "El tour Río al Amanecer solo está disponible los sábados. Esto es intencional -- el acceso exclusivo de madrugada al Pan de Azúcar opera en un horario limitado. Reserva con anticipación ya que los cupos del sábado se agotan rápido."
        },
        {
          "q": "¿Es seguro moverse en Río a las 4:00 AM?",
          "a": "Sí. Tu conductor y guía privado te recogerán directamente en tu hotel, por lo que viajarás en vehículo privado en todo momento. No estarás esperando en calles ni usando transporte público."
        },
        {
          "q": "¿Qué ropa debo llevar para un tour a las 4 AM?",
          "a": "Lleva una chaqueta ligera -- la cumbre puede estar fresca y con brisa antes del amanecer incluso en verano. Zapatos cómodos para caminar son esenciales. A medida que avanza el día tras visitar el Cristo, capas livianas funcionan bien."
        },
        {
          "q": "¿Están incluidas todas las entradas incluyendo el acceso especial al Pan de Azúcar?",
          "a": "Sí, todas las entradas incluyendo el acceso especial de madrugada al Pan de Azúcar y la entrada al Cristo Redentor están incluidas en el precio del tour."
        }
      ],
      "tips": [
        "Tu recogida es a las 4:00 AM — pon dos alarmas. Tu guía te estará esperando en el lobby del hotel exactamente a esa hora.",
        "La cima del Pan de Azúcar puede estar ventosa y notablemente más fresca antes del amanecer, incluso en verano. Lleva una chaqueta ligera que puedas quitarte cuando el día caliente.",
        "Lleva una cámara o smartphone con buen modo de poca luz. Los colores del amanecer sobre la Bahía de Guanabara son extraordinarios — ese es el momento central del tour.",
        "Come algo ligero antes o durante el trayecto. El inicio a las 4 AM significa que el desayuno llega después — tu guía puede recomendarte buenas opciones cerca del Cristo.",
        "Este tour solo está disponible los sábados. Si necesitas reprogramar, contáctanos con la mayor anticipación posible — los cupos del sábado se agotan semanas antes."
      ]
    },
    "golden-hour-rio": {
      "badge": "Atardecer",
      "id": "Hora Dorada en Río: Cristo y Pan de Azúcar al Atardecer",
      "slug": "hora-dorada-rio",
      "imageSlug": "golden-hour-rio",
      "title": "Hora Dorada en Río: Cristo y Pan de Azúcar al Atardecer",
      "shortDescription": "Experimenta la belleza de la hora dorada de Río con visitas vespertinas al Cristo Redentor y un atardecer perfectamente programado.",
      "fullDescription": "La mejor luz de Río llega en las dos horas antes del atardecer. Los picos de granito de la ciudad capturan el sol cálido de la tarde en un ángulo que transforma cada vista — las sombras se profundizan en la cara del Pan de Azúcar, la bahía se vuelve cobriza, y el Cristo Redentor resplandece contra un cielo que va del azul al dorado, al naranja y al morado al caer la noche. El tour privado Golden Hour Rio fue diseñado alrededor de esta ventana específica de luz, cronometrado con precisión para llevarte a ambas cimas cuando las condiciones están en su punto máximo.\n\nEste no es una versión abreviada del tour de día completo. Es un itinerario diferente, diseñado para las horas de la tarde, optimizado para la fotografía y programado al minuto. El horario de inicio varía según la estación — generalmente entre las 13:00 y las 14:00 — y al reservar se confirma tu hora exacta de recogida basada en los datos de atardecer de ese día.\n\nTú eliges desde dónde ves caer el sol, y esa elección define el orden del día. La mayoría hace primero el Cristo Redentor y el atardecer desde el Pan de Azúcar: la vista de la costa es más amplia desde la cima, es el atardecer que la mayoría viene a ver, y hay tiendas y sitios para comer mientras esperas la luz. Al revés es la opción más tranquila — el Corcovado está más alto, el sol tarda más en ponerse desde allí, y hay menos gente a esa hora. Dinos cuál prefieres al reservar. Si el tiempo cambia ese día, tu guía puede invertir el orden para llevarte donde el cielo esté más despejado — esa flexibilidad es para lo que sirve un tour privado.\n\nEl Cristo Redentor a última hora de la tarde es una experiencia diferente a la visita matutina. El ángulo de la luz proyecta sombras dramáticas sobre los rasgos de la estatua, la explanada es menos concurrida que en las horas pico de la mañana, y los colores sobre la Bahía de Guanabara durante el acercamiento al atardecer son extraordinarios. El acceso sin fila al teleférico del Pan de Azúcar está incluido — el mismo acceso rápido del tour Essential Rio, porque el timing de la hora dorada es demasiado preciso para arriesgar una cola larga en el teleférico.\n\nEn el orden habitual, desde el Corcovado tu vehículo privado te lleva al Pan de Azúcar, donde el ascenso en teleférico está cronometrado para llegar a la cima de 396 metros cuando el sol se acerca al horizonte. La vista desde arriba en ese momento — la ciudad de abajo comenzando a iluminarse, la bahía reflejando los últimos colores del cielo, la silueta del Cristo Redentor visible a través del paisaje urbano — es una de las postales más fotografiadas de América del Sur. Tu guía te posicionará para los mejores ángulos y te dará el tiempo que necesitas.\n\nDespués del atardecer, la cima del Pan de Azúcar de noche tiene su propio carácter: las luces de la ciudad abajo, las estrellas arriba cuando el cielo está despejado, y el Cristo Redentor iluminado al otro lado del valle. No hay prisa por bajar. Tu guía privado y conductor te devolverán a tu hotel cuando estés listo.\n\nSi quieres extender la velada con cena después del tour, tu guía puede recomendarte excelentes restaurantes en la zona del Pan de Azúcar, Botafogo o Flamengo, y tu conductor puede llevarte directamente.\n\nIncluido: vehículo privado con aire acondicionado, conductor profesional, guía local certificado, entradas sin fila al teleférico del Pan de Azúcar y entradas al Cristo Redentor, y agua embotellada de cortesía. Las comidas no están incluidas.\n\nEl tour Golden Hour Rio es para viajeros que entienden que el timing lo cambia todo. Los mismos dos monumentos vistos con diferente luz cuentan una historia diferente — y la historia contada al atardecer es la que produce las fotografías que duran toda una vida.",
      "highlights": [
        "Cristo Redentor con luz dorada",
        "Atardecer desde el Pan de Azúcar",
        "Vistas panorámicas de playas",
        "Orientación fotográfica profesional"
      ],
      "included": [
        "Transporte privado",
        "Guía local certificado (español)",
        "Entradas al Cristo Redentor",
        "Entradas sin fila al teleférico del Pan de Azúcar",
        "Recogida y regreso en cualquier lugar de Río (hoteles, Airbnbs, aeropuertos y terminal de cruceros)",
        "Agua mineral"
      ],
      "notIncluded": [
        "Cena (paradas opcionales)",
        "Propinas"
      ],
      "faqs": [
        {
          "q": "¿Qué hace diferente al tour Hora Dorada comparado con un tour diurno estándar?",
          "a": "El momento lo es todo. El Cristo Redentor bañado en luz cálida de la tarde, seguido por ver el atardecer sobre la costa de Río desde el Pan de Azúcar -- con las luces de la ciudad encendiéndose -- es una experiencia completamente diferente a las visitas de mediodía. Las 6 horas están diseñadas específicamente en torno a la posición del sol."
        },
        {
          "q": "¿A qué hora suele comenzar el tour Hora Dorada?",
          "a": "Los horarios de inicio varían según la estación para alinearse con el atardecer. Generalmente entre la 1:00 PM y las 2:00 PM. Al reservar, confirmaremos el horario exacto según la fecha para garantizar el timing perfecto de la hora dorada."
        },
        {
          "q": "¿Es posible cenar después del tour?",
          "a": "Sí -- el tour termina en el Pan de Azúcar al caer el sol. Tu conductor puede llevarte directamente a un restaurante después. Podemos recomendarte excelentes opciones cerca del Pan de Azúcar o en cualquier parte de Río."
        },
        {
          "q": "¿Las entradas sin fila al Pan de Azúcar están incluidas?",
          "a": "Sí — las entradas sin fila del teleférico del Pan de Azúcar están incluidas, junto con las entradas al Cristo Redentor. Saltarte la cola del Pan de Azúcar importa porque la ventana del atardecer es ajustada."
        }
      ],
      "tips": [
        "El horario de inicio varía según la estación para alinearse con el atardecer — confirma tu hora exacta de recogida al reservar. Generalmente entre la 1:00 PM y las 2:00 PM.",
        "Lleva cámara o smartphone — la luz de la hora dorada sobre el Cristo y el atardecer desde la cima del Pan de Azúcar son de los momentos más fotografiados de Río. Un minitrípode vale la pena.",
        "El ascenso en teleférico al Pan de Azúcar está cronometrado para llegar a la cima justo cuando el sol empieza a bajar. Confía en el timing — tu guía sabe exactamente cuándo subir.",
        "Si quieres cenar después del tour, díselo a tu guía. La zona del Pan de Azúcar tiene excelentes restaurantes y el conductor puede llevarte directamente.",
        "El timing del atardecer es preciso — las entradas sin fila al Pan de Azúcar están incluidas específicamente para que llegues a la cima antes de que cambie la luz."
      ]
    },
    "sunset-culture-roxy": {
      "id": "Atardecer y Cultura: Íconos de Río + Show de Danza Brasileña Roxy",
      "slug": "atardecer-cultura-roxy",
      "imageSlug": "sunset-culture-roxy",
      "title": "Atardecer y Cultura: Íconos de Río + Show de Danza Brasileña Roxy",
      "shortDescription": "Un tour privado de tarde y noche por el Cristo Redentor y el Pan de Azúcar al atardecer, seguido de una cena y un espectáculo cultural brasileño en el Roxy.",
      "fullDescription": "Río al Atardecer y Roxy combina una tarde privada en el Cristo Redentor (Christ the Redeemer) y el Pan de Azúcar (Sugarloaf Mountain) con una cena y un espectáculo cultural brasileño en el Roxy. Está pensado para quienes desean conocer los lugares más emblemáticos de Río, disfrutar del cambio de luz al final del día y terminar la noche con música y danza, como una sola experiencia continua y bien organizada.\n\nLa hora de inicio varía según la fecha, la época del año y la programación del Roxy. Durante la parte turística, la experiencia cuenta con dos profesionales dedicados: un guía de turismo acreditado, que acompaña al grupo durante las visitas, y un conductor profesional responsable del transporte. Mientras el guía permanece contigo en las atracciones, el conductor se ocupa del tráfico, el estacionamiento y los siguientes puntos de encuentro.\n\nEl itinerario recomendado comienza en el Cristo Redentor, rodeado por la Floresta de Tijuca (Tijuca Forest). Desde el Corcovado se puede observar cómo las montañas, las playas, los barrios y la bahía forman el paisaje de Río. Las entradas están incluidas y se reservan con antelación para un horario de subida en tren o van, elegido según tu preferencia y la disponibilidad, y tu guía se ocupa del canje del voucher y del embarque.\n\nDesde el Cristo Redentor, el tour continúa hacia el Pan de Azúcar. Se incluyen entradas sin fila para los teleféricos, con paso por el Morro da Urca y subida hasta la cima del Pan de Azúcar. Siempre que sea posible, los horarios se planifican teniendo en cuenta la puesta de sol de la época del año, aunque la visibilidad, el clima y la calidad exacta de la luz no pueden garantizarse.\n\nDespués del Pan de Azúcar, el vehículo privado te lleva directamente al Roxy. La transición se organiza de acuerdo con la programación del espectáculo, así no tienes que buscar otro transporte ni coordinar los horarios entre las atracciones y el teatro.\n\nLa experiencia en el Roxy incluye una cena de tres platos servida en la mesa y una producción profesional de música y danza brasileñas. El espectáculo reúne ritmos y tradiciones de diferentes regiones del país, presentados por bailarines y músicos profesionales en un ambiente de teatro.\n\nDurante la parte turística, el guía puede explicar parte del contexto cultural de la música, la danza y las tradiciones que verás en el espectáculo. El Roxy, sin embargo, es una producción profesional en formato de cena con espectáculo, no una visita cultural guiada.\n\nEsta es una experiencia privada de tarde y noche para tu grupo. El tour combina dos de los principales miradores de Río, cena, espectáculo y transporte privado en un solo programa, sin que tengas que organizar cada etapa por separado.",
      "highlights": [
        "Cristo Redentor",
        "Pan de Azúcar al atardecer",
        "Espectáculo con cena brasileño en el Roxy",
        "Cena de tres platos en el Roxy"
      ],
      "included": [
        "Transporte privado con aire acondicionado durante toda la experiencia",
        "Guía de turismo acreditado (español) durante la parte turística",
        "Conductor profesional separado",
        "Entradas al Cristo Redentor, reservadas con antelación para el horario de subida que prefieras, según disponibilidad",
        "Entradas sin fila a los teleféricos del Pan de Azúcar",
        "Entrada al espectáculo con cena del Roxy",
        "Cena de tres platos en el Roxy",
        "Agua mineral de cortesía durante la parte turística",
        "Recogida y regreso en cualquier lugar de Río (hoteles, Airbnbs, aeropuertos y terminal de cruceros)"
      ],
      "notIncluded": [
        "Bebidas en Roxy",
        "Propinas"
      ],
      "bookingBlockedWeekdays": [
        "monday",
        "tuesday"
      ],
      "restrictions": "Miércoles a domingo solamente. Las entradas del espectáculo del Roxy no son reembolsables.",
      "faqs": [
        {
          "q": "¿Qué es el espectáculo con cena del Roxy?",
          "a": "El Roxy es una producción profesional brasileña de cena con espectáculo, de música y danza, en un teatro construido para eso. La presentación reúne ritmos y tradiciones de diferentes regiones de Brasil, a cargo de bailarines y músicos profesionales, junto con una cena de tres platos servida en tu mesa."
        },
        {
          "q": "¿Qué días está disponible este tour?",
          "a": "Solo de miércoles a domingo. El Roxy no funciona los lunes ni martes, así que el tour no está disponible esos días."
        },
        {
          "q": "¿La entrada del espectáculo del Roxy es reembolsable?",
          "a": "No. Una vez comprada, la entrada del Roxy no puede cancelarse ni reembolsarse por el establecimiento, independientemente del aviso dado. Reserva solo si tus planes para la noche están confirmados. El resto del tour sigue nuestra política de cancelación estándar."
        },
        {
          "q": "¿La puesta de sol está garantizada?",
          "a": "No. Los horarios se planifican alrededor de la puesta de sol de la época del año siempre que sea posible, pero las nubes, la lluvia, la visibilidad, el tráfico y el funcionamiento de las atracciones están fuera de nuestro control."
        },
        {
          "q": "¿El guía y el conductor son la misma persona?",
          "a": "No. Durante la parte turística, el tour incluye un guía de turismo acreditado que acompaña al grupo y un conductor profesional separado responsable del transporte."
        },
        {
          "q": "¿Están incluidas las entradas al Cristo Redentor y al Pan de Azúcar?",
          "a": "Sí. Ambas están incluidas y se organizan con antelación. En el Pan de Azúcar, las entradas incluyen acceso sin fila a los teleféricos. En el Cristo Redentor, tu entrada se reserva por adelantado para el horario de subida que prefieras, según disponibilidad, y tu guía se encarga del proceso el día del tour."
        },
        {
          "q": "¿El tour es privado?",
          "a": "La parte turística y el transporte son exclusivos para tu grupo. El Roxy es un teatro abierto al público, con otros clientes presentes."
        },
        {
          "q": "¿Cómo debo vestirme?",
          "a": "Casual elegante es apropiado — el Roxy es un local exclusivo. No se requiere ropa formal, pero no se recomienda la ropa de playa. Lleva también un documento oficial con foto, ya que el establecimiento puede solicitarlo en la entrada."
        },
        {
          "q": "¿Las bebidas están incluidas en el Roxy?",
          "a": "La cena de tres platos está incluida, pero las bebidas en el Roxy no lo están, y se pagan directamente en el local."
        }
      ],
      "tips": [
        "Este tour solo está disponible de miércoles a domingo. El Roxy no funciona los lunes ni martes.",
        "La entrada del espectáculo del Roxy no es reembolsable una vez comprada, independientemente del aviso dado. Reserva solo si tus planes para la noche están confirmados.",
        "La hora de inicio varía según la fecha, la puesta de sol de la época del año y la programación del Roxy. La hora confirmada de recogida se comunica después de la reserva.",
        "Las entradas de ambas atracciones se organizan con antelación. En el Cristo Redentor, tu horario de subida en tren o van se reserva por adelantado según tu preferencia y la disponibilidad, y tu guía se ocupa del canje del voucher.",
        "Viste casual elegante para el Roxy — es un local exclusivo y la ropa de playa no es apropiada. Lleva un documento oficial con foto, ya que el establecimiento puede solicitarlo en la entrada.",
        "Las bebidas en el Roxy no están incluidas en el precio del tour y se pagan directamente en el local."
      ]
    },
    "island-escape-ilha-grande": {
      "badge": "Lancha incluida",
      "id": "Escape a la Isla: Ilha Grande en Lancha Privada",
      "slug": "island-escape-ilha-grande",
      "imageSlug": "island-escape-ilha-grande",
      "title": "Escape a la Isla: Ilha Grande en Lancha Privada",
      "shortDescription": "Una excursión privada desde Río a Ilha Grande en lancha, por playas abrigadas y puntos de snorkel, con guía acreditado, conductor y una lancha reservada para tu grupo. Hay una opción premium a Lopes Mendes.",
      "fullDescription": "Esta es una excursión privada completa a Ilha Grande desde Río de Janeiro, con transporte puerta a puerta, guía de turismo acreditado y una lancha reservada exclusivamente para tu grupo. Desde la recogida en tu alojamiento en Río hasta la última parada en una playa, toda la experiencia se organiza como un único tour privado.\n\nEl día comienza temprano, con recogida en tu hotel, Airbnb u otro alojamiento en Río. Tu vehículo privado continúa hasta Mangaratiba, una ciudad costera próxima a Ilha Grande, donde te esperan la lancha y el marinero. La embarcación es exclusivamente tuya durante el día, sin otros pasajeros, sin horarios impuestos por un grupo y sin esperar a desconocidos para terminar su baño.\n\nIlha Grande es una reserva de Mata Atlántica preservada — una isla sin carreteras entre aldeas y con aguas tan claras que se ve el fondo del mar. La parte en lancha dura unas cinco horas y recorre playas, ensenadas protegidas y puntos de snorkel alrededor de la isla. Las paradas habituales son playas de aguas poco profundas y tranquilas, y el equipo de snorkel y el agua se ofrecen sin coste adicional.\n\nNo hay una lista fija de playas. La ruta se elige según las condiciones marítimas, la seguridad, el tiempo disponible y los intereses de tu grupo, por lo que las paradas pueden variar de un día a otro. Al ser una lancha privada, el ritmo lo decides tú: puedes pasar más tiempo nadando, descansando en una playa o haciendo snorkel, sin seguir el horario de una excursión compartida.\n\nLa experiencia cuenta con tres profesionales con funciones distintas: un guía de turismo acreditado que acompaña al grupo durante todo el día, desde la salida en Río, durante el recorrido en lancha y hasta el regreso; un conductor profesional para el transporte terrestre; y un marinero responsable de la embarcación y de la seguridad en el agua.\n\nEl almuerzo es opcional y se paga por separado en un restaurante situado en una de las paradas de la lancha. El tour no va a Vila do Abraão para almorzar. Tu guía puede recomendar un buen restaurante a lo largo de la ruta. También puedes llevar tu propia comida, aperitivos y bebidas a bordo, elijas o no la barbacoa opcional.\n\nSe puede organizar con antelación una barbacoa a bordo como opción adicional, con precio bajo consulta. Las bebidas no están incluidas con la barbacoa y las llevan los clientes.\n\nLa experiencia estándar se centra en playas protegidas, aguas poco profundas y tranquilas, baño y snorkel. Una opción premium añade una visita a Lopes Mendes, considerada una de las playas más hermosas de Brasil, con su extensa franja de arena clara, su entorno de Mata Atlántica preservada y su paisaje de mar abierto.\n\nLa lancha no se detiene directamente en Lopes Mendes. El acceso es por Praia do Pouso y desde allí un sendero por el bosque de unos cuarenta minutos, de dificultad ligera a moderada, con tu guía acompañándote todo el camino. Lopes Mendes da al mar abierto, por lo que el oleaje puede ser más fuerte que en las paradas abrigadas y se recomienda algo de cautela en el agua. Allí solo hay algunos snacks, así que recomendamos mucho llevar agua y comida para la visita.\n\nDespués de la parte en lancha, tu vehículo privado te lleva de Mangaratiba de vuelta a Río. La experiencia completa suele durar entre diez y doce horas puerta a puerta, incluyendo el transporte terrestre, el embarque, el recorrido en lancha y el regreso. Para quienes desean conocer Ilha Grande desde Río en un solo día, esta es una experiencia totalmente privada de principio a fin.",
      "highlights": [
        "Las playas abrigadas y las aguas claras de Ilha Grande",
        "Ensenadas y puntos de snorkel",
        "Lancha privada exclusiva para tu grupo",
        "Lopes Mendes, como opción premium",
        "Recorrido por la Costa Verde desde Río"
      ],
      "included": [
        "Transporte privado de ida y vuelta entre Río y Mangaratiba",
        "Recogida y regreso en tu alojamiento en Río, dentro de la zona atendida",
        "Guía de turismo acreditado (español) acompañando al grupo durante todo el día",
        "Conductor profesional y marinero responsable de la embarcación",
        "Lancha privada durante aproximadamente cinco horas",
        "Equipo de snorkel sin coste adicional",
        "Agua mineral sin coste adicional"
      ],
      "notIncluded": [
        "Almuerzo y bebidas durante el tour",
        "Barbacoa a bordo opcional (precio bajo consulta)",
        "Protector solar y toalla",
        "Propinas"
      ],
      "faqs": [
        {
          "q": "¿El tour sale desde Río de Janeiro?",
          "a": "Sí. La recogida en Río, el transporte privado hasta Mangaratiba, la lancha privada y el regreso están incluidos."
        },
        {
          "q": "¿La lancha es privada?",
          "a": "Sí. La lancha está reservada exclusivamente para tu grupo y no se comparte con otros viajeros."
        },
        {
          "q": "¿Cuánto dura la experiencia completa?",
          "a": "La parte en lancha dura unas cinco horas. El tour completo suele durar entre diez y doce horas puerta a puerta, incluyendo el transporte hasta Mangaratiba, el embarque, el recorrido en lancha y el regreso a Río."
        },
        {
          "q": "¿El guía acompaña al grupo durante toda la excursión?",
          "a": "Sí. El guía acreditado acompaña al grupo durante toda la experiencia, incluidos los desplazamientos y el recorrido en lancha. Un marinero aparte es responsable de la embarcación y de la seguridad en el agua."
        },
        {
          "q": "¿El guía, el conductor y el marinero son la misma persona?",
          "a": "No. El tour incluye un guía de turismo acreditado, un conductor profesional para el transporte terrestre y un marinero responsable de la embarcación — tres funciones distintas."
        },
        {
          "q": "¿Qué playas visitaremos?",
          "a": "No hay una lista fija de playas. La ruta se elige según las condiciones marítimas, la seguridad, el tiempo disponible y los intereses de tu grupo, por lo que las paradas pueden variar de un día a otro."
        },
        {
          "q": "¿Las aguas son tranquilas?",
          "a": "Las paradas habituales son playas de aguas poco profundas y tranquilas. Lopes Mendes es la excepción, porque da al mar abierto y puede tener olas más fuertes."
        },
        {
          "q": "¿Está incluido el equipo de snorkel?",
          "a": "Sí. El equipo de snorkel y el agua embotellada se ofrecen sin coste adicional."
        },
        {
          "q": "¿El almuerzo está incluido?",
          "a": "No. El almuerzo es opcional y se paga directamente en un restaurante situado en una de las paradas de la lancha. El tour no va a Vila do Abraão para almorzar — el restaurante se elige a lo largo de la ruta."
        },
        {
          "q": "¿Podemos llevar nuestra propia comida y bebida?",
          "a": "Sí. Puedes llevar tu propia comida, aperitivos y bebidas a bordo, elijas o no la barbacoa."
        },
        {
          "q": "¿La barbacoa está incluida?",
          "a": "No. La barbacoa a bordo es opcional, se organiza con antelación y tiene precio bajo consulta. Las bebidas no están incluidas y las llevan los clientes."
        },
        {
          "q": "¿Qué es la opción premium Lopes Mendes?",
          "a": "La opción premium añade una visita a Lopes Mendes, considerada una de las playas más hermosas de Brasil. La lancha se detiene en Praia do Pouso y desde allí un sendero por el bosque de unos cuarenta minutos — de ligero a moderado — lleva hasta la playa, con tu guía acompañándote. La visita depende de las condiciones marítimas y operativas."
        },
        {
          "q": "¿La lancha se detiene directamente en Lopes Mendes? ¿Cómo es la playa?",
          "a": "No. La lancha se detiene en Praia do Pouso, seguida de un sendero por el bosque de unos cuarenta minutos hasta Lopes Mendes con el guía. El sendero es de ligero a moderado, sobre terreno natural que puede ser irregular o resbaladizo después de la lluvia, por lo que se recomienda calzado cómodo o sandalias firmes. Lopes Mendes da al mar abierto, así que el oleaje puede ser más fuerte que en las paradas abrigadas — entra en el agua con algo de cautela y sigue las indicaciones del guía. La comida allí se limita a algunos snacks, así que lleva agua y comida."
        },
        {
          "q": "¿Qué pasa si hace mal tiempo?",
          "a": "La lluvia ligera no cancela el tour. Solo se cancela cuando las condiciones del mar no son seguras para navegar. Seguimos el pronóstico de cerca, incluso con el operador local en Ilha Grande, y si es necesario cancelar por el mar, te avisamos con antelación y te reembolsamos el importe pagado por el tour. Un cambio de playas o paradas por el mar es parte de la operación normal y no es una cancelación."
        },
        {
          "q": "¿El tour se comparte con otros viajeros?",
          "a": "No. El transporte terrestre, el guía y la lancha son privados y exclusivos para tu grupo."
        }
      ],
      "tips": [
        "El tour sale de Río temprano por la mañana. La hora exacta depende del lugar de recogida, del tráfico previsto y de la organización de la salida de la lancha. Prepara todo la noche anterior.",
        "El día completo suele durar entre diez y doce horas puerta a puerta, incluyendo el trayecto a Mangaratiba, unas cinco horas en lancha y el regreso.",
        "La lluvia ligera no cancela el tour — solo lo hacen las condiciones de mar no seguras. Seguimos el pronóstico de cerca con el operador local y, si hay que cancelar por el mar, te avisamos con antelación y te reembolsamos el importe pagado.",
        "Lleva protector solar y toalla — no se proporcionan. Traje de baño, gafas de sol, sombrero, una muda ligera de ropa y una bolsa impermeable para el teléfono y los objetos de valor también son buena idea.",
        "El almuerzo no está incluido. Puedes comer en un restaurante a lo largo de la ruta, pagado por separado, o llevar tu propia comida y bebida a bordo.",
        "El equipo de snorkel y el agua embotellada se ofrecen sin coste adicional. Las paradas de playa habituales tienen aguas poco profundas y tranquilas.",
        "Si eliges la opción premium Lopes Mendes, es un sendero por el bosque de cuarenta minutos desde Praia do Pouso, de ligero a moderado, con el guía acompañándote. Lleva calzado cómodo o sandalias firmes, y lleva agua y comida, ya que en la playa solo hay algunos snacks.",
        "Lopes Mendes es una playa de mar abierto donde el oleaje puede ser más fuerte — entra en el agua con algo de cautela, sobre todo con niños."
      ]
    },
    "petropolis-imperial": {
      "badge": "Ciudad imperial",
      "id": "Petrópolis: Palacios Imperiales y Refugio en la Montaña",
      "slug": "petropolis-imperial",
      "imageSlug": "petropolis-imperial",
      "title": "Petrópolis: Palacios Imperiales y Refugio en la Montaña",
      "shortDescription": "Un día privado en la Ciudad Imperial de Brasil — el Museo Imperial, el mausoleo de la catedral y el Palacio Quitandinha — con recogida en Río de Janeiro o en la propia Petrópolis.",
      "fullDescription": "Petrópolis es la ciudad donde la familia imperial brasileña pasaba los veranos, y el trazado que le dio la corte sigue ahí: palacios, iglesias, jardines y residencias del siglo XIX a lo largo de avenidas arboladas, a 840 metros de altura en la Serra dos Órgãos. Este es un día privado allí — tu guía, tu conductor, tu vehículo y un itinerario armado alrededor de lo que de verdad quieres ver.\n\nEl tour puede empezar en tu alojamiento de Río de Janeiro o directamente en tu hotel, posada o Airbnb en Petrópolis. El precio es el mismo en ambos casos y el vehículo se queda contigo todo el día. Empezar en la propia ciudad simplemente te da más horas: espacio para una parada extra, un almuerzo sin prisa o un ritmo más lento por el centro histórico.\n\nDesde Río el trayecto dura entre 70 y 90 minutos por sentido según el tráfico, subiendo por la Serra dos Órgãos entre tramos de Mata Atlántica. Petrópolis está lo bastante alta como para que el aire sea claramente más templado que el de la costa durante todo el año — por eso subía el emperador, y por eso conviene llevar una chaqueta ligera, sobre todo en otoño e invierno.\n\nEl Museo Imperial es el centro del itinerario regular. Ocupa el propio palacio de verano, y la colección incluye la corona de Dom Pedro II, insignias imperiales, muebles, retratos, objetos personales de la familia imperial y la pluma con la que la princesa Isabel firmó la Lei Áurea — la ley de 1888 que abolió la esclavitud en Brasil —, además de una copia del documento. Tu guía marca el ritmo dentro según lo que te interese.\n\nLa Catedral de São Pedro de Alcântara es el segundo eje del día. La iglesia neogótica, de una sola torre, alberga el Mausoleo Imperial: Dom Pedro II, la emperatriz Teresa Cristina, la princesa Isabel y el conde d'Eu. La entrada es gratuita y el interior suele estar abierto en horario regular, aunque el acceso puede restringirse durante misas, bodas, funerales u otras ceremonias.\n\nLa Casa de Petrópolis se conoce como la Casa de los 7 Errores, y el nombre es un malentendido que vale la pena aclarar. Construida entre 1879 y 1884, mezcló estilos arquitectónicos europeos con la tecnología que llegaba a finales de siglo: fue la primera casa de la ciudad con luz eléctrica. También fue deliberadamente asimétrica — las dos mitades de la fachada nunca debieron coincidir. Quien pasaba por delante daba por hecho un diseño simétrico, leyó las diferencias como fallos de construcción, contó siete y el apodo se quedó. Las visitas al interior están cerradas por ahora, pero los jardines sí se recorren, y ahí para el tour.\n\nEl Palacio Quitandinha pertenece a otro capítulo. Construido en los años cuarenta como hotel-casino de lujo — un edificio imponente, de interiores monumentales y con un lago artificial a sus pies —, es de los años en que Petrópolis era la dirección serrana de la alta sociedad brasileña. Qué zonas están abiertas varía según los eventos y las condiciones de funcionamiento del día.\n\nSegún el tiempo, los horarios y lo que te interese, el día puede incluir también el Palacio de Cristal, el centro histórico y la Avenida Koeler, vistas exteriores de otras residencias señaladas y el Palacio Rio Negro cuando está abierto al público. La Iglesia Luterana, uno de los hitos de la inmigración alemana en la ciudad, a veces se puede ver por dentro — el acceso es limitado y en general solo los sábados por la mañana, así que nunca está garantizado.\n\nLos lunes funcionan distinto. Los principales museos e interiores históricos de Petrópolis cierran, así que un tour en lunes es otro día: el centro histórico a pie, arquitectura y fachadas, espacios públicos, el paisaje de la sierra y un almuerzo sin prisa. Es un buen día en la ciudad, pero no es el itinerario imperial sin los interiores — el Museo Imperial en particular no se aprecia desde fuera, y preferimos decírtelo antes de que reserves y no después.\n\nLas entradas a las atracciones del itinerario están incluidas en el precio. El Tour Cervecero de Bohemia se puede añadir bajo petición, sujeto a disponibilidad y horarios, y es la única entrada que se paga aparte; el restaurante y el bar de la cervecería están cerrados actualmente. El almuerzo no está incluido y se paga directamente en el restaurante que elijas — tu guía te sugerirá opciones según tu gusto y tu presupuesto.",
      "highlights": [
        "Museo Imperial",
        "Catedral de São Pedro de Alcântara y Mausoleo Imperial",
        "Palacio Quitandinha",
        "Palacio de Cristal",
        "Casa de Petrópolis y sus jardines",
        "Centro histórico y Avenida Koeler"
      ],
      "included": [
        "Vehículo privado con aire acondicionado durante todo el día",
        "Guía de turismo acreditado con tu grupo en todo momento",
        "Conductor profesional, distinto del guía",
        "Entradas a las atracciones del itinerario",
        "Recogida y regreso en tu alojamiento de Río de Janeiro o de Petrópolis",
        "Agua mineral"
      ],
      "notIncluded": [
        "Almuerzo, comidas y bebidas",
        "Entrada del Tour Cervecero de Bohemia (opcional)",
        "Propinas",
        "Suplemento por guía en idiomas distintos del español, el inglés y el portugués, cuando corresponda"
      ],
      "restrictions": "Los lunes siguen un itinerario diferente — los principales museos e interiores históricos de Petrópolis cierran ese día.",
      "faqs": [
        {
          "q": "¿El tour puede empezar en Petrópolis en vez de Río?",
          "a": "Sí. Te recogemos directamente en tu hotel, posada, Airbnb u otro alojamiento de Petrópolis, y el precio es exactamente el mismo que saliendo de Río. El vehículo privado y el conductor se quedan contigo todo el día en ambos casos."
        },
        {
          "q": "¿Cuánto dura el trayecto desde Río?",
          "a": "Entre 70 y 90 minutos por sentido, según el tráfico y dónde te alojes. La carretera sube por la Serra dos Órgãos y el paisaje forma parte del día."
        },
        {
          "q": "¿Cuánto dura el tour completo?",
          "a": "Alrededor de ocho horas. La cifra exacta cambia según el punto de salida, el tráfico, los horarios de las atracciones y el itinerario que acuerdes con tu guía."
        },
        {
          "q": "¿El guía y el conductor son la misma persona?",
          "a": "No. Tienes un guía de turismo acreditado que acompaña a tu grupo y un conductor profesional aparte, responsable del vehículo."
        },
        {
          "q": "¿Las entradas están incluidas?",
          "a": "Sí. Las entradas a las atracciones de tu itinerario están incluidas en el precio del tour. La única excepción es el Tour Cervecero de Bohemia, que es opcional y siempre se paga aparte."
        },
        {
          "q": "¿Se puede visitar Petrópolis un lunes?",
          "a": "Sí, pero es otro tour. Los principales museos e interiores históricos cierran los lunes, así que el itinerario de ese día se centra en el centro histórico a pie, la arquitectura y las fachadas, los espacios públicos, el paisaje de montaña y el almuerzo. Te lo dejamos claro al reservar en lugar de que lo descubras al llegar."
        },
        {
          "q": "¿El Museo Imperial abre los lunes?",
          "a": "No. El Museo Imperial, como la mayoría de los museos e interiores históricos de la ciudad, cierra los lunes. Y no se aprecia desde fuera, así que una visita en lunes no sustituye a entrar."
        },
        {
          "q": "¿Qué hay en el Museo Imperial?",
          "a": "La colección se guarda en el antiguo palacio de verano e incluye la corona de Dom Pedro II, insignias imperiales, muebles, retratos, objetos personales de la familia imperial y la pluma con la que la princesa Isabel firmó la Lei Áurea, junto a una copia del documento."
        },
        {
          "q": "¿Hay que pagar entrada en la catedral?",
          "a": "No, la entrada a la Catedral de São Pedro de Alcântara es gratuita. El interior suele estar abierto en horario regular, aunque el acceso puede restringirse durante misas, bodas, funerales u otras ceremonias."
        },
        {
          "q": "¿Se puede entrar en la Casa de Petrópolis?",
          "a": "En la casa no, por ahora: las visitas al interior están cerradas y no hay fecha de reapertura anunciada. Los jardines sí están abiertos, y es donde para el tour — tu guía te lleva por el recinto, la fachada y la historia detrás del apodo."
        },
        {
          "q": "¿Cuáles son los \"7 errores\" de la Casa de Petrópolis?",
          "a": "No hay errores. La casa, terminada en 1884, se construyó deliberadamente asimétrica, de modo que las dos mitades de la fachada nunca debieron coincidir. Quien daba por hecho un diseño simétrico leyó las diferencias como fallos de construcción, contó siete y el nombre se quedó."
        },
        {
          "q": "¿Podemos añadir el Tour Cervecero de Bohemia?",
          "a": "Sí, bajo petición y sujeto a disponibilidad y horarios. La entrada se paga aparte del precio del tour. Ten en cuenta que el restaurante y el bar de la cervecería están cerrados, así que el almuerzo será en otro sitio."
        },
        {
          "q": "¿El almuerzo está incluido?",
          "a": "No. El almuerzo se paga directamente en el restaurante que elijas, y tu guía te recomendará opciones en el centro histórico según tus preferencias y tu presupuesto."
        },
        {
          "q": "¿Se puede modificar el itinerario?",
          "a": "Sí. El orden y la selección de paradas se arman según tus intereses, el tiempo disponible y lo que esté abierto ese día. Algunas atracciones pueden sustituir a otras."
        },
        {
          "q": "¿Petrópolis es más fresca que Río? ¿Qué ropa llevamos?",
          "a": "Bastante más templada, por la altitud, durante todo el año. Lleva una chaqueta ligera o una capa extra sin importar el tiempo que haga en Río al salir, sobre todo en otoño e invierno, y calzado cómodo: partes del centro histórico se ven mejor a pie."
        },
        {
          "q": "¿Hay guías en otros idiomas?",
          "a": "Trabajamos en español, inglés y portugués. A veces podemos conseguir guías en otros idiomas bajo petición, sujeto a disponibilidad, y puede aplicarse un suplemento."
        }
      ],
      "tips": [
        "Petrópolis está a 840 metros y es sistemáticamente más templada que la costa. Lleva una chaqueta ligera haga el tiempo que haga en Río al salir, sobre todo entre abril y septiembre.",
        "Partes del centro histórico se recorren mejor a pie, por la Avenida Koeler y alrededor de la catedral. El calzado cómodo cambia el día.",
        "La carretera de montaña tiene muchas curvas en la subida. Si alguien del grupo se marea, conviene tomar algo antes de salir y no en el camino.",
        "Si tu única fecha posible es un lunes, cuenta con el itinerario alternativo: fachadas, centro histórico y paisaje, sin los interiores de los museos. Mejor saberlo al elegir la fecha que después.",
        "En la Casa de Petrópolis la casa está cerrada, pero los jardines están abiertos y la parada merece la pena. La historia es el motivo para ir, y tu guía la cuenta en el recinto.",
        "El Tour Cervecero de Bohemia hay que pedirlo con antelación para comprobar disponibilidad y horarios. Su restaurante y su bar están cerrados, así que planifica el almuerzo en otro lugar.",
        "La catedral es una iglesia en funcionamiento. Misas, bodas y funerales pueden cerrar el interior sin aviso previo, y ningún tour puede sortear eso."
      ]
    },
    "tijuca-rainforest": {
      "id": "Bosque de Tijuca: Donde la Naturaleza Encuentra la Cultura",
      "slug": "bosque-tijuca",
      "imageSlug": "tijuca-rainforest",
      "title": "Bosque de Tijuca: Donde la Naturaleza Encuentra la Cultura",
      "shortDescription": "Combina las vistas impresionantes del Pan de Azúcar con la belleza exuberante del Bosque de Tijuca y el Jardín Botánico.",
      "fullDescription": "Río de Janeiro es una de las pocas ciudades del mundo donde puedes estar en una selva tropical genuina a 20 minutos del centro. El Parque Nacional de Tijuca — una inmensa selva urbana, cubriendo 32 kilómetros cuadrados dentro de los límites de la ciudad — fue casi completamente destruido para plantaciones de café y azúcar en los siglos XVIII y XIX, y luego casi completamente replantado a mano entre 1861 y 1888, en uno de los primeros proyectos de reforestación a gran escala del mundo. El bosque por el que caminas hoy es una creación humana — lo que lo convierte, paradójicamente, en una de las historias de conservación más extraordinarias del siglo XIX.\n\nEl tour Bosque de Tijuca combina cuatro de los sitios naturales y culturales más significativos de Río en una única experiencia privada de día completo: el Pan de Azúcar, el Parque Nacional de Tijuca, el Jardín Botánico de Río y el Parque Lage.\n\nEl día comienza en el Pan de Azúcar — el pico de granito de 396 metros en la entrada de la Bahía de Guanabara que define la silueta más reconocible de Río. Dos etapas de teleférico te llevan a la cima, desde donde el panorama abarca toda la extensión de la ciudad: el Corcovado y el Cristo Redentor al oeste, las playas de Copacabana e Ipanema al sur, la bahía abriéndose al Atlántico al este. La entrada sin fila al teleférico del Pan de Azúcar está incluida.\n\nEl Parque Nacional de Tijuca ofrece un Río completamente diferente. Dentro del parque, las carreteras asfaltadas se convierten en senderos forestales, el ruido de la ciudad desaparece y la Mata Atlántica — uno de los ecosistemas más biodiversos y amenazados del mundo — te rodea. Los avistamientos de fauna dependen de la hora y la estación, pero habitualmente incluyen tucanes, tití-leones (pequeños primates nativos de la Mata Atlántica), mariposas de extraordinaria variedad, y ocasionalmente agutíes y coatíes visibles desde el camino. Tu guía conoce los ritmos del parque y te posicionará para las mejores oportunidades.\n\nEl Jardín Botánico de Río de Janeiro cubre 137 hectáreas y contiene más de 6.500 especies de plantas de Brasil y de todo el mundo, incluyendo la famosa Avenida de las Palmeras Imperiales — 134 palmeras reales plantadas en 1808 por orden del Príncipe Regente Dom João VI — las extraordinarias hojas de Victoria amazonica que alcanzan dos metros de diámetro, la sección de Mata Atlántica con especies nativas, y el jardín de cactus y el invernadero de orquídeas. El jardín fue fundado en 1808 y es una de las instituciones botánicas científicas más antiguas de las Américas.\n\nEl Parque Lage es la última parada — y uno de los secretos mejor guardados de Río. Una mansión neoclásica construida en la década de 1920 para el empresario italiano Enrique Lage se encuentra al pie del Corcovado, rodeada de Mata Atlántica con el Cristo Redentor visible sobre la línea de los árboles. La mansión alberga ahora la Escuela de Artes Visuales de Río y un famoso café — uno de los más atmosféricos de la ciudad — donde puedes tomar un café en el patio central de la mansión con el bosque y la estatua sobre ti.\n\nNo disponible los lunes. El tour opera de martes a domingo.\n\nIncluido: transporte privado puerta a puerta, guía local certificado, entrada sin fila al Pan de Azúcar, entrada al Jardín Botánico, acceso al Parque Nacional de Tijuca y agua embotellada de cortesía. Las comidas no están incluidas.",
      "highlights": [
        "Pan de Azúcar",
        "Bosque de Tijuca - inmensa selva urbana",
        "Jardín Botánico",
        "Parque Lage"
      ],
      "included": [
        "Transporte privado",
        "Guía local certificado (español)",
        "Todas las entradas",
        "Recogida y regreso en cualquier lugar de Río (hoteles, Airbnbs, aeropuertos y terminal de cruceros)",
        "Agua mineral"
      ],
      "notIncluded": [
        "Comidas y bebidas",
        "Propinas"
      ],
      "bookingBlockedWeekdays": [
        "monday"
      ],
      "faqs": [
        {
          "q": "¿Es seguro visitar el Bosque Tijuca y veremos vida silvestre?",
          "a": "Sí, el Parque Nacional de Tijuca es seguro para los visitantes. Como una inmensa selva urbana, alberga más de 200 especies de aves, monos y flora diversa. Los avistamientos dependen de la hora y la estación, pero tucanes, tití-leones y mariposas se ven con frecuencia. Tu guía conoce los mejores lugares."
        },
        {
          "q": "¿El tour está disponible todos los días?",
          "a": "No está disponible los lunes -- el Parque Lage y algunas secciones del Bosque Tijuca tienen acceso reducido los lunes. El tour opera de martes a domingo."
        },
        {
          "q": "¿Cuánto hay que caminar en la parte del Bosque Tijuca?",
          "a": "La visita a Tijuca implica caminatas suaves a moderadas por senderos mantenidos -- nada que requiera experiencia en senderismo ni calzado especial más allá de zapatos cómodos para caminar. El Jardín Botánico también implica caminar pero todos los senderos son planos y accesibles."
        },
        {
          "q": "¿Este tour incluye el Pan de Azúcar?",
          "a": "Sí -- el Pan de Azúcar está incluido como parte de este tour que combina lo mejor natural y cultural. El día de 8 horas cubre el Pan de Azúcar, el Parque Nacional de Tijuca, el Jardín Botánico y el Parque Lage."
        },
        {
          "q": "¿Qué es el Parque Lage y por qué está incluido?",
          "a": "El Parque Lage es un hermoso parque histórico al pie del Morro Corcovado, con una mansión neoclásica (hoy escuela de arte) rodeada de Mata Atlántica. Su famoso café es una institución en Río y el parque ofrece vistas impresionantes del Cristo Redentor sobre el bosque."
        }
      ],
      "tips": [
        "El Parque Nacional de Tijuca es una inmensa selva urbana — los avistamientos de fauna dependen de la hora del día y la estación. Tucanes, tití-leones y mariposas se ven con frecuencia. Tu guía conoce los mejores lugares.",
        "Lleva repelente de insectos para la sección del bosque — es una selva real y los mosquitos están presentes, especialmente después de la lluvia.",
        "El Jardín Botánico tiene más de 6.500 especies de plantas en 137 hectáreas — no lo verás todo, pero tu guía se centrará en las secciones más extraordinarias, incluidas las hojas de Victoria amazonica gigantes.",
        "El café del Parque Lage es uno de los lugares más atmosféricos de Río — un café Art Nouveau centenario dentro de una mansión neoclásica con el Cristo Redentor visible sobre el dosel del bosque.",
        "No disponible los lunes — el Parque Lage tiene acceso reducido ese día. El tour opera de martes a domingo."
      ]
    },
    "niteroi-mac-museum": {
      "id": "Niterói: Museo MAC de Niemeyer y Fortalezas Coloniales",
      "slug": "niteroi-museo-mac",
      "imageSlug": "niteroi-mac-museum",
      "title": "Niterói: Museo MAC de Niemeyer y Fortalezas Coloniales",
      "shortDescription": "Cruza la Bahía de Guanabara para descubrir la obra maestra arquitectónica del Museo MAC de Niterói y fuertes militares históricos.",
      "fullDescription": "Al otro lado de la Bahía de Guanabara desde Río, un puente de 13,3 kilómetros y 20 minutos en coche llevan a Niterói — una ciudad de 500.000 habitantes que la mayoría de los visitantes de Río nunca ven, y que contiene una de las obras de arquitectura más extraordinarias de las Américas. El tour privado de Niterói cruza la bahía para mostrarte tres cosas: el museo MAC, los fuertes coloniales, y la vista de Río que solo existe desde el otro lado del agua.\n\nEl cruce del Puente Río–Niterói es parte de la experiencia. Con 13,3 kilómetros, fue el puente de hormigón pretensado más largo del mundo cuando inauguró en 1974, y sigue siendo uno de los accesos más dramáticos a cualquier vista urbana del continente. Ten la cámara lista para el punto medio: la vista simultánea del horizonte de Río a un lado y Niterói al frente es diferente a cualquier cosa vista desde dentro de Río.\n\nEl MAC Niterói — Museu de Arte Contemporânea — es el edificio más celebrado de Oscar Niemeyer fuera de Brasilia. Completado en 1996 cuando Niemeyer tenía 88 años, se asienta en un acantilado sobre la bahía como un disco de hormigón circular que parece flotar sobre su entorno, sostenido por una única columna central. El edificio ha sido descrito como un platillo volador, una flor y un cáliz — lo que realmente es, es una demostración de que la arquitectura puede ser escultura a escala urbana. La rampa exterior que espira alrededor de la estructura ofrece una de las mejores vistas del horizonte de Río desde cualquier punto del área metropolitana — a través de la bahía, con el Pan de Azúcar y el Corcovado enmarcados juntos en un único panorama imposible desde dentro de Río.\n\nLa Fortaleza de Santa Cruz da Barra es una de las fortificaciones militares más antiguas de Brasil, iniciada en la década de 1550 para defender la entrada de la Bahía de Guanabara contra incursiones francesas y posteriormente holandesas y británicas. El fuerte permaneció en uso militar activo hasta el siglo XX. El contexto histórico de tu guía transforma lo que podrían parecer simples muros viejos en una pieza vívida y concreta de historia colonial sudamericana.\n\nEl almuerzo es en el distrito costero de Icaraí — la respuesta de Niterói a Ipanema, con una larga curva de playa y una fila de restaurantes y cafés frente al mar. Presupuesta USD 20–40 por persona. Tu guía recomendará opciones según tus preferencias.\n\nNo disponible los lunes. El tour opera de martes a domingo.\n\nIncluido: transporte privado de ida y vuelta incluyendo el cruce del puente, guía local certificado, entrada al MAC Niterói, entrada a la Fortaleza de Santa Cruz y agua embotellada de cortesía. El almuerzo no está incluido.",
      "highlights": [
        "MAC Niterói de Oscar Niemeyer",
        "Fuertes militares históricos",
        "Vistas espectaculares del horizonte de Río",
        "Zona de almuerzo frente al mar"
      ],
      "included": [
        "Transporte privado",
        "Guía certificado desde Río (español)",
        "Entrada al museo y fuertes",
        "Recogida y regreso en cualquier lugar de Río (hoteles, Airbnbs, aeropuertos y terminal de cruceros)",
        "Agua mineral"
      ],
      "notIncluded": [
        "Almuerzo y bebidas",
        "Tours opcionales en helicóptero o barco",
        "Propinas"
      ],
      "bookingBlockedWeekdays": [
        "monday"
      ],
      "restrictions": "No disponible los lunes",
      "faqs": [
        {
          "q": "¿Cómo cruzamos a Niterói -- está incluido el ferry o vamos en carro?",
          "a": "Tu vehículo privado cruza por el Puente Río-Niterói, el puente más largo de América del Sur con 13.3 km. El cruce sobre la Bahía de Guanabara ofrece vistas espectaculares del horizonte de Río. El regreso puede hacerse opcionalmente en ferry -- consulta con tu guía."
        },
        {
          "q": "¿El tour está disponible todos los días?",
          "a": "No está disponible los lunes -- el MAC Niterói cierra los lunes. El tour opera de martes a domingo."
        },
        {
          "q": "¿Qué es el MAC Niterói y por qué es arquitectónicamente significativo?",
          "a": "El MAC (Museo de Arte Contemporáneo) de Niterói fue diseñado por Oscar Niemeyer en 1996 y se asemeja a un platillo volador flotando sobre el acantilado sobre la Bahía de Guanabara. Es considerado uno de los edificios de museo más distintivos del mundo. La vista del horizonte de Río desde la rampa del museo ya vale el viaje."
        },
        {
          "q": "¿Son interesantes los fuertes militares históricos incluso para los no aficionados a la historia?",
          "a": "Absolutamente. La Fortaleza de Santa Cruz y la Fortaleza de São Luís ofrecen algunas de las vistas más dramáticas -- mirando directamente a la ciudad desde el otro lado de la bahía. El contexto histórico que tu guía proporciona da vida a la importancia estratégica de estos fuertes de los siglos XVI-XVII."
        },
        {
          "q": "¿El almuerzo cerca de Niterói está incluido?",
          "a": "El almuerzo no está incluido pero hay una parada frente al mar incorporada al itinerario. Tu guía te llevará al área costera de Icaraí donde excelentes restaurantes de mariscos tienen vistas directas a Río. Presupuesta USD 20-40 por persona para un buen almuerzo con bebidas."
        }
      ],
      "tips": [
        "El MAC Niterói está en un acantilado sobre la Bahía de Guanabara — la vista del skyline de Río desde la rampa exterior del museo es una de las mejores de toda el área metropolitana y vale la pena detenerse a contemplarla.",
        "El cruce del Puente Río–Niterói (13.3 km) ofrece vistas espectaculares de la bahía desde el coche. Ten la cámara lista en el momento del cruce.",
        "La Fortaleza de Santa Cruz data del siglo XVI — el contexto histórico de tu guía transforma lo que podrían ser simples muros viejos en una historia vívida del pasado colonial e importancia estratégica de Río.",
        "Una parada para almorzar frente al mar en Icaraí está incluida en el itinerario. Lleva USD 20–40 por persona para una buena comida con bebidas.",
        "No disponible los lunes — el MAC Niterói cierra ese día. El tour opera de martes a domingo."
      ]
    },
    "modern-rio-museum-tomorrow": {
      "id": "Río Moderno: Museo del Mañana y Escuela de Samba Entre Bastidores",
      "slug": "rio-moderno-museo-manana",
      "imageSlug": "modern-rio-museum-tomorrow",
      "title": "Río Moderno: Museo del Mañana y Escuela de Samba Entre Bastidores",
      "shortDescription": "Explora el innovador Museo del Mañana de Río, el acuario más grande de Sudamérica, y ve tras bambalinas del Carnaval.",
      "fullDescription": "El distrito portuario de Río de Janeiro — el área alrededor de la Praça Mauá y el antiguo puerto — estuvo en gran parte deteriorado durante décadas, un vestigio de un pasado industrial que la ciudad había superado. Para los Juegos Olímpicos de 2016, Río invirtió fuertemente en su revitalización: un nuevo bulevar, nueva línea de tranvía, nuevos museos y un nuevo acuario transformaron la zona en uno de los distritos culturales más interesantes de América del Sur. El tour Modern Rio explora lo mejor de ello.\n\nEl Museo del Mañana (Museu do Amanhã) es el elemento central — un edificio de Santiago Calatrava completado en 2015 que se ha convertido en una de las estructuras más fotografiadas de Río. El diseño en voladizo de acero y hormigón del arquitecto español, con paneles solares móviles que siguen el sol, se extiende sobre la bahía como una criatura en movimiento. En su interior, el museo es una exploración inmersiva de la sostenibilidad, la ciencia climática y la relación de la humanidad con el planeta — no una colección estática de objetos, sino una secuencia de entornos interactivos que requieren al menos 90 minutos para experimentarse correctamente. Es, por amplio margen, el museo más estimulante intelectualmente de Río.\n\nEl AquaRio es el mayor acuario de América del Sur, inaugurado en 2016 en un edificio industrial reconvertido junto al Museo del Mañana. Los 8.000 animales de 350 especies incluyen el característico túnel submarino — un tubo de 20 metros por el que caminas con tiburones, rayas y grandes peces pelágicos nadando sobre tu cabeza y a ambos lados. Dedica al menos 60 minutos.\n\nLa visita entre bastidores a una escuela de samba del Carnaval de Río es el elemento más inusual del tour — y para muchos visitantes, el más memorable. El Carnaval no es un evento espontáneo. Es el resultado de una preparación durante todo el año por parte de las escolas de samba de Río, cada una de las cuales tiene miles de miembros trabajando durante el año en carrozas, disfraces, música y coreografía para una actuación de 70 minutos que será juzgada por un panel de expertos. La visita te lleva al galpão — el almacén donde se construyen las carrozas — y te da acceso a las personas, el proceso y la escala de lo que el Carnaval implica realmente. Disponible de martes a sábado.\n\nEl Museo Histórico Nacional, alojado en un complejo de fortaleza colonial al borde del distrito portuario, cubre 500 años de historia brasileña a través de una de las mayores colecciones de artefactos históricos, armas, carruajes y documentos de América del Sur.\n\nNo disponible los lunes. El tour opera de martes a domingo.\n\nIncluido: transporte privado puerta a puerta, guía local certificado, entrada al Museo del Mañana, entrada al AquaRio, visita a la escuela de samba, entrada al Museo Histórico Nacional y agua embotellada de cortesía. Las comidas no están incluidas.",
      "highlights": [
        "Museo del Mañana",
        "Acuario AquaRio",
        "Museo Histórico Nacional",
        "Escuela de samba del Carnaval tras bambalinas"
      ],
      "included": [
        "Transporte privado",
        "Guía local certificado (español)",
        "Todas las entradas",
        "Recogida y regreso en cualquier lugar de Río (hoteles, Airbnbs, aeropuertos y terminal de cruceros)",
        "Agua mineral"
      ],
      "notIncluded": [
        "Comidas y bebidas",
        "Propinas"
      ],
      "bookingBlockedWeekdays": [
        "monday"
      ],
      "restrictions": "No disponible los lunes. Experiencia Carnaval martes-sábado solamente.",
      "faqs": [
        {
          "q": "¿Qué es el Museo del Mañana y vale la pena visitarlo?",
          "a": "El Museo del Mañana fue diseñado por Santiago Calatrava y abrió en 2015. Explora los posibles futuros de la humanidad a través de impresionantes exposiciones interactivas sobre ciencia, medio ambiente y tecnología. El edificio -- una estructura blanca futurista sobre la Bahía de Guanabara -- es un hito arquitectónico. Muy recomendado para todas las edades."
        },
        {
          "q": "¿La visita a la escuela de samba de Carnaval está disponible todo el año?",
          "a": "La experiencia tras bambalinas en la escuela de samba está disponible de martes a sábado. No está disponible los domingos ni lunes. Durante febrero (temporada de Carnaval), los horarios pueden variar -- contáctanos para confirmar disponibilidad."
        },
        {
          "q": "¿El tour está disponible todos los días?",
          "a": "No está disponible los lunes -- el Museo del Mañana y el Museo Histórico Nacional cierran los lunes. La experiencia de Carnaval solo está disponible de martes a sábado."
        },
        {
          "q": "¿Qué es el AquaRio y es adecuado para adultos sin niños?",
          "a": "AquaRio es el acuario más grande de América del Sur con más de 8,000 animales marinos. Es una excelente experiencia para adultos -- el túnel submarino y las exhibiciones de aguas profundas son genuinamente impresionantes. No necesitas tener niños en el grupo para disfrutarlo."
        },
        {
          "q": "¿Cuál es la mejor manera de disfrutar la visita a la escuela de samba?",
          "a": "La visita funciona mejor cuando interactúas con los artesanos y haces preguntas a través de tu guía. Son las personas que pasan meses creando los elaborados carros alegóricos y disfraces para el Carnaval. La energía en el taller es electrizante incluso fuera de temporada."
        }
      ],
      "tips": [
        "El Museo del Mañana es interactivo y genuinamente inmersivo — dedica al menos 90 minutos adentro. No lo apresures por las demás atracciones.",
        "La visita a la escuela de samba del Carnaval solo está disponible de martes a sábado. Si tu tour cae en domingo o lunes, esta parte se reemplaza — confirma al reservar.",
        "AquaRio es el mayor acuario de América del Sur — el túnel submarino con tiburones y rayas sobre tu cabeza es el punto culminante. Dedica al menos 60 minutos.",
        "El distrito portuario (Porto Maravilha) donde se agrupan estas atracciones fue completamente renovado para los Juegos Olímpicos de 2016 — el contexto histórico urbano de tu guía añade una capa fascinante a la visita.",
        "No disponible los lunes — el Museo del Mañana cierra ese día. El tour opera de martes a domingo."
      ]
    },
    "buzios-riviera": {
      "id": "Excursión a Búzios desde Río",
      "isCustom": true,
      "slug": "buzios-riviera",
      "imageSlug": "buzios-riviera",
      "title": "Excursión a Búzios desde Río",
      "shortDescription": "Una excursión privada de un día a Búzios, el elegante balneario en la costa al este de Río — bajo consulta, a medida de tus fechas y cotizada directamente.",
      "fullDescription": "Búzios es un antiguo pueblo de pescadores convertido en un elegante balneario en la costa al este de Río, famoso por sus playas y la Rua das Pedras junto al mar. Lo organizamos como excursión privada de un día desde Río bajo consulta: fechas, horarios e inclusiones se arman a medida y se cotizan directamente, ya que por ahora operamos Búzios a pedido y no con salidas fijas. Se puede añadir un paseo en barco opcional para ver las playas desde el mar, bajo consulta.",
      "highlights": [
        "Excursión privada de un día a Búzios, a medida de tus fechas",
        "Elegante balneario con decenas de playas y la Rua das Pedras junto al mar",
        "Guía certificado y transporte privado desde Río",
        "Bajo consulta — horarios e inclusiones armados según tu grupo"
      ],
      "included": [
        "Transporte privado desde Río con conductor profesional",
        "Guía certificado desde Río (español)",
        "Recogida y regreso en Río (hoteles, Airbnbs y terminal de cruceros)",
        "Agua mineral de cortesía"
      ],
      "notIncluded": [
        "Comidas y bebidas",
        "Entradas a clubes de playa o paseos en barco (se cotizan con tu itinerario)",
        "Propinas (opcionales)"
      ],
      "duration": "Día completo (bajo consulta)",
      "recommendations": "Búzios está a unas 2,5 horas en coche desde Río en cada sentido, así que conviene reservar el día completo. Escríbenos con tus fechas y el tamaño del grupo para una cotización a medida.",
      "ctaText": "Solicitar cotización",
      "faqs": [
        {
          "q": "¿Búzios está disponible como tour fijo?",
          "a": "Por ahora ofrecemos Búzios bajo consulta. Cuéntanos tus fechas y el tamaño del grupo y armamos una excursión privada con su cotización."
        },
        {
          "q": "¿A qué distancia está Búzios de Río?",
          "a": "Cerca de 2,5 horas de viaje por la costa en cada sentido, así que funciona mejor como excursión privada de día completo."
        }
      ],
      "tips": [
        "Búzios funciona mejor como excursión privada de día completo — unas 2,5 horas por la costa en cada sentido.",
        "Cuéntanos tus fechas, el tamaño del grupo y tus intereses y armamos el itinerario con una cotización transparente."
      ]
    },
    "custom-tour": {
      "badge": "Totalmente personalizable",
      "id": "Tu Río, a Tu Manera: Tour Privado Personalizado",
      "isCustom": true,
      "slug": "tour-personalizado",
      "imageSlug": "custom-tour",
      "title": "Tu Río, a Tu Manera: Tour Privado Personalizado",
      "shortDescription": "¿No encuentras exactamente lo que buscas? Diseña tu propia experiencia en Río. Cuéntanos tus intereses y crearemos un itinerario personalizado solo para ti.",
      "fullDescription": "Cada viajero es único, y a veces el tour perfecto no existe en ninguna lista – hasta que tú lo creas. Con nuestro Tour Privado Personalizado, tú tienes el control. ¿Quieres combinar una caminata al amanecer con un mercado local y terminar en una playa escondida? Hecho. ¿Te interesa la arquitectura, el arte callejero y los locales de música en vivo? Lo hacemos realidad. Comparte tus intereses, limitaciones de tiempo y lugares imperdibles, y nuestros guías locales expertos diseñarán una experiencia a medida que se ajuste perfectamente a ti. Desde descubrimientos fuera de lo común hasta lugares icónicos, tu aventura en Río comienza con una conversación. Ya sea que estés celebrando una ocasión especial, viajando con necesidades específicas, o simplemente quieras algo diferente – te tenemos cubierto.",
      "highlights": [
        "Itinerario 100% personalizable según tus intereses",
        "Guía local experto que se adapta a tu ritmo y estilo",
        "Combina cualquier atracción, barrio o experiencia",
        "Duración flexible desde medio día hasta aventuras de varios días",
        "Perfecto para ocasiones especiales, intereses únicos o necesidades de accesibilidad",
        "Nosotros manejamos toda la logística, entradas y reservas"
      ],
      "included": [
        "Transporte privado con conductor profesional",
        "Guía local certificado en tu idioma",
        "Consulta de planificación de itinerario personalizado",
        "Recogida y regreso en cualquier lugar de Río (hoteles, Airbnbs, aeropuertos y terminal de cruceros)",
        "Tips locales, recomendaciones y acceso privilegiado",
        "Horarios flexibles y ajustes en tiempo real",
        "Agua mineral"
      ],
      "notIncluded": [
        "Entradas a atracciones (cotizadas por separado según tu itinerario)",
        "Comidas y bebidas (se pueden organizar bajo pedido)",
        "Propinas (opcional)"
      ],
      "duration": "Flexible (4-10+ horas)",
      "recommendations": "Contáctanos con al menos 48 horas de anticipación para que podamos crear la experiencia perfecta para ti. Cuanto más compartas sobre tus intereses, mejor podremos personalizar tu día.",
      "ctaText": "Empezar a Planificar",
      "faqs": [
        {
          "q": "¿Cómo funciona el Tour Personalizado -- cuál es el proceso?",
          "a": "Comienza con una conversación. Contáctanos por WhatsApp o email con tus intereses, tamaño del grupo, fechas disponibles y lugares imprescindibles. Nuestro equipo diseñará un itinerario personalizado para tu revisión, ajustará según tus comentarios y confirmará cuando estés satisfecho. No hay cargo por el proceso de planificación."
        },
        {
          "q": "¿Cuál es la duración mínima y máxima de un Tour Personalizado?",
          "a": "Los Tours Personalizados van desde 4 horas (medio día) hasta aventuras de varios días. La mayoría opta por un día completo (8-10 horas). Para tours de varios días explorando el estado de Río -- Petrópolis, Búzios, Ilha Grande, Paraty -- podemos diseñar un itinerario completo."
        },
        {
          "q": "¿Cómo se determina el precio de un Tour Personalizado?",
          "a": "El precio varía según el itinerario, la duración, el tamaño del grupo y las atracciones seleccionadas. Te proporcionaremos un presupuesto completo y transparente antes de confirmar. No hay costos sorpresa el día del tour."
        },
        {
          "q": "¿El Tour Personalizado puede adaptarse a personas con limitaciones de movilidad?",
          "a": "Sí -- esta es una de las razones clave por las que los viajeros eligen el Tour Personalizado. Podemos diseñar un itinerario que evite escaleras, terrenos empinados o caminatas largas, manteniendo una experiencia excepcional. Menciona cualquier consideración de movilidad al contactarnos."
        },
        {
          "q": "¿Podemos combinar múltiples tours o atracciones que no están en tu menú estándar?",
          "a": "Por supuesto -- ese es el objetivo del Tour Personalizado. Ya sea un restaurante específico, barrio, evento o actividad no cubierta en nuestros tours estándar, podemos incorporarlo. Río tiene mucho más para ofrecer de lo que cualquier tour fijo puede cubrir."
        }
      ],
      "tips": [
        "Cuantos más detalles nos compartas antes del tour, mejor podremos diseñarlo. Cuéntanos tus intereses, lugares imprescindibles, necesidades dietéticas, consideraciones de movilidad y cualquier cosa que ya hayas visto en Río.",
        "Los tours personalizados van desde 4 horas (medio día) hasta itinerarios de varios días por el estado de Río — Petrópolis, Búzios, Ilha Grande, Paraty. Indícanos tu tiempo disponible cuando contactes.",
        "Si tienes limitaciones de movilidad, menciónalo desde el principio — podemos diseñar un itinerario totalmente accesible que evite escaleras, terrenos empinados y largas caminatas, manteniendo una experiencia excepcional.",
        "No hay cargo por el proceso de planificación. Contáctanos por WhatsApp o email, diseñaremos el itinerario, ajustaremos según tus comentarios y confirmaremos cuando estés satisfecho.",
        "El precio varía según el itinerario, la duración, el tamaño del grupo y las atracciones específicas. Te proporcionaremos un presupuesto completo y transparente antes de confirmar — sin costos sorpresa el día del tour."
      ]
    }
  },
  "pt-br": {
    "essential-rio": {
      "badge": "Mais vendido",
      "id": "O Essencial do Rio: Ícones, Cultura e Joias Escondidas",
      "slug": "rio-essencial",
      "imageSlug": "essential-rio",
      "title": "O Essencial do Rio: Ícones, Cultura e Joias Escondidas",
      "shortDescription": "Passeio privativo de dia inteiro pelo Rio de Janeiro com Cristo Redentor, Pão de Açúcar e os bairros históricos da cidade, com guia credenciado, motorista profissional e ingressos providenciados antecipadamente.",
      "fullDescription": "Todos os tours privados da Be Free podem ser personalizados. O roteiro abaixo é a nossa sugestão para o dia, mas as atrações, a ordem das visitas e o ritmo do passeio podem ser alterados antes ou durante o tour.\n\nO Essential Rio é o nosso tour privado mais completo para conhecer o Rio de Janeiro, especialmente indicado para quem visita a cidade pela primeira vez. O passeio reúne o Cristo Redentor (Christ the Redeemer), o Pão de Açúcar (Sugarloaf Mountain) e alguns dos bairros e pontos culturais mais marcantes do Rio, com transporte privativo e liberdade para conhecer a cidade no ritmo do seu grupo.\n\nO tour é realizado por dois profissionais dedicados: um guia de turismo credenciado, que acompanha o grupo durante as visitas, e um motorista profissional responsável pelo veículo. Dessa forma, o guia permanece com você ao longo de toda a experiência, sem precisar se afastar para estacionar ou cuidar do transporte, enquanto o motorista organiza os deslocamentos e os próximos pontos de embarque.\n\nO roteiro sugerido costuma começar pelos dois principais cartões-postais do Rio. No Cristo Redentor, cercado pela Floresta da Tijuca (Tijuca Forest), é possível compreender melhor como montanhas, praias e bairros se distribuem pela cidade. Já o Pão de Açúcar oferece uma perspectiva diferente, com vistas para a Baía de Guanabara (Guanabara Bay), a orla e as montanhas ao redor. Os ingressos são providenciados antecipadamente, incluindo acesso sem fila para os bondinhos do Pão de Açúcar.\n\nDepois dos principais mirantes, muitos visitantes optam por seguir para Santa Teresa e a Escadaria Selarón (Selarón Steps). Santa Teresa tem um ritmo mais tranquilo, com ruas nas encostas, casarões históricos, ateliês, cafés e restaurantes. Próxima dali, a Escadaria Selarón liga Santa Teresa à Lapa e se tornou uma das obras de arte pública mais conhecidas do Rio de Janeiro.\n\nDependendo do dia, dos horários de funcionamento e dos interesses do grupo, o passeio também pode incluir o Real Gabinete Português de Leitura (Royal Portuguese Reading Room) e a Catedral Metropolitana do Rio de Janeiro (Metropolitan Cathedral). Os dois espaços mostram lados muito diferentes do Centro: a ornamentação histórica do Real Gabinete e a arquitetura moderna, marcada pelos grandes vitrais, da Catedral.\n\nEssas paradas são sugestões, não obrigações. Você pode permanecer mais tempo em uma atração, fazer uma pausa para o almoço, retirar um local ou substituir parte do roteiro por outro bairro ou experiência. A ordem das visitas também pode mudar de acordo com o clima, o trânsito e as condições do dia. Em um tour privado, conhecer bem o Rio não significa apenas saber aonde ir, mas também entender quando uma mudança de plano pode tornar o passeio melhor.\n\nA experiência é exclusiva para o seu grupo, sem transporte compartilhado, sem outros participantes e sem a necessidade de acompanhar o ritmo de desconhecidos. O Essential Rio oferece uma introdução completa à cidade, preservando a flexibilidade necessária para que o dia tenha a cara do seu grupo.",
      "highlights": [
        "Cristo Redentor",
        "Pão de Açúcar e seus bondinhos",
        "Santa Teresa, o bairro boêmio nas encostas do Rio",
        "Escadaria Selarón",
        "Catedral Metropolitana",
        "Real Gabinete Português de Leitura (apenas dias de semana)"
      ],
      "included": [
        "Transporte privativo com motorista profissional, exclusivo para o seu grupo",
        "Guia de turismo credenciado (português) acompanhando o grupo durante todo o dia",
        "Ingressos do Cristo Redentor, reservados antecipadamente para o horário de subida de sua preferência, conforme disponibilidade",
        "Ingressos sem fila para os bondinhos do Pão de Açúcar",
        "Busca e retorno em qualquer lugar do Rio (hotéis, Airbnbs, aeroportos e terminal de cruzeiros)",
        "Água mineral de cortesia"
      ],
      "notIncluded": [
        "Refeições e bebidas",
        "Gorjetas"
      ],
      "faqs": [
        {
          "q": "O roteiro é fixo?",
          "a": "Não. O roteiro apresentado nesta página é a nossa versão recomendada do Essential Rio, mas o tour pode ser totalmente personalizado. É possível mudar a ordem das visitas, permanecer mais tempo em determinados locais, retirar atrações ou substituir parte do roteiro por outros bairros e experiências. As alterações podem ser combinadas antecipadamente ou realizadas com o guia durante o passeio."
        },
        {
          "q": "O guia e o motorista são a mesma pessoa?",
          "a": "Não. O tour inclui dois profissionais diferentes: um guia de turismo credenciado, que acompanha o grupo durante as visitas, e um motorista profissional responsável pelo veículo e pelos deslocamentos. Assim, o guia pode permanecer com você durante toda a experiência, enquanto o motorista cuida do trânsito, do estacionamento e dos próximos embarques."
        },
        {
          "q": "Os ingressos estão incluídos?",
          "a": "Sim. Os ingressos para o Cristo Redentor e o Pão de Açúcar estão incluídos e são providenciados antecipadamente. No Pão de Açúcar, os ingressos incluem acesso sem fila para os bondinhos. No Cristo Redentor, o ingresso é reservado com antecedência para o horário de subida de sua preferência, conforme a disponibilidade, e o guia cuida de todo o processo no dia do passeio."
        },
        {
          "q": "Precisaremos enfrentar filas?",
          "a": "No Pão de Açúcar, o tour inclui acesso sem fila para os bondinhos. No Cristo Redentor, os ingressos são reservados com antecedência para um horário de subida no trem ou van, escolhido conforme sua preferência e a disponibilidade, e o guia cuida da troca do voucher e do embarque para que você não precise se preocupar com nada. O acesso segue o mesmo procedimento oficial para todos os visitantes, e ter tudo organizado de antemão é o que mantém o ritmo do dia."
        },
        {
          "q": "O tour é compartilhado com outros visitantes?",
          "a": "Não. Este é um tour totalmente privado e exclusivo para o seu grupo. O guia, o motorista, o veículo e o roteiro não são compartilhados com outros visitantes."
        },
        {
          "q": "O passeio pode ser adaptado para idosos, crianças ou pessoas com mobilidade reduzida?",
          "a": "Sim, sempre que possível. Por ser um tour privado, o ritmo, o tempo de caminhada e o roteiro podem ser adaptados às necessidades do grupo. Recomendamos informar qualquer necessidade de mobilidade antes da reserva para que possamos sugerir o percurso mais adequado e explicar as condições de acessibilidade de cada atração."
        },
        {
          "q": "O Real Gabinete Português de Leitura fica sempre aberto?",
          "a": "O Real Gabinete Português de Leitura abre apenas de segunda a sexta-feira. Se o seu passeio cair no fim de semana, o guia sugerirá uma alternativa cultural para aquele dia."
        }
      ],
      "tips": [
        "Este é um tour de oito horas que combina deslocamentos em veículo privativo com períodos de caminhada nas atrações. Sempre que possível, o ritmo do passeio e a quantidade de caminhada podem ser adaptados às necessidades do grupo.",
        "Os locais apresentados no roteiro são sugestões e não precisam ser visitados obrigatoriamente. As paradas, a ordem das visitas e o tempo dedicado a cada atração podem ser ajustados antes ou durante o tour.",
        "Normalmente recomendamos começar cedo, especialmente nos períodos de maior movimento. O melhor horário de início pode variar de acordo com a data, a disponibilidade das atrações e o roteiro escolhido para o grupo.",
        "O Real Gabinete Português de Leitura abre apenas de segunda a sexta-feira. Se o seu passeio for no fim de semana, o guia sugerirá uma alternativa igualmente interessante.",
        "A Escadaria Selarón fica mais fotogênica com a luz da manhã. Peça ao guia para planejar essa parada levando isso em conta.",
        "Use roupas leves em dias quentes e calçados confortáveis — os paralelepípedos de Santa Teresa e a Escadaria Selarón são irregulares."
      ]
    },
    "rio-express": {
      "badge": "Meio dia",
      "id": "Rio Express: Cristo e Pão de Açúcar em 5 Horas",
      "slug": "passeio-expresso-rio-5-horas-cristo-pao-acucar",
      "imageSlug": "rio-flash-5h",
      "title": "Rio Express: Cristo e Pão de Açúcar em 5 Horas",
      "shortDescription": "Passeio privativo de cinco horas pelo Cristo Redentor e Pão de Açúcar, com guia credenciado, motorista profissional e ingressos providenciados antecipadamente. Pensado para passageiros de cruzeiros e viajantes com pouco tempo.",
      "fullDescription": "O Rio Express é um tour privado de cinco horas pelo Cristo Redentor (Christ the Redeemer) e Pão de Açúcar (Sugarloaf Mountain), criado para quem deseja conhecer os dois principais cartões-postais do Rio de Janeiro em menos tempo. É especialmente indicado para passageiros de cruzeiros, viajantes a negócios e visitantes que tenham apenas uma manhã ou tarde disponível.\n\nO tour é realizado por dois profissionais dedicados: um guia de turismo credenciado, que acompanha o grupo durante todas as visitas, e um motorista profissional responsável pelo transporte. Enquanto o guia permanece com você, o motorista cuida do veículo, do trânsito, do estacionamento e dos próximos pontos de embarque — uma vantagem importante quando cada hora conta.\n\nCinco horas são suficientes para visitar as duas atrações quando o dia é cuidadosamente planejado. O Rio Express mantém o roteiro concentrado no Cristo Redentor e no Pão de Açúcar, sem tentar encaixar um passeio completo de dia inteiro em uma experiência mais curta. A ordem e os horários das visitas podem ser ajustados de acordo com o local de embarque, o trânsito, o clima e as condições das atrações.\n\nNo Cristo Redentor, cercado pela Floresta da Tijuca (Tijuca Forest), é possível observar como as montanhas, praias, bairros e a Baía de Guanabara formam a paisagem do Rio. Os ingressos estão incluídos e são reservados com antecedência para um horário de subida no trem ou van, escolhido conforme sua preferência e a disponibilidade, e o guia cuida da troca do voucher e do embarque.\n\nO Pão de Açúcar oferece uma perspectiva diferente da cidade, com vistas para a Baía de Guanabara (Guanabara Bay), a orla e as montanhas ao redor. A visita inclui acesso sem fila para os bondinhos, com passagem pelo Morro da Urca e subida até o topo do Pão de Açúcar.\n\nPara passageiros de cruzeiros, o embarque pode ser realizado diretamente no terminal do Pier Mauá. Ao fazer a reserva, informe o horário oficial de retorno ao navio para que possamos recomendar o melhor horário de início e planejar uma margem adequada para o retorno. O embarque também pode ser feito em hotéis e outras hospedagens dentro da área atendida.\n\nEste é um roteiro focado, e não uma versão acelerada de um tour de dia inteiro. O ritmo pode ser adaptado ao grupo, e a ordem das atrações pode mudar quando isso tornar a visita mais eficiente. Paradas adicionais, porém, dependem do tempo disponível e das condições operacionais do dia.\n\nO Rio Express é indicado para quem busca transporte privativo, atendimento pessoal e uma visita bem organizada aos dois principais cartões-postais do Rio sem precisar reservar um dia inteiro.",
      "highlights": [
        "Cristo Redentor",
        "Pão de Açúcar e seus bondinhos"
      ],
      "included": [
        "Transporte privativo com ar-condicionado e motorista profissional, exclusivo para o seu grupo",
        "Guia de turismo credenciado (português) acompanhando o grupo durante todas as visitas",
        "Ingressos do Cristo Redentor, reservados antecipadamente para o horário de subida de sua preferência, conforme disponibilidade",
        "Ingressos sem fila para os bondinhos do Pão de Açúcar",
        "Busca e retorno no terminal de cruzeiros Pier Mauá, hotéis, Airbnbs e aeroportos do Rio",
        "Água mineral de cortesia"
      ],
      "notIncluded": [
        "Refeições e bebidas",
        "Gorjetas"
      ],
      "faqs": [
        {
          "q": "Cinco horas são suficientes para visitar o Cristo Redentor e o Pão de Açúcar?",
          "a": "Sim, desde que o roteiro permaneça focado nas duas atrações. O transporte privativo, o planejamento antecipado e a presença de guia e motorista separados ajudam a aproveitar melhor o tempo disponível. Trânsito, clima e condições das atrações podem afetar a ordem e o ritmo das visitas."
        },
        {
          "q": "Este tour é exclusivo para passageiros de cruzeiros?",
          "a": "Não. O Rio Express também é indicado para quem tem apenas uma manhã ou tarde livre, está em uma viagem curta ou a trabalho, ou deseja conhecer os dois principais cartões-postais do Rio sem fazer um tour de dia inteiro."
        },
        {
          "q": "Vocês fazem o embarque no terminal de cruzeiros?",
          "a": "Sim. O embarque pode ser realizado no terminal do Pier Mauá. Informe o nome do navio, o horário de atracação e o horário oficial de retorno a bordo ao fazer a reserva."
        },
        {
          "q": "Retornaremos ao navio a tempo?",
          "a": "O horário de início, o roteiro e o retorno são planejados de acordo com o horário oficial de retorno a bordo, incluindo uma margem de segurança adequada às exigências do porto e às condições previstas de trânsito. Eventos excepcionais fora do nosso controle ainda podem afetar as vias, por isso é essencial fornecer os dados corretos do navio."
        },
        {
          "q": "O guia e o motorista são a mesma pessoa?",
          "a": "Não. O tour inclui dois profissionais diferentes: um guia de turismo credenciado, que acompanha o grupo, e um motorista profissional responsável pelo transporte. Dessa forma, o guia permanece com você enquanto o motorista cuida do veículo, do estacionamento e dos próximos embarques."
        },
        {
          "q": "Os ingressos estão incluídos?",
          "a": "Sim. Os ingressos para o Cristo Redentor e o Pão de Açúcar estão incluídos e são providenciados antecipadamente. No Pão de Açúcar, os ingressos incluem acesso sem fila para os bondinhos. No Cristo Redentor, o ingresso é reservado com antecedência para o horário de subida de sua preferência, conforme a disponibilidade, e o guia cuida de todo o processo no dia do passeio."
        },
        {
          "q": "Precisaremos enfrentar filas?",
          "a": "No Pão de Açúcar, o tour inclui acesso sem fila para os bondinhos. No Cristo Redentor, os ingressos são reservados com antecedência para um horário de subida no trem ou van, escolhido conforme sua preferência e a disponibilidade, e o guia cuida da troca do voucher e do embarque para que você não precise se preocupar com nada. O acesso segue o mesmo procedimento oficial para todos os visitantes, e ter tudo organizado de antemão é o que mantém o ritmo de um passeio de cinco horas."
        },
        {
          "q": "O roteiro pode ser personalizado?",
          "a": "A ordem e o ritmo das visitas podem ser ajustados de acordo com o seu horário e as condições do dia. Como este é um tour focado de cinco horas, a inclusão de outras atrações depende do tempo disponível e nem sempre poderá ser garantida."
        },
        {
          "q": "O tour é compartilhado com outras pessoas?",
          "a": "Não. O guia, o motorista, o veículo e o roteiro são exclusivos para o seu grupo."
        },
        {
          "q": "O tour pode ser adaptado para crianças, idosos ou pessoas com mobilidade reduzida?",
          "a": "Sim, sempre que possível. Informe qualquer necessidade de mobilidade antes da reserva para que possamos explicar as condições de cada atração e planejar o ritmo mais adequado."
        }
      ],
      "tips": [
        "Este é um tour focado de cinco horas pelo Cristo Redentor e Pão de Açúcar. Ele não inclui os bairros e pontos culturais adicionais presentes nos nossos roteiros de dia inteiro.",
        "A ordem das atrações pode mudar de acordo com o trânsito, o clima, as condições de funcionamento e o local de embarque.",
        "Os ingressos das duas atrações são providenciados antecipadamente. No Cristo Redentor, o horário de subida no trem ou van é reservado com antecedência conforme sua preferência e a disponibilidade, e o guia cuida da troca do voucher.",
        "Para embarques no porto, informe o nome do navio, o horário previsto de atracação e o horário oficial de retorno a bordo. Recomendaremos o horário de início e planejaremos o retorno de acordo com a programação do navio, as exigências do porto e as condições esperadas de trânsito.",
        "A experiência combina deslocamentos em veículo privativo com períodos de caminhada e permanência em pé nas atrações. Sempre que possível, o ritmo pode ser adaptado ao grupo.",
        "Paradas adicionais não são garantidas e dependem do trânsito, das condições das atrações e do tempo disponível."
      ]
    },
    "first-light-sunrise": {
      "badge": "Nascer do sol",
      "id": "Rio ao Amanhecer: Pão de Açúcar e Cristo ao Alvorecer",
      "slug": "nascer-sol-pao-acucar-cristo-redentor-passeio-privado",
      "imageSlug": "first-light-sunrise",
      "title": "Rio ao Amanhecer: Pão de Açúcar e Cristo ao Alvorecer",
      "shortDescription": "Experimente o nascer do sol mais impressionante do Rio do Pão de Açúcar, seguido de acesso matinal ao Cristo Redentor.",
      "fullDescription": "Há um momento no Rio que fotógrafos e madrugadores descrevem como transformador: estar no topo do Pão de Açúcar no escuro, vendo o céu sobre a Baía de Guanabara começar a mudar do preto para o azul profundo e depois âmbar enquanto o sol nasce atrás da Serra do Mar. O passeio privativo Rio at First Light foi criado em torno desse único momento — e da precisão logística necessária para alcançá-lo.\n\nSua busca é às 4h. Seu veículo privativo chega ao seu hotel, Airbnb ou acomodação no navio exatamente no horário. O trajeto ao Pão de Açúcar leva aproximadamente 20 minutos nessa hora, com a cidade completamente vazia e a baía visível abaixo da rodovia na escuridão. O primeiro bondinho do dia leva você à estação intermediária de 220 metros no Morro da Urca, e o segundo ao topo de 396 metros, chegando antes do amanhecer.\n\nO que acontece depois depende da manhã. Em dias claros, a baía abaixo vai clareando progressivamente à medida que o sol se aproxima do horizonte — primeiro um índigo profundo, depois violeta, depois as primeiras bordas alaranjadas aparecem sobre as montanhas do outro lado da baía. O momento do nascer do sol em si, quando a primeira luz direta atinge o cume e a baía fica cor de cobre e ouro, dura aproximadamente 15 minutos. Em dias parcialmente nublados, as próprias nuvens se tornam o espetáculo — camadas de cor em altitudes diferentes, a cidade emergindo gradualmente da escuridão abaixo.\n\nNessa hora, o topo tem uma qualidade que nunca tem mais tarde no dia: silêncio. Sem multidões, sem grupos, sem filas. Só a baía, o céu e o Rio se estendendo em todas as direções enquanto a cidade acorda sob seus pés.\n\nApós o nascer do sol no Pão de Açúcar, o passeio privativo segue para o Cristo Redentor no Corcovado. O acesso pela manhã cedo é uma das vantagens mais significativas deste passeio. Quando os grupos padrão de day trip começam a chegar — geralmente entre 9h e 10h — você já terá estado lá e partido. A estátua de 38 metros à luz da manhã cedo, com a cidade relativamente tranquila abaixo e uma leve névoa às vezes derivando pela Floresta da Tijuca nas encostas, é uma experiência diferente da visita ao meio-dia.\n\nOs ingressos skip-the-line estão incluídos para o bondinho do Pão de Açúcar, e os ingressos para o Cristo Redentor. O passeio está disponível apenas aos sábados, quando o horário do primeiro bondinho acomoda o início às 4h. As vagas de sábado se esgotam semanas antes — reserve com antecedência.\n\nIncluído: transporte privativo porta a porta, guia local certificado, ingresso skip-the-line para o Pão de Açúcar, ingresso para o Cristo Redentor, e água mineral de cortesia. O café da manhã não está incluído mas seu guia pode recomendar ótimas opções perto do Cristo após o nascer do sol.\n\nEste passeio não é para todos — o início às 4h exige comprometimento. Para quem estiver disposto a colocar dois alarmes e sacrificar uma manhã de sono, a recompensa é o Rio no seu estado mais extraordinário.",
      "highlights": [
        "Nascer do sol exclusivo do Pão de Açúcar",
        "Visita matinal cedo ao Cristo Redentor",
        "Oportunidades de fotografia profissional"
      ],
      "included": [
        "Transporte privado",
        "Guia local certificado (português)",
        "Ingressos do Cristo Redentor",
        "Ingressos sem fila do bondinho do Pão de Açúcar",
        "Busca e retorno em qualquer lugar do Rio (hotéis, Airbnbs, aeroportos e terminal de cruzeiros)",
        "Água mineral"
      ],
      "notIncluded": [
        "Refeições e bebidas",
        "Gorjetas"
      ],
      "bookingBlockedWeekdays": [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday"
      ],
      "faqs": [
        {
          "q": "Que horas começa este tour do amanhecer e vale a pena acordar tão cedo?",
          "a": "O tour começa às 4h para chegar ao topo do Pão de Açúcar antes do amanhecer. Ver o sol nascer sobre a Baía de Guanabara do alto -- sem multidões -- é uma das experiências mais extraordinárias do Rio. Os viajantes consistentemente classificam isso como o ponto alto de toda a viagem."
        },
        {
          "q": "Quais dias o tour do amanhecer está disponível?",
          "a": "O tour Rio ao Amanhecer está disponível apenas aos sábados. Isso é intencional -- o acesso exclusivo de madrugada ao Pão de Açúcar opera em horário limitado. Reserve com antecedência pois as vagas de sábado se esgotam rapidamente."
        },
        {
          "q": "É seguro se locomover no Rio às 4h da manhã?",
          "a": "Sim. Seu motorista e guia privado buscarão você diretamente no hotel, então você viajará em veículo particular o tempo todo. Não haverá espera em ruas nem uso de transporte público."
        },
        {
          "q": "O que devo vestir para um tour às 4h da manhã?",
          "a": "Leve um casaco leve -- o topo pode estar fresco e ventoso antes do amanhecer mesmo no verão carioca. Tênis confortável é essencial. Conforme o dia esquenta após o Cristo Redentor, roupas mais leves funcionam bem."
        },
        {
          "q": "Todos os ingressos estão incluídos, inclusive o acesso especial ao Pão de Açúcar?",
          "a": "Sim, todos os ingressos incluindo o acesso especial de madrugada ao Pão de Açúcar e a entrada do Cristo Redentor estão incluídos no preço do tour."
        }
      ],
      "tips": [
        "Sua busca é às 4h — coloque dois alarmes. Seu guia estará esperando no lobby do hotel exatamente no horário.",
        "O topo do Pão de Açúcar pode estar ventoso e visivelmente mais fresco antes do amanhecer, mesmo no verão. Leve um casaco leve que você possa tirar conforme o dia esquenta.",
        "Leve câmera ou smartphone com bom modo de pouca luz. As cores do amanhecer sobre a Baía de Guanabara são extraordinárias — é o momento central do passeio.",
        "Coma algo leve antes ou durante o trajeto. O início às 4h significa que o café da manhã vem depois — seu guia pode recomendar boas opções perto do Cristo.",
        "Este passeio só está disponível aos sábados. Se precisar reagendar, entre em contato com a maior antecedência possível — as vagas de sábado se esgotam semanas antes."
      ]
    },
    "golden-hour-rio": {
      "badge": "Pôr do sol",
      "id": "Hora Dourada no Rio: Cristo e Pão de Açúcar ao Pôr do Sol",
      "slug": "passeio-por-do-sol-rio-cristo-redentor-pao-acucar",
      "imageSlug": "golden-hour-rio",
      "title": "Hora Dourada no Rio: Cristo e Pão de Açúcar ao Pôr do Sol",
      "shortDescription": "Experimente a beleza da hora dourada do Rio com visitas à tarde ao Cristo Redentor e um pôr do sol perfeitamente programado.",
      "fullDescription": "A melhor luz do Rio chega nas duas horas antes do pôr do sol. Os picos de granito da cidade capturam o sol quente da tarde num ângulo que transforma cada vista — as sombras se aprofundam na face do Pão de Açúcar, a baía fica cor de cobre, e o Cristo Redentor brilha contra um céu que vai do azul ao dourado, ao laranja e ao roxo à medida que a noite cai. O passeio privativo Golden Hour Rio foi criado em torno dessa janela específica de luz, cronometrado com precisão para levá-lo aos dois cumes quando as condições estão no ponto máximo.\n\nEste não é uma versão encurtada do passeio de dia inteiro. É um roteiro diferente, desenhado para as horas da tarde, otimizado para fotografia e cronometrado ao minuto. O horário de início varia conforme a estação — geralmente entre 13h e 14h — e, ao reservar, seu horário exato de busca é confirmado com base nos dados do pôr do sol daquele dia.\n\nVocê escolhe de onde vê o sol se pôr, e essa escolha define a ordem do dia. A maioria faz o Cristo primeiro e o pôr do sol do Pão de Açúcar: a vista da costa é mais aberta lá de cima, é o pôr do sol mais procurado, e há lojas e opções de comida enquanto a luz não vem. O contrário é a opção mais tranquila — o Corcovado é mais alto, o pôr do sol dura mais lá, e há menos gente nesse horário. Diga qual prefere na reserva. Se o tempo virar no dia, seu guia inverte a ordem para levar você onde o céu estiver mais limpo — é para isso que serve um passeio privativo.\n\nO Cristo Redentor no final da tarde é uma experiência diferente da visita matinal. O ângulo da luz projeta sombras dramáticas nos traços da estátua, o platô ao redor é menos movimentado do que nas horas de pico da manhã, e as cores sobre a Baía de Guanabara durante a aproximação ao pôr do sol são extraordinárias. O acesso sem fila ao bondinho do Pão de Açúcar está incluído — o mesmo acesso rápido do Essential Rio, porque o timing da hora dourada é preciso demais para arriscar uma fila longa no bondinho.\n\nNa ordem habitual, do Corcovado seu veículo privativo leva você ao Pão de Açúcar, onde a subida de bondinho é cronometrada para chegar ao cume de 396 metros quando o sol se aproxima do horizonte. A vista do topo nesse momento — a cidade abaixo começando a se iluminar, a baía refletindo as últimas cores do céu, a silhueta do Cristo Redentor visível através da paisagem urbana — é uma das imagens mais fotografadas da América do Sul. Seu guia vai posicioná-lo para os melhores ângulos e lhe dar o tempo que você precisa.\n\nApós o pôr do sol, o topo do Pão de Açúcar à noite tem seu próprio caráter: as luzes da cidade abaixo, as estrelas acima quando o céu está limpo, e o Cristo Redentor iluminado do outro lado do vale. Não há pressa para descer. Seu guia privativo e motorista retornarão com você ao hotel quando estiver pronto.\n\nSe quiser prolongar a noite com jantar após o passeio, seu guia pode recomendar excelentes restaurantes na região do Pão de Açúcar, Botafogo ou Flamengo, e seu motorista pode levar você diretamente.\n\nIncluído: veículo privativo com ar-condicionado, motorista profissional, guia local certificado, ingressos skip-the-line para o bondinho do Pão de Açúcar e ingressos para o Cristo Redentor, e água mineral de cortesia. Refeições não estão incluídas.\n\nO passeio Golden Hour Rio é para viajantes que entendem que o timing muda tudo. Os mesmos dois monumentos vistos com luz diferente contam uma história diferente — e a história contada ao pôr do sol é a que produz as fotografias que duram uma vida.",
      "highlights": [
        "Cristo Redentor com luz dourada",
        "Pôr do sol do Pão de Açúcar",
        "Vistas panorâmicas de praias",
        "Orientação fotográfica profissional"
      ],
      "included": [
        "Transporte privado",
        "Guia local certificado (português)",
        "Ingressos do Cristo Redentor",
        "Ingressos sem fila do bondinho do Pão de Açúcar",
        "Busca e retorno em qualquer lugar do Rio (hotéis, Airbnbs, aeroportos e terminal de cruzeiros)",
        "Água mineral"
      ],
      "notIncluded": [
        "Jantar (paradas opcionais)",
        "Gorjetas"
      ],
      "faqs": [
        {
          "q": "O que torna o tour Hora Dourada diferente de um tour diurno comum?",
          "a": "O timing é tudo. O Cristo Redentor banhado em luz dourada da tarde, seguido pelo pôr do sol sobre o litoral do Rio visto do Pão de Açúcar -- com as luzes da cidade começando a aparecer -- é uma experiência completamente diferente das visitas ao meio-dia. As 6 horas são desenhadas especificamente em torno da posição do sol."
        },
        {
          "q": "A que horas o tour Hora Dourada costuma começar?",
          "a": "Os horários de início variam conforme a estação do ano para se alinhar ao pôr do sol. Geralmente entre 13h e 14h. Ao reservar, confirmaremos o horário exato conforme a data para garantir o timing perfeito da hora dourada."
        },
        {
          "q": "É possível jantar depois do tour?",
          "a": "Sim -- o tour termina no Pão de Açúcar ao final do pôr do sol. Seu motorista pode levá-lo diretamente a um restaurante depois. Podemos recomendar ótimas opções perto do Pão de Açúcar ou em qualquer parte do Rio."
        },
        {
          "q": "Os ingressos sem fila para o Pão de Açúcar estão incluídos?",
          "a": "Sim — os ingressos sem fila do bondinho do Pão de Açúcar estão incluídos, junto com os ingressos para o Cristo Redentor. Pular a fila do Pão de Açúcar importa porque a janela do pôr do sol é curta."
        }
      ],
      "tips": [
        "O horário de início varia conforme a estação para se alinhar ao pôr do sol — confirme seu horário exato de busca ao reservar. Geralmente entre 13h e 14h.",
        "Leve câmera ou smartphone — a luz dourada sobre o Cristo e o pôr do sol do topo do Pão de Açúcar estão entre os momentos mais fotografados do Rio. Um mini tripé vale a pena.",
        "A subida no bondinho é cronometrada para chegar ao topo exatamente quando o sol começa a baixar. Confie no timing — seu guia sabe exatamente a hora certa de subir.",
        "Se quiser jantar após o passeio, avise seu guia. A região do Pão de Açúcar tem ótimos restaurantes e o motorista pode levar você diretamente.",
        "O timing do pôr do sol é preciso — os ingressos sem fila para o Pão de Açúcar estão incluídos especificamente para garantir que você chegue ao topo antes de a luz mudar."
      ]
    },
    "sunset-culture-roxy": {
      "id": "Pôr do Sol e Cultura: Ícones do Rio + Show de Dança Brasileira Roxy",
      "slug": "por-do-sol-cultura-roxy",
      "imageSlug": "sunset-culture-roxy",
      "title": "Pôr do Sol e Cultura: Ícones do Rio + Show de Dança Brasileira Roxy",
      "shortDescription": "Um passeio privativo de tarde e noite pelo Cristo Redentor e Pão de Açúcar ao pôr do sol, seguido de jantar e um espetáculo cultural brasileiro no Roxy.",
      "fullDescription": "O Rio ao Pôr do Sol & Roxy combina uma tarde privativa no Cristo Redentor (Christ the Redeemer) e no Pão de Açúcar (Sugarloaf Mountain) com jantar e espetáculo cultural brasileiro no Roxy. É uma experiência pensada para quem deseja conhecer os cartões-postais do Rio, acompanhar a mudança da luz no fim do dia e terminar a noite com música e dança, como um único programa contínuo e bem organizado.\n\nO horário de início varia de acordo com a data, o período do ano e a programação do Roxy. Durante a parte turística, o serviço é realizado por dois profissionais dedicados: um guia de turismo credenciado, que acompanha o grupo nas visitas, e um motorista profissional responsável pelo transporte. Enquanto o guia permanece com você nas atrações, o motorista cuida do trânsito, do estacionamento e dos próximos embarques.\n\nO roteiro sugerido começa no Cristo Redentor, cercado pela Floresta da Tijuca (Tijuca Forest). Do Corcovado, é possível observar como montanhas, praias, bairros e a Baía de Guanabara formam a paisagem do Rio. Os ingressos estão incluídos e são reservados com antecedência para um horário de subida no trem ou van, escolhido conforme sua preferência e a disponibilidade, e o guia cuida da troca do voucher e do embarque.\n\nDo Cristo Redentor, o passeio segue para o Pão de Açúcar. Estão incluídos ingressos sem fila para os bondinhos, com passagem pelo Morro da Urca e subida até o topo do Pão de Açúcar. Sempre que possível, os horários são planejados em torno do pôr do sol da época do ano, embora as condições de visibilidade, clima e luz não possam ser garantidas.\n\nApós o Pão de Açúcar, o veículo privativo leva você diretamente ao Roxy. A transição é organizada de acordo com a programação do espetáculo, evitando que você precise providenciar outro transporte ou administrar os horários entre as atrações e o teatro.\n\nA experiência no Roxy inclui jantar de três pratos servido à mesa e uma produção profissional de música e dança brasileiras. O espetáculo reúne ritmos e tradições de diferentes regiões do país, apresentados por dançarinos e músicos profissionais em um ambiente de teatro.\n\nDurante a parte turística, o guia pode apresentar um pouco do contexto cultural das músicas, danças e tradições que você verá no espetáculo. O Roxy, no entanto, é uma produção profissional em formato de dinner show, e não uma visita cultural guiada.\n\nEsta é uma experiência privativa de tarde e noite para o seu grupo. O tour combina dois dos principais mirantes do Rio, jantar, espetáculo e transporte privativo em um único programa, sem que você precise organizar cada etapa separadamente.",
      "highlights": [
        "Cristo Redentor",
        "Pão de Açúcar ao pôr do sol",
        "Show jantar brasileiro no Roxy",
        "Jantar de três pratos no Roxy"
      ],
      "included": [
        "Transporte privativo com ar-condicionado durante toda a experiência",
        "Guia de turismo credenciado (português) durante a parte turística",
        "Motorista profissional separado",
        "Ingressos do Cristo Redentor, reservados antecipadamente para o horário de subida de sua preferência, conforme disponibilidade",
        "Ingressos sem fila para os bondinhos do Pão de Açúcar",
        "Ingresso para o show jantar no Roxy",
        "Jantar de três pratos no Roxy",
        "Água mineral de cortesia durante a parte turística",
        "Busca e retorno em qualquer lugar do Rio (hotéis, Airbnbs, aeroportos e terminal de cruzeiros)"
      ],
      "notIncluded": [
        "Bebidas no Roxy",
        "Gorjetas"
      ],
      "bookingBlockedWeekdays": [
        "monday",
        "tuesday"
      ],
      "restrictions": "Quarta a domingo apenas. Os ingressos do espetáculo do Roxy não são reembolsáveis.",
      "faqs": [
        {
          "q": "O que é o show jantar do Roxy?",
          "a": "O Roxy é uma produção profissional brasileira de dinner show, de música e dança, em um teatro projetado para isso. A apresentação reúne ritmos e tradições de diferentes regiões do Brasil, a cargo de dançarinos e músicos profissionais, junto com um jantar de três pratos servido à mesa."
        },
        {
          "q": "Quais dias este tour está disponível?",
          "a": "Apenas de quarta a domingo. O Roxy não funciona às segundas e terças-feiras, então o tour não está disponível nesses dias."
        },
        {
          "q": "O ingresso do show do Roxy é reembolsável?",
          "a": "Não. Uma vez comprado, o ingresso do Roxy não pode ser cancelado nem reembolsado pelo estabelecimento, independentemente do aviso dado. Reserve apenas se seus planos para a noite estiverem confirmados. O restante do tour segue nossa política de cancelamento padrão."
        },
        {
          "q": "O pôr do sol é garantido?",
          "a": "Não. Os horários são planejados em torno do pôr do sol da época do ano sempre que possível, mas nuvens, chuva, visibilidade, trânsito e operação das atrações estão fora do nosso controle."
        },
        {
          "q": "O guia e o motorista são a mesma pessoa?",
          "a": "Não. Durante a parte turística, o tour inclui um guia de turismo credenciado que acompanha o grupo e um motorista profissional separado responsável pelo transporte."
        },
        {
          "q": "Os ingressos do Cristo Redentor e do Pão de Açúcar estão incluídos?",
          "a": "Sim. Ambos estão incluídos e são providenciados antecipadamente. No Pão de Açúcar, os ingressos incluem acesso sem fila para os bondinhos. No Cristo Redentor, o ingresso é reservado com antecedência para o horário de subida de sua preferência, conforme a disponibilidade, e o guia cuida de todo o processo no dia do passeio."
        },
        {
          "q": "O tour é privado?",
          "a": "A parte turística e o transporte são exclusivos para o seu grupo. O Roxy é um teatro aberto ao público, com a presença de outros clientes."
        },
        {
          "q": "Que roupa devo usar?",
          "a": "Traje casual arrumado é adequado — o Roxy é um local sofisticado. Roupa formal não é necessária, mas roupas de praia não são recomendadas. Leve também um documento oficial com foto, pois o estabelecimento pode solicitá-lo na entrada."
        },
        {
          "q": "As bebidas estão incluídas no Roxy?",
          "a": "O jantar de três pratos está incluído, mas as bebidas no Roxy não estão, e são pagas diretamente no local."
        }
      ],
      "tips": [
        "Este passeio só está disponível de quarta a domingo. O Roxy não funciona às segundas e terças-feiras.",
        "O ingresso do show do Roxy não é reembolsável após a compra, independentemente do aviso dado. Reserve apenas se seus planos para a noite estiverem confirmados.",
        "O horário de início varia de acordo com a data, o pôr do sol da época do ano e a programação do Roxy. O horário confirmado de embarque é informado após a reserva.",
        "Os ingressos das duas atrações são providenciados antecipadamente. No Cristo Redentor, o horário de subida no trem ou van é reservado com antecedência conforme sua preferência e a disponibilidade, e o guia cuida da troca do voucher.",
        "Vista-se de traje casual arrumado para o Roxy — é um local sofisticado e roupas de praia não são adequadas. Leve um documento oficial com foto, pois o estabelecimento pode solicitá-lo na entrada.",
        "As bebidas no Roxy não estão incluídas no preço do passeio e são pagas diretamente no local."
      ]
    },
    "island-escape-ilha-grande": {
      "badge": "Lancha inclusa",
      "id": "Escapada para a Ilha: Ilha Grande de Lancha Privativa",
      "slug": "island-escape-ilha-grande",
      "imageSlug": "island-escape-ilha-grande",
      "title": "Escapada para a Ilha: Ilha Grande de Lancha Privativa",
      "shortDescription": "Um passeio privativo do Rio para Ilha Grande de lancha, por praias abrigadas e pontos de snorkeling, com guia credenciado, motorista e uma lancha reservada para o seu grupo. Há uma opção premium para Lopes Mendes.",
      "fullDescription": "Este é um passeio privativo completo para Ilha Grande saindo do Rio de Janeiro, com transporte porta a porta, guia de turismo credenciado e uma lancha reservada exclusivamente para o seu grupo. Do embarque na sua hospedagem no Rio até a última parada em uma praia, toda a experiência é organizada como um único tour privado.\n\nO dia começa cedo, com embarque em hotel, Airbnb ou outra hospedagem no Rio. O veículo privativo segue até Mangaratiba, cidade costeira próxima a Ilha Grande, onde a lancha e o marinheiro estão aguardando. A embarcação é exclusiva do seu grupo durante o dia, sem outros passageiros, sem horários impostos por um grupo e sem esperar desconhecidos terminarem o banho de mar.\n\nIlha Grande é uma reserva de Mata Atlântica preservada — uma ilha sem estradas entre as vilas e com água tão transparente que se vê o fundo do mar. A parte de lancha dura cerca de cinco horas e percorre praias, enseadas abrigadas e pontos de snorkeling ao redor da ilha. As paradas habituais são em praias de águas rasas e calmas, e o equipamento de snorkeling e a água são fornecidos sem custo adicional.\n\nNão há uma lista fixa de praias. O roteiro é escolhido de acordo com as condições marítimas, a segurança, o tempo disponível e os interesses do grupo, então as paradas podem mudar de um dia para outro. Como a lancha é privativa, o ritmo é seu: você pode ficar mais tempo nadando, descansando numa praia ou fazendo snorkeling, sem seguir o horário de uma excursão compartilhada.\n\nA experiência envolve três profissionais com funções separadas: um guia de turismo credenciado que acompanha o grupo durante todo o dia, desde a saída no Rio, durante o passeio de lancha e até o retorno; um motorista profissional para o transporte terrestre; e um marinheiro responsável pela embarcação e pela segurança na água.\n\nO almoço é opcional e pago à parte em um restaurante localizado em uma das paradas da lancha. O passeio não vai à Vila do Abraão para o almoço. Seu guia pode recomendar um bom restaurante ao longo do roteiro. Você também pode levar sua própria comida, lanches e bebidas a bordo, com ou sem o churrasco opcional.\n\nUm churrasco a bordo pode ser organizado com antecedência como opção adicional, com preço sob consulta. As bebidas não estão incluídas no churrasco e são levadas pelos clientes.\n\nA experiência padrão é focada em praias abrigadas, águas rasas e calmas, banho de mar e snorkeling. Uma opção premium acrescenta uma visita a Lopes Mendes, considerada uma das praias mais bonitas do Brasil, com sua extensa faixa de areia clara, a Mata Atlântica preservada ao redor e a paisagem de mar aberto.\n\nA lancha não para diretamente em Lopes Mendes. O acesso é pela Praia do Pouso e de lá uma trilha pela mata de cerca de quarenta minutos, de dificuldade leve a moderada, com o seu guia acompanhando o caminho todo. Lopes Mendes fica em mar aberto, então as ondas podem estar mais fortes do que nas paradas abrigadas e recomenda-se alguma cautela na água. Por lá há apenas alguns snacks, por isso recomendamos bastante levar água e alimentação para a visita.\n\nDepois da parte de lancha, o veículo privativo leva você de Mangaratiba de volta ao Rio. A experiência completa costuma durar entre dez e doze horas de porta a porta, incluindo o transporte terrestre, o embarque, o passeio de lancha e o retorno. Para quem deseja conhecer Ilha Grande saindo do Rio em um único dia, esta é uma experiência totalmente privativa do início ao fim.",
      "highlights": [
        "As praias abrigadas e a água transparente de Ilha Grande",
        "Enseadas e pontos de snorkeling",
        "Lancha privativa exclusiva para o seu grupo",
        "Lopes Mendes, como opção premium",
        "Trajeto pela Costa Verde saindo do Rio"
      ],
      "included": [
        "Transporte privativo de ida e volta entre o Rio e Mangaratiba",
        "Embarque e retorno na sua hospedagem no Rio, dentro da área atendida",
        "Guia de turismo credenciado (português) acompanhando o grupo durante todo o dia",
        "Motorista profissional e marinheiro responsável pela embarcação",
        "Lancha privativa por aproximadamente cinco horas",
        "Equipamento de snorkeling sem custo adicional",
        "Água mineral sem custo adicional"
      ],
      "notIncluded": [
        "Almoço e bebidas durante o passeio",
        "Churrasco a bordo opcional (preço sob consulta)",
        "Protetor solar e toalha",
        "Gorjetas"
      ],
      "faqs": [
        {
          "q": "O passeio sai do Rio de Janeiro?",
          "a": "Sim. O embarque no Rio, o transporte privativo até Mangaratiba, a lancha privativa e o retorno estão incluídos."
        },
        {
          "q": "A lancha é privativa?",
          "a": "Sim. A lancha é reservada exclusivamente para o seu grupo e não é compartilhada com outros visitantes."
        },
        {
          "q": "Quanto tempo dura a experiência completa?",
          "a": "A parte de lancha dura cerca de cinco horas. O tour completo costuma durar entre dez e doze horas de porta a porta, incluindo o transporte até Mangaratiba, o embarque, o passeio de lancha e o retorno ao Rio."
        },
        {
          "q": "O guia acompanha o grupo durante todo o passeio?",
          "a": "Sim. O guia credenciado acompanha o grupo durante toda a experiência, inclusive nos deslocamentos e no passeio de lancha. Um marinheiro à parte é responsável pela embarcação e pela segurança na água."
        },
        {
          "q": "O guia, o motorista e o marinheiro são a mesma pessoa?",
          "a": "Não. O passeio inclui um guia de turismo credenciado, um motorista profissional para o transporte terrestre e um marinheiro responsável pela embarcação — três funções separadas."
        },
        {
          "q": "Quais praias serão visitadas?",
          "a": "Não há uma lista fixa de praias. O roteiro é escolhido de acordo com as condições marítimas, a segurança, o tempo disponível e os interesses do grupo, então as paradas podem mudar de um dia para outro."
        },
        {
          "q": "As águas são calmas?",
          "a": "As paradas habituais são em praias de águas rasas e calmas. Lopes Mendes é a exceção, pois fica em mar aberto e pode ter ondas mais fortes."
        },
        {
          "q": "Os equipamentos de snorkeling estão incluídos?",
          "a": "Sim. O equipamento de snorkeling e a água mineral são fornecidos sem custo adicional."
        },
        {
          "q": "O almoço está incluído?",
          "a": "Não. O almoço é opcional e pago diretamente em um restaurante localizado em uma das paradas da lancha. O passeio não vai à Vila do Abraão para o almoço — o restaurante é escolhido ao longo do roteiro."
        },
        {
          "q": "Podemos levar nossa própria comida e bebida?",
          "a": "Sim. Você pode levar sua própria comida, lanches e bebidas a bordo, com ou sem o churrasco."
        },
        {
          "q": "O churrasco está incluído?",
          "a": "Não. O churrasco a bordo é opcional, organizado com antecedência e com preço sob consulta. As bebidas não estão incluídas e são levadas pelos clientes."
        },
        {
          "q": "O que é a opção premium Lopes Mendes?",
          "a": "A opção premium acrescenta uma visita a Lopes Mendes, considerada uma das praias mais bonitas do Brasil. A lancha para na Praia do Pouso e de lá uma trilha pela mata de cerca de quarenta minutos — de leve a moderada — leva até a praia, com o seu guia acompanhando. A visita depende das condições marítimas e operacionais."
        },
        {
          "q": "A lancha para diretamente em Lopes Mendes? Como é a praia?",
          "a": "Não. A lancha para na Praia do Pouso, seguida de uma trilha pela mata de cerca de quarenta minutos até Lopes Mendes com o guia. A trilha é de leve a moderada, em terreno natural que pode ficar irregular ou escorregadio depois de chuva, por isso recomendamos calçado confortável ou sandália firme. Lopes Mendes fica em mar aberto, então as ondas podem estar mais fortes do que nas paradas abrigadas — entre na água com alguma cautela e siga as orientações do guia. A comida por lá se resume a alguns snacks, então leve água e alimentação."
        },
        {
          "q": "O que acontece se o tempo estiver ruim?",
          "a": "Chuva leve não cancela o passeio. Ele só é cancelado quando as condições do mar não estão seguras para a navegação. Acompanhamos a previsão de perto, inclusive com o operador local em Ilha Grande, e se for necessário cancelar por causa do mar, você é avisado com antecedência e recebe o reembolso do valor pago pelo passeio. A mudança de praias ou paradas por causa do mar faz parte da operação normal e não é cancelamento."
        },
        {
          "q": "O passeio é compartilhado com outras pessoas?",
          "a": "Não. O transporte terrestre, o guia e a lancha são privativos e exclusivos para o seu grupo."
        }
      ],
      "tips": [
        "O passeio sai do Rio cedo pela manhã. O horário exato depende do local de embarque, da previsão de trânsito e da organização da saída da lancha. Prepare tudo na noite anterior.",
        "O dia completo costuma durar entre dez e doze horas de porta a porta, incluindo o trajeto até Mangaratiba, cerca de cinco horas de lancha e o retorno.",
        "Chuva leve não cancela o passeio — só condições de mar inseguras cancelam. Acompanhamos a previsão de perto com o operador local e, se for preciso cancelar por causa do mar, você é avisado com antecedência e recebe o reembolso do valor pago.",
        "Leve protetor solar e toalha — não são fornecidos. Roupa de banho, óculos de sol, chapéu ou boné, uma troca leve de roupa e uma bolsa impermeável para celular e objetos de valor também são recomendados.",
        "O almoço não está incluído. Você pode comer em um restaurante ao longo do roteiro, pago à parte, ou levar sua própria comida e bebida a bordo.",
        "O equipamento de snorkeling e a água mineral são fornecidos sem custo adicional. As paradas de praia habituais têm águas rasas e calmas.",
        "Se escolher a opção premium Lopes Mendes, é uma trilha pela mata de quarenta minutos a partir da Praia do Pouso, de leve a moderada, com o guia acompanhando. Use calçado confortável ou sandália firme, e leve água e alimentação, pois na praia há apenas alguns snacks.",
        "Lopes Mendes é uma praia de mar aberto onde as ondas podem estar mais fortes — entre na água com alguma cautela, especialmente com crianças."
      ]
    },
    "petropolis-imperial": {
      "badge": "Cidade imperial",
      "id": "Petrópolis: Palácios Imperiais e Refúgio na Montanha",
      "slug": "passeio-privado-petropolis-cidade-imperial",
      "imageSlug": "petropolis-imperial",
      "title": "Petrópolis: Palácios Imperiais e Refúgio na Montanha",
      "shortDescription": "Um dia privativo na Cidade Imperial — Museu Imperial, o mausoléu da catedral e o Palácio Quitandinha — com saída do Rio de Janeiro ou da sua hospedagem em Petrópolis.",
      "fullDescription": "Petrópolis é onde a família imperial passava os verões, e a cidade que cresceu em volta da corte manteve o desenho que ganhou: palácios, igrejas, jardins e residências do século XIX ao longo de avenidas arborizadas, a 840 metros de altitude na Serra dos Órgãos. Este é um dia privativo lá — seu guia, seu motorista, seu veículo e um roteiro montado em cima do que você realmente quer ver.\n\nO passeio pode começar na sua hospedagem no Rio de Janeiro ou direto no seu hotel, pousada ou Airbnb em Petrópolis. O preço é o mesmo nos dois casos, e o veículo fica com você o dia inteiro de qualquer forma. Começar na própria cidade dá mais horas de Petrópolis: espaço para uma parada a mais, um almoço sem pressa ou um ritmo mais lento pelo Centro Histórico.\n\nSaindo do Rio, o trajeto leva de 70 a 90 minutos por trecho, dependendo do trânsito, subindo a Serra dos Órgãos por entre trechos de Mata Atlântica. Petrópolis fica alta o bastante para o ar ser bem mais ameno que o do litoral o ano inteiro — foi por isso que o imperador subia, e é por isso que vale levar um casaco leve, principalmente no outono e no inverno.\n\nO Museu Imperial é o centro do roteiro regular. Ele ocupa o próprio palácio de verão, e o acervo inclui a coroa de Dom Pedro II, insígnias imperiais, mobiliário, retratos, objetos pessoais da família imperial e a caneta com que a Princesa Isabel assinou a Lei Áurea — a lei de 1888 que aboliu a escravidão no Brasil —, além de uma cópia do documento. Seu guia acerta o ritmo lá dentro conforme o que prender sua atenção.\n\nA Catedral São Pedro de Alcântara é o segundo eixo do dia. A igreja neogótica, de torre única, abriga o Mausoléu Imperial: Dom Pedro II, a Imperatriz Teresa Cristina, a Princesa Isabel e o Conde d'Eu. A entrada é gratuita e o interior costuma estar aberto em horário regular, embora o acesso possa ser restringido durante missas, casamentos, velórios ou outras cerimônias.\n\nA Casa de Petrópolis é conhecida como Casa dos 7 Erros, e o nome é um mal-entendido que vale explicar. Construída entre 1879 e 1884, uniu estilos arquitetônicos europeus às novidades técnicas do fim do século: foi a primeira casa da cidade a receber luz elétrica. E foi propositalmente assimétrica — os dois lados da fachada nunca deveriam coincidir. Quem passava em frente supunha um projeto simétrico, leu as diferenças como erros de construção, contou sete, e o apelido pegou. As visitas ao interior estão fechadas no momento, mas os jardins podem ser percorridos, e é onde o passeio para.\n\nO Palácio Quitandinha é outro capítulo. Construído nos anos 1940 como hotel-cassino de luxo — uma construção imponente, de interiores monumentais e com um lago artificial aos pés —, é dos anos em que Petrópolis era o endereço serrano da alta sociedade brasileira. Quais áreas estão abertas varia conforme eventos e condições de funcionamento no dia.\n\nConforme o tempo, os horários e o seu interesse, o dia também pode incluir o Palácio de Cristal, o Centro Histórico e a Avenida Koeler, vistas externas de outras residências importantes e o Palácio Rio Negro quando aberto à visitação. A Igreja Luterana, um dos marcos da imigração alemã na cidade, às vezes pode ser vista por dentro — o acesso é limitado e em geral só aos sábados de manhã, então nunca é garantido.\n\nSegunda-feira funciona diferente. Os principais museus e interiores históricos de Petrópolis fecham, então o passeio de segunda é outro dia: Centro Histórico a pé, arquitetura e fachadas, espaços públicos, a paisagem da serra e um almoço sem pressa. É um bom dia na cidade, mas não é o roteiro imperial sem os interiores — o Museu Imperial, em especial, não se aprecia por fora, e preferimos dizer isso antes da reserva, não depois.\n\nOs ingressos das atrações do roteiro estão incluídos no preço. O Tour Cervejeiro da Bohemia pode ser acrescentado sob solicitação, sujeito a disponibilidade e horário de funcionamento, e é o único ingresso pago à parte; o restaurante e o bar da cervejaria estão fechados no momento. O almoço não está incluído e é pago direto no restaurante escolhido — seu guia sugere opções conforme seu gosto e seu orçamento.",
      "highlights": [
        "Museu Imperial",
        "Catedral São Pedro de Alcântara e Mausoléu Imperial",
        "Palácio Quitandinha",
        "Palácio de Cristal",
        "Casa de Petrópolis e seus jardins",
        "Centro Histórico e Avenida Koeler"
      ],
      "included": [
        "Veículo privativo com ar-condicionado o dia inteiro",
        "Guia de turismo credenciado acompanhando o grupo o tempo todo",
        "Motorista profissional, separado do guia",
        "Ingressos das atrações do roteiro",
        "Embarque e retorno na sua hospedagem no Rio de Janeiro ou em Petrópolis",
        "Água mineral"
      ],
      "notIncluded": [
        "Almoço, comidas e bebidas",
        "Ingresso do Tour Cervejeiro da Bohemia (opcional)",
        "Gorjetas",
        "Taxa adicional para guia em idiomas além de português, inglês e espanhol, quando aplicável"
      ],
      "restrictions": "Segundas-feiras seguem um roteiro diferente — os principais museus e interiores históricos de Petrópolis fecham nesse dia.",
      "faqs": [
        {
          "q": "O passeio pode começar em Petrópolis, e não no Rio?",
          "a": "Pode. A gente busca você direto no seu hotel, pousada, Airbnb ou outra hospedagem em Petrópolis, e o preço é exatamente o mesmo de quem sai do Rio. O veículo privativo e o motorista ficam com você o dia todo nos dois casos."
        },
        {
          "q": "Quanto tempo leva o trajeto do Rio?",
          "a": "De 70 a 90 minutos por trecho, dependendo do trânsito e de onde você está hospedado. A estrada sobe a Serra dos Órgãos e a paisagem faz parte do dia."
        },
        {
          "q": "Quanto dura o passeio inteiro?",
          "a": "Cerca de oito horas. O número exato muda conforme o ponto de partida, o trânsito, os horários das atrações e o roteiro que você fecha com o guia."
        },
        {
          "q": "O guia e o motorista são a mesma pessoa?",
          "a": "Não. Você tem um guia de turismo credenciado que acompanha o grupo e um motorista profissional separado, responsável pelo veículo."
        },
        {
          "q": "Os ingressos estão incluídos?",
          "a": "Sim. Os ingressos das atrações do seu roteiro estão incluídos no preço do passeio. A única exceção é o Tour Cervejeiro da Bohemia, que é opcional e sempre pago à parte."
        },
        {
          "q": "Dá para visitar Petrópolis numa segunda-feira?",
          "a": "Dá, mas é outro passeio. Os principais museus e interiores históricos fecham às segundas, então o roteiro do dia é Centro Histórico a pé, arquitetura e fachadas, espaços públicos, a paisagem da serra e almoço. A gente deixa isso claro na reserva em vez de você descobrir ao chegar."
        },
        {
          "q": "O Museu Imperial abre às segundas?",
          "a": "Não. O Museu Imperial, como a maioria dos museus e interiores históricos da cidade, fecha às segundas. E ele não se aprecia por fora, então visitar numa segunda não substitui entrar."
        },
        {
          "q": "O que tem no Museu Imperial?",
          "a": "O acervo fica no antigo palácio de verão e inclui a coroa de Dom Pedro II, insígnias imperiais, mobiliário, retratos, objetos pessoais da família imperial e a caneta com que a Princesa Isabel assinou a Lei Áurea, além de uma cópia do documento."
        },
        {
          "q": "A catedral cobra entrada?",
          "a": "Não, a entrada da Catedral São Pedro de Alcântara é gratuita. O interior costuma estar aberto em horário regular, embora o acesso possa ser restringido durante missas, casamentos, velórios ou outras cerimônias."
        },
        {
          "q": "Dá para entrar na Casa de Petrópolis?",
          "a": "Na casa, não, por enquanto: as visitas ao interior estão fechadas e não há data de reabertura anunciada. Os jardins estão abertos, e é onde o passeio para — seu guia leva você pelo terreno, pela fachada e pela história por trás do apelido."
        },
        {
          "q": "Quais são os \"7 erros\" da Casa de Petrópolis?",
          "a": "Não existem erros. A casa, concluída em 1884, foi construída propositalmente assimétrica, de modo que os dois lados da fachada nunca deveriam coincidir. Quem supunha um projeto simétrico leu as diferenças como erros de construção, contou sete, e o nome pegou."
        },
        {
          "q": "Dá para incluir o Tour Cervejeiro da Bohemia?",
          "a": "Dá, sob solicitação e sujeito a disponibilidade e horário de funcionamento. O ingresso é pago à parte do valor do passeio. Vale saber que o restaurante e o bar da cervejaria estão fechados, então o almoço fica para outro lugar."
        },
        {
          "q": "O almoço está incluído?",
          "a": "Não. O almoço é pago direto no restaurante escolhido, e seu guia recomenda opções no Centro Histórico conforme suas preferências e seu orçamento."
        },
        {
          "q": "O roteiro pode ser ajustado?",
          "a": "Pode. A ordem e a seleção das paradas se montam conforme seu interesse, o tempo disponível e o que estiver aberto no dia. Algumas atrações podem substituir outras."
        },
        {
          "q": "Petrópolis é mais fria que o Rio? O que levar?",
          "a": "Bem mais amena, por causa da altitude, o ano inteiro. Leve um casaco leve independentemente do tempo que estiver fazendo no Rio na hora de sair, principalmente no outono e no inverno, e calçado confortável: parte do Centro Histórico se vê melhor a pé."
        },
        {
          "q": "Há guias em outros idiomas?",
          "a": "Trabalhamos em português, inglês e espanhol. Guias em outros idiomas às vezes podem ser arranjados sob solicitação, sujeito a disponibilidade, e pode haver taxa adicional."
        }
      ],
      "tips": [
        "Petrópolis fica a 840 metros e é sistematicamente mais amena que o litoral. Leve um casaco leve independentemente do tempo no Rio na hora de sair, principalmente entre abril e setembro.",
        "Parte do Centro Histórico se percorre melhor a pé, pela Avenida Koeler e no entorno da catedral. Calçado confortável muda o dia.",
        "A serra tem muitas curvas na subida. Se alguém do grupo enjoa em estrada, o remédio funciona melhor antes da saída do que no meio do caminho.",
        "Se a sua única data possível for segunda-feira, conte com o roteiro alternativo: fachadas, Centro Histórico e paisagem, sem os interiores dos museus. Melhor saber na hora de escolher a data do que depois.",
        "Na Casa de Petrópolis a casa está fechada, mas os jardins estão abertos e a parada vale. A história é o motivo de ir, e o guia conta no próprio terreno.",
        "O Tour Cervejeiro da Bohemia precisa ser pedido com antecedência, para conferirmos disponibilidade e horário. O restaurante e o bar da cervejaria estão fechados, então planeje o almoço em outro lugar.",
        "A catedral é uma igreja em funcionamento. Missa, casamento e velório podem fechar o interior sem aviso, e nenhum passeio contorna isso."
      ]
    },
    "tijuca-rainforest": {
      "id": "Floresta da Tijuca: Onde a Natureza Encontra a Cultura",
      "slug": "pao-acucar-floresta-tijuca-jardim-botanico-passeio",
      "imageSlug": "tijuca-rainforest",
      "title": "Floresta da Tijuca: Onde a Natureza Encontra a Cultura",
      "shortDescription": "Combine as vistas impressionantes do Pão de Açúcar com a beleza exuberante da Floresta da Tijuca e do Jardim Botânico.",
      "fullDescription": "O Rio de Janeiro é uma das poucas cidades do mundo onde você pode estar numa floresta tropical genuína a 20 minutos do centro. O Parque Nacional da Tijuca — uma imensa floresta urbana, cobrindo 32 quilômetros quadrados dentro dos limites da cidade — foi quase completamente destruído para plantações de café e cana no século XVIII e XIX, e depois quase completamente replantado à mão entre 1861 e 1888, num dos primeiros projetos de reflorestamento em grande escala do mundo. A floresta por onde você caminha hoje é uma criação humana — o que a torna, paradoxalmente, uma das histórias de conservação mais extraordinárias do século XIX.\n\nO passeio Floresta da Tijuca combina quatro dos locais naturais e culturais mais significativos do Rio numa única experiência privativa de dia inteiro: o Pão de Açúcar, o Parque Nacional da Tijuca, o Jardim Botânico do Rio e o Parque Lage.\n\nO dia começa no Pão de Açúcar — o pico de granito de 396 metros na entrada da Baía de Guanabara que define a silhueta mais reconhecível do Rio. Dois estágios de bondinho levam você ao topo, de onde o panorama abrange toda a extensão da cidade: o Corcovado e o Cristo Redentor a oeste, as praias de Copacabana e Ipanema ao sul, a baía se abrindo para o Atlântico a leste. O ingresso skip-the-line do bondinho do Pão de Açúcar está incluído.\n\nO Parque Nacional da Tijuca oferece um Rio completamente diferente. Dentro do parque, as ruas asfaltadas se tornam trilhas florestais, o ruído da cidade some e a Mata Atlântica — um dos ecossistemas mais biodiversos e ameaçados do mundo — te envolve. Os avistamentos de fauna dependem do horário e da estação, mas habitualmente incluem tucanos, saguis (pequenos primatas nativos da Mata Atlântica), borboletas de extraordinária variedade, e ocasionalmente cutias e quatis visíveis da estrada. Seu guia conhece os ritmos do parque e vai posicioná-lo para as melhores chances.\n\nO Jardim Botânico do Rio de Janeiro cobre 137 hectares e contém mais de 6.500 espécies de plantas do Brasil e do mundo, incluindo a famosa Alameda das Palmeiras Imperiais — 134 palmeiras reais plantadas em 1808 por ordem do Príncipe Regente Dom João VI — as extraordinárias vitórias-régias que chegam a dois metros de diâmetro, a seção de Mata Atlântica com espécies nativas, e o jardim de cactos e a estufa de orquídeas. O jardim foi fundado em 1808 e é uma das instituições botânicas científicas mais antigas das Américas.\n\nO Parque Lage é a última parada — e um dos segredos mais bem guardados do Rio. Uma mansão neoclássica construída na década de 1920 para o empresário italiano Enrique Lage fica ao pé do Corcovado, cercada de Mata Atlântica com o Cristo Redentor visível acima da linha das árvores. A mansão abriga agora a Escola de Artes Visuais do Rio e um famoso café — um dos mais atmosféricos da cidade — onde você pode tomar um café no pátio central da mansão com a floresta e a estátua acima de você.\n\nNão disponível às segundas. O passeio funciona de terça a domingo.\n\nIncluído: transporte privativo porta a porta, guia local certificado, ingresso skip-the-line para o Pão de Açúcar, entrada no Jardim Botânico, acesso ao Parque Nacional da Tijuca e água mineral de cortesia. Refeições não estão incluídas.",
      "highlights": [
        "Pão de Açúcar",
        "Floresta da Tijuca - imensa floresta urbana",
        "Jardim Botânico",
        "Parque Lage"
      ],
      "included": [
        "Transporte privado",
        "Guia local certificado (português)",
        "Todas as entradas",
        "Busca e retorno em qualquer lugar do Rio (hotéis, Airbnbs, aeroportos e terminal de cruzeiros)",
        "Água mineral"
      ],
      "notIncluded": [
        "Refeições e bebidas",
        "Gorjetas"
      ],
      "bookingBlockedWeekdays": [
        "monday"
      ],
      "faqs": [
        {
          "q": "A Floresta da Tijuca é segura para visitar e veremos animais?",
          "a": "Sim, o Parque Nacional da Tijuca é seguro para visitantes. Como uma imensa floresta urbana, abriga mais de 200 espécies de pássaros, macacos e flora diversa. Os avistamentos dependem do horário e da estação, mas tucanos, saguis e borboletas são vistos com frequência. Seu guia conhece os melhores pontos."
        },
        {
          "q": "O tour está disponível todos os dias?",
          "a": "Não está disponível às segundas-feiras -- o Parque Lage e algumas seções da Floresta da Tijuca têm acesso reduzido às segundas. O tour funciona de terça a domingo."
        },
        {
          "q": "Quanto de caminhada há na parte da Floresta da Tijuca?",
          "a": "A visita à Tijuca envolve caminhadas leves a moderadas em trilhas mantidas -- nada que exija experiência em trilhas ou calçado especial além de tênis confortável. O Jardim Botânico também envolve caminhada mas todos os caminhos são planos e acessíveis."
        },
        {
          "q": "Este tour inclui o Pão de Açúcar?",
          "a": "Sim -- o Pão de Açúcar está incluído como parte deste tour que combina destaques naturais e culturais. O dia de 8 horas cobre Pão de Açúcar, Parque Nacional da Tijuca, Jardim Botânico e Parque Lage."
        },
        {
          "q": "O que é o Parque Lage e por que está incluído?",
          "a": "O Parque Lage é um belo parque histórico ao pé do Morro do Corcovado, com uma mansão neoclássica (hoje escola de arte) cercada de Mata Atlântica. Seu famoso café é uma instituição carioca e o parque oferece vistas deslumbrantes do Cristo Redentor acima da floresta."
        }
      ],
      "tips": [
        "O Parque Nacional da Tijuca é uma imensa floresta urbana — os avistamentos de fauna dependem do horário e da estação. Tucanos, saguis e borboletas são vistos com frequência. Seu guia conhece os melhores pontos.",
        "Leve repelente de insetos para a seção da floresta — é uma floresta tropical de verdade e mosquitos estão presentes, especialmente após chuva.",
        "O Jardim Botânico tem mais de 6.500 espécies de plantas em 137 hectares — você não verá tudo, mas seu guia focará nas seções mais extraordinárias, incluindo as vitórias-régias gigantes.",
        "O café do Parque Lage é um dos lugares mais atmosféricos do Rio — um café Art Nouveau centenário dentro de uma mansão neoclássica com o Cristo Redentor visível acima do dossel da floresta.",
        "Não disponível às segundas — o Parque Lage tem acesso reduzido nesse dia. O passeio funciona de terça a domingo."
      ]
    },
    "niteroi-mac-museum": {
      "id": "Niterói: Museu MAC de Niemeyer e Fortes Coloniais",
      "slug": "niteroi-museo-arte-contemporanea-passeio-privado",
      "imageSlug": "niteroi-mac-museum",
      "title": "Niterói: Museu MAC de Niemeyer e Fortes Coloniais",
      "shortDescription": "Cruze a Baía de Guanabara para descobrir a obra-prima arquitetônica do Museu MAC de Niterói e fortes militares históricos.",
      "fullDescription": "Do outro lado da Baía de Guanabara a partir do Rio, uma ponte de 13,3 quilômetros e 20 minutos de carro levam a Niterói — uma cidade de 500.000 habitantes que a maioria dos visitantes do Rio nunca vê, e que contém uma das obras de arquitetura mais extraordinárias das Américas. O passeio privativo de Niterói cruza a baía para mostrar três coisas: o museu MAC, os fortes coloniais, e a vista do Rio que só existe do outro lado da água.\n\nA travessia da Ponte Rio–Niterói é parte da experiência. Com 13,3 quilômetros, foi a ponte de concreto protendido mais longa do mundo quando inaugurou em 1974, e continua sendo uma das abordagens mais dramáticas a qualquer vista urbana do continente. Deixe a câmera pronta para o ponto médio: a vista simultânea do skyline do Rio de um lado e Niterói à frente é diferente de qualquer coisa vista de dentro do Rio.\n\nO MAC Niterói — Museu de Arte Contemporânea — é o edifício mais celebrado de Oscar Niemeyer fora de Brasília. Concluído em 1996 quando Niemeyer tinha 88 anos, fica num penhasco acima da baía como um disco de concreto circular que parece flutuar sobre seu entorno, sustentado por uma única coluna central. O edifício já foi descrito como um disco voador, uma flor e um cálice — o que ele realmente é, é uma demonstração de que a arquitetura pode ser escultura em escala urbana. A rampa externa que espirala ao redor da estrutura oferece uma das melhores vistas do skyline do Rio de qualquer ponto da área metropolitana — através da baía, com o Pão de Açúcar e o Corcovado enquadrados juntos num único panorama impossível de dentro do Rio.\n\nA Fortaleza de Santa Cruz da Barra é uma das fortificações militares mais antigas do Brasil, iniciada na década de 1550 para defender a entrada da Baía de Guanabara contra incursões francesas e posteriormente holandesas e britânicas. O forte permaneceu em uso militar ativo até o século XX. O contexto histórico do seu guia transforma o que poderiam parecer simples paredes velhas numa peça vívida e concreta da história colonial sul-americana.\n\nO almoço é no distrito costeiro de Icaraí — a resposta de Niterói a Ipanema, com uma longa curva de praia e uma fila de restaurantes e cafés de frente para o mar. Calcule USD 20–40 por pessoa. Seu guia recomendará opções conforme suas preferências.\n\nNão disponível às segundas. O passeio funciona de terça a domingo.\n\nIncluído: transporte privativo de ida e volta incluindo a travessia da ponte, guia local certificado, entrada no MAC Niterói, entrada na Fortaleza de Santa Cruz e água mineral de cortesia. O almoço não está incluído.",
      "highlights": [
        "MAC Niterói de Oscar Niemeyer",
        "Fortes militares históricos",
        "Vistas espetaculares do horizonte do Rio",
        "Zona de almoço à beira-mar"
      ],
      "included": [
        "Transporte privado",
        "Guia certificado saindo do Rio (português)",
        "Entrada no museu e fortes",
        "Busca e retorno em qualquer lugar do Rio (hotéis, Airbnbs, aeroportos e terminal de cruzeiros)",
        "Água mineral"
      ],
      "notIncluded": [
        "Almoço e bebidas",
        "Tours opcionais de helicóptero ou barco",
        "Gorjetas"
      ],
      "bookingBlockedWeekdays": [
        "monday"
      ],
      "restrictions": "Não disponível às segundas-feiras",
      "faqs": [
        {
          "q": "Como cruzamos para Niterói -- a balsa está incluída ou vamos de carro?",
          "a": "Seu veículo particular cruza pela Ponte Rio-Niterói, a mais longa da América do Sul com 13,3 km. A travessia sobre a Baía de Guanabara oferece vistas espetaculares do skyline do Rio. O retorno pode ser feito opcionalmente de balsa -- consulte seu guia."
        },
        {
          "q": "O tour está disponível todos os dias?",
          "a": "Não está disponível às segundas-feiras -- o MAC Niterói fecha às segundas. O tour funciona de terça a domingo."
        },
        {
          "q": "O que é o MAC Niterói e por que é arquitetonicamente significativo?",
          "a": "O MAC (Museu de Arte Contemporânea) de Niterói foi projetado por Oscar Niemeyer em 1996 e se assemelha a um disco voador pairando sobre a falésia acima da Baía de Guanabara. É considerado um dos edifícios de museu mais distintos do mundo. A vista do skyline do Rio da rampa do museu já vale a viagem."
        },
        {
          "q": "Os fortes militares históricos são interessantes mesmo para quem não é fã de história?",
          "a": "Absolutamente. A Fortaleza de Santa Cruz e a Fortaleza de São Luís oferecem algumas das vistas mais dramáticas da região metropolitana do Rio -- olhando diretamente para a cidade do outro lado da baía. O contexto histórico que seu guia fornece dá vida à importância estratégica desses fortes dos séculos XVI-XVII."
        },
        {
          "q": "O almoço perto de Niterói está incluído?",
          "a": "O almoço não está incluído mas há uma parada à beira-mar incorporada ao itinerário. Seu guia levará você à orla de Icaraí onde excelentes restaurantes de frutos do mar têm vistas diretas para o Rio. Calcule USD 20-40 por pessoa para um bom almoço com bebidas."
        }
      ],
      "tips": [
        "O MAC Niterói fica em uma falésia acima da Baía de Guanabara — a vista do skyline do Rio a partir da rampa externa do museu é uma das melhores de toda a região metropolitana e vale a pena contemplar com calma.",
        "A travessia da Ponte Rio–Niterói (13,3 km) oferece vistas espetaculares da baía pelo carro. Deixe a câmera pronta na hora da travessia.",
        "A Fortaleza de Santa Cruz data do século XVI — o contexto histórico do seu guia transforma o que poderia ser apenas paredes velhas em uma história vívida do passado colonial e importância estratégica do Rio.",
        "Uma parada para almoço à beira-mar em Icaraí está incluída no itinerário. Leve USD 20–40 por pessoa para uma boa refeição com bebidas.",
        "Não disponível às segundas — o MAC Niterói fecha nesse dia. O passeio funciona de terça a domingo."
      ]
    },
    "modern-rio-museum-tomorrow": {
      "id": "Rio Moderno: Museu do Amanhã e Escola de Samba nos Bastidores",
      "slug": "museu-amanha-experiencia-carnaval-rio-passeio",
      "imageSlug": "modern-rio-museum-tomorrow",
      "title": "Rio Moderno: Museu do Amanhã e Escola de Samba nos Bastidores",
      "shortDescription": "Explore o inovador Museu do Amanhã do Rio, o maior aquário da América do Sul, e vá aos bastidores do Carnaval.",
      "fullDescription": "O distrito portuário do Rio de Janeiro — a área ao redor da Praça Mauá e do antigo porto — ficou em grande parte degradado durante décadas, relíquia de um passado industrial que a cidade havia superado. Para os Jogos Olímpicos de 2016, o Rio investiu pesadamente em sua revitalização: um novo boulevard, nova linha de VLT, novos museus e um novo aquário transformaram a área num dos distritos culturais mais interessantes da América do Sul. O passeio Modern Rio explora o melhor disso.\n\nO Museu do Amanhã é o elemento central — um edifício de Santiago Calatrava concluído em 2015 que se tornou uma das estruturas mais fotografadas do Rio. O design em balanço de aço e concreto do arquiteto espanhol, com painéis solares móveis que acompanham o sol, se estende sobre a baía como uma criatura em movimento. No interior, o museu é uma exploração imersiva da sustentabilidade, da ciência climática e da relação da humanidade com o planeta — não uma coleção estática de objetos, mas uma sequência de ambientes interativos que requerem pelo menos 90 minutos para serem experimentados corretamente. É, de longe, o museu mais estimulante intelectualmente do Rio.\n\nO AquaRio é o maior aquário da América do Sul, inaugurado em 2016 num edifício industrial reconvertido adjacente ao Museu do Amanhã. Os 8.000 animais de 350 espécies incluem o característico túnel submarino — um tubo de 20 metros pelo qual você caminha com tubarões, raias e grandes peixes pelágicos nadando sobre sua cabeça e nos dois lados. Reserve pelo menos 60 minutos.\n\nA visita aos bastidores de uma escola de samba do Carnaval do Rio é o elemento mais incomum do passeio — e para muitos visitantes, o mais memorável. O Carnaval não é um evento espontâneo. É o resultado de preparação ao longo do ano pelas escolas de samba do Rio, cada uma com milhares de integrantes trabalhando durante o ano em carros alegóricos, fantasias, música e coreografia para uma apresentação de 70 minutos que será julgada por um painel de especialistas. A visita leva você ao galpão — o armazém onde os carros alegóricos são construídos — e dá acesso às pessoas, ao processo e à escala do que o Carnaval realmente envolve. Disponível de terça a sábado.\n\nO Museu Histórico Nacional, instalado num complexo de fortaleza colonial na borda do distrito portuário, cobre 500 anos de história brasileira através de uma das maiores coleções de artefatos históricos, armas, carruagens e documentos da América do Sul.\n\nNão disponível às segundas. O passeio funciona de terça a domingo.\n\nIncluído: transporte privativo porta a porta, guia local certificado, entrada no Museu do Amanhã, entrada no AquaRio, visita à escola de samba, entrada no Museu Histórico Nacional e água mineral de cortesia. Refeições não estão incluídas.",
      "highlights": [
        "Museu do Amanhã",
        "Aquário AquaRio",
        "Museu Histórico Nacional",
        "Escola de samba do Carnaval nos bastidores"
      ],
      "included": [
        "Transporte privado",
        "Guia local certificado (português)",
        "Todas as entradas",
        "Busca e retorno em qualquer lugar do Rio (hotéis, Airbnbs, aeroportos e terminal de cruzeiros)",
        "Água mineral"
      ],
      "notIncluded": [
        "Refeições e bebidas",
        "Gorjetas"
      ],
      "bookingBlockedWeekdays": [
        "monday"
      ],
      "restrictions": "Não disponível às segundas-feiras. Experiência Carnaval terça-sábado apenas.",
      "faqs": [
        {
          "q": "O que é o Museu do Amanhã e vale a pena visitar?",
          "a": "O Museu do Amanhã foi projetado por Santiago Calatrava e abriu em 2015. Explora os possíveis futuros da humanidade por meio de exposições interativas sobre ciência, meio ambiente e tecnologia. O edifício -- uma estrutura branca futurista sobre a Baía de Guanabara -- é um marco arquitetônico. Altamente recomendado para todas as idades."
        },
        {
          "q": "A visita à escola de samba do Carnaval está disponível o ano todo?",
          "a": "A experiência nos bastidores da escola de samba está disponível de terça a sábado. Não está disponível aos domingos nem segundas. Durante fevereiro (temporada de Carnaval), os horários podem variar -- entre em contato para confirmar disponibilidade."
        },
        {
          "q": "O tour está disponível todos os dias?",
          "a": "Não está disponível às segundas-feiras -- o Museu do Amanhã e o Museu Histórico Nacional fecham às segundas. A experiência de Carnaval está disponível apenas de terça a sábado."
        },
        {
          "q": "O que é o AquaRio e é adequado para adultos sem crianças?",
          "a": "O AquaRio é o maior aquário da América do Sul com mais de 8.000 animais marinhos. É uma ótima experiência para adultos -- o túnel submarino e as exposições de águas profundas são genuinamente impressionantes. Você não precisa de crianças no grupo para aproveitar."
        },
        {
          "q": "Qual é a melhor forma de aproveitar a visita à escola de samba?",
          "a": "A visita funciona melhor quando você interage com os artesãos e faz perguntas por meio do guia. São as pessoas que passam meses criando os elaborados carros alegóricos e fantasias para o Carnaval. A energia na oficina é elétrica mesmo fora de temporada."
        }
      ],
      "tips": [
        "O Museu do Amanhã é interativo e genuinamente imersivo — reserve pelo menos 90 minutos dentro. Não apresse por causa das outras atrações.",
        "A visita à escola de samba do Carnaval só está disponível de terça a sábado. Se o seu passeio for num domingo ou segunda, essa parte é substituída — confirme ao reservar.",
        "O AquaRio é o maior aquário da América do Sul — o túnel submarino com tubarões e raias sobre sua cabeça é o ponto alto. Reserve pelo menos 60 minutos.",
        "O distrito portuário (Porto Maravilha) onde essas atrações se concentram foi completamente revitalizado para os Jogos Olímpicos de 2016 — o contexto histórico urbano do seu guia adiciona uma camada fascinante à visita.",
        "Não disponível às segundas — o Museu do Amanhã fecha nesse dia. O passeio funciona de terça a domingo."
      ]
    },
    "buzios-riviera": {
      "id": "Passeio a Búzios saindo do Rio",
      "isCustom": true,
      "slug": "buzios-charme-costeiro-passeio-privado",
      "imageSlug": "buzios-riviera",
      "title": "Passeio a Búzios saindo do Rio",
      "shortDescription": "Um passeio privativo de um dia a Búzios, o charmoso balneário no litoral a leste do Rio — sob consulta, sob medida para as suas datas e orçado diretamente.",
      "fullDescription": "Búzios é uma antiga vila de pescadores que virou um charmoso balneário no litoral a leste do Rio, conhecida pelas praias e pela Rua das Pedras à beira-mar. Organizamos como um passeio privativo de um dia saindo do Rio sob consulta — datas, horários e o que está incluído são montados sob medida e orçados diretamente, já que no momento operamos Búzios a pedido, sem saídas fixas. Um passeio de barco opcional para ver as praias a partir do mar pode ser incluído sob consulta.",
      "highlights": [
        "Passeio privativo de um dia a Búzios, sob medida para as suas datas",
        "Balneário charmoso com dezenas de praias e a Rua das Pedras à beira-mar",
        "Guia certificado e transporte privativo saindo do Rio",
        "Sob consulta — horários e inclusões montados conforme o seu grupo"
      ],
      "included": [
        "Transporte privativo saindo do Rio com motorista profissional",
        "Guia certificado saindo do Rio (português)",
        "Busca e retorno no Rio (hotéis, Airbnbs e terminal de cruzeiros)",
        "Água mineral de cortesia"
      ],
      "notIncluded": [
        "Refeições e bebidas",
        "Ingressos de clube de praia ou passeios de barco (orçados com o seu roteiro)",
        "Gorjetas (opcionais)"
      ],
      "duration": "Dia inteiro (sob consulta)",
      "recommendations": "Búzios fica a cerca de 2h30 de carro do Rio em cada sentido, então reserve o dia inteiro. Fale com a gente com as suas datas e o tamanho do grupo para um orçamento sob medida.",
      "ctaText": "Pedir orçamento",
      "faqs": [
        {
          "q": "Búzios está disponível como passeio fixo?",
          "a": "No momento oferecemos Búzios sob consulta. Conte suas datas e o tamanho do grupo e montamos um passeio privativo com o orçamento."
        },
        {
          "q": "Qual a distância de Búzios até o Rio?",
          "a": "Cerca de 2h30 de viagem pela costa em cada sentido, então funciona melhor como um passeio privativo de dia inteiro."
        }
      ],
      "tips": [
        "Búzios funciona melhor como passeio privativo de dia inteiro — cerca de 2h30 pela costa em cada sentido.",
        "Conte suas datas, o tamanho do grupo e seus interesses e montamos o roteiro com um orçamento transparente."
      ]
    },
    "custom-tour": {
      "badge": "Totalmente personalizável",
      "id": "Seu Rio, do Seu Jeito: Passeio Privado Personalizado",
      "isCustom": true,
      "slug": "passeio-personalizado",
      "imageSlug": "custom-tour",
      "title": "Seu Rio, do Seu Jeito: Passeio Privado Personalizado",
      "shortDescription": "Não encontrou exatamente o que procura? Crie sua própria experiência no Rio. Conte-nos seus interesses e criaremos um roteiro personalizado só para você.",
      "fullDescription": "Cada viajante é único, e às vezes o passeio perfeito não existe em nenhuma lista – até você criá-lo. Com nosso Passeio Privado Personalizado, você está no comando. Quer combinar uma trilha ao nascer do sol com um mercado local e terminar em uma praia escondida? Feito. Interessado em arquitetura, arte de rua e casas de música ao vivo? Fazemos acontecer. Compartilhe seus interesses, limitações de tempo e lugares imperdíveis, e nossos guias locais especializados criarão uma experiência sob medida que se encaixa perfeitamente em você. De descobertas fora do roteiro a pontos turísticos clássicos, sua aventura no Rio começa com uma conversa. Seja para celebrar uma ocasião especial, viajar com necessidades específicas, ou simplesmente querer algo diferente – nós temos você coberto.",
      "highlights": [
        "Roteiro 100% personalizável de acordo com seus interesses",
        "Guia local experiente que se adapta ao seu ritmo e estilo",
        "Combine quaisquer atrações, bairros ou experiências",
        "Duração flexível de meio dia a aventuras de vários dias",
        "Perfeito para ocasiões especiais, interesses únicos ou necessidades de acessibilidade",
        "Cuidamos de toda a logística, ingressos e reservas"
      ],
      "included": [
        "Transporte privado com motorista profissional",
        "Guia local certificado no seu idioma",
        "Consulta de planejamento de roteiro personalizado",
        "Busca e retorno em qualquer lugar do Rio (hotéis, Airbnbs, aeroportos e terminal de cruzeiros)",
        "Dicas locais, recomendações e acesso privilegiado",
        "Horários flexíveis e ajustes em tempo real",
        "Água mineral"
      ],
      "notIncluded": [
        "Ingressos para atrações (cotados separadamente conforme seu roteiro)",
        "Refeições e bebidas (podem ser organizadas sob pedido)",
        "Gorjetas (opcional)"
      ],
      "duration": "Flexível (4-10+ horas)",
      "recommendations": "Entre em contato com pelo menos 48 horas de antecedência para que possamos criar a experiência perfeita para você. Quanto mais você compartilhar sobre seus interesses, melhor poderemos personalizar seu dia.",
      "ctaText": "Começar a Planejar",
      "faqs": [
        {
          "q": "Como funciona o Tour Personalizado -- qual é o processo?",
          "a": "Começa com uma conversa. Entre em contato via WhatsApp ou e-mail com seus interesses, tamanho do grupo, datas disponíveis e itens imperdíveis. Nossa equipe criará um itinerário personalizado para sua análise, ajustará conforme seu feedback e confirmará quando estiver satisfeito. Não há cobrança pelo processo de planejamento."
        },
        {
          "q": "Qual é a duração mínima e máxima de um Tour Personalizado?",
          "a": "Os Tours Personalizados vão de 4 horas (meio dia) a aventuras de vários dias. A maioria opta por um dia completo (8-10 horas). Para tours de vários dias explorando o estado do Rio -- Petrópolis, Búzios, Ilha Grande, Paraty -- podemos criar um itinerário completo."
        },
        {
          "q": "Como o preço é determinado para um Tour Personalizado?",
          "a": "O preço varia conforme o itinerário, duração, tamanho do grupo e atrações selecionadas. Forneceremos um orçamento completo e transparente antes de você confirmar. Sem custos surpresa no dia do tour."
        },
        {
          "q": "O Tour Personalizado pode acomodar pessoas com limitações de mobilidade?",
          "a": "Sim -- esta é uma das principais razões pelas quais os viajantes escolhem o Tour Personalizado. Podemos criar um itinerário que evite escadas, terrenos íngremes ou longas caminhadas, mantendo uma experiência excepcional. Mencione qualquer consideração de mobilidade ao entrar em contato."
        },
        {
          "q": "Podemos combinar múltiplos tours ou atrações que não estão no seu menu padrão?",
          "a": "Com certeza -- esse é o objetivo do Tour Personalizado. Seja um restaurante específico, bairro, evento ou atividade não coberta nos nossos tours padrão, podemos incorporar. O Rio tem muito mais a oferecer do que qualquer tour fixo pode cobrir e o conhecimento local dos nossos guias é extenso."
        }
      ],
      "tips": [
        "Quanto mais detalhes você compartilhar conosco antes do passeio, melhor podemos desenhá-lo. Conte seus interesses, itens imperdíveis, necessidades alimentares, considerações de mobilidade e qualquer coisa que já tenha visto no Rio.",
        "Passeios personalizados vão de 4 horas (meio dia) até itinerários de vários dias pelo estado do Rio — Petrópolis, Búzios, Ilha Grande, Paraty. Informe seu tempo disponível ao entrar em contato.",
        "Se você tem limitações de mobilidade, mencione isso desde o início — podemos criar um itinerário totalmente acessível que evite escadas, terrenos íngremes e longas caminhadas, mantendo uma experiência excepcional.",
        "Não há cobrança pelo processo de planejamento. Entre em contato pelo WhatsApp ou email, criaremos o itinerário, ajustaremos conforme seu feedback e confirmaremos quando estiver satisfeito.",
        "O preço varia conforme itinerário, duração, tamanho do grupo e atrações específicas. Forneceremos um orçamento completo e transparente antes de confirmar — sem custos surpresa no dia."
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

export const tours = { en: build("en"), es: build("es"), "pt-br": build("pt-br") };

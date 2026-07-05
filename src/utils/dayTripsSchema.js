/**
 * dayTripsSchema.js — schema JSON-LD do pillar "day trips" (merge no @graph do BaseLayout).
 *
 * Emite, por locale: ItemList (3 destinos na ordem Petrópolis, Ilha Grande, Búzios) com
 * TouristTrip por item, FAQPage (as 6 Q&A da prose) e BreadcrumbList (Home → pillar).
 *
 * Higiene:
 *  - SEM offers/preço nos TouristTrip do pillar — Offer vive só na página de tour.
 *    Os nós referenciam a URL canônica localizada do tour (mesmo resolvedor do componente).
 *  - Organization/LocalBusiness/logo NÃO são duplicados aqui (vêm do @graph do BaseLayout).
 *  - URL do pillar via routes[lang].dayTrips (single-source dos slugs travados).
 */
import { tours } from "../data/tours.js";
import { routes } from "../i18n/routes.js";
import { dayTripsProse, dayTripsDestinations } from "../data/dayTripsContent.js";
import { getBreadcrumbSchema, getFAQSchema } from "./seoHelpers.js";

const tourRoutes = { en: "private-tours", es: "tours-privados", "pt-br": "passeios-privados" };
const homeLabel = { en: "Home", es: "Inicio", "pt-br": "Início" };

export function getDayTripsSchema(lang, siteUrl) {
  const base = siteUrl.replace(/\/$/, "");
  const prose = dayTripsProse[lang];
  const pillarPath = routes[lang].dayTrips; // "/day-trips-from-rio/" etc. (slug travado)
  const pillarUrl = `${base}/${lang}${pillarPath}`;

  // tours.en[i].slug === chave EN; índice consistente entre locales (build() usa o mesmo order).
  const enSlugs = tours.en.map((tt) => tt.slug);
  const tourUrlFor = (tourKey) => {
    const idx = enSlugs.indexOf(tourKey);
    if (idx === -1) return null;
    return `${base}/${lang}/${tourRoutes[lang]}/${tours[lang][idx].slug}/`;
  };

  // Descrição curta por destino = texto do moodMenu (da prose, honesto e conciso).
  const moodText = {};
  for (const m of prose.moodMenu.items) moodText[m.destKey] = m.text;

  const itemListElement = dayTripsDestinations.map((d, i) => {
    const url = tourUrlFor(d.tourKey);
    const p = prose.destinations[d.key];
    return {
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristTrip",
        ...(url ? { "@id": `${url}#trip`, url } : {}),
        name: p.name,
        description: moodText[d.key],
      },
    };
  });

  const itemList = {
    "@type": "ItemList",
    "@id": `${pillarUrl}#destinations`,
    name: prose.moodMenu.title,
    numberOfItems: itemListElement.length,
    itemListElement,
  };

  const faqPage = getFAQSchema(prose.faqs); // aceita {q, a}
  const breadcrumb = getBreadcrumbSchema(
    [
      { name: homeLabel[lang], url: `/${lang}` },
      { name: prose.hero.title, url: `/${lang}${pillarPath}` },
    ],
    base
  );

  return [itemList, ...(faqPage ? [faqPage] : []), breadcrumb];
}

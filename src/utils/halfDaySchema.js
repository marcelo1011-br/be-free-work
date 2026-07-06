/**
 * halfDaySchema.js — schema JSON-LD do pillar "half-day / meio período" (merge no @graph
 * do BaseLayout). Espelha dayTripsSchema.js.
 *
 * Emite, por locale: ItemList (3 tours-âncora na ordem First Light, Rio Express, Golden
 * Hour) com TouristTrip por item, FAQPage (as 6 Q&A da prose) e BreadcrumbList (Home → pillar).
 *
 * Higiene (mesma de day-trips / private-guide / Búzios):
 *  - SEM offers/preço nos TouristTrip do pillar — o preço varia por nº de pessoas e vive só
 *    na página do tour. Os nós referenciam a URL canônica localizada do tour (mesmo @id #trip
 *    que a página do tour usa).
 *  - SEM aggregateRating — rating é conteúdo visível, não nó.
 *  - Organization/LocalBusiness NÃO duplicados (vêm do @graph do BaseLayout).
 *  - URL do pillar via routes[lang].halfDay (single-source dos slugs travados).
 */
import { tours } from "../data/tours.js";
import { routes } from "../i18n/routes.js";
import { halfDayProse, halfDayTourKeys } from "../data/halfDayContent.js";
import { getBreadcrumbSchema, getFAQSchema } from "./seoHelpers.js";

const tourRoutes = { en: "private-tours", es: "tours-privados", "pt-br": "passeios-privados" };
const homeLabel = { en: "Home", es: "Inicio", "pt-br": "Início" };

export function getHalfDaySchema(lang, siteUrl) {
  const base = siteUrl.replace(/\/$/, "");
  const prose = halfDayProse[lang];
  const pillarPath = routes[lang].halfDay; // "/half-day-tours-rio-de-janeiro/" etc. (slug travado)
  const pillarUrl = `${base}/${lang}${pillarPath}`;

  // tours.en[i].slug === chave EN; índice consistente entre locales (build() usa o mesmo order).
  const enSlugs = tours.en.map((tt) => tt.slug);
  const tourUrlFor = (tourKey) => {
    const idx = enSlugs.indexOf(tourKey);
    if (idx === -1) return null;
    return `${base}/${lang}/${tourRoutes[lang]}/${tours[lang][idx].slug}/`;
  };
  const tourTitleFor = (tourKey) => {
    const idx = enSlugs.indexOf(tourKey);
    return idx === -1 ? null : tours[lang][idx].title;
  };

  // Descrição curta por âncora = "bestFor" da comparação (prose nativa, honesta e concisa).
  const bestForByKey = {};
  for (const c of prose.comparison.items) bestForByKey[c.tourKey] = c.bestFor;

  const itemListElement = halfDayTourKeys.map((tourKey, i) => {
    const url = tourUrlFor(tourKey);
    return {
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristTrip",
        ...(url ? { "@id": `${url}#trip`, url } : {}),
        name: tourTitleFor(tourKey),
        description: bestForByKey[tourKey],
      },
    };
  });

  const itemList = {
    "@type": "ItemList",
    "@id": `${pillarUrl}#tours`,
    name: prose.comparison.title,
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

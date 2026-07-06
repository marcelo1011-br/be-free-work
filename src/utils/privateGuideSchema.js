/**
 * privateGuideSchema.js — schema JSON-LD do pillar "private guide" (merge no @graph do BaseLayout).
 *
 * Espelha dayTripsSchema.js, MAS o 1º nó é Service (não ItemList/TouristTrip).
 * Emite, por locale: Service (o serviço de guia particular), FAQPage (as 6 Q&A da prose)
 * e BreadcrumbList (Home → pillar).
 *
 * Higiene (decisão travada do dono — mesma do day-trips e do Búzios):
 *  - Service SEM offers/preço: o preço do guia não é fixo (varia por roteiro/tour).
 *  - Service SEM aggregateRating: a nota 4,9/800 é conteúdo VISÍVEL (seção "why"),
 *    não nó de schema.
 *  - Organization NÃO é duplicada: o Service referencia o @id da Org do @graph do
 *    BaseLayout via provider (mesma string `${base}/#organization`).
 *  - URL do pillar via routes[lang].privateGuide (single-source; PT = guia-particular,
 *    NUNCA guia-privativo).
 *  - Service montado INLINE aqui; seoHelpers fica INTOCADO (só reusa getFAQSchema e
 *    getBreadcrumbSchema).
 */
import { routes } from "../i18n/routes.js";
import { privateGuideProse, privateGuideFacts } from "../data/privateGuideContent.js";
import { getBreadcrumbSchema, getFAQSchema } from "./seoHelpers.js";

const homeLabel = { en: "Home", es: "Inicio", "pt-br": "Início" };

export function getPrivateGuideSchema(lang, siteUrl) {
  const base = siteUrl.replace(/\/$/, "");
  const prose = privateGuideProse[lang];
  const pillarPath = routes[lang].privateGuide; // "/private-guide-rio-de-janeiro/" etc. (slug travado)
  const pillarUrl = `${base}/${lang}${pillarPath}`;

  const service = {
    "@type": "Service",
    "@id": `${pillarUrl}#service`,
    serviceType: "Private tour guide",
    name: prose.hero.title,
    description: prose.metaDescription,
    url: pillarUrl,
    areaServed: { "@type": "City", name: "Rio de Janeiro" },
    availableLanguage: privateGuideFacts.languages, // ["English","Spanish","Portuguese"]
    provider: { "@id": `${base}/#organization` }, // referência à Org do @graph do BaseLayout
  };

  const faqPage = getFAQSchema(prose.faqs); // aceita {q, a}
  const breadcrumb = getBreadcrumbSchema(
    [
      { name: homeLabel[lang], url: `/${lang}` },
      { name: prose.hero.title, url: `/${lang}${pillarPath}` },
    ],
    base
  );

  return [service, ...(faqPage ? [faqPage] : []), breadcrumb];
}

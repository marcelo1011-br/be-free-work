/**
 * Hreflang URL mapping for all pages across EN, ES, PT-BR.
 * Handles different route segments, page names, and tour slugs per language.
 */

import { blogSlugMap } from "./blogSlugMap.js";

// Tour slug mapping: keyed by EN slug, maps to ES and PT-BR equivalents
const tourSlugMap = {
  "essential-rio":           { es: "essential-rio",                          "pt-br": "rio-essencial" },
  "rio-express":             { es: "rio-express",                            "pt-br": "passeio-expresso-rio-5-horas-cristo-pao-acucar" },
  "first-light-sunrise":     { es: "amanecer-rio",                           "pt-br": "nascer-sol-pao-acucar-cristo-redentor-passeio-privado" },
  "golden-hour-rio":         { es: "hora-dorada-rio",                        "pt-br": "passeio-por-do-sol-rio-cristo-redentor-pao-acucar" },
  "sunset-culture-roxy":     { es: "atardecer-cultura-roxy",                 "pt-br": "por-do-sol-cultura-roxy" },
  "island-escape-ilha-grande":{ es: "island-escape-ilha-grande",             "pt-br": "island-escape-ilha-grande" },
  // "buzios-riviera":          { es: "buzios-riviera",                         "pt-br": "buzios-charme-costeiro-passeio-privado" },  // TEMPORARIAMENTE DESATIVADO
  "petropolis-imperial":     { es: "petropolis-imperial",                    "pt-br": "passeio-privado-petropolis-cidade-imperial" },
  "tijuca-rainforest":       { es: "bosque-tijuca",                          "pt-br": "pao-acucar-floresta-tijuca-jardim-botanico-passeio" },
  "niteroi-mac-museum":      { es: "niteroi-museo-mac",                     "pt-br": "niteroi-museo-arte-contemporanea-passeio-privado" },
  "modern-rio-museum-tomorrow":{ es: "rio-moderno-museo-manana",            "pt-br": "museu-amanha-experiencia-carnaval-rio-passeio" },
  "custom-tour":             { es: "tour-personalizado",                     "pt-br": "passeio-personalizado" },
};

const experienceSlugMap = {
  "rio-food-walking-tour":     { es: "tour-gastronomico-rio",    "pt-br": "food-walking-tour-rio" },
  "little-africa-walking-tour":{ es: "pequena-africa-tour",      "pt-br": "pequena-africa-tour" },
  "downtown-rio-walking":      { es: "downtown-rio-walking",     "pt-br": "downtown-rio-walking" },
  "santa-teresa-walking":      { es: "santa-teresa-walking",     "pt-br": "santa-teresa-walking" },
  "community-based-experience":{ es: "experiencia-comunitaria",  "pt-br": "experiencia-comunidade" },
};

// Build reverse maps (ES→EN and PT-BR→EN) for lookups from any language
const esSlugToEn = {};
const ptSlugToEn = {};
for (const [enSlug, map] of Object.entries(tourSlugMap)) {
  esSlugToEn[map.es] = enSlug;
  ptSlugToEn[map["pt-br"]] = enSlug;
}

const esExperienceSlugToEn = {};
const ptExperienceSlugToEn = {};
for (const [enSlug, map] of Object.entries(experienceSlugMap)) {
  esExperienceSlugToEn[map.es] = enSlug;
  ptExperienceSlugToEn[map["pt-br"]] = enSlug;
}

// Build reverse maps for blog slugs (ES→EN and PT-BR→EN)
const esBlogSlugToEn = {};
const ptBlogSlugToEn = {};
for (const [enSlug, map] of Object.entries(blogSlugMap)) {
  esBlogSlugToEn[map.es] = enSlug;
  ptBlogSlugToEn[map["pt-br"]] = enSlug;
}

// Tour route segments per language
const tourRoutes = {
  en: "private-tours",
  es: "tours-privados",
  "pt-br": "passeios-privados",
};

const experienceRoutes = {
  en: "experiences",
  es: "experiencias",
  "pt-br": "experiencias",
};

// Static page name mappings: keyed by EN page name
const pageMap = {
  "about":            { es: "sobre",                    "pt-br": "sobre" },
  "contact":          { es: "contacto",                 "pt-br": "contato" },
  "gallery":          { es: "galeria",                  "pt-br": "galeria" },
  "privacy-policy":   { es: "politica-de-privacidad",   "pt-br": "politica-de-privacidade" },
  "cookie-policy":    { es: "politica-de-cookies",       "pt-br": "politica-de-cookies" },
  "payment-cancellation-policy": { es: "politica-de-pago-y-cancelacion", "pt-br": "politica-de-pagamento-e-cancelamento" },
  "blog":             { es: "blog",                     "pt-br": "blog" },
  "private-tours":    { es: "tours-privados",            "pt-br": "passeios-privados" },
  "experiences":      { es: "experiencias",              "pt-br": "experiencias" },
  "faq":              { es: "preguntas-frecuentes",      "pt-br": "perguntas-frequentes" },
};

// Build reverse maps for pages too
const esPageToEn = {};
const ptPageToEn = {};
for (const [enPage, map] of Object.entries(pageMap)) {
  esPageToEn[map.es] = enPage;
  ptPageToEn[map["pt-br"]] = enPage;
}

/**
 * Given a pathname, returns an object { en, es, "pt-br" } with the correct path for each language.
 * Falls back to simple prefix replacement for unknown paths.
 */
export function getHreflangPaths(pathname) {
  // Extract current language and the rest of the path
  const match = pathname.match(/^\/(en|es|pt-br)(\/.*)?$/);
  if (!match) {
    // Root or unknown path - return defaults
    return { en: "/en/", es: "/es/", "pt-br": "/pt-br/" };
  }

  const currentLang = match[1];
  const rest = match[2] || ""; // e.g., "/private-tours/essential-rio/" or "/about/" or ""

  // Home page (no rest or just "/")
  if (!rest || rest === "/") {
    return { en: "/en/", es: "/es/", "pt-br": "/pt-br/" };
  }

  // Split rest into segments: ["private-tours", "essential-rio"] or ["about"]
  const segments = rest.split("/").filter(Boolean);

  // CASE 1: Tour detail page (2 segments, first is tour route)
  if (segments.length === 2 && Object.values(tourRoutes).includes(segments[0])) {
    const tourSlug = segments[1];
    // Resolve to EN slug first
    let enSlug;
    if (currentLang === "en") {
      enSlug = tourSlug;
    } else if (currentLang === "es") {
      enSlug = esSlugToEn[tourSlug] || tourSlug;
    } else {
      enSlug = ptSlugToEn[tourSlug] || tourSlug;
    }

    const slugMap = tourSlugMap[enSlug];
    if (slugMap) {
      return {
        en: `/en/${tourRoutes.en}/${enSlug}/`,
        es: `/es/${tourRoutes.es}/${slugMap.es}/`,
        "pt-br": `/pt-br/${tourRoutes["pt-br"]}/${slugMap["pt-br"]}/`,
      };
    }
  }

  if (segments.length === 2 && Object.values(experienceRoutes).includes(segments[0])) {
    const experienceSlug = segments[1];
    let enSlug;
    if (currentLang === "en") {
      enSlug = experienceSlug;
    } else if (currentLang === "es") {
      enSlug = esExperienceSlugToEn[experienceSlug] || experienceSlug;
    } else {
      enSlug = ptExperienceSlugToEn[experienceSlug] || experienceSlug;
    }

    const slugMap = experienceSlugMap[enSlug];
    if (slugMap) {
      return {
        en: `/en/${experienceRoutes.en}/${enSlug}/`,
        es: `/es/${experienceRoutes.es}/${slugMap.es}/`,
        "pt-br": `/pt-br/${experienceRoutes["pt-br"]}/${slugMap["pt-br"]}/`,
      };
    }
  }

  // CASE 2: Blog post (2 segments, first is "blog")
  if (segments.length === 2 && segments[0] === "blog") {
    const blogSlug = segments[1];
    // Resolve to EN slug first, then look up the correct slug for each language
    let enSlug;
    if (currentLang === "en") {
      enSlug = blogSlug;
    } else if (currentLang === "es") {
      enSlug = esBlogSlugToEn[blogSlug] || blogSlug;
    } else {
      enSlug = ptBlogSlugToEn[blogSlug] || blogSlug;
    }

    const slugMap = blogSlugMap[enSlug];
    if (slugMap) {
      return {
        en: `/en/blog/${slugMap.en}/`,
        es: `/es/blog/${slugMap.es}/`,
        "pt-br": `/pt-br/blog/${slugMap["pt-br"]}/`,
      };
    }
    // Fallback for blog posts not yet in blogSlugMap (same slug assumed)
    return {
      en: `/en/blog/${enSlug}/`,
      es: `/es/blog/${enSlug}/`,
      "pt-br": `/pt-br/blog/${enSlug}/`,
    };
  }

  // CASE 3: Static page (1 segment)
  if (segments.length === 1) {
    const pageName = segments[0];
    // Resolve to EN page name first
    let enPage;
    if (currentLang === "en") {
      enPage = pageName;
    } else if (currentLang === "es") {
      enPage = esPageToEn[pageName] || pageName;
    } else {
      enPage = ptPageToEn[pageName] || pageName;
    }

    const map = pageMap[enPage];
    if (map) {
      return {
        en: `/en/${enPage}/`,
        es: `/es/${map.es}/`,
        "pt-br": `/pt-br/${map["pt-br"]}/`,
      };
    }
  }

  // CASE 4: Tours hub (1 segment that matches tour route)
  // Already handled by CASE 3 via pageMap "private-tours" entry

  // Fallback: simple prefix replacement (for any unmapped paths)
  const normalised = pathname.endsWith("/") ? pathname : pathname + "/";
  return {
    en: normalised.replace(/^\/(es|pt-br)/, "/en"),
    es: normalised.replace(/^\/(en|pt-br)/, "/es"),
    "pt-br": normalised.replace(/^\/(en|es)/, "/pt-br"),
  };
}

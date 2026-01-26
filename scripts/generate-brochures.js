import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { tours } from "../src/data/tours.js";
import { ui, languages } from "../src/i18n/ui.js";

process.env.PLAYWRIGHT_CHROMIUM_USE_HEADLESS_SHELL = "0";

const { chromium } = await import("playwright");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const homeDir = process.env.HOME || "";
const chromiumPath = path.join(
  homeDir,
  ".cache/ms-playwright/chromium-1200/chrome-linux64/chrome"
);

const siteUrl = process.env.SITE_URL || "https://befreetours.com.br";

const routeByLang = {
  en: "private-tours",
  es: "tours-privados",
  "pt-br": "passeios-privados",
};

const languageMeta = {
  en: {
    locale: "en-US",
    brochureLabel: "Brochure",
    indexTitle: "Index",
    cardsTitle: "Tour Cards",
    placesVisited: "Places visited",
    description: "Description",
    pricing: "Pricing",
    policiesTitle: "Payment & Cancellation",
    paymentTitle: "Payment Terms",
    cancellationTitle: "Cancellation Policy",
    tourDetails: "Tour Details",
    contactTitle: ui.en["footer.contact"],
    durationLabel: ui.en["general.duration"],
    fromLabel: ui.en["general.fromPrice"],
    perPersonLabel: ui.en["tour.perPerson"],
    perGroupLabel: ui.en["tour.perGroup"],
    groupSizeLabel: ui.en["tour.groupSize"],
    priceLabel: ui.en["tour.price"],
    customQuote: "Custom quote",
    standardPackage: ui.en["tour.standardPackage"],
    premiumPackage: ui.en["tour.premiumPackage"],
    lopesMendesPackage: "Lopes Mendes Package",
    visitSite: "Visit the tour page",
    brochureTitle: "Be Free Tours",
    brochureTagline: ui.en["footer.tagline"],
  },
  es: {
    locale: "es-ES",
    brochureLabel: "Folleto",
    indexTitle: "Índice",
    cardsTitle: "Tarjetas de tours",
    placesVisited: "Lugares visitados",
    description: "Descripción",
    pricing: "Precios",
    policiesTitle: "Pago y cancelación",
    paymentTitle: "Condiciones de pago",
    cancellationTitle: "Política de cancelación",
    tourDetails: "Detalles del tour",
    contactTitle: ui.es["footer.contact"],
    durationLabel: ui.es["general.duration"],
    fromLabel: ui.es["general.fromPrice"],
    perPersonLabel: ui.es["tour.perPerson"],
    perGroupLabel: ui.es["tour.perGroup"],
    groupSizeLabel: ui.es["tour.groupSize"],
    priceLabel: ui.es["tour.price"],
    customQuote: "Cotización personalizada",
    standardPackage: ui.es["tour.standardPackage"],
    premiumPackage: ui.es["tour.premiumPackage"],
    lopesMendesPackage: "Paquete Lopes Mendes",
    visitSite: "Ver tour en el sitio",
    brochureTitle: "Be Free Tours",
    brochureTagline: ui.es["footer.tagline"],
  },
  "pt-br": {
    locale: "pt-BR",
    brochureLabel: "Brochura",
    indexTitle: "Índice",
    cardsTitle: "Cards de passeios",
    placesVisited: "Locais visitados",
    description: "Descrição",
    pricing: "Preços",
    policiesTitle: "Pagamento e cancelamento",
    paymentTitle: "Condições de pagamento",
    cancellationTitle: "Política de cancelamento",
    tourDetails: "Detalhes do passeio",
    contactTitle: ui["pt-br"]["footer.contact"],
    durationLabel: ui["pt-br"]["general.duration"],
    fromLabel: ui["pt-br"]["general.fromPrice"],
    perPersonLabel: ui["pt-br"]["tour.perPerson"],
    perGroupLabel: ui["pt-br"]["tour.perGroup"],
    groupSizeLabel: ui["pt-br"]["tour.groupSize"],
    priceLabel: ui["pt-br"]["tour.price"],
    customQuote: "Orçamento personalizado",
    standardPackage: ui["pt-br"]["tour.standardPackage"],
    premiumPackage: ui["pt-br"]["tour.premiumPackage"],
    lopesMendesPackage: "Pacote Lopes Mendes",
    visitSite: "Ver tour no site",
    brochureTitle: "Be Free Tours",
    brochureTagline: ui["pt-br"]["footer.tagline"],
  },
};

const policyContent = {
  en: {
    payment: [
      "How to Pay: You will receive a secure payment link via email after we confirm your booking details and finalize your itinerary.",
      "When to Pay: Full payment is required at least 72 hours (3 days) before your tour date.",
      "Booking Last Minute? Tours booked less than 72 hours in advance require immediate payment to confirm your reservation.",
      "Payment Methods: Credit and debit cards, processed in a secure environment (Stripe).",
      "Important: Unpaid bookings are automatically released 72 hours before the tour date. Reminders go via email and WhatsApp.",
    ],
    cancellation: [
      "Flexible Cancellation: Cancel free of charge up to 72 hours (3 days) before your tour starts.",
      "How to Cancel or Modify: Contact us via email or WhatsApp as soon as possible.",
      "Cancellations Within 72 Hours: Tours canceled less than 3 days before the start date are non-refundable.",
      "Weather Conditions: If severe weather makes your tour unsafe or impossible, we will offer a full refund or reschedule at no extra cost.",
    ],
  },
  es: {
    payment: [
      "Cómo pagar: Recibirás un enlace de pago seguro por email después de confirmar los detalles y cerrar el itinerario.",
      "Cuándo pagar: El pago total se requiere al menos 72 horas (3 días) antes de la fecha del tour.",
      "¿Reserva de último minuto? Las reservas con menos de 72 horas requieren pago inmediato para confirmar.",
      "Métodos de pago: Tarjetas de crédito y débito, procesadas en un entorno seguro (Stripe).",
      "Importante: Reservas sin pago se liberan automáticamente 72 horas antes del tour. Recibirás recordatorios por email y WhatsApp.",
    ],
    cancellation: [
      "Cancelación flexible: Cancela sin costo hasta 72 horas (3 días) antes del inicio.",
      "Cómo cancelar o modificar: Contáctanos por email o WhatsApp lo antes posible.",
      "Cancelaciones dentro de 72 horas: Cancelaciones con menos de 3 días no son reembolsables.",
      "Condiciones climáticas: Si el clima severo hace el tour inseguro, ofrecemos reembolso total o reprogramación sin costo.",
    ],
  },
  "pt-br": {
    payment: [
      "Como pagar: Você receberá um link de pagamento seguro por email após confirmarmos os detalhes e finalizar o itinerário.",
      "Quando pagar: O pagamento total é exigido com pelo menos 72 horas (3 dias) de antecedência.",
      "Reserva de última hora? Reservas com menos de 72 horas exigem pagamento imediato para confirmar.",
      "Formas de pagamento: Cartões de crédito e débito, processados em ambiente seguro (Stripe).",
      "Importante: Reservas sem pagamento são liberadas automaticamente 72 horas antes do tour. Você receberá lembretes por email e WhatsApp.",
    ],
    cancellation: [
      "Cancelamento flexível: Cancele sem custo até 72 horas (3 dias) antes do início.",
      "Como cancelar ou alterar: Fale conosco por email ou WhatsApp o quanto antes.",
      "Cancelamentos em até 72 horas: Cancelamentos com menos de 3 dias não são reembolsáveis.",
      "Condições climáticas: Se o clima severo tornar o tour inseguro, oferecemos reembolso total ou remarcação sem custo.",
    ],
  },
};

const contact = {
  email: "contact@befreetours.com.br",
  whatsapp: "+55 21 97927-1637",
  whatsappLink: "https://wa.me/5521979271637",
};

await mkdir(distDir, { recursive: true });

const formatNumber = (value, locale) =>
  new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value);

const toFilePath = (filePath) => filePath.split(path.sep).join("/");

const resolveImagePath = (relativePath) => {
  const fullPath = path.join(rootDir, relativePath);
  if (existsSync(fullPath)) {
    return toFilePath(path.relative(distDir, fullPath));
  }
  return null;
};

const renderPriceTable = (title, table, labels, locale) => {
  const rows = Object.entries(table)
    .map(([group, price]) => {
      const formatted = formatNumber(price, locale);
      return `<tr><td>${group}</td><td>US$ ${formatted}</td></tr>`;
    })
    .join("");

  return `
    <div>
      <strong>${title}</strong>
      <table class="price-table">
        <thead>
          <tr>
            <th>${labels.groupSizeLabel}</th>
            <th>${labels.priceLabel}</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
};

const renderPricing = (pricing, labels, locale) => {
  if (!pricing) {
    return {
      summary: `<p class="missing">missing: pricing</p>`,
      details: "",
      missing: ["pricing"],
    };
  }

  let summary = "";
  const tables = [];

  if (pricing.custom) {
    summary = pricing.displayText || labels.customQuote;
  } else if (pricing.perPerson) {
    summary = `US$ ${formatNumber(pricing.perPerson, locale)} ${labels.perPersonLabel}`;
  } else if (pricing.from) {
    summary = `${labels.fromLabel} US$ ${formatNumber(pricing.from, locale)}`;
  }

  const collectPrices = (table) =>
    Object.values(table)
      .map((value) => Number(value))
      .filter((value) => !Number.isNaN(value));

  if (pricing.priceTable) {
    tables.push(renderPriceTable(labels.standardPackage, pricing.priceTable, labels, locale));
  }

  if (pricing.standard) {
    tables.push(renderPriceTable(labels.standardPackage, pricing.standard, labels, locale));
  }

  if (pricing.lopesMendes) {
    tables.push(renderPriceTable(labels.lopesMendesPackage, pricing.lopesMendes, labels, locale));
  }

  if (pricing.premium) {
    tables.push(renderPriceTable(labels.premiumPackage, pricing.premium, labels, locale));
  }

  if (!summary) {
    const priceBuckets = [
      pricing.priceTable && collectPrices(pricing.priceTable),
      pricing.standard && collectPrices(pricing.standard),
      pricing.lopesMendes && collectPrices(pricing.lopesMendes),
      pricing.premium && collectPrices(pricing.premium),
    ].filter(Boolean);

    const flattened = priceBuckets.flat();
    const min = flattened.length ? Math.min(...flattened) : null;
    summary = min ? `${labels.fromLabel} US$ ${formatNumber(min, locale)}` : labels.customQuote;
  }

  return {
    summary: `<div class="pricing-summary">${summary || labels.customQuote}</div>`,
    details: tables.join(""),
    missing: [],
  };
};

const buildHtml = (lang) => {
  const labels = languageMeta[lang];
  const toursList = tours[lang] || [];
  const route = routeByLang[lang];
  const langLabel = languages[lang];
  const cardLogo = resolveImagePath("public/images/logo/logo.svg");

  const cards = toursList
    .map((tour) => {
      const imageSlug = tour.imageSlug || tour.slug;
      const cardImage =
        resolveImagePath(`src/images/tours/cards/${imageSlug}-card.webp`) ||
        resolveImagePath("src/images/tours/cards/essential-rio-card.webp");
      const url = `${siteUrl}/${lang}/${route}/${tour.slug}`;
      const pricing = renderPricing(tour.pricing, labels, labels.locale);
      return `
        <a class="tour-card-link" href="${url}">
          <article class="tour-card">
            <div class="tour-card-image">
              ${cardImage ? `<img src="${cardImage}" alt="${tour.title}">` : ""}
            </div>
            <div class="tour-card-content">
              <div>
                <span class="badge">${langLabel}</span>
                <h3 class="tour-card-title">${tour.title}</h3>
              </div>
              <div class="tour-card-meta">
                <div class="tour-duration">${labels.durationLabel}: ${tour.duration || "missing"}</div>
                <div>${tour.shortDescription || ""}</div>
              </div>
              <div class="tour-card-footer">
                <span class="tour-price">${pricing.summary.replace(/<[^>]*>/g, "")}</span>
                <span>${labels.visitSite}</span>
              </div>
            </div>
          </article>
        </a>
      `;
    })
    .join("");

  const indexItems = toursList
    .map((tour) => {
      return `
        <li>
          <a href="#tour-${tour.slug}">
            <span class="index-item-title">${tour.title}</span>
            <span class="index-item-meta">
              <span>${tour.duration || ""}</span>
              <span>${labels.visitSite}</span>
            </span>
          </a>
        </li>
      `;
    })
    .join("");

  const tourPages = toursList
    .map((tour) => {
      const url = `${siteUrl}/${lang}/${route}/${tour.slug}`;
      const description = tour.fullDescription || tour.shortDescription || "";
      const missing = [];
      if (!tour.fullDescription) missing.push("fullDescription");
      if (!tour.highlights || tour.highlights.length === 0) missing.push("highlights");

      const highlights = tour.highlights?.length
        ? `<ul>${tour.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";

      const pricing = renderPricing(tour.pricing, labels, labels.locale);
      if (pricing.missing.length) missing.push(...pricing.missing);

      const missingMarkup = missing.length
        ? `<p class="missing">missing: ${[...new Set(missing)].join(", ")}</p>`
        : "";

      return `
        <section class="page tour-page" id="tour-${tour.slug}">
          <div class="page-header">
            <div class="brand">
              ${cardLogo ? `<img src="${cardLogo}" alt="Be Free Tours">` : ""}
              <div class="brand-title">
                <strong>Be Free Tours</strong>
                <span>${labels.brochureTagline}</span>
              </div>
            </div>
            <div class="contact">
              <div>${labels.contactTitle}</div>
              <div><a class="link" href="mailto:${contact.email}">${contact.email}</a></div>
              <div><a class="link" href="${contact.whatsappLink}">${contact.whatsapp}</a></div>
            </div>
          </div>
          <div class="tour-hero">
            <h2><a class="link" href="${url}">${tour.title}</a></h2>
            <div class="tour-link"><a class="link" href="${url}">${url}</a></div>
          </div>
          <div class="tour-details">
            <div>
              <h3>${labels.description}</h3>
              <p>${description || ""}</p>
              <h3>${labels.placesVisited}</h3>
              ${highlights || ""}
              ${missingMarkup}
            </div>
            <div class="pricing-card">
              <h3>${labels.pricing}</h3>
              ${pricing.summary}
              ${pricing.details}
            </div>
          </div>
          <div class="footer-note">
            <span>${labels.tourDetails}</span>
            <span>${siteUrl}</span>
          </div>
        </section>
      `;
    })
    .join("");

  const paymentList = policyContent[lang].payment
    .map((item) => `<li>${item}</li>`)
    .join("");

  const cancellationList = policyContent[lang].cancellation
    .map((item) => `<li>${item}</li>`)
    .join("");

  return `
<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <title>${labels.brochureTitle} - ${langLabel}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../src/styles/global.css">
  <link rel="stylesheet" href="../src/styles/brochure.css">
</head>
<body>
  <section class="page cover">
    <div class="cover-hero">
      <h1>${labels.brochureTitle}</h1>
      <p>${labels.brochureTagline}</p>
    </div>
    <div class="cover-meta">
      <span>${labels.brochureLabel} - ${langLabel}</span>
      <span>${siteUrl}</span>
    </div>
    <div class="contact">
      <strong>${labels.contactTitle}</strong>
      <a class="link" href="mailto:${contact.email}">${contact.email}</a>
      <a class="link" href="${contact.whatsappLink}">${contact.whatsapp}</a>
    </div>
  </section>

  <section class="page index">
    <div class="page-header">
      <div class="brand">
        ${cardLogo ? `<img src="${cardLogo}" alt="Be Free Tours">` : ""}
        <div class="brand-title">
          <strong>Be Free Tours</strong>
          <span>${labels.brochureTagline}</span>
        </div>
      </div>
      <div class="contact">
        <div>${labels.contactTitle}</div>
        <div><a class="link" href="mailto:${contact.email}">${contact.email}</a></div>
        <div><a class="link" href="${contact.whatsappLink}">${contact.whatsapp}</a></div>
      </div>
    </div>
    <h2 class="section-title">${labels.indexTitle}</h2>
    <ul class="index-list">
      ${indexItems}
    </ul>
  </section>

  <section class="page cards">
    <div class="page-header">
      <div class="brand">
        ${cardLogo ? `<img src="${cardLogo}" alt="Be Free Tours">` : ""}
        <div class="brand-title">
          <strong>Be Free Tours</strong>
          <span>${labels.brochureTagline}</span>
        </div>
      </div>
      <div class="contact">
        <div>${labels.contactTitle}</div>
        <div><a class="link" href="mailto:${contact.email}">${contact.email}</a></div>
        <div><a class="link" href="${contact.whatsappLink}">${contact.whatsapp}</a></div>
      </div>
    </div>
    <h2 class="section-title">${labels.cardsTitle}</h2>
    <div class="cards-grid">
      ${cards}
    </div>
  </section>

  ${tourPages}

  <section class="page policies">
    <div class="page-header">
      <div class="brand">
        ${cardLogo ? `<img src="${cardLogo}" alt="Be Free Tours">` : ""}
        <div class="brand-title">
          <strong>Be Free Tours</strong>
          <span>${labels.brochureTagline}</span>
        </div>
      </div>
      <div class="contact">
        <div>${labels.contactTitle}</div>
        <div><a class="link" href="mailto:${contact.email}">${contact.email}</a></div>
        <div><a class="link" href="${contact.whatsappLink}">${contact.whatsapp}</a></div>
      </div>
    </div>
    <h2 class="section-title">${labels.policiesTitle}</h2>
    <div class="policies">
      <div>
        <h3>${labels.paymentTitle}</h3>
        <ul>${paymentList}</ul>
      </div>
      <div>
        <h3>${labels.cancellationTitle}</h3>
        <ul>${cancellationList}</ul>
      </div>
    </div>
    <div class="footer-note">
      <span>${labels.brochureLabel} - ${langLabel}</span>
      <span>${siteUrl}</span>
    </div>
  </section>
</body>
</html>
  `;
};

const buildPdf = async () => {
  const browser = await chromium.launch({
    executablePath: existsSync(chromiumPath) ? chromiumPath : undefined,
    chromiumSandbox: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-seccomp-filter-sandbox",
      "--disable-namespace-sandbox",
      "--disable-gpu",
      "--disable-zygote",
      "--single-process",
      "--disable-crash-reporter",
      "--disable-features=Crashpad",
    ],
  });
  const page = await browser.newPage();

  for (const lang of Object.keys(languageMeta)) {
    const html = buildHtml(lang);
    const htmlFile = path.join(distDir, `brochure-${lang}.html`);
    const pdfFile = path.join(distDir, `brochure-${lang === "pt-br" ? "pt" : lang}.pdf`);

    await writeFile(htmlFile, html, "utf8");
    await page.goto(`file://${htmlFile}`, { waitUntil: "load" });
    await page.pdf({
      path: pdfFile,
      format: "A4",
      printBackground: true,
      margin: { top: "18mm", bottom: "18mm", left: "14mm", right: "14mm" },
    });
  }

  await browser.close();
};

await buildPdf();

// ai-search price guard
// -----------------------------------------------------------------------------
// Valida que os preços em public/ai-search-*.json batem com a FONTE ÚNICA
// (src/data/tours.js), usando o mesmo helper de preço do schema
// (getStructuredDataPrice) — nunca reimplementa a cascata de preço.
//
// Falha (exit != 0) se:
//   (a) um tour de preço fixo tiver price_from != ao "from" da fonte, ou
//   (b) um tour custom (pricing.custom) carregar um price_from numérico
//       (custom não tem preço fixo; deve ser frase tipo "Contact for pricing").
//
// Como rodar (a partir da raiz do repo):
//   node scripts/ai-search-price-guard.mjs
//
// NÃO está wired no build de propósito (decisão do dono). Rodar à mão.
// -----------------------------------------------------------------------------
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getStructuredDataPrice } from '../src/utils/seoHelpers.js';
import { tours } from '../src/data/tours.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const files = { en: 'public/ai-search-en.json', es: 'public/ai-search-es.json', 'pt-br': 'public/ai-search-pt-br.json' };

const failures = [];
const warnings = [];

for (const loc of ['en', 'es', 'pt-br']) {
  // fonte: slug localizado -> price_from esperado (número) ou null (custom)
  const src = new Map();
  for (const item of tours[loc]) src.set(item.slug, getStructuredDataPrice(item.pricing));

  const data = JSON.parse(fs.readFileSync(root + files[loc], 'utf8'));
  const entries = [...data.tours.city_tours.tours, ...data.tours.day_trips.tours];

  for (const t of entries) {
    if (!src.has(t.slug)) {
      warnings.push(`[${loc}] slug "${t.slug}" presente no ai-search mas ausente da fonte tours.js`);
      continue;
    }
    const expected = src.get(t.slug); // number (fixo) | null (custom)
    const actual = t.price_from;

    if (expected === null) {
      // custom: price_from NÃO pode ser numérico
      if (typeof actual === 'number') {
        failures.push(`[${loc}] "${t.slug}" é custom mas carrega price_from numérico (${actual}); deveria ser frase "sob consulta"`);
      }
    } else {
      // fixo: price_from deve bater com a fonte
      if (actual !== expected) {
        failures.push(`[${loc}] "${t.slug}" price_from=${JSON.stringify(actual)} != fonte ${expected}`);
      }
    }
  }
}

for (const w of warnings) console.warn('AVISO: ' + w);

if (failures.length) {
  console.error(`\n✖ ai-search price guard FALHOU (${failures.length}):`);
  for (const f of failures) console.error('  - ' + f);
  process.exit(1);
}

console.log(`✓ ai-search price guard OK — preços dos 3 locales batem com tours.js (custom sem preço numérico).`);

/**
 * priceHelper — fonte única de cálculo de preço (UI agora; schema depois consome a mesma lógica).
 *
 * Consome as estruturas de tours.js/experiences.js COMO ESTÃO (4 formatos):
 *   1. { from, priceTable: {1..12} }      → private tours (USD): total POR GRUPO de n pax
 *   2. { standard: {"1-4","5-10"...} }     → Ilha Grande (grupo de barco): total por grupo, chaves de FAIXA
 *   3. { perPerson }                        → experiences: preço POR PESSOA
 *   4. { custom: true }                     → custom-tour: sem preço → CTA orçamento
 *   (sem pricing / Búzios)                  → under-inquiry → QuoteForm
 *
 * Parametrizado por MOEDA (USD agora; PT→BRL no passo 4 é troca de config, não refactor).
 * NÃO inventa preço BRL.
 *
 * REGRA TRAVADA do "from" (consistente hub ↔ tour page):
 *   group/boat → menor TOTAL do grupo (rotular como total do grupo mínimo)
 *   perPerson  → "$X por pessoa"
 *   nunca misturar as bases entre card e página.
 */

const CURRENCY_SYMBOL = { USD: "$", BRL: "R$" };

function formatMoney(amount, currency) {
  const symbol = CURRENCY_SYMBOL[currency] ?? "$";
  return `${symbol}${amount}`;
}

// Chave pode ser inteiro ("1","2") ou faixa ("1-4","5-10"). Retorna [min, max].
function parseTierKey(key) {
  const s = String(key);
  if (s.includes("-")) {
    const [a, b] = s.split("-").map((n) => Number(n.trim()));
    return [a, Number.isFinite(b) ? b : a];
  }
  const n = Number(s);
  return [n, n];
}

function tiersOf(table) {
  return Object.entries(table)
    .map(([k, v]) => ({ range: parseTierKey(k), total: Number(v) }))
    .filter((t) => Number.isFinite(t.total) && Number.isFinite(t.range[0]))
    .sort((a, b) => a.range[0] - b.range[0]);
}

// Total do grupo para groupSize: tier que contém o tamanho; fora da faixa → clampa.
function resolveGroupTotal(tiers, groupSize) {
  const hit = tiers.find((t) => groupSize >= t.range[0] && groupSize <= t.range[1]);
  if (hit) return hit.total;
  const first = tiers[0];
  const last = tiers[tiers.length - 1];
  return groupSize < first.range[0] ? first.total : last.total;
}

/**
 * @param {object} tour  objeto com `pricing` (consumido como está)
 * @param {number} groupSize  nº de participantes (default 1)
 * @param {string} currency  "USD" (default) | "BRL"
 * @returns {{ basis, currency, groupTotal, perPerson, from, fromLabel, fromGroupMax }}
 *   basis: "group" | "perPerson" | "custom" | "quote"
 */
export function getPrice(tour, groupSize = 1, currency = "USD") {
  const p = (tour && tour.pricing) || {};
  const size = Math.max(1, Number(groupSize) || 1);

  // 4) custom → sem preço
  if (p.custom) {
    return { basis: "custom", currency, groupTotal: null, perPerson: null, from: null, fromLabel: null, fromGroupMax: null };
  }

  // 3) perPerson (experiences)
  if (Number.isFinite(Number(p.perPerson))) {
    const per = Number(p.perPerson);
    return {
      basis: "perPerson",
      currency,
      groupTotal: per * size,
      perPerson: per,
      from: per,
      fromLabel: formatMoney(per, currency),
      fromGroupMax: null,
    };
  }

  // 1) priceTable / 2) standard (total por grupo; chaves inteiras OU faixa)
  const table = p.priceTable || p.standard;
  if (table && typeof table === "object") {
    const tiers = tiersOf(table);
    if (tiers.length) {
      const groupTotal = resolveGroupTotal(tiers, size);
      const cheapest = tiers.reduce((min, t) => (t.total < min.total ? t : min), tiers[0]);
      return {
        basis: "group",
        currency,
        groupTotal,
        perPerson: Math.round(groupTotal / size),
        from: cheapest.total,
        fromLabel: formatMoney(cheapest.total, currency),
        fromGroupMax: cheapest.range[1], // "grupo de até N" (limite superior do tier mais barato)
      };
    }
  }

  // sem pricing → orçamento (Búzios)
  return { basis: "quote", currency, groupTotal: null, perPerson: null, from: null, fromLabel: null, fromGroupMax: null };
}

export { formatMoney };

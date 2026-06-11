/**
 * Be Free Tours — dados canônicos compartilhados (fonte única).
 *
 * O aggregateRating aqui é consumido por DOIS lugares que NÃO podem divergir:
 *   1. o schema Organization/aggregateRating no <head> (BaseLayout.astro)
 *   2. o número visível na TrustBar
 * Mudou aqui, muda nos dois — número visível e dado estruturado sempre batem.
 */
export const aggregateRating = {
  ratingValue: "4.9",
  reviewCount: "800",
  bestRating: "5",
  worstRating: "1",
};

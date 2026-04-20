/**
 * Formspree endpoint configuration.
 *
 * Endpoints are defined via PUBLIC_FORMSPREE_ environment variables
 * in .env (see .env.example for the full list).
 *
 * Usage:
 *   import { getFormspreeEndpoint } from '../config/formspree.js';
 *   const endpoint = getFormspreeEndpoint('booking');
 *
 * Returns the full URL (https://formspree.io/f/<id>) or throws if the
 * environment variable is missing — failing loudly at build time is
 * preferable to a silently broken form in production.
 */

const BASE_URL = 'https://formspree.io/f/';

const ENDPOINT_MAP = {
  booking: import.meta.env.PUBLIC_FORMSPREE_BOOKING,
  // Future endpoints — uncomment as forms are created:
  // contact: import.meta.env.PUBLIC_FORMSPREE_CONTACT,
  // newsletter: import.meta.env.PUBLIC_FORMSPREE_NEWSLETTER,
  // quote: import.meta.env.PUBLIC_FORMSPREE_QUOTE,
};

export function getFormspreeEndpoint(purpose) {
  const id = ENDPOINT_MAP[purpose];
  if (!id) {
    throw new Error(
      `Missing Formspree endpoint for "${purpose}". ` +
      `Check that PUBLIC_FORMSPREE_${purpose.toUpperCase()} is set in .env ` +
      `and that the key is registered in src/config/formspree.js.`
    );
  }
  return `${BASE_URL}${id}`;
}

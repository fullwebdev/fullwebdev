/**
 * Check if an URL is absolute
 *
 * Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 * Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 *
 * @param {string} str the URL to check.
 */
export function isAbsoluteUrl(str) {
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(str);
}

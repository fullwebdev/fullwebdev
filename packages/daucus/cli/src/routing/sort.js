/** @typedef {import('./Route').Route} Route */

/**
 * @param {[string, Partial<Route>]} entryA
 * @param {[string, Partial<Route>]} entryB
 */
export function sortRoutesChildEntriesByPosition(entryA, entryB) {
  const positionA = (entryA && entryA[1] && entryA[1].position
    ? entryA[1].position
    : ""
  ).padEnd(10, "~");
  const positionB = (entryB && entryB[1] && entryB[1].position
    ? entryB[1].position
    : ""
  ).padEnd(10, "~");
  if (positionA > positionB) return 1;
  if (positionA < positionB) return -1;
  return 0;
}

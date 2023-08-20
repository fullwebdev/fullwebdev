/** @typedef {import('@daucus/core').Route} Route */

/**
 * @internal
 * @param {[string, Partial<Route>]} routeChildEntry
 */
function getRouteEntryPosition(routeChildEntry) {
  let position = "";
  if (routeChildEntry && routeChildEntry[1]) {
    const route = routeChildEntry[1];
    if (route.position) {
      position = route.position;
    } else if (route.title) {
      position = route.title;
    } else if (route.id) {
      position = route.id;
    } else if (routeChildEntry[0]) {
      [position] = routeChildEntry;
    }
  }
  return position.padEnd(10, "~");
}

/**
 * @param {[string, Partial<Route>]} entryA
 * @param {[string, Partial<Route>]} entryB
 */
export function sortRoutesChildEntriesByPosition(entryA, entryB) {
  const positionA = getRouteEntryPosition(entryA);
  const positionB = getRouteEntryPosition(entryB);
  if (positionA > positionB) return 1;
  if (positionA < positionB) return -1;
  return 0;
}

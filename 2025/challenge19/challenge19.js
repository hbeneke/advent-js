/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  const routeMap = new Map(routes.map(([from, to]) => [from, to]));
  const result = [routes[0][0], routes[0][1]];

  let current = routes[0][1];
  while (routeMap.has(current)) {
    current = routeMap.get(current);
    result.push(current);
  }

  return result;
}

/**
 * @param {string[][]} map
 * @returns {number}
 */
function minStepsToDeliver(map) {
  const rows = map.length;
  const cols = map[0].length;
  let start, gifts = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (map[r][c] === 'S') start = [r, c];
      if (map[r][c] === 'G') gifts.push(`${r},${c}`);
    }
  }

  if (gifts.length === 0) return 0;

  const distances = new Map();
  const visited = new Set();
  const queue = [[...start, 0]];
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  while (queue.length) {
    const [r, c, dist] = queue.shift();
    const key = `${r},${c}`;

    if (visited.has(key)) continue;
    visited.add(key);

    if (map[r][c] === 'G') distances.set(key, dist);

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && map[nr][nc] !== '#') {
        queue.push([nr, nc, dist + 1]);
      }
    }
  }

  if (distances.size !== gifts.length) return -1;

  return [...distances.values()].reduce((sum, d) => sum + d, 0);
}

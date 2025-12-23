/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
  const rows = maze.length;
  const cols = maze[0].length;
  let start;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (maze[r][c] === 'S') start = [r, c];
    }
  }

  const visited = new Set();
  const queue = [start];
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  while (queue.length) {
    const [r, c] = queue.shift();
    const key = `${r},${c}`;

    if (visited.has(key)) continue;
    visited.add(key);

    if (maze[r][c] === 'E') return true;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && maze[nr][nc] !== '#') {
        queue.push([nr, nc]);
      }
    }
  }

  return false;
}

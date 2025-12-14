/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  const directions = {
    '>': [0, 1],
    '<': [0, -1],
    '^': [-1, 0],
    'v': [1, 0]
  };

  let row = 0;
  let col = 0;
  const visited = new Set();

  while (true) {
    if (row < 0 || row >= factory.length || col < 0 || col >= factory[0].length) {
      return 'broken';
    }

    const cell = factory[row][col];

    if (cell === '.') {
      return 'completed';
    }

    const key = `${row},${col}`;
    if (visited.has(key)) {
      return 'loop';
    }
    visited.add(key);

    const [dr, dc] = directions[cell];
    row += dr;
    col += dc;
  }
}

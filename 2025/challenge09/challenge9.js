/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const rows = board.split('\n').slice(1, -1);
  const grid = rows.map(row => row.split(''));
  
  let row, col;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === '@') {
        row = r;
        col = c;
      }
    }
  }

  const directions = {
    'L': [0, -1],
    'R': [0, 1],
    'U': [-1, 0],
    'D': [1, 0]
  };

  let pickedUp = false;

  for (const move of moves) {
    const [dr, dc] = directions[move];
    row += dr;
    col += dc;

    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
      return pickedUp ? 'success' : 'crash';
    }

    const cell = grid[row][col];
    if (cell === '#') {
      return pickedUp ? 'success' : 'crash';
    }
    if (cell === '*') {
      pickedUp = true;
    }
  }

  return pickedUp ? 'success' : 'fail';
}

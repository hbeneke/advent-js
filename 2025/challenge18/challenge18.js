/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
  const rows = board.length;
  const cols = board[0].length;
  const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];

  const check = (r, c, dr, dc) => {
    const color = board[r][c];
    if (color === '.') return false;
    for (let i = 1; i < 4; i++) {
      const nr = r + dr * i;
      const nc = c + dc * i;
      if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) return false;
      if (board[nr][nc] !== color) return false;
    }
    return true;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      for (const [dr, dc] of directions) {
        if (check(r, c, dr, dc)) return true;
      }
    }
  }

  return false;
}

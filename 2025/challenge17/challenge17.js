/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  const rows = board.length;
  const cols = board[0].length;

  // Check horizontal
  for (let r = 0; r < rows; r++) {
    let count = 1;
    for (let c = 1; c < cols; c++) {
      if (board[r][c] !== '.' && board[r][c] === board[r][c - 1]) {
        count++;
        if (count >= 4) return true;
      } else {
        count = 1;
      }
    }
  }

  // Check vertical
  for (let c = 0; c < cols; c++) {
    let count = 1;
    for (let r = 1; r < rows; r++) {
      if (board[r][c] !== '.' && board[r][c] === board[r - 1][c]) {
        count++;
        if (count >= 4) return true;
      } else {
        count = 1;
      }
    }
  }

  return false;
}

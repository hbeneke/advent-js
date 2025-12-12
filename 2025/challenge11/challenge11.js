/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  let count = 0;
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  for (let r = 0; r < warehouse.length; r++) {
    for (let c = 0; c < warehouse[r].length; c++) {
      if (warehouse[r][c] === '*') {
        const hasCamera = directions.some(([dr, dc]) => {
          const nr = r + dr;
          const nc = c + dc;
          return warehouse[nr]?.[nc] === '#';
        });
        if (!hasCamera) count++;
      }
    }
  }

  return count;
}

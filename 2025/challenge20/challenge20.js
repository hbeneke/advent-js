/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
  const result = warehouse.map(row => [...row]);

  for (const col of drops) {
    for (let row = result.length - 1; row >= 0; row--) {
      if (result[row][col] === '.') {
        result[row][col] = '#';
        break;
      }
    }
  }

  return result;
}

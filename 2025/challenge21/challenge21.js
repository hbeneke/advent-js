/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
  const result = warehouse.map(row => [...row]);
  const cols = result[0].length;

  for (const col of drops) {
    for (let row = result.length - 1; row >= 0; row--) {
      if (result[row][col] === '.') {
        result[row][col] = '#';
        
        if (result[row].every(cell => cell === '#')) {
          result.splice(row, 1);
          result.unshift(Array(cols).fill('.'));
        }
        break;
      }
    }
  }

  return result;
}

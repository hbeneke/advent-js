/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  if (gifts.length === 0) return 0;
  if (gifts.some(g => g > maxWeight)) return null;

  let sleighs = 1;
  let current = 0;

  for (const gift of gifts) {
    if (current + gift <= maxWeight) {
      current += gift;
    } else {
      sleighs++;
      current = gift;
    }
  }

  return sleighs;
}

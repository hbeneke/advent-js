/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  if (size < 2) return ''

  const border = symbol.repeat(size)
  const middle = symbol + ' '.repeat(size - 2) + symbol

  const rows = []
  for (let i = 0; i < size; i++) {
    if (i === 0 || i === size - 1) {
      rows.push(border)
    } else {
      rows.push(middle)
    }
  }

  return rows.join('\n')
}

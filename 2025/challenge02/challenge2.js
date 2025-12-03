/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  return giftsToProduce.flatMap(({ toy, quantity }) => {
    if (typeof quantity !== 'number' || quantity <= 0) {
      return []
    }
    return Array(quantity).fill(toy)
  })
}

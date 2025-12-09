/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const left = {};
  const right = {};
  const pairs = [];

  for (const { hand, color } of gloves) {
    if (hand === 'L') {
      if (right[color] > 0) {
        pairs.push(color);
        right[color]--;
      } else {
        left[color] = (left[color] || 0) + 1;
      }
    } else {
      if (left[color] > 0) {
        pairs.push(color);
        left[color]--;
      } else {
        right[color] = (right[color] || 0) + 1;
      }
    }
  }

  return pairs;
}

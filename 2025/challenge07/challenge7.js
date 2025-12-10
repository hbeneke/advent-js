/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  const maxWidth = 2 * height - 1;
  const lines = [];
  let position = 0;

  for (let row = 0; row < height; row++) {
    const width = 2 * row + 1;
    const padding = ' '.repeat((maxWidth - width) / 2);
    let line = '';

    for (let i = 0; i < width; i++) {
      position++;
      line += position % frequency === 0 ? ornament : '*';
    }

    lines.push(padding + line);
  }

  const trunkPadding = ' '.repeat((maxWidth - 1) / 2);
  lines.push(trunkPadding + '#');

  return lines.join('\n');
}

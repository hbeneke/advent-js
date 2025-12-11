/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  let depth = 0;
  let maxDepth = 0;

  for (const char of s) {
    if (char === '[') {
      depth++;
      maxDepth = Math.max(maxDepth, depth);
    } else if (char === ']') {
      depth--;
      if (depth < 0) return -1;
    }
  }

  return depth === 0 ? maxDepth : -1;
}

/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {string[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  function search(obj, path) {
    for (const key in obj) {
      const value = obj[key];
      if (value === gift) {
        return [...path, key];
      }
      if (typeof value === 'object' && value !== null) {
        const result = search(value, [...path, key]);
        if (result.length > 0) return result;
      }
    }
    return [];
  }

  return search(workshop, []);
}

/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  const lower = toy.toLowerCase();
  
  for (let i = 0; i < toy.length; i++) {
    const char = lower[i];
    if (lower.indexOf(char) === lower.lastIndexOf(char)) {
      return toy[i];
    }
  }
  
  return '';
}

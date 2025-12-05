/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  const blocks = code.match(/\[[^\]]+\]/g) || [];
  const digits = [];

  for (const block of blocks) {
    const content = block.slice(1, -1);

    if (content === '<') {
      if (digits.length === 0) return null;
      digits.push(digits[digits.length - 1]);
    } else {
      const num = parseInt(content[0], 10);
      let result = num;
      for (const op of content.slice(1)) {
        if (op === '+') result = (result + 1) % 10;
        else if (op === '-') result = (result - 1 + 10) % 10;
      }
      digits.push(result);
    }
  }

  if (digits.length < 4) return null;

  return digits.join('');
}

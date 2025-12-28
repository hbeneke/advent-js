/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  const bracketMap = new Map();
  const stack = [];

  for (let i = 0; i < code.length; i++) {
    if (code[i] === '[' || code[i] === '{') {
      stack.push(i);
    } else if (code[i] === ']' || code[i] === '}') {
      const start = stack.pop();
      bracketMap.set(start, i);
      bracketMap.set(i, start);
    }
  }

  let value = 0;
  let i = 0;

  while (i < code.length) {
    switch (code[i]) {
      case '+': value++; break;
      case '-': value--; break;
      case '[':
        if (value === 0) i = bracketMap.get(i);
        break;
      case ']':
        if (value !== 0) i = bracketMap.get(i);
        break;
      case '{':
        if (value === 0) i = bracketMap.get(i);
        break;
    }
    i++;
  }

  return value;
}

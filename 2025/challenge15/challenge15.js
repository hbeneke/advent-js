/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
  const keys = Object.keys(data[0]);
  
  const sorted = [...data].sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (typeof valA === 'number') return valA - valB;
    return valA.localeCompare(valB);
  });

  const colWidths = keys.map((key, i) => {
    const header = String.fromCharCode(65 + i);
    const maxVal = Math.max(...sorted.map(row => String(row[key]).length));
    return Math.max(header.length, maxVal);
  });

  const separator = '+' + colWidths.map(w => '-'.repeat(w + 2)).join('+') + '+';
  
  const headerRow = '|' + keys.map((_, i) => {
    const header = String.fromCharCode(65 + i);
    return ' ' + header.padEnd(colWidths[i]) + ' ';
  }).join('|') + '|';

  const dataRows = sorted.map(row => {
    return '|' + keys.map((key, i) => {
      return ' ' + String(row[key]).padEnd(colWidths[i]) + ' ';
    }).join('|') + '|';
  });

  return [separator, headerRow, separator, ...dataRows, separator].join('\n');
}

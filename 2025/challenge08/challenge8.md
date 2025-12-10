# Challenge #8: 🎁 Find the unique toy

Santa 🎅 wants to know what the first non-repeated letter is in a toy's name 🎁.

Write a function that takes a string and returns the first letter that is not repeated, ignoring uppercase and lowercase when counting, but returning the letter as it appears in the string.

If there is none, return an empty string ("").

## Examples

```javascript
findUniqueToy('Gift') // 'G'
// The G is the first letter that is not repeated
// and we return it exactly as it appears

findUniqueToy('sS') // ''
// The letters are repeated, since it doesn't distinguish uppercase

findUniqueToy('reindeeR') // 'i'
// The r is repeated (even if it's uppercase)
// and the e as well, so the first one is 'i'

// More cases:
findUniqueToy('AaBbCc') // ''
findUniqueToy('abcDEF') // 'a'
findUniqueToy('aAaAaAF') // 'F'
findUniqueToy('sTreSS') // 'T'
findUniqueToy('z') // 'z'
```

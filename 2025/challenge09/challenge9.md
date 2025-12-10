# Challenge #9: 🦌 The reno robot aspirator

The elves have built a robot vacuum reindeer 🦌 (@) to tidy up the workshop a bit before Christmas.

The reindeer moves on a board to pick things up off the floor (*) and must avoid obstacles (#).

You will receive two parameters:

board: a string that represents the board.
moves: a string with the movements: 'L' (left), 'R' (right), 'U' (up), 'D' (down).

Movement rules:

If the reindeer picks something up off the floor (*) during the moves → return 'success'.
If the reindeer goes off the board or crashes into an obstacle (#) → return 'crash'.
If the reindeer neither picks anything up nor crashes → return 'fail'.

Keep in mind that if the reindeer picks something up off the floor, it is already 'success', regardless of whether in later moves it crashes into an obstacle or goes off the board.

Important: Keep in mind that in the board the first and last lines are blank and must be discarded.

## Example

```javascript
const board = `
.....
.*#.*
.@...
.....
`

moveReno(board, 'D')
// 'fail' -> it moves but doesn't pick anything up

moveReno(board, 'U')
// 'success' -> it picks something up (*) right above

moveReno(board, 'RU')
// 'crash' -> it crashes into an obstacle (#)

moveReno(board, 'RRRUU')
// 'success' -> it picks something up (*)

moveReno(board, 'DD')
// 'crash' -> it crashes into the bottom of the board

moveReno(board, 'UUU')
// 'success' -> it picks something up off the floor (*) and then crashes at the top

moveReno(board, 'RR')
// 'fail' -> it moves but doesn't pick anything up
```

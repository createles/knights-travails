function knightMoves(startPos, endPos) {
  const q = []; // initialize queue array to hold positions to check
  q.push([startPos, [startPos]]); // add starting position to queue

  const visited = new Set(); // initialize list of visited nodes
  while (q.length !== 0) {
    // loop until queue is empty
    const [currentNode, path] = q.shift();
    // in "x,y" string syntax (due to .include using === strict equality check)
    if (currentNode[0] === endPos[0] && currentNode[1] === endPos[1]) {
      // comparison via ELEMENTS (cannot directly compare array REFERENCES)
      console.log(
        `You made it in ${path.length - 1} moves! Here's your path:`
      ); // base case; return if at the end
      console.log(path);
      return;
    }

    const possibleMoves = getPossibleMoves(currentNode);

    for (const move of possibleMoves) {
      // iterate over possible positions
      if (0 <= move[0] && move[0] <= 7 && 0 <= move[1] && move[1] <= 7) {
        // check that positions are valid on board
        if (!visited.has(move.toString())) {
          // check that the position has not been visited yet
          visited.add(move.toString()); // add to visited list (allows skipping similar paths)

          const newPath = path.slice(); // create copy of the path
          newPath.push(move); // expand path by adding move to path array

          q.push([move, newPath]); // enqueue the move and the path leading to the position
        }
      }
    }
    // while loop continues on the next queued item (first move added)
  }
}

// define the movement rules
const knightMoveOffsets = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, -1],
  [-2, 1],
];

function getPossibleMoves(currentPos) {
  const [x, y] = currentPos; // initialize currentPos coordinates
  const moves = []; // initialize possible moves list

  for (const [dx, dy] of knightMoveOffsets) {
    // iterate over offsets
    const newX = x + dx;
    const newY = y + dy;
    moves.push([newX, newY]);
  }

  return moves;
}

knightMoves([0, 0], [0,7]);

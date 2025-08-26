function knightMoves(startPos, endPos) {
  const q = []; // initialize queue array to hold positions to check
  q.push(startPos); // add starting position to queue

  const visited = []; // initialize list of visited nodes
  while (q.length !== 0) { // loop until queue is empty
    const currentNode = q.shift(); 
    visited.push(currentNode); // add node to the visited list

    if (currentNode[0] === endPos[0] && currentNode[1] === endPos[1]) { // comparison via ELEMENTS (cannot directly compare array REFERENCES)
      console.log(`You made it in ${visited.length-1} moves! Here's your path:`); // base case; return if at the end
      console.log(visited);
      return;
    }

    const possibleMoves = getPossibleMoves(currentNode);

    for (const move of possibleMoves) {
      if (0 <= move[0] <= 7 && 0 <= move[1] <= 7) {

      }
    }


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
  const [x,y] = currentPos; // initialize currentPos coordinates
  const moves = []; // initialize possible moves list

  for (const [dx, dy] of knightMoveOffsets) { // iterate over offsets
    const newX = x + dx;
    const newY = y + dy;
    moves.push([newX, newY]);
  }

  return moves;
}

knightMoves([0,0], [0,0]);
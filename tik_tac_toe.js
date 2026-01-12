function italic(text) {
  return "\x1B[3m" + text + "\x1B[0m";
}

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}


const WIN_PATTERNS = [
   [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

const checkWins = (board, symbol) => {
  return WIN_PATTERNS.some(pattern =>
    pattern.every(index => board[index] === symbol)
  );
}

const makeMove = (board, position,player) => {
  console.log({position },typeof position);
  const index = position - 1;
  if (board[index] !== undefined) {
    return bold('already placed');
  }
  board[index] = player.symbol;
  if (checkWins(board, player.symbol)) {
    return bold(`${player.name} wins the match`);
  }
  if (board.every(cell => cell !== undefined)) {
    return bold('match draw');
  }
  return true;
};

const players = async() => {
const board = Array.from({ length: 9 });
const firstPlayer =  prompt(bold('enter player1'));
const secondPlayer = prompt(bold('enter  Player 2'));
const player1 = {name : firstPlayer,symbol : '🅾️'};
const player2 = {name : secondPlayer,symbol : '❌'};
let player = player1
const play = async() => {
const buf = new Uint8Array(1);
const encoder = new TextEncoder()
await Deno.stdout.write(encoder.encode(`${player.name} enter position  `));

await Deno.stdin.read(buf);
const position = new TextDecoder().decode(buf);
console.log('position is',{position});
if(makeMove(board,parseInt(position),player)){
player = player2.name === player.name ? player1 : player2;
console.log({board,player});
 await play();
}
}
await play();
return board;
}
console.log(await players());

function italic(text) {
  return "\x1B[3m" + text + "\x1B[0m";
}

function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}

function board(emojiPlace, emoji, array) {
  const row = emojiPlace[0];
  const cols = emojiPlace[1];
  array[row][cols] = emoji;
  const line = '----------------------';
  for (let index = 0; index < array.length; index++) {
    let output = ' |' + array[index].join('   | ') + '   | ';
    console.log(output);
    console.log(line);
  }
}

function checkWinner(array) {
  const lines = [
    // Rows
    [array[0][0], array[0][1], array[0][2]],
    [array[1][0], array[1][1], array[1][2]],
    [array[2][0], array[2][1], array[2][2]],
    // Columns
    [array[0][0], array[1][0], array[2][0]],
    [array[0][1], array[1][1], array[2][1]],
    [array[0][2], array[1][2], array[2][2]],
    // Diagonals
    [array[0][0], array[1][1], array[2][2]],
    [array[0][2], array[1][1], array[2][0]],
  ];

  for (const line of lines) {
    if (line.every(cell => cell === '🅾️')) {
      console.log('🅾️ won the game 🏆🏆🏆🏆🏆');
      return true;
    }
    if (line.every(cell => cell === '❌')) {
      console.log('❌ won the game 🏆🏆🏆🏆🏆');
      return true;
    }
  }

  return false; // No winner yet
}

function user1Choices(user1, array) {
  const emoji = '❌';
  console.log(user1);
  let move = prompt((' enter the place'));
  if (move === '00' || move === '01' || move === '02' || move === '10' || move === '11' ||
    move === '12' || move === '20' || move === '21' || move === '22'){
    const emojiPlace = move.split('').map(Number);
    console.clear();
    board(emojiPlace, emoji, array);
} else{
  console.log('pls enter valid input');
 }
}

function user2Choice(user2, array) {
  const emoji = '🅾️';
  console.log(user2);
  let move = prompt((' enter the place'));
  if (move === '00' || move === '01' || move === '02' || move === '10' || move === '11' ||
    move === '12' || move === '20' || move === '21' || move === '22'){
    const emojiPlace = move.split('').map(Number);
    console.log(emojiPlace);
    console.clear();
    board(emojiPlace, emoji, array);

  }
 else{
  console.log('pls enter valid input');
 }

}
function play() {
  console.log("Let's play ");
  let num = '';
  let found = 0;
  const user1 = prompt(bold(italic('Enter user1')));
  const user2 = prompt(bold(italic('Enter user 2')));
  let array = [['', '', ''], ['', '', ''], ['', '', '']];
  for (let index = 0; index < 9; index++) {
    if (index % 2 === 0) {
      user1Choices(user1, array);
    }
    else {
      user2Choice(user2, array);
    }
    if(checkWinner(array)){
      found = 1;
      break;
    }
    if(index === 8 && found === 0)
  console.log('match draw');
}
  }
  

play();

function paddingWithSpace(string, length) {
  return string.padStart(length, ' ');
}
function gameRules() {

  console.log(paddingWithSpace('\x1b[1;31m Word Chain Memory Game \x1b[0m\n', 83))
  console.log(paddingWithSpace('\x1b[2;4;35m Game rules \x1b[0m\n', 65));
  console.log(paddingWithSpace('* Players must say words in the correct order.', 93));
  console.log(paddingWithSpace('* No skipping or changing words.', 79));
  console.log(paddingWithSpace('* If a player forgets or makes a mistake, the other gets 1 point.', 112));
  console.log(paddingWithSpace('* Play 5 rounds — the player with the most points wins.\n', 103));
  console.log('\nstart');
}

function isEven(number) {
  return number % 2 === 0
}

function play() {
  gameRules();
  let word = '';
  const wordsArray = [];
  let lastWordOfUser1;
  let lastWordOfUser2;
  const user1 = prompt("enter name of the first palyer");
  const user2 = prompt('enter name of the second player');
  for (let round = 0; round < 10; round++) {
    if (isEven(round)) {
      lastWordOfUser2 = word;
      word = prompt(user1 + '  enter the word');
       if (round === 0) {
        wordsArray.push(word);
      } else {
        const sliceStart = word.length - (word.length - lastWordOfUser2.length - 1);
        wordsArray.push(word.slice(sliceStart, word.length));
      }
    } else {
      lastWordOfUser1 = word;
      word = prompt(user2 + '  enter the word');
        const sliceStart = word.length - (word.length - lastWordOfUser1.length - 1);
      wordsArray.push(word.slice(sliceStart, word.length))
    }
    console.log('array', wordsArray);
  }
}


play();

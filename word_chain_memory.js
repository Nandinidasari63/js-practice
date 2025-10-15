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

function checkIsEqual(newWord, word) {
  let sliceEnd = word.length;
  //console.log(sliceEnd);
  //console.log('newWord is', newWord);
  //console.log('checking is it equal 1.word ===', word, '2.new word ===', newWord);
  return word === newWord.slice(0, sliceEnd);
}


function play() {
  gameRules();
  let word = '';
  const wordsArray = [];
  let lastWordOfUser1;
  let lastWordOfUser2;
  let sequenceofWords = '';
  let pointsOfUser1 = 0;
  let pointsOfUser2 = 0;
  let winner;
  const user1 = prompt("enter name of the first palyer");
  const user2 = prompt('enter name of the second player');
  for (let round = 0; round < 4; round++) {
    if (isEven(round)) {
      lastWordOfUser2 = word;
      console.log('\n');
      console.clear();
      word = prompt('\x1b[1m ' + user1 + '  enter the word \x1b[0m');
      if (round === 0) {
        wordsArray.push(word);
      } else {
        const sliceStart = word.length - (word.length - lastWordOfUser2.length - 1);
        if (checkIsEqual(word, lastWordOfUser2)) {
          wordsArray.push(word.slice(sliceStart, word.length));
        }
      }
    } else {
      lastWordOfUser1 = word;
      console.log('\n');
      console.clear();
      word = prompt('\x1b[1m' + user2 + '  enter the word \x1b[0m');
      const sliceStart = word.length - (word.length - lastWordOfUser1.length - 1);
      if (checkIsEqual(word, lastWordOfUser1))
        wordsArray.push(word.slice(sliceStart, word.length))
    }
    sequenceofWords = wordsArray[0];
    // console.log('array', wordsArray,'sequenceofWords',sequenceofWords,'array length',wordsArray.length);
    for (let index = 1; index < wordsArray.length; index++) {
      sequenceofWords += ' ';
      sequenceofWords += wordsArray[index];
    }
    //console.log('before checking',sequenceofWords);
    //console.log('word', word, 'sequenceOfWords', sequenceofWords);
   // console.log(wordsArray);
    if (word !== sequenceofWords) {
      if (isEven(round)) {
        pointsOfUser2++;
      }
      else {
        pointsOfUser1++;
      }
    } else {
      if (isEven(round)) {
        pointsOfUser1++;
      }
      else {
        pointsOfUser2++;
      }
    }
    //console.log(wordsArray);
    console.log('points of ', user1, pointsOfUser1, '\npoints of ', user2, pointsOfUser2, '\n');
    //console.log('after checking',sequenceofWords);
  }
  if (pointsOfUser1 > pointsOfUser2) {
    winner = user1;
  } else if (pointsOfUser1 < pointsOfUser2) {
    winner = user2;
  } else {
    winner = user1 + ' and ' + user2;
  }
  console.log('Winner of the game is ', winner);

}


play();

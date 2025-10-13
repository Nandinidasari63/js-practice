function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}
function underline(text) {
  return "\x1B[4m" + text + "\x1B[0m";
}

function dim(text) {
  return "\x1B[2m" + text + "\x1B[0m";
}
function play() {
  let max;
  let  min;
  const numberOfDigits = parseInt(prompt(underline(bold(('How many digits do you need')))));
  switch (numberOfDigits) {
    case 1:
      max = 9;
      min = 0;
      break;
    case 2:
      max = 99; min = 10;
      break;
    case 3:
      max = 999; min = 100;
      break;
    case 4:
      max = 9999;
      min = 1000;
      break;
    default:
      console.log('the number of digits limited to 4 or enter valid number of digit');
  }
  let chances = 10;
  const secretNumber = Math.floor((Math.random() * (max - min)) + min).toString();
  console.log("start");
  findCowsBUlls(secretNumber, chances,numberOfDigits);
}

function mapNumberToArray(secretNumber) {
  const mapedArray = secretNumber.split('').map(Number);
  return mapedArray;
}

function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}
function green(text) {
  return "\x1B[32m" + text + "\x1B[0m";
}

function repeat(secretNumber,actualNum,chances,numberOfDigits){
  let number = prompt(bold('assume one four digit number in your mind and tell to me'));
    if(number.length === numberOfDigits){
     const userEnteredNumber = mapNumberToArray(number);
      let cowCount = 0;
      let bullCount = 0;
      for (let i = 0; i < actualNum.length; i++) {
        let found = 0;
        let notFound = 0;
        for (let j = 0; j < userEnteredNumber.length; j++) {
          if (actualNum[i] === userEnteredNumber[j]) {
            if (i === j) {
              found++;
              bullCount++;
            } else {
              notFound++;
            }
          }
        }
        if (found === 0 && notFound >= 1) {
          cowCount++;
        }
    
      }
      console.log(bullCount,numberOfDigits);
      if (bullCount === numberOfDigits) {
        console.log(green(bold('YOU WIN')));
      } else {
        console.log(red(bold('Cow count')), cowCount);
        console.log(green(bold('Bull count')), bullCount);
        chances--;
        if (chances > 0) {
          repeat( secretNumber,actualNum, chances,numberOfDigits);
        }
    
        if (chances === 0) {
          console.log(red(bold('you loss the game better luck next Time')));
          console.log(secretNumber);
          const confirmation = confirm(bold('Are you intersted to play again ?'));
          console.log('\n');
          if (confirmation) {
            play();
          }
        }
      }
    }
    else{
    console.log('enter ',numberOfDigits,'digits number');
     repeat(secretNumber,actualNum,chances,numberOfDigits);
  }
}
  
function findCowsBUlls(secretNumber, chances,numberOfDigits) {
  const actualNum = mapNumberToArray(secretNumber);
  repeat(secretNumber,actualNum,chances,numberOfDigits);
}

play();

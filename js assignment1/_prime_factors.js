// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 100;

// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
// Do not rename startOfRange or endOfRange, use them as input for your program.
// While testing we will change their values.
const startOfRange = 2;
const endOfRange = a;
let changingNum = a;
let startingNumber = startOfRange;
let isPrime = true;

while (startingNumber <= endOfRange) {
  isPrime = true;
  if (startingNumber > 1) {
    for (let iteration = 2; iteration < startingNumber; iteration++) {
      if (startingNumber % iteration === 0) {
        isPrime = false;
      }
    }
  } else {
    isPrime = false;
  }

  if (isPrime) {
    if (changingNum % startingNumber === 0) {
      console.log(startingNumber);
      changingNum = changingNum / startingNumber;
      startingNumber = 1;
      if (changingNum < 2) {
        break;
      }
    }

  }
  startingNumber++;
}

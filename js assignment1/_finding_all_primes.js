

// Do not rename startOfRange or endOfRange, use them as input for your program.
// While testing we will change their values.

const startOfRange = 0;
const endOfRange = 100;
// Print all prime numbers between startOfRange and endOfRange(both inclusive).
// For example, if startOfRange = 5 and endOfRange = 13, then the output should be
// 5
// 7
// 11
// 13
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let startingNumber = startOfRange;
let isPrime = true;
while (startingNumber <= endOfRange) {
  isPrime = true;
  if (startingNumber > 1) {
    for (let iteration = 2; iteration < startingNumber; iteration++){
      if (startingNumber % iteration === 0) {
        isPrime = false;
      }
    }
  } else {
    isPrime = false;
  }
  if (isPrime) {
    console.log(startingNumber);
  }
  startingNumber++;
}

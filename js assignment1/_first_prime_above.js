

// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 98;

// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// Example: If a = 13, then the output should be 17

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = a + 1;
let isPrime = true;
while (true) {
  isPrime = true;
  if (number > 1) {
    for (let iteration = 2; iteration < number; iteration++) {
      if (number % iteration === 0) {
        isPrime = false;
      }
    }
  } else {
    isPrime = false;
  }
  if (isPrime) {
    console.log(number);
    break;
  }
  number = number + 1;
}

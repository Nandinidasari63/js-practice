// Do not rename a, use them as input for your program.
// While testing we will change its values.

const a = 121;

// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let reverseOfNum = 0;
let remainingNumber = a;

while (remainingNumber != 0) {
  const lastDigitOfNum = remainingNumber % 10;
  reverseOfNum = reverseOfNum * 10 + lastDigitOfNum;
  remainingNumber = (remainingNumber - (remainingNumber % 10)) / 10;
}

let result = (a === reverseOfNum) ? true : false;
console.log(result);

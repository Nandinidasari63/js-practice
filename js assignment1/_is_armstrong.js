
// Do not rename a use it as input for your program.
// While testing we will change its values.

const a = 1634;

// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let sum = 0;
let remainingNumber1 = a;
let remainingNumber2 = a;
let numberOfDigits = 0

while (remainingNumber1 != 0) {
  const lastDigit = remainingNumber1 % 10;
  remainingNumber1 = (remainingNumber1 - (remainingNumber1 % 10)) / 10;
  numberOfDigits++;
}
while (remainingNumber2 != 0) {
  const lastDigit = remainingNumber2 % 10;
  remainingNumber2 = (remainingNumber2 - (remainingNumber2 % 10)) / 10;
  sum = sum + lastDigit ** numberOfDigits;
}

const result = (a === sum) ? true : false;
console.log(result);

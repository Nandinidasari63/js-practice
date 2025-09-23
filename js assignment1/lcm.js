// Do not rename a or b, use them as input for your program.
// While testing we will change their values.
// a and b will be always 0 or greater.
const a = 20;
const b = 15;

// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let lcm = 1;
let big;
if (b >= a) {
  big = b;
} else {
  big = a;
}
if (a === 0 || b === 0) {
  lcm = 0;
} else {
  while (big <= a * b) {
    if (((big % a) === 0) && ((big % b) === 0)) {
      lcm = big;
      break;
    }
    big++;
  }
}
console.log(lcm);

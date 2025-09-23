// Do not rename n, use it as input for your program.
// While testing we will change their values.
// N will be always 1 or greater.
const n = 4;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let firstTerm = 0;
let secondTerm = 1;
let count = 2;
let nthFibanocciTerm;
if(n === 1) {
  nthFibanocciTerm = 0;
} else if(n === 2) {
  nthFibanocciTerm = 1;
} else {
  let thirdTerm;
  while (n > count) {
    thirdTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = thirdTerm;
    count++;
  }
  nthFibanocciTerm = thirdTerm;
}
console.log(nthFibanocciTerm);

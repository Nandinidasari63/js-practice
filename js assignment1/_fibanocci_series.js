
// Do not rename n, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.

const n = 7;

// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let firstTerm = 0;
let secondTerm = 1;
if (n === 1) {
  console.log(firstTerm);
} else if (n === 2) {
  console.log(firstTerm);
  console.log(secondTerm)
} else {
  console.log(firstTerm);
  console.log(secondTerm)
    
  for (let iteration = 3; iteration <= n; iteration++) {
    let thirdTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = thirdTerm;
    console.log(thirdTerm);
  }
}

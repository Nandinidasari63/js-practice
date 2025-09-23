// Do not rename p, t or r, use them as input for your program.
// While testing we will change their values.

const p = 1200;
const t = 2;
const r = 6;

// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let newPrice = p;
let compoundInterst = 0;
for (let year = 1; year <= t; year++) {
  let annualInterst = (newPrice * r) / 100;
  newPrice = newPrice + annualInterst;
  compoundInterst = compoundInterst + annualInterst;
}
console.log(compoundInterst);

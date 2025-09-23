// Do not rename a or b, use them as input for your program.
// While testing we will change their values.

const a = 0;
const b = 3;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const big = (a > b) ? a : b;
let hcf;
for (let iteration = 0; iteration <= big; iteration++) {
  if (a % iteration === 0 && b % iteration === 0) {
    hcf = iteration;
  }
}
console.log(hcf);

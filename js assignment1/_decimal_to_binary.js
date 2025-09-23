
// Do not rename a, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.

const a = 5;

// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = a;
if(number === 0){
  console.log(0);
}
while(number !== 0){
  const binaryValue = number % 2;
  number = (number - (number % 2)) / 2; 
  console.log(binaryValue);
}

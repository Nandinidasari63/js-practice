/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function fizzBuzz(number) {
  const isDivisibleByThree = (moduloDivision(number, 3) === 0);
  const isDivisibleByFive = (moduloDivision(number, 5) === 0);
  const isDivisibleByBoth = isDivisibleByFive && isDivisibleByThree;

  if (isDivisibleByBoth) {
    return "fizzbuzz";
  }
  else if (isDivisibleByThree) {
    return "fizz";
  }
  else if (isDivisibleByFive) {
    return "buzz";
  }
  else {
    return number + '';
  }
}

function moduloDivision(dividend, divisior) {
  return dividend % divisior;
}

function message(number, exceptedOutput) {
  const actualOutput = fizzBuzz(number);
  const isExceptedOtput = (actualOutput === exceptedOutput);
  const emoji = isExceptedOtput ? "✅" : "❌";
  const expect = "your excepted value is ";
  const actualGot = "but it actually was";
  console.log(emoji, expect, exceptedOutput, actualGot, actualOutput);
}

function testFunction() {
  message(6, 'fizz');
  message(5, 'buzz');
  message(15, 'fizzbuzz');
  message(7, '7');
  message(-6, 'fizz');
  message('-15', 'fizzbuzz');
}

testFunction();

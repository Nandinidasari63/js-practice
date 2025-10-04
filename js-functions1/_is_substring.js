/*
  Implement the below function that tells if a string is substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubstring(string, subString) {
  const stringLen = string.length;
  const subStringlen = subString.length;
  let isItSubstring = false;
  let index = subStringlen > 0 ? 0 : -1;

  for (let indexOfString = 0; indexOfString < stringLen; indexOfString++) {
    if (subString[0] === string[indexOfString]) {
      let x = indexOfString;
      index = 0;
      while (string[x] === subString[index] && x < stringLen && index < subStringlen) {
        index++;
        x++;
      }
      if (index === (subStringlen)) {
        isItSubstring = true;
      }
    }
  }
  return isItSubstring;
}

function message(string, subString, exceptedOutput) {
  const actualOutput = isSubstring(string, subString);
  const isExceptedOtput = (actualOutput === exceptedOutput);
  const emoji = isExceptedOtput ? "✅" : "❌";
  const expect = "your excepted value is";
  const actualGot = "but it actually was";
  console.log(emoji, expect, exceptedOutput, actualGot, actualOutput);
}

function testFunction() {
  message('hello world', 'worl', true);
  message('repeating iiiiiiii', 'iii', true);
  message('fizz', 'zz', true);
  message('not found', 'for', false);
  message('super', 'u', true);
  message('nandu', '', false);
  message('nandu-dasari', '-da', true);
  message('hello world', 'hello ', true);
  message('aba','aa',false);
}

testFunction();

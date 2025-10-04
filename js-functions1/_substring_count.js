/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function occurrences(string, subString) {
  const stringLen = string.length;
  let count = 0;
  let index = 0;
  const subStringlen = subString.length;
  let x = subStringlen > 0 ? 0 : -1;
  while (index < stringLen && subStringlen > 0) {
    let trackForSubstrInd = index;
    while (string[trackForSubstrInd] === subString[x] && x < subStringlen) {
      x++;
      trackForSubstrInd++;
    }
    if (x === (subStringlen)) {
      count++;
    }
    index = index + 1;
    x = 0;
  }
  return count;
}

function message(string, subString, exceptedOutput) {
  const actualOutput = occurrences(string, subString);
  const isExceptedOtput = (actualOutput === exceptedOutput);
  const emoji = isExceptedOtput ? "✅" : "❌";
  const expect = "your excepted value is";
  const actualGot = "but it actually was";
  console.log(emoji, expect, exceptedOutput, actualGot, actualOutput);
}

function testFunction() {
  message('hello world', 'l', 3);
  message('hello world', 'll', 1);
  message('hello world', 'world', 1);
  message('hello world', 'zebra', 0);
  message('nandini', 'ini', 1);
  message('nandu', '', 0);
}

testFunction();

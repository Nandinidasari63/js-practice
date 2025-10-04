/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function endsWith(string, substring) {
  const subStringlen = substring.length;
  const stringlen = string.length;
  let lastIndex = stringlen - subStringlen;
  let i = subStringlen === 0 ? 1 : 0;
  let endWith = false;
  while ((string[lastIndex] === substring[i]) && (lastIndex < stringlen) && (i < subStringlen)) {
    lastIndex++;
    i++;
  }
  if (i === subStringlen) {
    endWith = true;
  }
  return endWith;
}

function message(string, subString, exceptedOutput) {
  const actualOutput = endsWith(string, subString);
  const isExceptedOtput = (actualOutput === exceptedOutput);
  const emoji = isExceptedOtput ? "✅" : "❌";
  const expect = "your excepted value is ";
  const actualGot = "but it actually was";
  console.log(emoji, expect, exceptedOutput, actualGot, actualOutput);
}

function testFunction() {
  message('hello world', 'ld', true);
  message('hello world', 'wor', false);
  message('hello world', 'hello', false);
  message('nandini', 'ini', true);
  message('nandini', 'nan', false);
  message('nandini', '', false);
  message('nandini', 'for', false);
}

testFunction();

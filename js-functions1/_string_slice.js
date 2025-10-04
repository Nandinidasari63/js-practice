/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function slice(text, start, end) {
  let index = start < 0 ? 0 : start;
  let sliceText = '';
  if (start < 0 && end < 0) {
    return sliceText;
  }
  while (index <= end && index < text.length) {
    sliceText = sliceText + text[index];
    index++;
  }
  return sliceText;
}

function message(text, start, end, exceptedOutput) {
  const actualOutput = slice(text, start, end);
  const isExceptedOtput = (actualOutput === exceptedOutput);
  const emoji = isExceptedOtput ? "✅" : "❌";
  const expect = "your excepted value is";
  const actualGot = "but it actually was";
  console.log(emoji, expect, exceptedOutput, actualGot, actualOutput);
}

function testFunction() {
  message('hello world', 0, 4, 'hello');
  message('negative start', -1, 8, 'negative ');
  message('', 0, 10, '');
  message('nandini', -20, -1, '');
  message('nandini', -3, 6, 'nandini');
  message('nandini', 4, 6, 'ini');
}

testFunction();

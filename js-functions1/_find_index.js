
/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function findIndex(text, target) {
  let found = 0;
  let currentIndex;
  let indexOfChar = -1;
  for (currentIndex = 0; currentIndex < text.length; currentIndex++) {
    if ((text[currentIndex] === target) && !found) {
      found = 1;
      indexOfChar = currentIndex;
    }
  }
  return indexOfChar;
}

function message(string, characterToFind, exceptedOutput) {
  const indexOfChar = findIndex(string, characterToFind);
  const isExceptedOtput = (indexOfChar === exceptedOutput);
  const emoji = isExceptedOtput ? "✅" : "❌";
  const expect = "your excepted value is";
  const actualGot = "but it actually was";
  console.log(emoji, expect, exceptedOutput, actualGot, indexOfChar);
}

function testFunction() {
  message('hello world', 'o', 4);
  message('repeating iiiiiii', 'i', 6);
  message('not found', 'z', -1);
  message("Nandini", 'N', 0);
  message('Nandini', 'n', 2);
}

testFunction();

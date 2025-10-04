/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function replace(text, match, replacement) {
  const textLen = text.length;
  let replacedText = '';
  for (let index = 0; index < textLen; index++) {
    if (match !== text[index]) {
      replacedText = replacedText + text[index];
    } else {
      replacedText = replacedText + replacement;
    }
  }
  return replacedText;
}

function message(text, match, replacement, exceptedOutput) {
  const actualOutput = replace(text, match, replacement);
  const isExceptedOtput = (actualOutput === exceptedOutput);
  const emoji = isExceptedOtput ? "✅" : "❌";
  const expect = "your excepted value is";
  const actualGot = "but it actually was";
  console.log(emoji, expect, exceptedOutput, actualGot, actualOutput);
}

function testFunction() {
  message('hello world', 'l', 'n', 'henno wornd');
  message('no spaces in here', ' ', '_', 'no_spaces_in_here');
  message('', 'd', 'e', '');
  message('nandu', 'z', 'x', 'nandu');
  message('nandini', 'n', 'c', 'cacdici');
  message('jayanth', 'j', 'o', 'oayanth');
  message('chiranjevi', 'j', 'a', 'chiranaevi');
}

testFunction();

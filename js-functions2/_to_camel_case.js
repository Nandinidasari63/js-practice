/*
  Implement the below function to convert a string from snake_case
  format into camelCase format.

  Example:
  toCamelCase("hello_wORLd_pro1gram")
    -> "helloWorldPro1gram"
*/

function toCamelCase(sentence) {
  const sentencelen = sentence.length;
  let text = '';
  let index = 0;
  let isUnder = true;
  let start;
  while (index < sentencelen && isUnder) {
    if (sentence[index] !== '_') {
      isUnder = false;
      start = index;
      break;
    }
    index++;
  }
  index = start;
  while (index < sentencelen) {
    let nextChar = sentence[index + 1];
    if (sentence[index] === '_') {
      if (nextChar !== '_' && nextChar !== undefined) {
        text = text + toCaptial(nextChar);
        index++;
      }
    } else {
      text = text + toSmall(sentence[index]);
    }
    index = index + 1;
  }
  return text;
}

function checkCamelCase(sentence, expectedOutput) {
  const actualOutput = toCamelCase(sentence);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(sentence, actualOutput, expectedOutput, isOutput);
}

function showTestResult(string, actualOutput, expectedOutput, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  const expect = "your excepted value is ";
  const actualGot = "but it actually was";
  const inputs = '[' + string + ']';
  let message = inputs + ' ' + emoji + ' ' + expect + '  ';
  message += '[' + expectedOutput + ']' + ' ';
  message += actualGot + '[' + actualOutput + ']';
  console.log(message + '\n');
}
function toCaptial(char) {
  const smallstring = "abcdefghijklmnopqrstuvwxyz";
  const capString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const len = 26;
  for (let index = 0; index < len; index++) {
    if (char === smallstring[index]) {
      return capString[index];
    }
  }
  return char;
}

function toSmall(char) {
  const smallstring = "abcdefghijklmnopqrstuvwxyz";
  const capString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const len = 26;
  for (let index = 0; index < len; index++) {
    if (char === capString[index]) {
      return smallstring[index];
    }
  }
  return char;
}

function testAll() {
  checkCamelCase("hello_wORLd_pro1gram", "helloWorldPro1gram");
  checkCamelCase("hello_nanDINI_ins", 'helloNandiniIns');
  checkCamelCase("__hello_wORLd_pro1gram", "helloWorldPro1gram");
  checkCamelCase("hello_wORLd___pro1gram!", "helloWorldPro1gram!");
  checkCamelCase("_hello", "hello");
  checkCamelCase("hel_lo_Z", "helLoZ");
  checkCamelCase("", "");
  checkCamelCase("  _", "  ");
  checkCamelCase("h_t", "hT");
  checkCamelCase("h_t  tomato", "hT  tomato");
  checkCamelCase("Apple_apple", "appleApple");
}
testAll();

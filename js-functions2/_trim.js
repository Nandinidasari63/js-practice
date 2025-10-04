/*
  Implement the below function to trim(remove all leading and trailing 
  whitespaces) from the given sentence.
  A whitespace is SPACE(" "), NEW LINE("\n"), TAB("\t")
  Examples:
  reverseString("   hello world\n") returns "hello world" 5 11
*/

function trim(sentence) {
  const sentencelen = sentence.length;
  let isLetterFound = false;
  let firstIndex;
  let lastIndex;
  for (let index = 0; index < sentencelen; index++) {
    let char = sentence[index];
    if ((char === '\n' || char === '\t' || char === ' ') && !isLetterFound) {
      continue;
    } else {
      isLetterFound = true;
      firstIndex = index;
      break;
    }
  }

  isLetterFound = false;

  for (let index = sentencelen - 1; index > 0; index--) {
    let char = sentence[index];
    if ((char === '\n' || char === '\t' || char === ' ') && !isLetterFound) {
      continue;
    } else {
      isLetterFound = true;
      lastIndex = index;
      break;
    }
  }
  return stringToDisplay(sentence, firstIndex, lastIndex);
}

function stringToDisplay(sentence, firstIndex, lastIndex) {
  let text = '';
  for (let index = firstIndex; index <= lastIndex; index++) {
    text = text + sentence[index];
  }
  console.log(text);
  return text;
}

function checkTrimString(sentence, expectedOutput) {
  const actualOutput = trim(sentence);
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

function testAll() {
  checkTrimString(" hello world\n", 'hello world');
  checkTrimString(" hello world ", 'hello world');
  checkTrimString("   hello world\t", 'hello world');
  checkTrimString('i am nandini', 'i am nandini');
  checkTrimString(' i am nandini', 'i am nandini');
  checkTrimString("apple", "apple");
  checkTrimString("   apple   ", "apple");
  checkTrimString("\napple", "apple");
  checkTrimString("apple\t apple", "apple\t apple");
  checkTrimString("apple\n\n\n", "apple");
  checkTrimString("apple\\n", "apple\\n");
  checkTrimString("\n", "");
  checkTrimString("\t", "");
  checkTrimString("   ", "");
  checkTrimString("", "");
}

testAll();

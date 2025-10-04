/*
  Implement the below function to count number of vowels present in the
  give sentence.
  Examples:
  countVowels("hello world") returns 3
  countVowels("hEllo wOrld") returns 3
*/
function countVowels(sentence) {
  const sentencelen = sentence.length;
  let count = 0;
  for (let index = 0; index < sentencelen; index++) {
    if (isVowel(sentence[index])) {
      count += 1;
    }
  }
  return count;
}

function isVowel(char) {
  switch (char) {
    case 'a':
      return true;
    case 'A':
      return true;
    case 'I':
      return true;
    case 'e':
      return true;
    case 'E':
      return true;
    case 'i':
      return true;
    case 'o':
      return true;
    case 'O':
      return true;
    case 'u':
      return true;
    case 'U':
      return true;
    default:
      return false;
  }
}

function checkOfCount(sentence, expectedOutput) {
  const actualOutput = countVowels(sentence);
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
  checkOfCount("hello world", 3);
  checkOfCount('hEllo wOrld', 3);
  checkOfCount('Nandu', 2);
  checkOfCount('Nandi', 2);
  checkOfCount('Nini', 2);
  checkOfCount('Nni', 1);
   checkOfCount("apple", 2);
  checkOfCount("hello", 2);
  checkOfCount("strength", 1);
  checkOfCount("beautiful", 5);
  checkOfCount("abyss", 1);
  checkOfCount("this", 1);
  checkOfCount("aaabbb", 3);
  checkOfCount("dry", 0);
  checkOfCount("hEllo wOrld", 3);
  checkOfCount("JAyanth", 2);
  checkOfCount("asofnnerv asogj evna psd aerm ap p  opo i   ", 13);
  checkOfCount("", 0);
}

testAll();

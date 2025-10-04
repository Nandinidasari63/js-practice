/*
  Implement the below function to replace every run of adjacent SPACE(" ")
  characters with a single SPACE in the given sentence.

  Rules:
  - Consider only the plain SPACE character (" "). Any contiguous sequence
    of one or more SPACE characters should become a single SPACE.
  - Leading and trailing runs of spaces are also collapsed to a single space.
  - Do NOT modify other whitespace characters: TAB("\t") and NEW LINE("\n")
    must remain exactly as they are.
  - Runs of spaces that are separated by other characters (including \t or \n)
    are treated separately and each such run is collapsed independently.

  Examples:
  removeAdjacentDuplicateSpaces("statement      with    two spaces")
    -> "statement with two spaces"
    (multiple spaces between words collapsed to single spaces)

  removeAdjacentDuplicateSpaces("   hello   world   ")
    -> " hello world "
    (leading/trailing runs collapsed to single leading/trailing space)
*/

function removeAdjacentDuplicateSpaces(sentence) {
  const sentencelen = sentence.length;
  let text = '';
  let found;
  let isSpace = false;
  for (let index = 0; index < sentencelen; index++) {
    let char = sentence[index];
    if (char === ' ') {
      isSpace = true;
      found = sentence[index + 1] !== ' ' ? 1 : 0
    }
    if (isSpace === false || found == 1) {
      text = text + char;
    }

  }
  return text;

}
function checkSpaces(sentence, expectedOutput) {
  const actualOutput = removeAdjacentDuplicateSpaces(sentence);
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
  checkSpaces("statement      with    two spaces", "statement with two spaces");
  checkSpaces("   hello   world   ", " hello world ");
  checkSpaces("  apple  ", " apple ");
  checkSpaces("  apple  word  ", " apple word ");
  checkSpaces("  apple       is good", " apple is good");
  checkSpaces("  apple       is good", " apple is good");
  checkSpaces("  apple is good", " apple is good");
  checkSpaces("  apple\t\t\t is good", " apple\t\t\t is good");
  checkSpaces("  apple\t\t \t is good", " apple\t\t \t is good");
  checkSpaces("  apple\n is good", " apple\n is good");
  checkSpaces("  apple\n is good\n", " apple\n is good\n");
  checkSpaces("     ", " ");
  checkSpaces("  \t\t\t   ", " \t\t\t ");
  checkSpaces("  \t   ", " \t ");
  checkSpaces("   hello   world   ", " hello world ");
  checkSpaces("hello  \n  test  bar ", "hello \n test bar ");
  checkSpaces("hello    t ", "hello t ");
  checkSpaces("                       ", " ");
  checkSpaces("", "");
}
testAll();

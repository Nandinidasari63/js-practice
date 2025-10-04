/*
  Implement the below function to count the number of words
  in the given sentence.

  Rules:
  - A word is defined as a sequence of non-whitespace characters.
  - Whitespace includes SPACE(" "), TAB("\t"), and NEW LINE("\n").
  - Multiple consecutive whitespace characters should be treated
    as a single separator.
  - Leading and trailing whitespace should not affect the word count.

  Example:
  countWords("hello   \t   world \n test")
    -> 3
*/

function countWords(sentence) {
  const sentencelen = sentence.length;
  let count = 0;

  for (let index = 0; index < sentencelen; index++) {
    let char = sentence[index];
    let nextChar = sentence[index + 1];

    if ((char !== ' ' && char !== '\n' && char !== '\t')) {
      if ((nextChar === ' ' || nextChar === '\n' || nextChar === '\t') || (index + 1 === sentencelen)) {
        count = count + 1;
      }
    }
  }
  return count;
}

function checkCountWords(sentence, expectedOutput) {
  const actualOutput = countWords(sentence);
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
  checkCountWords("a b", 2);
  checkCountWords('a       b', 2);
  checkCountWords('\nhello nandu\thi', 3);
  checkCountWords("hello   \t   world \n test", 3);
  checkCountWords("apple", 1);
  checkCountWords("apple is bad for health", 5);
  checkCountWords("hello   \t   world \n test", 3);
  checkCountWords("apple", 1);
  checkCountWords("\n\n", 0);
  checkCountWords("\n\nt", 1);
  checkCountWords("t\n\nt", 2);
  checkCountWords("t\n\n", 1);


}
testAll();

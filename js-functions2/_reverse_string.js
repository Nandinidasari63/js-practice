/*
  Implement the below function to reverse the given sentence.
  Examples:
  reverseString("hello") returns "hello"
*/
function reverseString(sentence) {
  const sentencelen = sentence.length;
  let text = '';
  for (let index = sentencelen - 1; index >= 0; index--) {
    text = text + sentence[index];
  }
  return text;
}

function checkReverse(sentence, expectedOutput) {
  const actualOutput = reverseString(sentence);
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
  checkReverse("hello world", "dlrow olleh");
  checkReverse('hEllo wOrld', 'dlrOw ollEh');
  checkReverse('Nandu', 'udnaN');
  checkReverse('Nandi', 'idnaN');
  checkReverse('Nini', 'iniN');
  checkReverse('Nni', 'inN');
  checkReverse('a', 'a');
  checkReverse('', '');
  checkReverse('  ', '  ');
  checkReverse("apple", "elppa");
  checkReverse("madam", "madam");
  checkReverse("key", "yek");
  checkReverse("APPle", "elPPA");
  checkReverse("hello world!", "!dlrow olleh");
  checkReverse("", "");
  checkReverse("   ", "   ");
  checkReverse("lorem lypsum", "muspyl merol");
  checkReverse("9009", "9009");
  checkReverse(9009, "");
  checkReverse(Infinity, "");
}

testAll();

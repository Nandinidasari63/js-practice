function restOfString(string) {
  let text = '';
  for (let index = 1; index < string.length; index++) {
    text = text + string[index];
  }
  return text;
}

function firstChar(string) {
  return string[0];
}

function reverse(string) {
  if (string === '') {
    return '';
  }
  return reverse(restOfString(string)) + firstChar(string);
}

function testReverse(palindromeCandidate, expectedOutput) {
  const actualOutput = reverse(palindromeCandidate);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(palindromeCandidate, actualOutput, expectedOutput, isOutput);
}

function showTestResult(palindromeCandidate, actualOutput, expectedOutput, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + palindromeCandidate + ']' + ' ';
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOutput} \n`;
    extra += `expectedOutput  ${expectedOutput}`;
    console.log(extra)
  } else {
    const expect = "your excepted value is ";
    const actualGot = "but it actually was";

    let message = emoji + ' ' + expect + '  ';
    message += '[' + expectedOutput + ']' + ' ';
    message += actualGot + '[' + actualOutput + ']';
    console.log(message + '\n');

  }
}

function testAll() {
  testReverse('NAN', 'NAN');
  testReverse('madam', 'madam');
  testReverse('anc', 'cna');
  testReverse('naan', 'naan');
}
testAll();

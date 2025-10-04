
function reverseString(string) {
  if (string === '') {
    return '';
  }
  return reverseString(restOfString(string)) + firstChar(string);
}

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

function isPalindrome(palindromeCandidate) {
  if (palindromeCandidate === reverseString(palindromeCandidate)) {
    return true;
  }
  return false;
}

function testReverse(palindromeCandidate, expectedOutput) {
  const actualOutput = isPalindrome(palindromeCandidate);
  const isOutput = actualOutput === expectedOutput;

  showTestResult(palindromeCandidate, actualOutput, expectedOutput, isOutput);
}

function showTestResult(palindromeCandidate, actualOutput, expecte, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + palindromeCandidate + ']' + ' ';
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOutput} \n`;
    extra += `expectedOutput  ${expecte}`;

    console.log(extra);
  } else {
    const expect = "your excepted value is ";
    const actualGot = "but it actually was";
    let message = emoji + ' ' + expect + '  ';
    message += '[' + expecte + ']' + ' ';
    message += actualGot + '[' + actualOutput + ']';
    console.log(message + '\n');
  }
}

function testAll() {
  testReverse('NAN', true);
  testReverse('madam', true);
  testReverse('anc', false);
  testReverse('naan', true);
}

testAll();

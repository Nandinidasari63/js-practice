function stringToNumber(string) {
  const index = 0;
  return convertingFunction(string, index);
}

function convertingFunction(string, index) {
  let found = 0
  if (string[index] === '-') {
    found = 1;
    index = index + 1;
  }
  const digit = string[index] * 1;
  const exponent = string.length - index - 1;
  const placeValue = Math.pow(10, exponent);
  if (index < string.length - 1 && !found) {
    return digit * placeValue + convertingFunction(string, index + 1);
  }
  if (index < string.length - 1 && found) {
    return -(digit * placeValue + convertingFunction(string, index + 1));
  }
  if (string.length === 2 && found) {
    return -digit;
  }
  return digit;
}

function testNumber(string, expectedOutput) {
  const actualOutput = stringToNumber(string);
  const isOutput = actualOutput === expectedOutput;

  showTestResult(string, actualOutput, expectedOutput, isOutput);
}

function showTestResult(string, actualOutput, expectedOutput, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + string + ']' + ' ';
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOutput} \n`;
    extra += `expectedOutput  ${expectedOutput}`;
    console.log(extra);
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
  testNumber('-1', -1);
  testNumber('34', 34);
  testNumber('0', 0);
  testNumber('abc', NaN);
  testNumber('-2', -2);
  testNumber('0', 0);
  testNumber('-123', -123);
  testNumber('123', 123);
  testNumber('-89', -89);
  testNumber('-0', 0);
}

testAll();

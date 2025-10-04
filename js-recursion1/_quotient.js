function quotient(dividend, divisor) {
  let positiveDivisior = divisor < 0 ? -divisor : divisor;
  let positiveDividend = dividend < 0 ? -dividend : dividend;
  if ((positiveDivisior === 0) || (positiveDividend === 0)) {
    return 0;
  }
  let newDividend = positiveDividend - positiveDivisior;
  if (dividend < divisor) {
    return 0;
  }
  if (newDividend < positiveDivisior) {
    return 1;
  }
  if ((dividend - divisor !== 0) || ((divisor < 0) && (dividend < 0))) {
    return 1 + quotient(newDividend, positiveDivisior);
  }
}

function testDivision(dividend, divisor, expectedOutput) {
  const actualOutput = quotient(dividend, divisor);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(dividend, divisor, actualOutput, expectedOutput, isOutput);
}

function showTestResult(dividend, divisor, actualOutput, expectedOutput, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + dividend + ' , ' + divisor + ']' + ' ';
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
  testDivision(8, 4, 2);
  testDivision(0, 0, 0);
  testDivision(7, 7, 1);
  testDivision(5, 0, 0);
  testDivision(0, 5, 0);
  testDivision(1024, 2, 512);
  testDivision(2, 200000, 0);
}
testAll();

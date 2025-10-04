function remainder(dividend, divisor) {
  let positiveDivisior = divisor < 0 ? -divisor : divisor;
  let positiveDividend = dividend < 0 ? -dividend : dividend;
  let newDividend = positiveDividend - positiveDivisior;

  if (positiveDividend === 0) {
    return 0;
  }

  if (divisor === 0) {
    return dividend;
  }

  if (newDividend < positiveDivisior) {
    return newDividend;
  }

  return remainder(newDividend, positiveDivisior);
}

function testDivision(positiveDividend, positiveDivisior, expectedOutput) {
  const actualOutput = remainder(positiveDividend, positiveDivisior);
  const isOutput = actualOutput === expectedOutput;

  showTestResult(positiveDividend, positiveDivisior, actualOutput, expectedOutput, isOutput);
}

function showTestResult(dividend, divisor, actualOutput, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";

  if (emoji === '❌') {
    const inputs = ' ' + '[' + dividend + ' , ' + divisor + ']' + ' ';
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOutput} \n`;
    extra += `expectedOutput  ${expected}`;

    console.log(extra);
  } else {
    const expect = "your excepted value is ";
    const actualGot = "but it actually was";
    let message = emoji + ' ' + expect + '  ';
    message += '[' + expected + ']' + ' ';
    message += actualGot + '[' + actualOutput + ']';
    
    console.log(message + '\n');
  }
}

function testAll() {
  testDivision(8, 4, 0);
  testDivision(12, 4, 0);
  testDivision(0, 0, 0);
  testDivision(7, 7, 0);
  testDivision(0, 5, 0);
  testDivision(5, 0, 5);
  testDivision(1024, 2, 0);
}
testAll();

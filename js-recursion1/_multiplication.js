function multiply(multiplier, multiplicand) {
  let positiveMultipier = multiplier < 0 ? -multiplier : multiplier;
  if (positiveMultipier === 0) {
    return 0;
  }
  if (multiplier < 0) {
    return -(multiplicand + multiply(positiveMultipier - 1, multiplicand));
  }
  return multiplicand + multiply(positiveMultipier - 1, multiplicand);
}

function testMultiply(multiplier, multiplicand, expectedOutput) {
  const actualOutput = multiply(multiplier, multiplicand);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(multiplier, multiplicand, actualOutput, expectedOutput, isOutput);
}

function showTestResult(multiplier, multiplicand, actulGot, expect, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + multiplier + '  ' + multiplicand + ']' + ' ';
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actulGot} \n`;
    extra += `expectedOutput  ${expect}`;
    console.log(extra);
  } else {
    const expected = "your excepted value is ";
    const actual = "but it actually was";
    let message = emoji + ' ' + expected + '  ';
    message += '[' + expect + ']' + ' ';
    message += actual + '[' + actulGot + ']';
    console.log(message + '\n');
  }
}

function testAll() {
  testMultiply(3, 5, 0);
  testMultiply(-4, -5, 20);
  testMultiply(4, -5, -20);
  testMultiply(-4, 5, -20);
  testMultiply(0, 0, 0);
}

testAll();

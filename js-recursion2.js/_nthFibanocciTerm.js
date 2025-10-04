function nthFibonacciTerm(num) {
  const number = 1;
  const firstTerm = 0;
  const secondTerm = 1;
  const thirdNumber = 1;
  return sequence(num, firstTerm, secondTerm, thirdNumber, number);
}
function sequence(nthTerm, firstTerm, secondTerm, thirdNumber, number) {
  if (number > nthTerm) {
    return thirdNumber;
  }
  
  if (number < nthTerm) {
    return sequence(nthTerm, secondTerm, thirdNumber, secondTerm + thirdNumber, number + 1);
  }
  return firstTerm;
}

function testFibanoc(number, expectedOutput) {
  const actualOutput = nthFibonacciTerm(number);
  const isOutput = actualOutput === expectedOutput;

  showTestResult(number, actualOutput, expectedOutput, isOutput);
}

function showTestResult(number, actualOutput, expectedOutput, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + number + ']' + ' ';
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
  testFibanoc(1, 0);
  testFibanoc(3, 1);
  testFibanoc(13, 144);
  testFibanoc(7, 8);
  testFibanoc(8, 13);
  testFibanoc(11, 55);
  testFibanoc(22, 10946);
  testFibanoc(1, 0);
  testFibanoc(2, 1);
  testFibanoc(4, 2);
  testFibanoc(5, 3);
}

testAll();

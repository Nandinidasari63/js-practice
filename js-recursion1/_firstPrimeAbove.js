function firstPrimeAbove(number) {
  const divisor = 2;
  if (factors(number + 1, divisor)) {
    return number + 1;
  }
  return firstPrimeAbove(number + 1);
}

function factors(primeCandidate, divisor) {
  const num = 2;
  if (divisor === primeCandidate) {
    return true;
  }

  if (primeCandidate % divisor === 0 || primeCandidate < num) {
    return false;
  }

  if (divisor < primeCandidate){
    return (factors(primeCandidate, divisor + 1));
 }
}

function testReverse(primeCandidate, expectedOutput) {
  const actualOutput = firstPrimeAbove(primeCandidate);
  const isOutput = actualOutput === expectedOutput;

  showTestResult(primeCandidate, actualOutput, expectedOutput, isOutput);
}

function showTestResult(primeCandidate, actualOutput, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + primeCandidate + ']' + ' ';
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
  testReverse(8, 11);
  testReverse(2, 3);
  testReverse(1, 2);
  testReverse(9, 11);
}

testAll();

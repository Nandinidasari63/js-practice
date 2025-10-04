function isPrime(primeCandidate) {
  const divisor = 2;

  return factors(primeCandidate, divisor);
}

function factors(primeCandidate, divisor) {
  const num = 2;
  if (divisor === primeCandidate) {
    return true;
  }

  if (primeCandidate % divisor === 0 || primeCandidate < num) {
    return false;
  }

  if (divisor < primeCandidate) {
    return (factors(primeCandidate, divisor + 1));
  }
}

function testIsPrime(primeCandidate, expectedOutput) {
  const actualOutput = isPrime(primeCandidate);
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
  testIsPrime(2, true);
  testIsPrime(4, false);
  testIsPrime(3, true);
  testIsPrime(9, false);
}

testAll();

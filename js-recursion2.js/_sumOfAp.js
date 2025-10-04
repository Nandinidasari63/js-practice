function sumOfAP(firstTerm, diff, nterms) {
  const currentNumber = 1;
  const sum = 0;
  return currentSum(diff, currentNumber, sum, nterms, firstTerm);
}

function currentSum(diff, currentNumber, sum, nterms, currSum) {
  if (nterms === 0) {
    return 0;
  }

  if (currentNumber <= nterms) {
    return currentSum(diff, currentNumber + 1, sum + currSum, nterms, currSum + diff);
  }
  return sum;
}

function testsumOfAP(firstTerm, diff, num, expectedOutput) {
  const actualOutput = sumOfAP(firstTerm, diff, num);
  const isOutput = actualOutput === expectedOutput;

  showTestResult(firstTerm, diff, num, actualOutput, expectedOutput, isOutput);
}

function showTestResult(firstTerm, dif, num, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + firstTerm + '  ' + dif + ' ' + num + ']' + ' ';
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOut} \n`;
    extra += `expectedOutput  ${expected}`;
    console.log(extra);
  } else {
    const expect = "your excepted value is ";
    const actualGot = "but it actually was";
    let message = emoji + ' ' + expect + '  ';
    message += '[' + expected + ']' + ' ';
    message += actualGot + '[' + actualOut + ']';
    console.log(message + '\n');
  }
}

function testAll() {
  testsumOfAP(1, 1, 0, 0);
  testsumOfAP(0, 1, 5, 10);
  testsumOfAP(0, 8, 2, 8);
  testsumOfAP(0, 8, 3, 24);
  testsumOfAP(3, 4, 5, 55);
  testsumOfAP(3, 3, 2, 9);
}

testAll();

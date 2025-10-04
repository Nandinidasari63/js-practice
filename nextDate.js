/**
 * Implement the `nextDate` function below. Given a date in the format dd-mm-yyyy, 
 * it should return the next date in the same format.
 * 
 * The input date will always follow the dd-mm-yyyy format. 
 * This means the first two characters will be digits for the day (e.g., 01, 23), 
 * followed by a hyphen (-), the next two characters will be digits for the month (e.g., 01, 12), 
 * followed by another hyphen, and the remaining four characters will be digits for the year 
 * (any year between 0000 and 9999).
 * 
 * In case of an invalid date (with correct format dd-mm-yyyy), for example, "32-02-2025", 
 * return "Invalid Date".
 */


function nextDate(date) {
  if (date.length === 10) {
    const dateSlice = date.slice(0, 2);
    const monthSlice = date.slice(3, 5);
    const yearSlice = date.slice(6, 10);
    const isValidYear = validYear(yearSlice, monthSlice, dateSlice);
    return printing(dateSlice, monthSlice, yearSlice, isValidYear);
  }
  return 'invalid date';

}

function printing(dateSlice, monthSlice, yearSlice, isValidYear) {
  const isValidDate = validDateAndMonth(dateSlice, monthSlice, yearSlice);
  let outputDate;
  let dateInString;
  const monthNum = parseInt(monthSlice)
  if (isValidDate && isValidYear) {
    const yearInNum = increasingYear(yearSlice, monthNum, dateSlice)
    monthSlice = increasingMonth(dateSlice, monthSlice, yearSlice);
    if (monthNum === monthSlice) {
      dateInString = parseInt(dateSlice) + 1;
    } else {
      dateInString = '01';
    }
    monthSlice = monthSlice + '';
    if (monthSlice.length !== 2) {
      monthSlice = 0 + monthSlice;
    }
    outputDate = dateInString + '-' + monthSlice + '-' + yearInNum;
    return outputDate;
  }
  return 'invalid date';
}

function validYear(yearSlice, monthSlice, dateSlice) {
  if (yearSlice.length === 4) {
    const yearInNum = parseInt(yearSlice);
    const dateInNum = parseInt(dateSlice);
    const monthNum = parseInt(monthSlice);
    if (yearInNum === 9999 && monthNum === 12 && dateInNum === 31) {
      return false;
    }
    return yearInNum > 0 && yearInNum < 10000;
  }
}

function increasingYear(yearSlice, monthNum, dateSlice) {
  const yearInNum = parseInt(yearSlice);
  const dateInNum = parseInt(dateSlice);
  if (monthNum === 12 && dateInNum === 31) {
    return yearInNum + 1;
  }
  return yearInNum;
}

function increasingMonth(dateSlice, monthSlice, yearSlice) {
  let monthNum = parseInt(monthSlice);
  const dateInNum = parseInt(dateSlice);
  const yearInNum = parseInt(yearSlice);
  if (monthNum === 1 || monthNum === 3 || monthNum === 8 || monthNum === 7 || monthNum === 10 || monthNum === 12 || monthNum === 5) {
    if (dateInNum === 31 && monthNum !== 12) {
      monthNum = monthNum + 1;
    }
    if (dateInNum === 31 && monthNum === 12) {
      monthNum = 1;
    }
  }

  if (monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) {
    if (dateInNum === 30) {
      monthNum = monthNum + 1;
    }
  }

  if (monthNum === 2) {
    if ((yearInNum % 400 === 0) || ((yearInNum % 4 === 0) && (yearInNum % 100 !== 0))) {
      if (dateInNum === 29) {
        monthNum = monthNum + 1;
      }
    } else {
      if (dateInNum === 28) {
        monthNum = monthNum + 1;
      }
    }
  }

  return monthNum;
}

function validDateAndMonth(dateSlice, monthSlice, yearSlice) {
  if (dateSlice.length === 2) {
    const dateInNum = parseInt(dateSlice);
    let monthNum = parseInt(monthSlice);
    const yearInNum = parseInt(yearSlice);
    if (monthNum === 1 || monthNum === 3 || monthNum === 8 || monthNum === 7 || monthNum === 10 || monthNum === 12 || monthNum === 5) {
      const ex = (dateInNum > 0) && (dateInNum <= 31);
      return ex;

    }

    if (monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11) {
      return dateInNum > 0 && dateInNum <= 30;
    }

    if (monthNum === 2) {
      if ((yearInNum % 400 === 0) || ((yearInNum % 4 === 0) && (yearInNum % 100 !== 0))) {
        return dateInNum > 0 && dateInNum <= 29
      }
      return dateInNum > 0 && dateInNum < 29
    }
  }
  
  return false;
}

function testDate(date, expectedOutput) {
  const actualOutput = nextDate(date);
  const isOutput = actualOutput === expectedOutput;

  showTestResult(date, actualOutput, expectedOutput, isOutput);
}

function showTestResult(date, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + date + ']' + ' ';
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
  testDate('15-03-2021', '16-03-2021');
  testDate('31-01-2025', '01-02-2025');
  testDate('30-01-2025', '31-01-2025');
  testDate('28-02-2020', '29-02-2020');
  testDate('28-02-2021', '01-03-2021');
  testDate('31-03-2025', '01-04-2025');
  testDate('30-04-2025', '01-05-2025');
  testDate('31-05-2025', '01-06-2025');
  testDate('30-06-2025', '01-07-2025');
  testDate('31-07-2025', '01-08-2025');
  testDate('31-08-2025', '01-09-2025');
  testDate('30-09-2025', '01-10-2025');
  testDate('31-10-2025', '01-11-2025');
  testDate('30-11-2025', '01-12-2025');
  testDate('28-02-2400', '29-02-2400');
  testDate('28-02-2300', '01-03-2300');
  testDate('28-02-1900', '01-03-1900');
  testDate('31-04-2025', 'invalid date');
  testDate('31-06-2025 ', 'invalid date');
  testDate('31-12-9999', 'invalid date');
  testDate('31-12-2029', '01-01-2030');
  testDate('32-08-2020', 'invalid date');
  testDate('08-19-2020', 'invalid date');
  testDate('32-13-2020', 'invalid date');
  testDate('30-09-0000', 'invalid date');
  testDate('30-00-0000', 'invalid date');
  testDate('00-00-0000', 'invalid date');

}
testAll();


/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function convert(from, to, value) {
  if (from === 'C') {
    return fromCelcius(to, value);
  }
  if (from === 'F') {
    return fromFahern(to, value);
  }
  if (from === 'K') {
    return fromKelvin(to, value);
  }
  return NaN;
}

function message(from, to, value, exceptedOutput) {
  const actualOutput = convert(from, to, value);
  const isExceptedOtput = (actualOutput - exceptedOutput);
  const emoji = isExceptedOtput <= 0.05 ? "✅" : "❌";
  const expect = "your excepted value is";
  const actualGot = "but it actually was";
  console.log(emoji, expect, exceptedOutput, actualGot, actualOutput);
}

function fromCelcius(to, value) {
  if (to == 'K') {
    return ((value * 1) + 273.15);
  }
  if (to == 'C') {
    return value;
  }
  if (to == 'F') {
    return (value * (9 / 5)) + 32;
  }
  return NaN;
}

function fromFahern(to, value) {
  if (to == 'K') {
    const Celsius = (value - 32) * (5 / 9);
    return fromCelcius("K", Celsius)
  }
  if (to == 'F') {
    return value;
  }
  if (to === 'C') {
    return (value - 32) * (5 / 9);
  }
  return NaN;
}

function fromKelvin(to, value) {
  if (to == 'C') {
    return value - 273.15;
  }
  if (to == 'K') {
    return value;
  }
  if (to == 'F') {
    const Celsius = fromKelvin('C', value);
    return fromCelcius("F", Celsius);
  }
  return NaN;
}

function testFunction() {
  message('C', 'K', '0', 273.15);
  message('C', 'F', 37, 98.6);
  message('F', 'K', 98.6, 310.15);
  message('F', 'C', -40, -40);
  message('K', 'C', 100, -173.15);
  message('K', 'F', 100, -279.67);
  message('K', 'F', 100, -279.67);
  message('C', 'C', 37, 37);
  message('K', 'K', 100, 100);
  message('F', 'F', 98.6, 98.6);
  message('H', 'K', 100, NaN);
  message('F', 'H', 100, NaN);
}

testFunction();

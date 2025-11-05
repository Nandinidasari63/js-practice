
function decode(decodedData) {
  const dataType = decodedData[0];
  switch (dataType) {
    case 'i':
      return encodeToNum(decodedData);
    case 'l':
      const output = [];
      return encodeToList(decodedData, output)
    default:
      return encodeToStr(decodedData);

  }
}

function encodeToNum(decodedData) {
  const endIndex = decodedData.indexOf('e');
  return [parseInt(decodedData.slice(1, endIndex)), endIndex + 1];
}

function encodeToStr(decodedData) {
  let startIndex = decodedData.indexOf(':');
  const lengthOfString = +decodedData.slice(0, startIndex);
  if (startIndex === -1 || Number.isNaN(lengthOfString)) {
    return true;
  }
  return [decodedData.slice(startIndex + 1, startIndex + 1 + lengthOfString), startIndex + 1 + lengthOfString];
}

function encodeToList(decodedData, output) {
  let start = 1;
  while (start < decodedData.length - 1) {
    let array = decode(decodedData.slice(start, decodedData.length));
    let element = array[0];
    if (array === true) {
      break;
    }
    output.push(element);
    start += array[1];
  }
  return [output, start + 1];
}

function decodeFull(data) {
  return decode(data)[0];
}

console.log(decodeFull("i123e"));
console.log(decodeFull('i-42e'));
console.log(decodeFull('i0e'));
console.log(decodeFull('5:hello'));
console.log(decodeFull("0:"));
console.log(decodeFull("11:hello world"));
console.log(decodeFull('26:abcdefghijklmnopqrstuvwxyz'));
console.log(decodeFull("16:special!@#$chars"));
console.log(decodeFull("l5:applei123e")[0]);
console.log(decodeFull("le"));
console.log(decodeFull("l5:apple3:nan4:abcd7:nandinie"));
console.log(decodeFull('li100ei200ei300ei400ee'));
console.log(decodeFull('li100e5:applei700e5:nandu'));
console.log(decodeFull("li0e0:l4:testee"));
console.log(decodeFull("l0:i0ele"));
console.log(decodeFull("l3:onel3:twol5:threeeee"));
console.log(decodeFull('l3:onel3:twoei67ee'));
console.log(decodeFull('l3:onel3:twoe5:threee'))

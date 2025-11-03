
function decode(decodedData) {
  const dataType = decodedData[0];
  switch (dataType) {
    case 'i':
      return encodeToNum(decodedData);
    case 'l':
      const output = [];
      //console.log('\n i came into list');
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
  if (startIndex === -1) {
    return true;
  }
  const lengthOfString = +decodedData.slice(0, startIndex);
  // console.log(startIndex,lengthOfString);
  return [decodedData.slice(startIndex + 1, startIndex + 1 + lengthOfString), startIndex + 1 + lengthOfString];
}

function encodeToList(decodedData, output) {
  let start = 1;
  //console.log(decodedData.length - 1, output, start)
  while (start < decodedData.length - 1) {
    // console.log('hii in loop');
    //console.log(decodedData.slice(start, decodedData.length));
    let array = decode(decodedData.slice(start, decodedData.length));
    let element = array[0];
    if (array === true) {
      break;
    }
    //console.log("element in array",element);

    output.push(element);
    //console.log('output in each iteration',output);
    start += array[1];
    //  console.log('starting', start);
  }
  //console.log(output)
  return [output, start + 1];
}

console.log(decode("i123e")[0]);
console.log(decode('i-42e')[0]);
console.log(decode('i0e')[0]);
console.log(decode('5:hello')[0]);
console.log(decode("0:")[0]);
console.log(decode("11:hello world")[0]);
console.log(decode('26:abcdefghijklmnopqrstuvwxyz')[0]);
console.log(decode("16:special!@#$chars")[0]);
console.log(decode("l5:applei123e")[0]);
console.log(decode("le")[0]);
console.log(decode('l5:apple3:nan4:abcd7:nandinie')[0]);
console.log(decode('li100ei200ei300ei400ee')[0]);
console.log(decode('li100e5:applei700e5:nandu')[0]);
console.log(decode("li0e0:l4:testee")[0]);
console.log(decode("l0:i0ele")[0]);
console.log(decode("l3:onel3:twol5:threeeee")[0]);


function decode(decodedData){
  const dataType = decodedData[0];
  switch(dataType){
    case 'i':
       return +decodedData.slice(1, decodedData.length-1);
    case 'l':
      return true;
    default :
    const startIndex = decodedData.indexOf(':');
      return decodedData.slice(startIndex + 1,decodedData.length);
  }
}

console.log(decode("i123e"));
console.log(decode('i-42e'));
console.log(decode('i0e'));
console.log(decode('5:hello'));
 console.log(decode("0:"));
 console.log(decode("11:hello world"));
 //console.log(decode("16:special!@#$chars"));
 //console.log(decode("l5:applei123el6:bananai-5eee"));
 //console.log(decode("le"));
console.log(decode("li0e0:l4:testee"));
// console.log(decode("l0:i0ele"));
// console.log(decode("l3:onel3:twol5:threeeee"));

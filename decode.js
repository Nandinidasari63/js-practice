
function decode(decodedData) {
    const output = [];
   return findDataTypes(decodedData,output,1)
  }

  function findDataTypes(decodedData,output,tracker){
    const dataType = decodedData[0];
    let endIndex = 0 ;
    let pointer = tracker;
    switch (dataType) {
      case 'i':
        endIndex = decodedData.indexOf('e');
        pointer = endIndex;
        console.log(pointer);
        return +decodedData.slice(1, endIndex);
      case 'l':
        output.push(findDataTypes(decodedData.slice(pointer, decodedData.length),output,pointer));
        console.log(output,pointer);
        if (pointer === decodedData.length) {
          console.log(output.length,output);
          return output;
        }
      default:
        const startIndex = decodedData.indexOf(':');
        const lengthOfString = +decodedData[startIndex - 1];
        pointer = startIndex + 1 + lengthOfString;
        return decodedData.slice(startIndex + 1, pointer);
    }
  }

// console.log(decode("i123e"));
// console.log(decode('i-42e'));
// console.log(decode('i0e'));
// console.log(decode('5:hello'));
//  console.log(decode("0:"));
//  console.log(decode("11:hello world"));
//console.log(decode("16:special!@#$chars"));
console.log(decode("l5:applei123el6:bananai-5eee"));
//console.log(decode("le"));
console.log(decode('li2e3:nane',1));
console.log(decode("li0e0:l4:testee"));
 console.log(decode("l0:i0ele"));
 console.log(decode("l3:onel3:twol5:threeeee"));

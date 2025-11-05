let numberOfTimes = 0;

function sortInDesOrder(data) {
  numberOfTimes = 0;
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      numberOfTimes++;
      if (sortedData[i] < sortedData[j]) {
        let temp = sortedData[j];
        sortedData[j] = sortedData[i];
        sortedData[i] = temp;
      }
    }
  }
  console.log("\n\n Number of times",numberOfTimes);
  return sortedData;
}


function sortInAscOrder(data) {
  numberOfTimes = 0;
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      numberOfTimes++;
      if (sortedData[i] > sortedData[j]) {
        let temp = sortedData[j];
        sortedData[j] = sortedData[i];
        sortedData[i] = temp;
      }
    }
  }
  console.log("\n\n Number of times",numberOfTimes);
  return sortedData;
}



function testForDesc() {
  console.log(sortInDesOrder([1, 2, 3, 4, 5]));
  console.log(sortInDesOrder([2, 2, 3, 4, 5, 6]));
  console.log(sortInDesOrder([10, 20, 30, -23, -34]));
}

function testForAsc(){
  console.log(sortInAscOrder([1, 2, 3, 4, 5]));
  console.log(sortInAscOrder([2, 2, 3, 4, 5, 6]));
  console.log(sortInAscOrder([10, 20, 30, -23, -34]));
}
function main() {
  testForDesc();
  testForAsc();

}

main();

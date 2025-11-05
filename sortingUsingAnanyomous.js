function sorting(data,order) {
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (order(sortedData[i],sortedData[j])) {
        let temp = sortedData[j];
        sortedData[j] = sortedData[i];
        sortedData[i] = temp;
      }
    }
  }
  return sortedData;
}

console.log(sorting([100,200,30,199],function(a,b){return a < b;}));
console.log(sorting([100,200,30,199],function(a,b){return a > b;}));
console.log(sorting(['nandini','sirisha','watermelon','car','dog','abcdefghijklmn'],function(a,b){return a.length < b.length;}));
console.log(sorting(['nandini','sirisha','watermelon','car','dog','abcdefghijklmn'],function(a,b){return a.length > b.length;}));


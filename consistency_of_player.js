function addAllElements(data){
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += data[index];
  }
  return sum;
}


function mean(scores) {
 const sum = addAllElements(scores);
 console.log(scores)
  return sum / scores.length;
}

function sorted(data) {
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[i] > sortedData[j]) {
        let temp = sortedData[j];
        sortedData[j] = sortedData[i];
        sortedData[i] = temp;
      }
    }
  }
  return sortedData;
}

function distanceBetweenMean(scores,mean){
  const distancesBetweenMeanForScores = [];
    for (let index = 0; index < scores.length; index++) {
      distancesBetweenMeanForScores.push(scores[index] - mean);     
    }
    return distancesBetweenMeanForScores;
}

function consistencyOfPlayer(scores,mean){
  let sumOfSquaresOfAbsoulteValues = 0;
  for(let index = 0;index < scores.length; index++){
      sumOfSquaresOfAbsoulteValues += (mean - scores[index]) ** 2;
  }
  //console.log('sumOfSquaresOfAbsoulteValues',sumOfSquaresOfAbsoulteValues);
  return Math.sqrt(sumOfSquaresOfAbsoulteValues)/scores.length
}

function standardDeviation(scores,mean){
  const standardDeviationValue = consistencyOfPlayer(scores,mean);
  return standardDeviationValue;
}


function median(scores){
   const sortedScores = sorted(scores);
   //console.log(sortedScores);
   const len = sortedScores.length;
   const  middleElement =(len - 1 )/ 2;
   //console.log(sortedScores,len,middleElement);
   const lowerElement = sortedScores[Math.floor(middleElement)];
   const upperElement =  sortedScores[Math.ceil(middleElement)];
   return (lowerElement + upperElement) / 2;
}

function statistics(scores) {
 const meanValue = mean(scores);
 console.log('mean',meanValue)
  console.log('median',median(scores));
  console.log(standardDeviation(scores,meanValue),'\n\n');
}


function testCases() {
  statistics([5286,5589,7306,10449]);
  statistics([91,102,111982,245026,120144,103217,978890,152563,117376]);
  statistics([5005244,3428388,3851583,5733]);
  statistics([0,0,100,0]);
  statistics([0,25,50,25]);
}
function main() {
  testCases();
}
main();

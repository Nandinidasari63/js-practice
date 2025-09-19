const number = 123;
let reverseOfNum = 0;
let remainingNumber = number;
while(remainingNumber != 0) {

    const lastDigitOfNum = remainingNumber % 10;
    reverseOfNum = reverseOfNum * 10 + lastDigitOfNum;
    remainingNumber = (remainingNumber - (remainingNumber % 10)) / 10;
    
}
console.log("reverse of a number", number, "is", reverseOfNum);

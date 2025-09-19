const nameOfPerson = "Nandini";
let reverseOfName = "";
for(let lastLeter = nameOfPerson.length - 1;lastLeter>=0;lastLeter--){
    
    reverseOfName = reverseOfName + nameOfPerson[lastLeter];

}
console.log("Reverse of name is ",reverseOfName,nameOfPerson);


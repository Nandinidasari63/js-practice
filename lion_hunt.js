const input1 = "LZ";
const input2 = "Z L";
const input3 = "L     Z";
const input4 = "L     L";
const input5 = "Z   Z   Z";
const input6 = "L  ZL Z";
const input7 = "LZLZLZ";
const input8 = "  ";
let distance = 0;
let shortestDistance = 100;
let sameAnimal = -1;
for(let iteration = 1 ;iteration < input3.length ; iteration++){
     
      let presentAnimal = input3[0];
      if(input3[iteration] === " ")
      {

        distance = distance + 1;
        
      } else if(input3[iteration] === presentAnimal){
         
        distance = 0;

      } else{

        shortestDistance = (distance > shortestDistance)?shortestDistance:distance;
        presentAnimal = input3[iteration];
        distance = 0;
        sameAnimal = 0;

      }
          
}
let output = (sameAnimal === -1) ? oneAnimal : shortestDistance
console.log(output);


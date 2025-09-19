const number = 5;
let factorialOfNum = 1;
if(number > 0){

    for( let initalizer = number ;initalizer > 0;initalizer-- ){  

        factorialOfNum = initalizer * factorialOfNum;

    }

} else{
    
    console.log("idiot negative number doesn't have factorial"); 

    }
console.log("Factorial of number",number, "is" , factorialOfNum );

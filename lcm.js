const num1 = 8;
const num2 = 18;
let lcm=1;
let big;
if(num2 >= num1){

    big=num2;

} else{

    big=num1;

}
while(big <= num1*num2){

    if(((big%num1) === 0) && ((big%num2) === 0)){

        lcm=big;
        break;
    
    }
big++;

}
console.log("lcm of",num1,num2,"is",lcm);


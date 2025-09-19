Factorial of the number
input |  output
1     |  Factorial of number 1 is 1
2     |  Factorial of number 2 is 2
3     |  Factorial of number 3 is 6
4     |  Factorial of number 4 is 24
5     |  Factorial of number 5 is 120
6     |  Factorial of number 6 is 720


1=>1
2=>2*1=2 
3=>3*2*1=6
4=>4*3*2*1=24
5=>5*4*3*2*1=120
6=>6*5*4*3*2*1=720

loop
let number is 5        
1->5*1=5                  => here in first i didn't initalize           
                             as answer may be  it stores undefined value;so intializing factOfNum to 1 is important
                             ex : undefined + 2 = Nan 

2->4*5=20
3->3*20=60
4->2*60=120
5->1*120
0 while loop will fail.

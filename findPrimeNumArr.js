const num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let primeNum=[];
console.log(" 4. Return all the prime numbers in an array");
(function(num){
 
    for(var i in num){
       if(Number(num[i])%2 !=0){
        primeNum.push(num[i]);
       }
    }
})(num);
console.log('Anonymous function & IIFE: ' +primeNum);

//Arrow Function
primeNum=[];
var primeNumArr=(num)=>{
  for(var i in num){
    if(Number(num[i])%2 !=0){
     primeNum.push(num[i]);
    }
 }
};
primeNumArr(num);
console.log("Arrow functions: " + primeNum);
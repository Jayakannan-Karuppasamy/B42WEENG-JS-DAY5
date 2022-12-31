const num=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
console.log("3. Sum of all numbers in an array");
(function(num){
    for(var i in num){
        sum = Number(sum) + Number(num[i]);
    }
})(num);
console.log("Anonymous function & IIFE: "+sum);

//Arrow Function
let sumAllNum=(num)=>{
    sum=0;
    for(var i in num){
        sum = Number(sum) + Number(num[i]);
    }
};

sumAllNum(num);
console.log("Arrow functions: " + sum);
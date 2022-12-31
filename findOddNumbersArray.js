var input=[1,2,3,4,5,6,7];
var output=[];
console.log("1. Odd Number:");
// Anonymous function & IIFE
(function(input){

    input.forEach(element => {
        if(element%2 !== 0){
            output.push(element);
        }
    });
})(input);

console.log("Anonymous function & IIFE: " + output);

//Arrow Function
var output=[];
var findOddNum=(input)=>{
    input.forEach(element => {
        if(element%2 !== 0){
            output.push(element);
        }
    });
};

findOddNum(input);

console.log("Arrow functions: " + output);
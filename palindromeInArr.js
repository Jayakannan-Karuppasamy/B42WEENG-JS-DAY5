const input=[12, 313, 11, 44, 9, 1];
let output=[];

console.log("5. Return all the palindromes in an array");
function isPalindrome(element){
  let isPaly=false;
  let org = element;

    if(org === reverseElement(element)){
        isPaly=true;
    }
  return isPaly;
}

function reverseElement(num){
  var tmp=0, x, y;
  
  while(num>0){
     x = num % 10;
     num = parseInt(num/10);
     tmp = tmp * 10 + x;     
  }
  return tmp;
}
    
(function(input){
    for(var i in input){
        if(isPalindrome(Number(input[i]))){
            output.push(input[i]);
        }
    }
})(input);

console.log("Anonymous function & IIFE: "+ output);

//Arrow Function
output=[];
var palindromeInArr=(input)=>{
  for(var i in input){
    if(isPalindrome(Number(input[i]))){
        output.push(input[i]);
    }
}
};

palindromeInArr(input);

console.log("Arrow functions: " + output);

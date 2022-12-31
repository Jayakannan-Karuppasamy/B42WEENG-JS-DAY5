const input="welcome to javascript programming language";
var result='';

console.log("2. Convert all the strings to title caps in a string array");
(function(input){
    var code=input.split(' ');
    for(var i=0;i<code.length;i++){
      result = result + code[i].charAt(0).toUpperCase()+code[i].slice(1) + ' ';
    }
})(input);


console.log("Anonymous function & IIFE: "+result.trim());

//Arrow Function
result='';
var strCaps=(input)=>{
  var code=input.split(' ');
    for(var i=0;i<code.length;i++){
      result = result + code[i].charAt(0).toUpperCase()+code[i].slice(1) + ' ';
    }
};

strCaps(input);

console.log("Arrow function: "+result.trim());
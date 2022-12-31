var array1 = ["Apple", "Pomegranate","Blueberry","Pineapple", "Mango","Papaya","Apple","Pineapple"];
//var array2 = ["Singh", "Shakya"];
//array1 = array1.concat(array2);
//console.log(array1);

//var array1=[1,4,3,4,5,1];
console.log("Orginal Array ::"+array1);
array1.sort();
var arrResult=[];
(function(){
    for(var i=0;i<array1.length;i++){
        if(array1[i] !== array1[i+1]){
          arrResult.push(array1[i]);
        }
    }
})();
console.log("Removed duplicate element in array ::"+arrResult);

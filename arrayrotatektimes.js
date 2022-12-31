var arr = [1,2,3,4,5,6,7];
var n = arr.length;
var k = 2;
var temp=[];
console.log('Js Execution starting....');
(function(arr,n,k){
  
  let m=0;
  
  for(var i=k;i<n;i++){
    temp[m]= arr[i];
    m++;
    }  
    
  for(var j=0;j<k;j++){
    temp[m]= arr[j];
    m++;
  }
  
  for(var i=0;i<n;i++){
    arr[i]=temp[i];
  }  
  
})(arr,n,k);

/* function result(arr,n,k){
  let m=0;
  
  for(var i=k;i<n;i++){
    temp[m]= arr[i];
    m++;
    }  
    
  for(var j=0;j<k;j++){
    temp[m]= arr[j];
    m++;
  }
  
  for(var i=0;i<n;i++){
    arr[i]=temp[i];
  }  
};

result(arr,n,k); */
console.log("Array rotate K times::"+arr); 
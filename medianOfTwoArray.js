//var arr1=[1,3,8,7];
//var arr2=[2,6,4,5];

let arr1 = [ 1, 12, 15, 26, 38 ];
let arr2 = [ 2, 13, 17, 30, 45 ];
let arr3=[];
if(arr1.length === arr2.length){
    arr3=arr1.concat(arr2);
    console.log("Unsorted array:"+arr3);
    let len=arr3.length;
    (function(){
        for(var i=0;i<len;i++){
            for(var j=0;j<len;j++){
                if(arr3[j] > arr3[j+1]){
                    var temp=arr3[j+1];
                    arr3[j+1] = arr3[j];
                    arr3[j] = temp;
                }
            }
        }
    })();
    console.log("Sorted Array:"+arr3);
    let n=(arr3.length/2);
    // console.log(n);
    // console.log(arr3[n-1]+" next index "+ arr3[n]);
    let med=parseInt((arr3[n-1]+arr3[n])/2);
    console.log("Median of 2 arrays : "+med);
}else{
    console.log("Doesn't work for arrays of unequal size");
}







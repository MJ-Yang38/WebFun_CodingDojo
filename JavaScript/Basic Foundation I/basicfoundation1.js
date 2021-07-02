//1.Get 1 to 255
function counter(num){
    var newArr=[];
    for (var i=1;i<=num;i++){
        newArr.push(i);
    }
    return(newArr);
}
var array=counter(255);
console.log(array);

//2.Get even 1000
function sumEven(num){
    var sum=0;
    for( var i=0; i<+num; i++){
        if(i%2==0){
            sum=sum+i;
        }
        
    }
    return sum;
}
var number=sumEven(1000);
console.log(number);
//3.Sum odd 5000
function sumOdd(num){
    var sum=0;
    for (var i=0;i<=num;i++){
        if (i%2!==0){
            sum=sum+i;
        }
    }
    return sum;
}
var numberNow=sumOdd(5000);
console.log(numberNow);

//4. Iterate an array
function iterateArr(arr){
    var sum=0;
    for (var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
var number=iterateArr([-5,2,5,12]);
console.log(number);

//5.Find max
function findMax(arr){
    var maxnum=arr[0];
    for (var i=0; i<arr.length; i++){
        if( arr[i]>maxnum){
            maxnum=arr[i];
        }
    }
    return maxnum;
}
var max=findMax([-3,9,14,7]);
console.log(max);

//6. Find average
function findAvg(arr){
    var sum=0;
    var avgnum=0;
    for (var i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    avgnum=sum/(arr.length);
    return(avgnum);
}
var numNow=findAvg([1,3,5,7,20]);
console.log(numNow);

//7. Array Odd
function arrayOdd(arr){
    var newArr=[];
    for (var i=0; i<arr.length;i++){
        if (arr[i]%2!==0){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(arrayOdd([1,2,3,4,5,6,7,8,9,11,14,15]));

//8.Greater than Y
function greaterThan(arr,y){
    var num=0;
    for (var i=0; i<arr.length; i++){
        if (arr[i]>y){
            num++;
        }
    }
    return num;
}
console.log(greaterThan([1,4,6,7,9],5));

//9. Squares
function squares(arr){
    var newArr=[];
    for (var i=0; i<arr.length; i++){
        newArr.push(arr[i]*arr[i]);
    }
    return newArr;
}
console.log(squares([1,3,5,9]));

//10. Negatives
function replaceNeg(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}
console.log(replaceNeg([-1,2,3,-5]));

//11. Max/Min/Avg
function maxMinAvg(arr){
    var max=0;
    var min=0;
    var avg=0;
    var sum=0;
    var newArr=[];
    for (var i=0; i<arr.length; i++){
        sum=sum+arr[i];
        avg=sum/(arr.length);
        if (max<arr[i]){
            max=arr[i];
        }
        else (min>arr[i]);{
            min=arr[i];
        }
    }
    newArr=[max,min,avg];
    return newArr;
}
console.log(maxMinAvg([1,5,10,-2]));

//12. Swap values
function swapFirstLast(arr){
    var temp=0;
    temp=arr[0];
    arr[0]=arr[(arr.length-1)];
    arr[(arr.length-1)]=temp;
    return arr;
}
console.log(swapFirstLast([1,5,10,-2]));

//13. Number to String
function number2String(arr){
    var word="Dojo";
    for (var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]=word;
        }
    }
    return arr;
}
console.log(number2String([-1,3,-2,-9]));
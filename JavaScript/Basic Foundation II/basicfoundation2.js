//Basic Foundation II
//1. Biggie size
function positive2Big(arr){
    word ="big";
    for ( var i=0; i<arr.length;i++){
        if (arr[i]>0){
            arr[i]=word;
        }
    }
    return arr;
}
console.log(positive2Big([-1,3,5,-5]));

//2. Print Low, Return High
function printReturn(arr){
    var low=0;
    var high=0;
    for (var i=0; i<arr.length; i++){
        if (low>arr[i]){
            low=arr[i];
            console.log("the lowest is: " + low);
        }
        else (high<arr[i]);{
            high=arr[i];
        }
    }
    return high;
}
console.log(printReturn([-1,4,6,10]));

//3. Print One, Return Another
function printReturn2(arr){
    var second2last=arr[(arr.length-2)];
    var firstodd=0;
    console.log("second to last value is: "+ second2last);
    for (var i=0; i<arr.length; i++){
        if (arr[i]%2!==0){
            firstodd=arr[i];
            return firstodd;
        }
    }
}
console.log(printReturn2([2,4,5,6,7,8]));

//4. Double Vision
function double(arr){
    var newArr=[];
    for (var i=0; i<arr.length; i++){
        newArr.push(2*arr[i]);
    }
    return newArr;
}
console.log(double([1,2,3]));

//5. Count Positives
function countPositives(arr){
    var num=0;
    for (var i =0; i<arr.length; i++){
        if (arr[i]>0){
            num++;
        }    
    }
        arr[(arr.length-1)]=num;
        return arr;
}
console.log(countPositives([-1,1,1,1,4,-6]));

//6. Evens and Odds
function evenOdd(arr){
    var num1=0;
    var num2=0;
    for (var i=0; i<arr.length; i++){
        if (arr[i]%2!==0){
            num1++
            }
            else{num2++}
        }
        if (num1==3 & num2==3){
            return("That's Odd!" + "Even more so!");
        }
        else if(num1==3){
            return("That's Odd!");
        }
        else if(num2==3){
            return("Even more so!");
        }
    
}
console.log(evenOdd([2,8,10,11,13,15]));

//7.Increment the Seconds
function incrementSeconds(arr){
    for (var i=0; i<arr.length;i++){
        if (i%2!==0){
            arr[i]++;
            console.log(arr[i]);
        }
    }
    return arr;
}
console.log(incrementSeconds([1,2,3,4,5,6]));

//8. Previous Lengths-still need fixing
function previousLengths(arr){
    
    for (var i=(arr.length)-1; i>=1; i--){
        arr[i]=(arr[i-1]).length;
    }
    return arr;
}
console.log(previousLengths(["hello","dojo","awesome","job"]));

//9. Add Seven
function addSeven(arr){
    var newArr=[];
    for (var i=0; i<arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}
console.log(addSeven([1,2,3,4]));

//10. Reverse Array//////////////////////need to fix
function reverseArray(arr){
    var temp=0;
    var num=arr.length;
    for (var i=0; i<num/2; i++){
        temp=arr[i];
        arr[i]=arr[(num-i-1)];
        arr[(num-i-1)]=temp;
    }
    return arr;
}
console.log(reverseArray([3,1,4,2]));

//11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function makeNegative(arr){
    var newArr=[];
    for (var i=0; i<arr.length; i++){
        if (arr[i]>0){
            arr[i]=arr[i]*-1;
            
        }
        newArr.push(arr[i])
    }
    return newArr;
}
console.log(makeNegative([3,-1,5,2]));

//12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function alwaysHungry(arr){
    var num=0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]=="food"){
            console.log("yummy");
        }
        else{
            num++;
        }
    }
    if(num==arr.length){
        console.log("I'm hungry");
    }
}
console.log(alwaysHungry(["food","food"]));

//13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
// so what is the difference between this one and the reverse array?
function swapTowardCenter(arr){
    var num=arr.length;
    var temp=0;
    for (var i=0; i<num/2; i++){
        temp=arr[i];
        arr[i]=arr[num-1-i];
        arr[num-1-i]=temp;
    }
    return arr;
}
console.log(swapTowardCenter([true,42,"Ada",2,"pizza"]));

//14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray(arr,num){
    for (var i=0; i<arr.length; i++){
        arr[i]=arr[i]*num;
    }
    return arr;
}
console.log(scaleArray([1,3,5],5));


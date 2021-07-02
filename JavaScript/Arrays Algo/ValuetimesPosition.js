var testArr = [6,3,5,1,2,4];
var newArr = [];
for (var i=0; i<testArr.length; i++){
    testArr[i] = testArr[i]*i;
    newArr.push(testArr[i]);
}
console.log(newArr);
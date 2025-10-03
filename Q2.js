// Q2:find the large number in an Array in javascript 

function  findLargestNumber(arr) {
        return Math.max(...arr)
}
console.log(findLargestNumber([1,30,90,99,100,67]))

// first code in use max() method and spread operator (...) this spread operator use to single value represent

function findLargestNumber2(arr)
{
    return arr.reduce((number,max)=> number>max ? number:max ,arr[0]);
}
console.log(findLargestNumber2([1,30,10,3,67]))

// second approach in use to reduce method the reduce method use for runs function on each element to produce a single value and ust to ternary operator same to same if condition    

function findLargestNumber3(arr)
{
    let maxNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      } 
    }
     return maxNum
}
console.log(findLargestNumber3([1,2,3,4,5]))
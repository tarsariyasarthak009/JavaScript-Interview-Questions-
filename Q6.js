// find the sum of array

function sumOfArray(arr) {
    sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    return sum
}
console.log(sumOfArray([10,10,10,10,10]))
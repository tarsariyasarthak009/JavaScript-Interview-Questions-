// Write a Program to print the frequency of elements in an array?

function frequencyCount(arr) {
    let freq={}
    for (let i = 0; i< arr.length; i++) {
       if(freq[arr[i]])
       {
          freq[arr[i]]+=1
        } else {
            freq[arr[i]] = 1;
        }
    }
    return freq;
}
console.log(frequencyCount([1,1,1,2,2,3,4,4,5,6,6,6,6]))
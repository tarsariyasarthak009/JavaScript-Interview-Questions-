// Q3: Array in remove the fist,last,middle Element and inset to the first,last and middle Element

const arr=[10,20,30,40,50]
arr.pop()
//remove last value
console.log(arr)
arr.shift()
//remove first value
console.log(arr)
arr.splice(2,1)
// remove middle value using index
console.log(arr)
arr.push(50)
//array in last value add 
console.log(arr)
arr.unshift(10)
//array in fist value add
console.log(arr)
arr.splice(3,0,40)
//array in middle value add using index and this code in 0 means not value remove and 3 represent index and 40 is value to add in array
console.log(arr)
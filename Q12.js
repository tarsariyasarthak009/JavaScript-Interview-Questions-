//Write a Program to sort an array in Ascending Order and Descending Order in JavaScript?

function AscendingOrder(arr) { //AscendingOrder to use sort menthod 
    return arr.sort((a,b)=>a-b)
}
console.log(AscendingOrder([5,7,1,3,6]))

function DescendingOrder(arr) { // decendingOrder to use sort menthod but pass to the function and convert to the b to a means large to small
    return arr.sort((a,b)=>b-a)
}
console.log(DescendingOrder([5,7,1,3,6]))

function arrayAscending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j <arr.length; j++) {
             if (arr[i] > arr[j]) {
                // swap the elements
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            
        }
        
    }
    return arr;
}

console.log(arrayAscending([5,4,7,2,1,6,]))
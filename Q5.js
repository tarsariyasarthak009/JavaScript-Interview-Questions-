// Q5: what is post-increment and pre-increment in javaScript

// post-increment means returns the old value, then increments means i++
let num = 5;
let result = num++; // 'count' is 5 when assigned to 'result', then incremented to 6

console.log(result); // Output: 5
console.log(num);  // Output: 6

// pre-increment means value incremented, then value return

let num2 = 5;
let result2 = ++num2; // 'count' is incremented to 6, then 6 is assigned to 'result'

console.log(result2); // Output: 6
console.log(num2);  // Output: 6
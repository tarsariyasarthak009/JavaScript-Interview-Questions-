// Q1: Write a JavaScript program to take a string as input and reverse it.
function stringRevers(stringValue) {
    return stringValue.split("").reverse().join("");
}
console.log(stringRevers("hello world"))

//this code in first to the string split means separator ex:['h', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']
// second step to revers string ex:['d', 'l', 'r', 'o','w', ' ', 'o', 'l','l', 'e', 'h']
// last  step to join a string ex:[dlrow olleh]
// output:dlrow olleh
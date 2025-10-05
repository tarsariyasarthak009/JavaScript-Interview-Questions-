// Write a Program to count the occurrences of a character in a string in JavaScript?

function countChar(str,char) {
   return str.split(char).length-1
}
console.log(countChar('sarthaktarsariya', 'a'));
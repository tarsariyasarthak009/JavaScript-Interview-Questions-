// Write a Program to count the occurrences of a character in a string in JavaScript?

function countChar(str,char) {
   return str.split(char).length-1
}
console.log(countChar('sarthaktarsariya', 'a'));


function countChar1(str,char)//this function in use loop and check the if condtion 
{
   let count=0;
   for (let i = 1; i < str.length; i++) {
      if (str[i]==char) {
         count++
      }
   }
   return count
}
console.log(countChar1("sarthaktasariya","a"))
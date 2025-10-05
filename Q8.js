// Find The Factorial Number 

// Factorial Number means your number is 7 to convert the Factorial number 7*6*5*4*3*2*1 

function numberIsFactorial(num){
    ans=1
    for (let i = 1; i <=num; i++) {
        ans*=i;
    }
    return ans
}
console.log(numberIsFactorial(7))


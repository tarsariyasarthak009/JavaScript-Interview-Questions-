// Find the number is prime or not

function numberIsPrime(num) {
    if(num <=1)
    {
        return console.log("please valid enter number to >=1")
    }
    else if(num % 2 === 0)
    {
        return console.log(`your number ${num} is not prime number`)
    }
    else
    {
        return console.log(`your number ${num} is prime number`)
    }
}

numberIsPrime(70)
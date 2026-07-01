/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */
const isPrime = (num) => {
    if (nun<=1{
        return false;
    }
    for(let i=2;< num;++){
        if(num % i === 0){
            returnfalse;
        }
    }
    return true;
}
let number=17;
if(isprime(number)){
    console.log(number +"is a prime number");
}
else{
    console.log(number +" is not a prime number");
}
    
    return false; // Change this return statement
};

// Export the function for the test cases
module.exports = isPrime;

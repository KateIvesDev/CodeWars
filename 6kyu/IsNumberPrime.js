/*Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

PREP
Parameter is an integer, that can be negative or 0 or positive; can be a big integer
Return boolean value of true or false if the integer is a prime number
Example: if num = 10, return false, if num = 3, return true
Pseudo code: since the integer can be fairly big, use the squareroot method to reduce the number of times you need to loop; since 2 is the smallest prime number, any integer less than 2 should return false; use a for loop to iterate from 2 up to the squareroot of the integer; on each iteration, check to see if the integer divided by the iterable num has a remainder equal to zero, if it is true, it cant be a prime, so return false. otherwise, return true 
*/


function isPrime(num) {
    let sqroot = Math.sqrt(num)
    if (num < 2) {
     return false
    }
    for (let i = 2; i <= sqroot; i++){
        if (num % i === 0){
           return false
        }
    }
    return true

}

isPrime()
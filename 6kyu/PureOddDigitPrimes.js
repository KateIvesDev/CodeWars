/*Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below:

[number pure odd digit primes below n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]

PREP
Parameter is any positive integer (n)
Return should be an array, first item should be the total number of odd digit primes below (n); second item should be the largest odd digit prime smaller than (n), and the third item should be next odd digit prime above (n)
Example: if n = 11, should return [3, 7, 13] since there are three pure odd digit primes below 11 (3, 5,7), 7 is the one below 11 and 13 is the one above 11.
Pseudo code: create an empty array to hold the result; 
    create a function that returns true if a number is odd, 
        use modulus to check if there is a remainder when x is divided by 2; a remainder means it is odd
    create a function that returns true if a number is a prime;
        use a for loop to iterate between 2 (the smallest prime) and the squareroot, use an if condition to check to see if n can be divided by the iterable without a remainder; if it can it is not a prime, so return false, otherwise return true

    create a function that returns true/false if the number has only odd digits; 
        use the toString() method and split method to put all the digits into an array; use the every() method to return true/false if every digit in the array is odd

    create a function that returns true/false if it is an pure odd digit prime
         return if all of the above functions (odd, prime & oddDigits) are true using the && operator
        
    create a function that counts the number of pure odd digit primes in a range between 3 and n
        -- create a variable count and set to 0; use a for loop to iterate between 3 and n; use the isPureODP() function to check if the iterable is a pure ODP, and if it is, increment the count variable by 1; when the loop is complete, return the value of count

    create a function to find the next pureODP BELOW n
        -- set the parameter num equal to n; use a while loop; while num is NOT a pureODP, decrement num
        by 1; when num is a pureODP, return num
        
    create a function to find the next pureODP ABOVE n
         -- set the parameter num equal to n; use a while loop; while num is NOT a pureODP, increment num by 1; when num is a pureODP, return num
    
    finally, return an array of functions where the first item is the countOfODP(), second is the prevODP() and third is the nextODP()
  
*/

function onlyOddDigPrimes(n) {
    
    const odd = (x) => x % 2 > 0
     
    const prime = (x) => {
         if (x < 2) {
            return false
         }
         const squareRoot = Math.sqrt(x)
         for (let i = 2; i <= squareRoot; i++){
             if (x % i === 0){
                 return false
             }
         }
         return true
     }
     
    const oddDigits = (x) => {
      return x.toString().split("").every(odd)
    }

    const isPureODP = (x) => {
       return odd(x) && prime(x) && oddDigits(x)
    }
    
    const countofODP = () => {
    let count = 0;
        for(let i = 3; i < n; i++){
            if (isPureODP(i)){
            count++
            }
        }
        return count
    }   
  
   const prevODP = (num = n) => {
    while(!isPureODP(num)){
        --num
      }
      return num;
   }

   const nextODP = (num = n) => {
      while(!isPureODP(num)){
        ++num
      }
      return num;
   };
   
   
   return [countofODP(), prevODP(), nextODP()]
      
}

onlyOddDigPrimes()
/*We need a function prime_bef_aft() that gives the largest prime below a certain given value n,befPrime or bef_prime (depending on the language),and the smallest prime larger than this value,aftPrime/aft_prime (depending on the language).The result should be output in a list like the following:
primeBefAft == [befPrime, aftPrime]

If n is a prime number it will give two primes, n will not be included in the result. (The extreme and special case n = 2 will not be considered for the tests

PREP
Parameter num is a value
Return an array where the first item is the first prime number BEFORE num and second itme is the first prime number AFTER num
Example: num = 10, would return [7, 11]
Pseudcode: just to be safe, include a condition where if num is less than or equal to 2, return a message that there are no prime numbers below 2
    create a function that returns true if a number is a prime, false if it is not;
        use a conditional to return false if number is less than 2;
        create a squareRoot variable that is equal to the squareroot of the number (performance improvement)
        use a for loop to iterate between the smallest prime (2) and the squareRoot variable, on each iteration, check to see if the number can be divided by each iterable w/out a remainder (use modulus); if there is no remainder when divided by each iterable, return false because it can't be a prime;  return true because the number must be a prime
    
    create a function to find the prime below num
        give the function a parameter of n and set it equal to num - 1
        use a while loop; while n is NOT a prime (evaluate whether prime(n) is NOT true), decrement
        n by 1; when !prime(n) evalutes to false, the loop ends and return the the value of n as the first prime before num

    create a function to find the prime above num
        give the function a parameter of n and set it equal to num + 1
        use a while loop; while n is NOT a prime (evaluate whether prime(n) is NOT true), increment
        n by 1; when !prime(n) evalutes to false, the loop ends and return the the value of n as the first prime above num

    return an array of functions with the first item  befPrime() and the second aftPrim()

*/


function primeBefAft(num) {
    if (num <= 2){
        return ("There are no prime numbers below 2")
    }
    const prime = (x) => {
       if (x < 2){
         return false
       }
       let squareRoot = Math.sqrt(x)
       for (let i = 2; i <= squareRoot; i++){
         if (x % i === 0){
           return false
         }
       }
       return true
    }
    
    const befPrime = (n = num-1) => {
      while(!prime(n)){
        --n
      }
      return n
    }
    
    const aftPrime = (n = num+1) => {
      while(!prime(n)){
        ++n
      }
      return n
    }
    
    return [befPrime(), aftPrime()]
    
  }
  primeBefAft()
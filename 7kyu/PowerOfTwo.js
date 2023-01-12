/*Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. edge cases: 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

PREP
Parameter: function takes a non-negative integer
Return a boolean - if the integer is a power of two, return true, else return false. 
example: 1024 returns true
pseudo: if n is an odd number or 0, return false; use recusive call of the function on n/2. we use recursion to keep dividing n/2 until n returns true (i.e., it equals one because 2/2 is one or false)
*/

function isPowerOfTwo(n){

    
    if (n === 1) {
      return true
    }
    if (n % 2 !== 0){
      return false
    }
    if (n === 0){
      return false
    }
     return isPowerOfTwo(n/2)
  }
isPowerOfTwo(10)
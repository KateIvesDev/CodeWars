/*Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.
*/

// Return an array
function fizzbuzz(n){
    //Parameter is a positive number from 1 to N
    //returns an array of numbers from 1 to N, N % 3 fizz, N%5 buzz, N%3&5 fizzbuzz
    //example fizbuzz(6) --> [1,2,fizz,4,buzz,fizz]
    //pseudocode
      //declare array variable
      //for loop
      //conditional
      //push value to end of array
    let arr = []
    for (let i = 1; i <= n; i++){
      if (i % 15 === 0){
        arr.push('FizzBuzz')
      } else if (i % 5 === 0){
        arr.push('Buzz')
      } else if (i % 3 === 0){
        arr.push('Fizz')
      } else {
        arr.push(i)
      }
    }
    return arr
    
  }
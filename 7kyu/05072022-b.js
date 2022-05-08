/*Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]*/

function divisors(integer) {
    let newArr = []
    for (let i=2; i < integer; i++){
        if(integer % i === 0) {
           newArr.push(integer/i)
        } 
    }
    newArr.sort((a,b) => a-b)
    return newArr.length === 0 ?`${integer} is prime` : newArr
}
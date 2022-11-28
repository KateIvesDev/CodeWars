//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
    let list = []
    for (let i=0; i <= n; i++){
      list.push(Math.pow(2,i));
    } 
    return list;
}
powersOfTwo(1);

  //REFACTOR 
  //Parameter given is a non-negative integer
  //Return expected is an array of all the powers of 2 up to and including the parameter
  //Examples, parameter of 1 would return [2^1], parameter of 4 would return [2^1, 2^2, 2^3, 2^4]
  //Pseudocode: Create an empty array, use a "for loop" to increment the exponent and the array push() method to fill the empty array with the result of 2 to the power of each number between 0 and the parameter.
  
 function powersOfTwo1(n){
  let arr = []
  for (let i = 0; i <=n; i++){
    arr.push(2**i)
  }
 }
 powersOfTwo1(4)
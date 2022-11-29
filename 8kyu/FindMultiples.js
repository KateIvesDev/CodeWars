/*In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.*/


//PREP
//Parameters are positive integers, not including 0; first value is an integer (base), second value is a limit that will always be greater than the base
//Return should be an array that includes multiples of the base integer up to/including the limit integer
//Example: if argument is (3,12) return [3,6,9,12]
//Pseudcode: create an empty array; use a for loop where i is equal to the base integer and the loop increments by one up to the limit integer; for every increment of the loop, if i can be divided by the base integer without a remainder (using modul), then i should be pushed to the empty array. once the loop is complete, return the array.


function findMultiples(integer, limit) {
    let result=[]
    for(let i = integer; i <=limit;i++){
      if(i%integer === 0){
        result.push(i)
      }
    }
    return result
  }

  findMultiples(2,6)  

  //REFACTOR
  //determine the length of the return array by dividing the limit by the base and use the Math.floor(method) to get a whole number
  // use Array.from() method to create an array of a sequence of numbers from 1 to the length  
  //use the .map() method to multiply each number in the array by the base integer

  /* 
  function findMultiples(integer, limit){
    let arrLength = Math.floor(limit/integer)
    let newArr = Array.from({length: arrLength}, (v,i) => i+1)
    return newArr.map(item => item * integer)
  }
  
  */
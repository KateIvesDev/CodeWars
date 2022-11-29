//Very simple, given an integer or a floating-point number, find its opposite.

//First Try

function opposite(number) {
    if (Math.sign(number) == 1) {
      return 0 - number;
    } else 
      return Math.abs(number)
  }
opposite(1)

//REFACTOR
//Parameter given is an integer or floating pt num
//Return the opposite of the number
//Example: if the parameter is -1, return 1, if the parameter is 1, return -1
//Pseudcode: Could just return parameter multiplied by -1 or use a simple arrow function to return the negative of the parameter

const opposite1 = (num) => -num

opposite1()
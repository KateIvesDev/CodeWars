//Very simple, given an integer or a floating-point number, find its opposite.

//First Try

function opposite(number) {
    if (Math.sign(number) == 1) {
      return 0 - number;
    } else 
      return Math.abs(number)
  }

/*REFACTOR

function opposite(number) {
    return number * -1;
}

*/
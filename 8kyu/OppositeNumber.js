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

function opposite1(number) {
    return number * -1;
}
opposite1(10)

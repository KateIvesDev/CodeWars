/*our task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.*/

function isDivideBy(number, a, b) {
    return number % a === 0 && number  % b === 0 ? true : false;
  }
/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5*/

function sumDigits(number) {
    number = Math.abs(number)
    return number.toString().split("").reduce((a,b) => parseInt(a) + parseInt(b), 0)
  }
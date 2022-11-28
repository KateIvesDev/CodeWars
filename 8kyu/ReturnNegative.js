/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.*/

function makeNegative(num) {
    if (num > 0) {
      return 0 - num;
      } else
      return num;
  }
  makeNegative(-9);

  //REFACTOR USING A TERNARY
  //Parameter given is a number that can be positive or negative
  //Return expected is a negative number, or if 0 it would just be 0
  //Examples, parameter of 1 would return -1, parameter of -1 would return -1, parameter of 0 would return 0,
  //Pseudocode: A conditional statement (if else). If the parameter is  negative or 0, return the parameter, else return the parameter multiplied by -1.
  
  function makeNegative1(num) {
    (num <=0) ? num : (num*-1)
  }
  makeNegative1(-1)

  
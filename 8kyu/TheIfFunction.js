/*Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.*/

function _if(bool, func1, func2) {
    return bool ? func1() : func2();
  }

let testvar = ""

_if(3>4, () => testvar = "true", () => testvar = "false")

/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2) */

function getSum(a, b ){
  let orderedArr = [a,b]
    orderedArr = orderedArr.sort((a,b) => a-b)
    a = orderedArr[0]
    b = orderedArr[1]
  if (a === b && b === a) {
      return a
  } else if (a + 1 === b || a - 1 === b) {
      return a + b
  } else {
      let arr = []
      for(let i = a; i <= b; i++){
        arr.push(i)
      }
        arr = arr.sort((a,b) => a - b)
        return arr.reduce((a,b) => a + b, 0)
    }
}
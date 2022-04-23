/*Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];*/

function first(arr, n) {
    let newArr = []
    
    if (n === undefined){
      newArr.push(arr[0])
      return newArr
    } else if (arr === 0) {
       return []
    } else {
        newArr = arr.slice(0, n)
       return newArr
    }
   
  }
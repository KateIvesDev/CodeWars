/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3*/


function stray(numbers) {
    numbers.sort((a,b) => a-b)
    let result = [numbers[0], numbers[Math.floor(numbers.length/2)], numbers[numbers.length-1]]
      if (result[0] === result[1]){
        return result[2]
      } else if (result[2] === result[1]){
        return result[0]
      }
  }
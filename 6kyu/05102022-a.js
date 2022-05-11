/*There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.*/

function findUniq(arr) {
    let count = {}
     arr.forEach(element => {
      count[element] = (count[element] || 0) +1
    })
  
      for (const [key, value] of Object.entries(count)) {
      if(value ===1) {
          return Number(key)
          }
      }
  }
/*Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .*/

function minSum(arr) {
    let sorted = arr.sort((a,b) => a-b)
    let copy = [...sorted]
    copy.reverse()
    let newArr = []
  
    for(let i=0; i < arr.length/2; i++){
      newArr.push(sorted[i] * copy[i])
    } 
  
    return(newArr.reduce((a,b) => a+b,0))
  }
  minSum()
/*The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3*/

function rgb(r, g, b){
  
    if (r < 0) {
      r = 0
    } else if (r > 255) {
      r = 255
    }
    
    if (g < 0) {
      g = 0
    } else if (g > 255) {
      g = 255
    }
   
     if (b < 0) {
      b = 0
    } else if (b > 255) {
      b = 255
    } 
    
    let arr = []
   
    let firstValue = `${Math.floor(r/16)} ${((r % 16))}`
    firstValue = firstValue.split(" ")
    
    let secondValue = `${Math.floor(g/16)} ${((g % 16))}`
    secondValue = secondValue.split(" ")
  
    let thirdValue = `${Math.floor(b/16)} ${((b % 16))}`
    thirdValue = thirdValue.split(" ")
   
    arr = firstValue.concat(secondValue, thirdValue)
    
    arr = arr.map((value) => {
      return parseInt(value)
    })
  
    arr = arr.map((value) => {
      if (value >= 10){
       value = String.fromCharCode(value + 55)
       return value 
      } else {
        return value
      }
    })
    return arr.join("")
 }
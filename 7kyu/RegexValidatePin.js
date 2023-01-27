/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.*/

function validatePIN (pin) {
    console.log(pin)
    
    pin = pin.replace(" ", "")
    pin = pin.replace("\n", "x")
    let pinArr = pin.split("")
    
    let numArr = pinArr.map(item => item == Number(item) ? Number(item) : "x")
    
    console.log(numArr)
    
    if(numArr.every(char => typeof char === 'number' && char >= 0) && numArr.length === 4){
      return true
    } else if(numArr.every(char => typeof char === 'number' && char >= 0) && numArr.length === 6){
      return true
    } else {
      return false
    }
    
  }
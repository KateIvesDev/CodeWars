function narcissistic(value) {
    let arrOfDigits = value.toString().split("")
    let power = arrOfDigits.length
    let result = arrOfDigits.map(dig => Number(dig)**power).reduce( (a,b) => a+b)
    
    return (result === value)
    
  }
  narcissistic(153)
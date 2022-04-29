/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/

function pigIt(str){
  
    let arr = str.split(' ')
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    
    let newArr = arr.map(value => {
      if(value[0].match(regex)){
        return value 
      } else {
        return value + value[0] + "ay"
      }
    })
   
      newArr = newArr.map(value => {
       if (value[0].match(regex)) {
        return value
      } else {
        return value.slice(1, value.length)
        }
    })
  
    return newArr.join(" ")
    
  }
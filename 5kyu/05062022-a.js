/*ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".*/

function rot13(message){
  
    const alpha1 = "abcdefghijklm".split("")
    const alpha2 = "nopqrstuvwxyz".split("")
    const alpha3 = 'ABCDEFGHIJKLM'.split("")
    const alpha4 = 'NOPQRSTUVWXYZ'.split("")
    const cipher = {}
    
   alpha1.forEach((value,index)=> {
          cipher[value] = alpha2[index]
      })
    
   alpha2.forEach((value,index) => {
       cipher[value] = alpha1[index]
   })
   
   alpha3.forEach((value,index) => {
       cipher[value] = alpha4[index]
   })
   
    alpha4.forEach((value,index) => {
       cipher[value] = alpha3[index]
   })
   
   let messageArr = message.split("")
   console.log(messageArr)
   
  let newMessage = messageArr.map(value => {
      if(cipher[value] === undefined) {
          return value
      } else {
          return cipher[value]
      }
  })
  
  return newMessage.join('')
  
  }
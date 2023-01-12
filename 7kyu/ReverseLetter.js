/*Given a string str, reverse it and omit all non-alphabetic characters.*/

function reverseLetter(str) {
  
    const filterChar = (x) => {
      return (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122)
    }
    
    let arr = str.split("")
    
    return arr.filter(char => filterChar(char)).reverse().join("")
 }
 reverseLetter("hello!") 
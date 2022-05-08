/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"*/

function reverseWords(str) {
  
    let newArr = str.split(" ").map(value => {
      return value.split("").reverse().join("")
    })
    
    return newArr.join(" ")
  }
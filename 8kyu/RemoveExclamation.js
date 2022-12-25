/*Remove an exclamation mark from the end of a string*/

function remove (string) {
    //coding and coding....
    let arr = string.split("")
    arr.pop()
    let removed = arr.join("")
    return string.endsWith("!") ? removed : string
  }
remove("Hi!!")  
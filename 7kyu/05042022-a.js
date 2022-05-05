
/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/

function accum(s) {
    let arr = s.split("").map((value,index) => {
        return value.toUpperCase() + value.toLowerCase().repeat(index)
    })
  
   return arr.join("-")
  }
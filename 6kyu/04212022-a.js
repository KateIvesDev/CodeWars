/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/

function solution(string) {
    let arr = string.split("")
    let newArr = []
    arr.forEach((value, index) => {
        if(value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90) {
            newArr.push(index)
        } 
    }) 
    newArr.forEach((value, index) => {
        arr.splice((value + index), 0, " ")
    })
   return arr.join("")
}
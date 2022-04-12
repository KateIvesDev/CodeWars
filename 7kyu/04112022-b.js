/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

function XO(str) {
    str = str.toLowerCase().split("")
    let strX = str.filter(letter => letter == "x")
    let strO = str.filter(letter => letter == "o")
    
    if (strX.length === strO.length) {
        return true
    } else if (strX === [] && strO === []) {
        return true
    } else if (strX.length !== strO.length){
        return false
    }
}
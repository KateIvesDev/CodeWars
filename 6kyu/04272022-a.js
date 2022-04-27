/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")*/

function alphabetPosition(text){
    
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    const object = {}
    alpha.forEach((element, index) => {
        object[element] = index+1;
    });

    let newText = text.toLowerCase().split("").filter(value => {
        if (value !== undefined) {
            return object[value]
        }
    }).map(value => {
        return object[value]
    })
 
    return newText.join(" ")
}
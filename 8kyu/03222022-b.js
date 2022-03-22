/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

function abbrevName(name){
    name = name.toUpperCase().split(" ")
    let abbrFirst = name[0].substr(0,1)
    let abbrLast = name[1].substr(0,1)
    return `${abbrFirst}.${abbrLast}`
  }
  console.log(abbrevName("harry styles"))
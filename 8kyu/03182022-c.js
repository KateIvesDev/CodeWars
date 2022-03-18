//remove the spaces from the string, then return the resultant string.

//firstTry
function noSpace(x){
    let array = x.split(' ');
    x = array.join('')
    return x
    
}
noSpace("This is a test")

/*refactor 

function noSpace(x){
     return x.split(' ').join('')
}
noSpace("This is a test")*/
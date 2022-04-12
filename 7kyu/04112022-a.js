/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

function findShort(s){
    s = s.split(' ');
    let arr = [];
    for(let i = 0; i < s.length; i++){
        arr.push(s[i].length)}
    arr.sort((a, b) => a - b);
    return arr[0];
}
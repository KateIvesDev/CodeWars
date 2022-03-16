//Complete the solution so that it reverses the string passed into it.

//FIRST TRY

function solution(str){
  let array = str.split("");
  let revArr = array.reverse();
  return revArr.join("");
}
solution("Hello")

/*REFACTOR 

function solution(str){
 return str.split('').reverse().join('');
}
solution("Hello")


*/
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


function fakeBin(x){
  x = x.split("").map(function(value){
    if (value >= 5) {
      return value = "1";
    } else if (value < 5){
      return value = "0";
    } 
  }) 
  return x.join("")
}
fakeBin('45385593107843568');

/* REFACTOR
function fakeBin(x){

  return x.split("").map(n => n < 5 ? 0 :1).join("") 

}
fakeBin();
*/
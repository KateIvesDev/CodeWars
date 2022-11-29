//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//Parameter is an integer
//Return a string that states whether argument passed is an even or odd integer
//Example if the argument is 2, returns "even" if the parameter is "3" return odd
//Pseudocode: Use the modulus operator on the parameter; if there is no remainder with a modulus of 2, the argument is even, otherwise the argument is odd 

function even_or_odd(number) {
    return number % 2 == 0 ? "Even" : "Odd"; 
 }


 even_or_odd()
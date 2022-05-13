/*Write a function that checks if a given string (case insensitive) is a palindrome.*/


function isPalindrome(x) {
  
    const check = x.toLowerCase().split("").reverse().join("")
    return (check === x.toLowerCase()) ? true : false
    
  }
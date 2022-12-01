function absentVowel(x){
    /*parameter given is a string; all strings will be valid and will have all vowels except one; capitalization not an issue
    //return the provided index of the missing vowel 
    //example: "the pple is under the bowl" would return 0 for the letter a
    //pseudcode: put the vowels in an ordered array; use a for loop based on the vowel array length that checks to see if
    the string does not include the current vowel, using the includes() string method; if the vowel is not in the string, return the index
    //method to make sure they match*/
      
      let vowels = ["a", "e", "i", "o", "u"]
    
      for (let i = 0; i <= vowels.length; i++){
        if (!x.includes(vowels[i])){
            return i
        }
    }
      
    }
    absentVowel()
/*Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".*/
function solve(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    const filterVowel = (x) => "aeiou".includes(x)
    let arr = s.split("")
    
    for (let i =0; i < arr.length; i++){
      if(filterVowel(arr[i])){
        arr[i] = " "
      } 
    }
    
    let result = arr.join("")
                    .split(" ")
                    .map(word => {
                      return word.split("")
                                  .map(char => {
                                  return Number(alphabet.indexOf(char))+1
                                  })
                                  .reduce((a,b) => a+b,0)
                    })
                
    return Math.max(...result)
                
  }
  solve()
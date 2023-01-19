/*You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?*/

const NATO = {} //this was defined in the Kata

function to_nato(words) {
    words = words.toLowerCase().replaceAll(" ", "")
      let arr = words.split("").map(letter => {
      if(NATO[letter]){
        return NATO[letter]
      } else return letter
    })
    return arr.join(" ")
    
}
to_nato()
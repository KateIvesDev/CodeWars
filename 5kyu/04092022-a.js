/*Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []*/

function anagrams(word, words) {
  
    word = word.split("").sort().join("")
    let newWords = words.map((value, index) => {
       return value.split("").sort().join("")
    })
    
    let indexAng = []
     for (let i = 0; i < newWords.length; i++){
       if (newWords[i] == word){
         indexAng.push(i)
       }
     } 
  
    let anagrams = []
    for (let i = 0; i < indexAng.length; i++){
       anagrams.push(words[indexAng[i]])
    }
     return anagrams
  }



/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.*/



function high(x){
    const obj = {};
    function makeObj(x) {
      for (const key of x) {
        obj[key] = x.indexOf(key);  
      }
        return obj
    }
    makeObj("_abcdefghijklmnopqrstuvwxyz")
   
    x = x.split(" ")
  
    const subArr = x.map(value => {
        return value.split("")
    })
    
    let newArr1 = []
    let newArr2 = []
    newArr1 = subArr.map(value => {
      newArr2 = value.map(value => {
          return obj[value]
      })
      return newArr2.reduce((a,b) => a+b,0)
    }) 
  
    let maxIndex = newArr1.indexOf(Math.max(...newArr1))
  
    return x[maxIndex]
   
  }
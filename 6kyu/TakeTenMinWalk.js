/*You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.*/

/*PREP 
Parameter given will be an array of one letter strings representing the direction to walk in (n,w,s,e). Each letter represents one block that takes exactly 1 minute to walk.
Return should be a Boolean true if the letters in the array will take exactly 10 minutes to walk and return you to your starting point.
Example: Any array length that is not exactly 10 should return false ["w", "e"]; any array where the number of blocks north doesn't equal the number of blocks south or where the number of blocks west does not equal the number of blocks east, should return false ["s", "s", "s", "s", "s", "s", "n", "n", "n", "n"]. should return true only if north to south and/or east to west are equal ["w","w", "w", "w", "w", "w", "e", "e", "e", "e", "e"]
Pseudo code: If condition returns false when the length is not equal to 10; create a count object to hold the count of each direction; use a for loop to iterate through the array and assign the count of each direction to the count object; on each iteration, if the direction exists as a property in the count object, increment the value of the direction by 1; if it does not exist in the count object add it to the object with a value of 1; use an if condition that if the value/count of the n property isn't equal to the s property, or the value/count of the w property doesn't equal the value of the e property, return false. otherwise return true because the array length is 10, and the array map takes equal steps in each direction, returning to the starting point.
*/


function isValidWalk(walk) {
  if (walk.length !== 10) return false
    
  let count = {}
  
  for (let i = 0; i < walk.length; i++){
    if (count[walk[i]]){
      count[walk[i]] += 1
    } else {
      count[walk[i]] = 1
    }
  }
    if (count.n !== count.s || (count.w !== count.e)){
        return false
    }

    return true
} 
isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
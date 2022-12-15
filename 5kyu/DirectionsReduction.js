/*Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).


PREP

Parameter: the function takes an array of strings; each string is a direction, north, south, east or west
Return: function needs to return an array of strings that removes any needless directions from the original array
example: ["north", "south", "east", "west"] should return empty array and ["north", "west", "south", "east"] would return original array
pseudocode. we can use a for loop to check if the iterable value and its adjacent are opposites, and if they are, we can use the splice method to remove from the original array. however,  as the loop moves to the next iterable after splicing, this may cause the previous iterable to become adjacent to an opposite direction again. so we need to do a recursive call of the original function to check the array again until there are no adjacent opposite directions.
*/

function dirReduc(arr){

  for (let i = 0; i < arr.length; i++){
      if (arr[i] == "NORTH" && arr[i+1] == "SOUTH" ||
         arr[i] == "SOUTH" && arr[i+1] == "NORTH" ||
         arr[i] == "EAST" && arr[i+1] == "WEST" ||
         arr[i] == "WEST" && arr[i+1] == "EAST"){
             arr.splice(i, 2)
             dirReduc(arr)
         }

  }
 return arr
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
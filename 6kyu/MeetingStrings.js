
/*The function needs to return a given string in uppercase and sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

PREP
Parameter given is a string of first and last names of friends; the first and last names are separated by a colon :, the full names are separated by a semicolon;
Return: Return a new string that 1) converts the characters to all upperCase, 2) sorts the names in alphabetical order by last name and if the last names are the same, sort by first name, 3) returns the names in the formtat "(LAST NAME, FIRST NAME)(LAST NAME, FIRST NAME)", etc.
Example: string "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull" should return "(CORWILL, FRED)(CORWILL, WILFRED)(TORNBULL, BARNEY)"
Pseudo: use to the toUpperCase() method on the string; use the split method on the string to convert to an array of names - split(";"); use the map method on the new array to reformat each name into a subarray and reverse to LAST NAME, FIRST NAME using the split(":") and reverse methods; save this array to a new array; then return the new array, using the sort(), map() and join("") methods to reformat the array to a string
*/

function meeting(s) {
    let arr = s.toUpperCase().split(";").map(name => {
        return name.split(":").reverse()
      })
      
    return arr
            .sort()
            .map(name => {
              return `(${name[0]}, ${name[1]})`
            })
          .join("")
  }
  meeting()
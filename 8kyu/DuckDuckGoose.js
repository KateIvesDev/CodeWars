
/*Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

function takes 2 parameters  an array of objects and an index (1based)
should return the value of the object name property for the correct index
example: ([a, b, c, d], 5) should return a.name
pseudo: since the index given can be greater than the length of the array, and the index is meant to represent circling the array, we can use a while loop to subtract the array length from the index until the index is less than the array length; this will give us the accurate index; then just return the player[index].name to get the name of the player at the current index


*/


class Player {
    constructor(name) {
        this.name = name;
    }
  }
  
  let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
  let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
    while (goose > players.length) {
      goose = goose-players.length;
    }
    return players[goose-1].name;
  }

duckDuckGoose(players, 28)
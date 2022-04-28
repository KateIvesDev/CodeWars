/*Terminal game turn function
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library (Game.Logic in C#) that already has the functions below. Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move*/

function doTurn () {

  let steps = [1,2,3,4,5,6]
 
   steps.forEach(value => {
      switch(value){
        case 1:
        console.log(rollDice());
         break;
        case 2: 
          console.log(move());
          break;
        case 3:
          console.log(combat())
          break;
        case 4:
          console.log(getCoins())
          break;
        case 5:
          console.log(buyHealth())
          break;
        case 6:
          console.log(printStatus())
          break;
     }

   })
    return steps
}
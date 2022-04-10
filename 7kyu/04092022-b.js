/*You are a barista at a big cafeteria. Normally there are a lot of baristas, but your boss runs a contest and he told you that, if you could handle all the orders with only one coffee machine in such a way that the sum of all the waiting times of the customers is the smallest possible, he will give you a substantial raise.

So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.
People start giving you their orders.
Let's not think about the time you need to write down their orders, but you need 2 additional minutes to clean the coffee machine after each coffee you make.

Now you have a list coffees of the orders and you write down next to each of the orders the time you need to brew each one of those cups of coffee.

Task:

Given a list of the times you need to brew each coffee, return the minimum total waiting time.*/

function barista(coffees){

    //Use sort from shortest waiting time to longest to get the minimum time needed //
    coffees.sort((a,b) => a-b)
    
    //add +2 minutes to each brew time except for the first
    coffees = coffees.map((value, index, array) => {
      if(index > 0) {
        return value +2
      } else {
        return value
      }
    }) 
    
    return coffees
            .map((sum => value => sum += value)(0)) // this adds the previous waiting time to the next value
            .reduce((prevValue, currValue) => prevValue + currValue, 0) //this sums all of the waiting times for each drink
  }
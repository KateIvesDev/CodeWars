/* have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 15 + 9 + ((humanYears - 2) * 4)
    let dogYears = 15 + 9 + ((humanYears - 2 ) * 5)
    return (humanYears === 1) ? [humanYears, 15, 15] : [humanYears,catYears,dogYears];
    
  }
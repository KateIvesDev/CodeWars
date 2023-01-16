/*Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.

Example
If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total

Parameter is a number that is equal to the number of digits of all page numbers
Return should be a number that equals the number of pages in the book based on the summary
Example: summary = 25, return 17, because the numbers from 1 to 17 have 25 digits total
Pseudo: need to understand how to figure out how many numbers in the range have 1 digit, 2 digits, 3 digits, etc. by reverse engineering the numbers you see the pattern that 9 digits are single, 180 are double 900 are triple, etc, and if we divide these numbers by the number of digits they represent, it will get us to the total number of pages.
so we can use a while loop that pushes these values [9* (i+1) * 10**i] (give us an array that begins like [9,180,2700, etc] ) to a new array on each increment of i, as long as the values are less than the summary or summary minus the value; on the last iteration it will result in a number that is the the difference between the summary and the sum of the current numbers in the array.

then we'll use the map method on the array to make a new array that holds the result of dividing each number by the number of digits it represents. the reduce method to sum all of the numbers which represents the total number of pages.
*/

function amountOfPages(summary){
    let arr = []
    let num = summary
    let i = 0
    while (num > 0){
        let value = (9 * (i+1))*10**i
        arr.push(value < num ? value : num)
        num = num - value
        i++
    }
    
    let result = arr.map((num,index) => num/(index+1) )
    return Math.floor(result.reduce((a,b) => a+b,0))
 }
 amountOfPages(25)
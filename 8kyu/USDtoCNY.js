/*Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'. The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. 

PREP
Parameter is a number
Return should be a string that provides the value of usd to cny to 2 decimal places
example: 15 returns '101.25 Chinese Yuan'
Pseudo: multiple the parameter by the conversion rate; round the result to 2 decimals using the toFixed method; return a template literal that references the variable
*/

function usdcny(usd) {
  
    let conversion = usd * 6.75
    let rounded = conversion.toFixed(2)
    
    return `${rounded} Chinese Yuan`
    
  }
usdcny(15)
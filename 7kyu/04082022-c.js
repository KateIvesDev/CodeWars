/*Consider integer coordinates x, y in the Cartesian plan and three functions f, g, h defined by:

f: 1 <= x <= n, 1 <= y <= n --> f(x, y) = min(x, y)
g: 1 <= x <= n, 1 <= y <= n --> g(x, y) = max(x, y)
h: 1 <= x <= n, 1 <= y <= n --> h(x, y) = x + y
where n is a given integer (n >= 1, guaranteed) and x, y are integers.

In the table below you can see the value of the function f with n = 6.

The task is to calculate the sum of f(x, y), g(x, y) and h(x, y) for all integers x and y such that (1 <= x <= n, 1 <= y <= n).

The function sumin (sum of f) will take n as a parameter and return the sum of min(x, y) in the domain 1 <= x <= n, 1 <= y <= n. The function sumax (sum of g) will take n as a parameter and return the sum of max(x, y) in the same domain. The function sumsum (sum of h) will take n as a parameter and return the sum of x + y in the same domain.

Examples:
sumin(6) --> 91
sumin(45) --> 31395
sumin(999) --> 332833500
sumin(5000) --> 41679167500

sumax(6) --> 161
sumax(45) --> 61755
sumax(999) --> 665167500
sumax(5000) --> 83345832500

sumsum(6) --> 252
sumsum(45) --> 93150
sumsum(999) --> 998001000
sumsum(5000) --> 125025000000
*/

function sumin(n) {
    let sum = []
      for (let i = 0; i <= n; i++){
      sum.push(i*i)
    } 
    return sum.reduce((a,b) => a + b, 0)
  }
  
  function sumax(n) {
    let sum = []
    for (let i = 0; i <= n-1; i++){
      sum.push((i*i) + i)
    }
    return sum.reduce((a,b) => a + b, 0) + sumin(n)
  }
  
  function sumsum(n) {
     return sumax(n) + sumin(n)
  }
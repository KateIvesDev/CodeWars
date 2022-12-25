/*Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).*/

function preFizz(n) {
    let result = [];
    for(let i=1;i<=n;i++) {
      result.push(i);
    }
    return result;
}

preFizz(5)
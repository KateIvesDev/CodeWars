/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"*/

function removeUrlAnchor(url){
    const anchor = (element) => element == "#"
    let arr = url.split("")
    let index = arr.findIndex(anchor)
    if(arr.includes("#")){
      return arr.slice(0, index).join("")
    } else {
      return url
    }
    
 }
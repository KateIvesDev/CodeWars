/*The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.*/

function generateHashtag(str) {
   
    
    if(str === "" || str.trim() === ""){
        return false
    } else {
        const hash = "#"
        let result;
        str = str.split(" ")
        
        result = str.map(value => {
            return value.charAt(0).toUpperCase()+value.substring(1)
        })
        .join("")
        
        result = hash + result
        
        if (result.length > 140) {
            return false
        } else {
            return result
        }
    }
    
}
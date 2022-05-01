

/*function domainName(url){
    let result;
    if (url.startsWith("www") || url.startsWith("http://www") || url.startsWith(
    "https://www")){
    let startIndex = url.indexOf(".")+1
    let endIndex = url.lastIndexOf(".")
    result = url.slice(startIndex, endIndex) 
    }  else if (url.startsWith("https://") || url.startsWith("http://") && !url.includes("www")){
    let startIndex = url.indexOf("/")+2
    let endIndex = url.lastIndexOf(".")
    result = url.slice(startIndex, endIndex)
    } else if (!url.startsWith("https://") || !url.startsWith("http://") && !url.includes("www")){
    let endIndex = url.indexOf(".")
    result = url.slice(0, endIndex)
    }

    if (result.includes(".")){
    return result.slice(0, result.indexOf("."))
    } else {
    return result
    }
}

*/

//REFACTORED

function domainName(url){
    url = url.replace("http://", "")
    url = url.replace("https://", "")
    url = url.repalce("www.")
    return url.slice(0, url.indexOf("."))
}


function flattenAndSort(array) {
    let newArr = []
    return newArr.concat(...array).sort((a,b) => a-b)
}

/*This is with the flat method, but it is not supported by older versions of node
function flattenAndSort(array) {
 array.flat()
  return array.sort((a,b) => a - b)
}*/
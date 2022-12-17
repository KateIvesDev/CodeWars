/*Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

*/

function inArray(array1,array2){
    let result = []
    for(let i = 0;i < array2.length;i++){
      for(let j = 0;j < array1.length;j++){
        if(array2[i].includes(array1[j]) && !result.includes(array1[j])){
          result.push(array1[j])
        }
      }
    }
    return result.sort()
  }
  inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])
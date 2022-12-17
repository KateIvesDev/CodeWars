
/*o participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number som.

An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

Sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

Task:
parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

The weight array is at least as long as the number of names, it may be longer.

If st is empty return "No participants".

If n is greater than the number of participants then return "Not enough participants".

*/

/*
PREP
Parameter: this function takes 3 parameters:
    1, a string (st) that contains all of the names of the participants
    2, an array (we) that contains the weight (to multiply the sum of all letter ranks by) - that corresponds to each participant
    3, n is the rank of the participant in the list of winning numbers
Return: The function needs to return the name of the participant for the given rank of n - based on the participants being sorted in descending order of the winning number - if two participants have teh same winning number, they should be sorted alphabetically by name; if n is greater than the number of participatns, return "not enough participants"; if st is an empty string, return "no participants"

Example: if st = "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", weights: [1, 4, 4, 5, 2, 1], n: 4, the function should return "PauL" because after calculating the winning numbers and sorting the participants in alphabetical and then descending order of winning numbers, PauL is in the fourth position (n).

*/

function rank(st, we, n) {
    if (st === ""){
        return "No participants" //one of the conditions of the challenge
    }
    //create an array of the alphabet to reference the alphabetical value (index+1) of each letter
    let alpha = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",")
    
    //split the string of names into an array
    let names = st.split(",")
    
    if (n > names.length) {
        return "Not enough participants" // one of the conditions of the challenge
    }
 
    let participants = [] // create an array to hold subarrays of the participant names and corresponding winning numbers
 
    //this function will be used to calculate the "som" of the ranks of each character in the person's name
    const som = (name) => {
        let chars = name.toLowerCase().split("") //make sure all characters are lowerCase to crossreference the alpha array

        //use map method to return a new array where the characters are transformed to their alphabetical rank/value by getting the letter's index in the alpha array and adding 1;
        //then use the reduce method to sum all of the ranks/values of the characters in the name
        return chars.map(char => alpha.indexOf(char)+1).reduce((a,b) => a+b)
    }

    //for loop to iterate through the names array to create subarrays with the name and corresponding winning number
    for (let i =0; i < names.length; i++ ){
        let name = names[i]
        let winningNum = we[i] * (name.length + som(name)) //take the corresponding number from the weight array and multiply it by the sum of calling the som function on the current name and the length of the current name
        participants.push([name, winningNum]) // add the current subarray to the participants array
        
    }
    participants.sort()// sorts the array of subarrays in alphabetical order
    participants.sort((a,b) => b[1] - a[1]) //sorts the array in descending order of winning number - the second element in the subarrays

    
    return participants[n-1][0] //n-1 because arrays are 0 based; the subarray[0] since the name is in the first index of the subarray

}

console.log(rank("Lyli,Liam,Michael,Ethan,Avery,Mason,Andrew,Ella,Alexander,Ava,Lily,Emma,Natalie,Jacob,David,Daniel,Willaim,Logan,Chloe,James,Samantha,Noah,Elizabeth,Isabella,Robert,Joshua,Benjamin,Olivia", [5,4,2,3,6,3,5,6,1,2,5,6,6,4,3,3,2,4,2,6,2,2,6,2,5,5,2,2], 8))
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 

var n = parseInt(userInput[0])
var arr = userInput[1].split(" ")

function unique(n,arr) {
    let unique = ""
    let count = 0
    for (let i=0; i<n;i++) {
        for( let j=0; j<n; j++) {
            if (arr[i] == arr[j]) count++
        }
        if (count >= 2) unique = arr[i]
        count = 0
    } 
    if (unique === "") return -1
    else return unique
}
console.log(unique(n,arr))


//end-here
});

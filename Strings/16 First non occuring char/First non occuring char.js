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

var input = userInput[0]
var count = 0
var found = false
for(let i=0; i<input.length; i++) {
    for(let j=0; j<input.length; j++) {
        if(input[i] == input[j]){
            count++
        }
    }
    if (count == 1){
        found = true
        console.log(input[i])
        break;
    }
    count = 0
}
if(!found) console.log(-1)


//end-here
});
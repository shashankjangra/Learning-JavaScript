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
var check = ""
for(let i=input.length-1; i>=0; i--) {
    check+=input[i]
}
if (check==input) console.log(1)
else console.log(0)

//end-here
});
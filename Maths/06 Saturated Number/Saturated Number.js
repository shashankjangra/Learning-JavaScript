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
var input = parseInt(userInput[0])
if (input>99) console.log("Saturated")
else console.log("Unsaturated")


//end-here
});

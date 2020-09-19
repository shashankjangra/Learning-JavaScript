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
var input = userInput[0].split(" ")
var N = parseInt(input[0])
var M = parseInt(input[1])

if ((N+M) % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}

//end-here
});

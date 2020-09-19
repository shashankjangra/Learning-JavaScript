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

var answer = Math.pow(N,M)
console.log(answer)

//end-here
});

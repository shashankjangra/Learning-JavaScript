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
var A = parseInt(input[0])
var B = parseInt(input[1])
var C = parseInt(input[2])

var answer = (A*B) % C
console.log(answer)

//end-here
});

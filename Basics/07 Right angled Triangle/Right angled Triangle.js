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

let input = userInput[0].split(" ")
var A = parseFloat(input[0])
var B = parseFloat(input[1])
var C = parseFloat(input[2])
var lhs = (A*A) + (B*B)
var rhs = C*C

if (lhs == rhs) {
    console.log("yes")
} else {
    console.log("no")
}

//end-here
});
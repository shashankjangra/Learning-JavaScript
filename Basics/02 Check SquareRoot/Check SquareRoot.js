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

var N = parseFloat(input[0])
var M = parseFloat(input[1])

var product = N * M
var square = Math.sqrt(product)

if (square * square == product){
    console.log("yes")
} else {
    console.log("no")
}

//end-here
});
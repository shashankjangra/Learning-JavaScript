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
let kabali = parseInt(input[0])
let opposite = parseInt(input[1])
var diff = opposite - kabali

console.log(diff)

//end-here
});
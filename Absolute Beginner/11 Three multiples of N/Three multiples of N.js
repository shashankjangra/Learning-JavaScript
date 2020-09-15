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
var N = parseInt(userInput[0])
let m1 = N
let m2 = N * 2
let m3 = N * 3

console.log(m1, m2, m3)
//end-here
});

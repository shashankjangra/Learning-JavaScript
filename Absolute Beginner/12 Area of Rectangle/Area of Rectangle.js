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

A = parseInt(userInput[0])
B = parseInt(userInput[1])
C = A*B 
console.log(C)

//end-here
});
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

A = parseFloat(userInput[0])
far = (A * (9/5)) + 32
far = far.toFixed(2)
console.log(far)

//end-here
});
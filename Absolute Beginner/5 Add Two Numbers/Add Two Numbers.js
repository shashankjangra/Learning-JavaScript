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
num1 = parseInt(userInput[0])
num2 = parseInt(userInput[1])
sum = num1 + num2
console.log(sum)
//end-here
});

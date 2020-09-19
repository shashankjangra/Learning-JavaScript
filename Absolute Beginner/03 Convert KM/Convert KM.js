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
var km = parseInt(userInput[0])

var meters = km * 1000
var cm = meters * 100
console.log(meters)
console.log(cm)
//end-here
});

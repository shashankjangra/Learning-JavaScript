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

var n = userInput[0]
var square
var sum = 0

for(let i=0; i<n.length; i++) {
    square = parseInt(n[i]) * parseInt(n[i])
    sum += square
}
console.log(sum)

//end-here
});
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

var input = parseInt(userInput[0])
var savings = []

savings[0] = 1000
savings[1] = 1000

for(var i = 2; i<input+2; i++) {
    savings[i] = savings[i-1] + savings[i-2]
}
var total_savings = 0

for(var j=0; j<=input; j++) {
    total_savings = total_savings + savings[j]
}
console.log(total_savings)

//end-here
});

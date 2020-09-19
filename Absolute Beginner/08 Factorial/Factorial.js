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
var n = parseInt(userInput[0])
var factorial = 1
for (var i=1;i<=n;i++) {
    factorial = factorial * i
}
console.log(factorial)
//end-here
});

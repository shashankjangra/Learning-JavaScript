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

let n = parseInt(userInput[0])
var sum = 0
for(let i=0; i<=n; i++) {
    sum += i
}
console.log(sum)

//end-here
});
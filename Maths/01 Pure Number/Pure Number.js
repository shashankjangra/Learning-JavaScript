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
var N = userInput[0]
var sum = 0
for (let i = 0 ; i<N.length; i++) {
    sum = sum + parseInt(N.charAt[i])
}
if (sum % 3 === 0) {
    console.log("yes")
} else console.log("not")
//end-here
});

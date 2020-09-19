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
var S = userInput[0].split(" ")
var output = ""
for (var i=S.length - 1; i>=0; i--) {
    if (i===0) {
        output = output + S[i]
    } else {
        output = output + S[i] + " "
    }
}
console.log(output)
//end-here
});

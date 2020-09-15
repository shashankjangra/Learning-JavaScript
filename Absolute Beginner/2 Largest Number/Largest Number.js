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
var i = 0
var large = 0
for(i=0;i<userInput.length;i++) {
    if (parseInt(userInput[i]) > large) {
        large = parseInt(userInput[i])
    }
}
console.log(large)
//end-here
});
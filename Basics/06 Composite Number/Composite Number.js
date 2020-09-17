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

let input = parseInt(userInput[0])
factors = 0
for (var i = 1; i<=input; i++) {
    if (input % i === 0) {
        factors++
    }
}
if (factors > 2) {
    console.log("yes")
} else {
    console.log("no")
}

//end-here
});
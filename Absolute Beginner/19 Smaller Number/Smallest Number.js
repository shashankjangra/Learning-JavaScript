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

let input = userInput[0].split(" ")
let a = parseFloat(input[0])
let b = parseFloat(input[1])

if (a < b) {
    console.log(a)
} else if (b < a) {
    console.log(b)
}

//end-here
});
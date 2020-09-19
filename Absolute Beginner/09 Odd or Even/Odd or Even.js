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
num = parseInt(userInput[0])
if (num === 0) {
    console.log("Zero")
} else if (num % 2 === 0){
    console.log("Even")
} else {
    console.log("Odd")
}
//end-here
});

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

A = parseFloat(userInput[0])

if (A<=0) {
    console.log("Error")
} else {
    var pi = Math.PI
    circumference = pi * (A + A)
    circumference = circumference.toFixed(2)
    
    console.log(circumference)
}


//end-here
});
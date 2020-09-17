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
var one = input[0]
var two = input[1]

if (one == "R" && two == "P" || one == "P" && two == "R"){
    console.log("P")
} else if (one == "P" && two == "S" || one == "S" && two == "P"){
    console.log("S")
} else if (one == "S" && two == "R" || one == "R" && two == "S"){
    console.log("R")
} else if (one == two) {
    console.log("D")
}



//end-here
});
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

var N = parseInt(userInput[0])
var input = userInput[1].split(" ")
var L = parseInt(input[0])

var R = parseInt(input[1])
var check = false
for (let i = L; i<=R; i++){
    if (i == N){
        check = true
    }
}

if (check) {
    console.log("yes")
} else {
    console.log("no")
}

//end-here
});
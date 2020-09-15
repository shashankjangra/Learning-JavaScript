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

var firstline = userInput[0].split(" ")
var secondline = userInput[1].split(" ")
var N = parseInt(firstline[0])
var K = parseInt(firstline[1])



var check = false
for (let i = 0; i<=4; i++){
    if (secondline[i] == K){
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
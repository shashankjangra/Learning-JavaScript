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
var input = userInput[0].split(" ")
var A = parseFloat(input[0])
var B = parseFloat(input[1])
var C = parseFloat(input[2])

function check(A,B,C) {
    if (A != B && A!=C && B!=C) {
        return true
    } else {
        return false
    }
}

if (check(A,B,C)){
    console.log("yes")
} else{
    console.log("no")
}

//end-here
});

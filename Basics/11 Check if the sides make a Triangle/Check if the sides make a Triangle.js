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
var a = parseFloat(input[0])
var b = parseFloat(input[1])
var c = parseFloat(input[2])

if ( ((a+b)>c) && ((a+c)>b) && ((b+c)>a)){
    console.log("yes")
} else {
    console.log("no")
}


//end-here
});
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

A = parseInt(userInput[0])

if (A % 4 === 0 && A % 100 !== 0 || A % 400 === 0){
    console.log("Y")
} else {
    console.log("N")
}


//end-here
});
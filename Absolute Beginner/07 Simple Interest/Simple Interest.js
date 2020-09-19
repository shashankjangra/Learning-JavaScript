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
input = userInput[0].split(" ")
principal = parseFloat(input[0])
rate = parseFloat(input[1])
time = parseFloat(input[2])

simple_interest = (principal * rate * time) / 100
simple_interest =  parseFloat(simple_interest).toFixed(2)
console.log(simple_interest)
//end-here
});

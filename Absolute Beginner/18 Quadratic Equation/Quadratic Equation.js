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
let A = parseFloat(input[0])
let B = parseFloat(input[1])
let C = parseFloat(input[2])


let posx = (-B + (Math.sqrt((B*B) - 4 * (A*C))))/ (2*A)

let negx = (-B - (Math.sqrt((B*B) - 4 * (A*C)))) / (2*A)

posx = posx.toFixed(2)
negx = negx.toFixed(2)

console.log(posx)
console.log(negx)

//end-here
});
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

a = parseInt(userInput[0])

area = (Math.sqrt(3) / 4) * (a*a)
area = area.toFixed(2)
console.log(area)


//end-here
});
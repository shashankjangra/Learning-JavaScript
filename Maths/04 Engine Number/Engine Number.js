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
var input = userInput[0]
var count = 0
for (let i=0; i<input.length ; i++) {
    if (!isNaN(input.charAt(i))) {
        count = count + parseInt(input.charAt(i))
    }
}
console.log(count)


//end-here
});

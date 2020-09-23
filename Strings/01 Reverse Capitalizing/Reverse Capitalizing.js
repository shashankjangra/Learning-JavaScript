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

var n = userInput[0]
var output = ""
for(let i=n.length-1; i>=0; i--){
    output += n[i]
}

function first(output) 
{
    return output.charAt(0).toUpperCase() + output.slice(1);
}

console.log(first(output))

//end-here
});

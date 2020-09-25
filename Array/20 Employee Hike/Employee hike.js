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
var arr = userInput[1].split(" ")

arr.sort()

output = ""
for(let i=0; i<arr.length; i++) {
    if(i==arr.length-1) output+= arr[i]
    else output+= arr[i] + " "
}
console.log(output)

//end-here
});
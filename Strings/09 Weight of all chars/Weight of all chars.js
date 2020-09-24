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

var s = userInput[0]
var sum =0
for(let i=0; i<s.length; i++){
        var n = s.charCodeAt(i)
        sum+=n
}
console.log(sum)

//end-here
});

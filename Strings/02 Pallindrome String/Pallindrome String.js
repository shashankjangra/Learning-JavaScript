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
var m = ""
for(let i=n.length-1; i>=0; i--) {
    //console.log(n[i])
    m+= n[i]
}
//console.log(typeof(n))
//console.log(m)
if(m == n) console.log("yes")
else console.log("no")

//end-here
});

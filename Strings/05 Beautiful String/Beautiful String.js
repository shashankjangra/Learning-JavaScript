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
var unique = []
for(let i=0; i<s.length; i++) {
    //console.log(s[i])
    if(!unique.includes(s[i])) {
        unique.push(s[i])
    }
}
//console.log(unique.length)
if(unique.length == 3) console.log("1")
else console.log("0")
//end-here
});

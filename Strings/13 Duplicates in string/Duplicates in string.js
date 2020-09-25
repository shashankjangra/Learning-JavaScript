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
var output = []
var check = []
for(let i=0; i<s.length; i++) {
    //console.log(s[i])
    
    if(!check.includes(s[i])) {
        check.push(s[i])
        
    } else output+= s[i]
}

//console.log("output = " + output)
var print = ""
for (let i=0; i<output.length; i++) {
    if(i == output.length-1) print+=output[i]
    else print+=output[i] + " "
}
if (print!== "") console.log(print)
else console.log(-1)

//end-here
});

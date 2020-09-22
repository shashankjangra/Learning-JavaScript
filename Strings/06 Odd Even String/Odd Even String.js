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
var even_s = []
var odd_s = []
for(let i=0; i<s.length; i++) {
    if(i%2 === 0) even_s.push(s[i])
    else odd_s.push(s[i])
}
//console.log(even_s, odd_s)
var output = ""
for(i=0; i<even_s.length; i++) {
    output += even_s[i]
}
output += " "

for(i=0; i<odd_s.length; i++) {
    output += odd_s[i]
}
console.log(output)

//end-here
});

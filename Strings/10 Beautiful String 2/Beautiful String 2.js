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
var s_start = ['a', 'A']
var s_mid = ['m','M']
var s_end = ['z', 'Z']
var start = false
var mid = false
var end = false

if(s_start.includes(s[0])) {
    //console.log("a present ")
    start = true
}
if(s_end.includes(s[s.length-1])) {
    //console.log("z present ")
    end = true
}

for(let i=1; i<s.length-1;i++) {
    //console.log(s[i])
    if(s_mid.includes(s[i]) ){
        mid = true
    }
}

if(start === mid === end === true) console.log("1")
else console.log("0")

//end-here
});

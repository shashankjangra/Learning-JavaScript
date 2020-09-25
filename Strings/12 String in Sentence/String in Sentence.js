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

var sentence = userInput[0].split(" ")
var s = userInput[1]
//console.log(sentence,sentence.length,s)
var mila = false

for (let i=0; i<sentence.length; i++) {
    //console.log(sentence[i])
    if(sentence[i] == s){
        mila = true
    }
}
if(mila) console.log(1)
else console.log(-1)

//end-here
});

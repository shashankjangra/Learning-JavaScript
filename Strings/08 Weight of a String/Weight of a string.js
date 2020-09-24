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
var vowels = ['a','e','i','o','u','A','E','I','O','U']
var vowel_found = false
var sum =0
for(let i=0; i<s.length; i++){
    //console.log(s[i])
    if(vowels.includes(s[i])){
        var n = s.charCodeAt(i)
        sum+=n
    }
}
if(sum%8===0) console.log("1")
else console.log("0")

//end-here
});

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

var S = userInput[0]
var vowels = ['a','e','i','o','u','A','E','I','O','U']
var print = ""
var reverse = []
for (var i=S.length - 1; i>=0; i--) {
    if (i===0) {
        reverse = reverse + S[i]
    } else {
        reverse = reverse + S[i] + " "
    }
}

for(let i=0; i<reverse.length; i++){
    //console.log(s[i])
    if(!vowels.includes(reverse[i])){
        print += reverse[i]
    }
}
print = print.split(" ").join("")

if (print === "") console.log("-1")
else console.log(print)

//end-here
});
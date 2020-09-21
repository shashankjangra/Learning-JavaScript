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
var N = parseInt(userInput[0])
var pass_no = userInput[1].split(" ")

var pass_no_duplicate = []

for (let i=0; i<N; i++) {
    if (pass_no_duplicate.includes(pass_no[i])) {
        continue;
    } else {
        pass_no_duplicate.push(pass_no[i])
    }
}
var output = ""
for (let i = 0; i<pass_no_duplicate.length; i++) {
    if (i == pass_no_duplicate.length - 1){
        output = output + pass_no_duplicate[i]
    } else {
        output = output + pass_no_duplicate[i] + " "
    }
}
console.log(output)
//end-here
});

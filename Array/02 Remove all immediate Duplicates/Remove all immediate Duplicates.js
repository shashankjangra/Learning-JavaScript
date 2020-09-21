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

var input = userInput[0]
var output = ""
for(var i=0; i<input.length; i++){
    var peek_back = input[i-1]
    var peek_front = input[i+1]
    if(input[i] != peek_front && input[i] != peek_back){
        output = output + input[i]
    }
}
console.log(output)

//end-here
});

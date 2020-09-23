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
var arr = userInput[1].split(" ")
var n = parseInt(input[0])

var sum =0
for(let i=0; i<n; i++) {
    if(arr[i] < 0){
        sum += parseInt(arr[i])
    }
}
console.log(sum)


//end-here
});

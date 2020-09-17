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

let input = userInput[0].split(" ")
var N = parseFloat(input[0])
var K = parseFloat(input[1])
var elements = (userInput[1].split(" "))

var repetitions = -1

for (let i=0; i<N; i++) {
    if (elements[i] == K) {
        repetitions++
    }
}
console.log(repetitions)


//end-here
});
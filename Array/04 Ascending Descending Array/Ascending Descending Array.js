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

var n = userInput[0].split(" ")
var arr1 = userInput[1].split(" ")
var arr2 = userInput[2].split(" ")
var print = ""

arr1.sort(function(a, b){return a - b})
arr2.sort(function(a, b){return a - b})
arr2.reverse()
var output = arr1.concat(arr2)


for(let i =0; i<output.length; i++) {
    if(i== output.length -1) {
        print = print + output[i]
    } else print = print + output[i] + " "
}
console.log(print)

//end-here
});

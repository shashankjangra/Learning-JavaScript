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

var input = userInput[0].split(" ")
var arr = userInput[1].split(" ")
var n = parseInt(input[0])
var m = parseInt(input[1])
var found = false
//console.log(arr, n,m)

for(let i=0; i<n; i++) {
    if(arr[i] == m){
        found = true
        console.log(i)
        //console.log("found")
    }
}
if(!found) console.log(-1)



//end-here
});

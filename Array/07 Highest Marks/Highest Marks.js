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
var Arr = userInput[1].split(" ")

function largest(N,Arr) {
    let large = Arr[0]
    for (let i=0; i<N;i++) {
        if (parseInt(Arr[i])>=large){
            large = parseInt(Arr[i])
        }
    }
    return large
}

console.log(largest(N,Arr))

//end-here
});

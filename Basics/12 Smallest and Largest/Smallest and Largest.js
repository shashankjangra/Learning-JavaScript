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
            var large_i = i+1
        }
    }
    return large_i
}

function smallest(N,Arr) {
    let small = Arr[0]
    for (let i=0; i<N;i++) {
        if (parseInt(Arr[i])<=small){
            small = parseInt(Arr[i])
            var small_i = i+1
        }
    }
    return small_i
}

l = largest(N,Arr)
s = smallest(N,Arr)
console.log(s,l)
//end-here
});

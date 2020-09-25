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

var n = userInput[0]
var arr = userInput[1].split(" ")

function smallest(N,Arr) {
    let small = Arr[0]
    for (let i=0; i<N;i++) {
        if (parseInt(Arr[i])<=small){
            small = parseInt(Arr[i])
            var small_i = i
        }
    }
    return small_i
}


console.log("Dealer"+smallest(n,arr))

//end-here
});
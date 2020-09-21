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

function smallest(Arr) {
    let small = parseInt(Arr[0])
    for (let i=0; i<N;i++) {
        if (parseInt(Arr[i])<=small){
            small = parseInt(Arr[i])
        }
    }
    return small
}
console.log(smallest(Arr))


//end-here
});
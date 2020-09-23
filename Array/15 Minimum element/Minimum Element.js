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
var Arr = userInput[1].split(" ")
var n = parseInt(input[0])
function smallest(Arr) {
    let small = parseInt(Arr[0])
    for (let i=0; i<Arr.length;i++) {
        if (parseInt(Arr[i])<=small){
            small = parseInt(Arr[i])
        }
    }
    return small
}
console.log(smallest(Arr))



//end-here
});
